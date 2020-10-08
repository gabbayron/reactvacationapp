const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
if (process.env.NODE_ENV) {
  app.use(express.static("client/build"))
}
app.use("/auth", require("./routes/auth"));
app.use("/vacations", require("./routes/vacations"));



const port = process.env.PORT || 1000;
app.listen(port, console.log("Server running on port " + port));
