const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require('path')


app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/auth", require("./routes/auth"));
app.use("/vacations", require("./routes/vacations"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

const port = process.env.PORT || 1000;
app.listen(port, console.log("Server running on port " + port));
