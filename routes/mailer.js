var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
})

let mailOptions = {
    from: 'rahuljayaraj.25cs@licet.ac.in',
    to: 'srahuljayaraj@gmail.com',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
};

router.get('/', function(req, res, next) {
    res.send('Server is working properly');
    console.log("Server is running properly");
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
    });
});

module.exports = router;