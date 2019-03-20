var express = require("express"),
  path = require("path"),
  nodeMailer = require("nodemailer");

var app = express();
var port = 5000;
app.listen(port, function(req, res) {
  console.log("Server is running at port: ", port);
});

// post request to send emails
app.post("/form-submission", (req, res) => {
  console.log(req);
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
