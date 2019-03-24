var express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  nodeMailer = require("nodemailer");

let transporter = nodeMailer.createTransport({
  sendmail: true,
  newline: "unix",
  path: "/usr/sbin/sendmail"
});

var app = express();
app.use(bodyParser.json());

var port = 8080;
app.listen(port, function(req, res) {
  console.log("Server is running at port: ", port);
});

// post request to send emails
app.post("/form-submission", (req, res, err) => {
  transporter.sendMail(
    {
      from: "hellonine25@gmail.com",
      to: "pnoonan91@gmail.com",
      subject: "Nine to Five Contact Form Submission",
      text: `NAME: ${req.body.name || ""} | EMAIL: ${req.body.email ||
        ""} | MESSAGE: ${req.body.message || ""}`
    },
    (err, info) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});
