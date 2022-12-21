const { publicDecrypt } = require("crypto");
const express = require("express");
const socket = require("socket.io")
const app = express();
const path = require("path");
const port = 3000;
app.engine(".html", require("ejs").__express);
app.set("views", __dirname + "/");
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname + "/public")));
app.get("/", function (req, res) {
  res.render("main");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
