const router = require("express").Router();
const { verifyUser, verifyAdmin } = require("../verification");
const Query = require("../db");

// get all flights devided by followed / unfollowed 

router.get("/", verifyUser, async (req, res) => {
  try {
    let q1 = `SELECT *
              FROM vacations
              WHERE id IN 
              (SELECT vacation_id FROM followers
              WHERE user_id = ?)
              order by start_date asc`
    let q2 = `SELECT *
              FROM vacations
              WHERE id NOT IN 
              (SELECT vacation_id FROM followers
              WHERE user_id = ?)
              order by start_date asc`

    let followedVacations = await Query(q1, [req.user.id])
    let notFollowedVacations = await Query(q2, [req.user.id])

    res.json({ followedVacations, notFollowedVacations });
  } catch (error) {
    throw error
  }
});

// Search Vacation

router.post('/search', async (req, res) => {
  const { start_date, end_date, description } = req.body
  try {
    if (start_date && end_date && description) {
      let q = `SELECT * FROM vacations WHERE start_date LIKE ? OR end_date LIKE ? OR description LIKE ?`
      let searchResult = await Query(q, [start_date.slice(0, 10) + "%", end_date.slice(0, 10) + "%", "%" + description + "%"])
      res.json(searchResult)
    }
    else if (start_date && end_date) {
      let q = `SELECT * FROM vacations WHERE start_date LIKE ? OR end_date LIKE ?`
      let searchResult = await Query(q, [start_date.slice(0, 10) + "%", end_date.slice(0, 10) + "%", "%" + description + "%"])
      res.json(searchResult)
    } else {
      res.json({ error: true, msg: "Missing Some Information" })
    }
  } catch (error) {
    throw error
  }
})


// update followers status

router.put("/:id", verifyUser, async (req, res) => {
  const { followers, order } = req.body;
  if (followers !== undefined) {
    let q = `UPDATE vacations SET followers = ?  WHERE id = ?`;
    await Query(q, [followers, req.params.id]);
    switch (order) {
      case "ADD":
        let q2 = `INSERT INTO followers (vacation_id,user_id) VALUES (?,?)`;
        await Query(q2, [req.params.id, req.user.id]);
        break;
      case "REMOVE":
        let q3 = "DELETE FROM followers WHERE user_id = ? AND vacation_id = ?";
        await Query(q3, [req.user.id, req.params.id]);
      default:
        break;
    }
    res.json({ msg: "Changed" });
  } else {
    res.json({ error: true, msg: "Missing Some Info" });
  }
});

// ---------------- ADMIN ONLY ----------------

// Edit Vacations

router.put('/edit/:id', verifyAdmin, async (req, res) => {
  try {
    const { destination, description, country, price, start_date, end_date, img_src } = req.body
    if (!destination || !description || !country || !price || !start_date || !end_date || !img_src) {
      res.json({ error: true, msg: "Missing Some Information" })
      return
    }
    let q = `UPDATE vacations SET
     destination =?, description = ?,
      country = ? , price = ? ,start_date = ?,
      end_date = ? , img_src = ? WHERE id = ?`
    await Query(q, [destination, description, country, price, start_date, end_date, img_src, req.params.id])
    res.json({ msg: "Changed!" })

  } catch (error) {
    throw error
  }
})

// Delete Vacation

router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    let q1 = `DELETE FROM followers WHERE vacation_id = ?`
    let q2 = `DELETE FROM vacations WHERE id = ?`
    await Query(q1, [req.params.id])
    await Query(q2, [req.params.id])
    res.json({ error: false, msg: "Deleted" })
  } catch (error) {
    throw error
  }
})

//ADD VACATION

router.post('/add', verifyAdmin, async (req, res) => {
  try {
    const { destination, description, start_date, end_date, country, price, img_src } = req.body
    if (!destination || !description || !start_date || !end_date || !country || !price || !img_src) {
      res.json({ error: true, msg: "Missing Some Info" })
      return
    }
    let q = `INSERT INTO vacations (description,destination,img_src,price,start_date,end_date,country)
             VALUES (?,?,?,?,?,?,?)`
    await Query(q, [description, destination, img_src, price, start_date, end_date, country])
    res.json({ error: false, msg: "Added" })
  } catch (error) {
    throw error
  }
})

// vacations for chart

router.get('/chart', verifyAdmin, async (req, res) => {
  try {
    let result = await Query(`SELECT destination,followers FROM vacations`)
    res.json(result)
  } catch (error) {
    throw error
  }
})

module.exports = router;





