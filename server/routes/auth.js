const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { genSaltSync, compareSync, hashSync } = require("bcrypt");
const { verifyUser } = require("../verification");
const Query = require("../db");


// Register and login after 
router.post("/register", async (req, res) => {
  try {
    const { fname, lname, username, password } = req.body;
    if (fname && lname && username && password) {
      // check if username exicst
      const user = await Query("SELECT * FROM users WHERE username = ?", [username]);
      if (user.length > 0) {

        res.json({ error: true, msg: "Username Already Taken" });
      } else {
        const salt = genSaltSync(10);
        const hash = hashSync(password, salt);
        let q = `INSERT INTO users (fname,lname,username,password) 
                        values(?,?,?,?)`;
        let result = await Query(q, [fname, lname, username, hash]);
        // res.status(201).json({ msg: "Registered" });
        const user = await Query("SELECT * FROM users WHERE username = ?", [username]);
        let access_token = jwt.sign(
          {
            id: user[0].id,
            role: user[0].role,
            username,
            fname: user[0].fname,
            lname: user[0].lname,
          },
          "secretkey",
          { expiresIn: "10m" }
        );
        res.status(200).json({
          access_token,
          user_id: user[0].id,
          role: user[0].role,
          fname: user[0].fname,
          lname: user[0].lname,
        });
      }
    } else {
      res.json({ error: true, msg: "Missing Some Information" });
    }
  } catch (error) {
    throw error;
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username && password) {
      const user = await Query("SELECT * FROM users WHERE username = ?", [
        username,
      ]);
      if (user.length === 1) {
        if (compareSync(password, user[0].password)) {
          let access_token = jwt.sign(
            {
              id: user[0].id,
              role: user[0].role,
              username,
              fname: user[0].fname,
              lname: user[0].lname,
            },
            "secretkey",
            { expiresIn: "10m" }
          );
          res.status(200).json({
            access_token,
            user_id: user[0].id,
            role: user[0].role,
            fname: user[0].fname,
            lname: user[0].lname,
          });
        } else {
          res.json({ error: true, msg: "Wrong Password" });
        }
      } else {
        res.json({ error: true, msg: "Username Does Not Exicst" });
      }
    } else {
      res.json({ error: true, msg: "Missing Some Information" });
    }
  } catch (error) {
    throw error;
  }
});

//  get user data
router.get("/me", verifyUser, (req, res) => {
  res.send(req.user);
});

module.exports = router;
