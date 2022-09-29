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

router.post('/', function(req, res) {
    res.send('Server is working properly');
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const interest = req.body.interest;
    const description = req.body.description;
    const address = req.body.address;
    
    const mailOptions = {
        from: 'rahuljayaraj.25cs@licet.ac.in',
        to: 'srahuljayaraj@gmail.com',
        subject: 'Nodemailer Project',
        html: `
        Name : ${name}
        E-Mail : ${email}
        Phone : ${number}
        Interest : ${interest}
        Description : ${description}
        Address : ${address}
      `
    };

    transporter.sendMail(mailOptions, function(err) {
        if (err) {
          res.json({ status: "Error"});
          console.log("Error"+err);
        } else {
            res.json({ status: "Mail Sent"});
            console.log("Mail sent");
        }
    });
});

module.exports = router;