import { Request, Response } from "express";
const nodemailer = require("nodemailer");
import * as dotenv from "dotenv";
dotenv.config();

class Mailer {
    public transporter: any = nodemailer.createTransport({
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
    public Controller: (req: Request, res: Response) => Promise<any> = async(req, res) => {
        const { name, email, number, interest, description, address } = req.body;
        if(name && email && number && interest && description && address)
        {
            const mailOptions = {
                from: 'rahuljayaraj.25cs@licet.ac.in',
                to: 'srahuljayaraj@gmail.com',
                subject: 'Response Mail',
                html: 
                `<div style="padding: 20px; color: #08031b">
                    <p>Name : ${name}</p><br />
                    <p>E-Mail : ${email}</p><br />
                    <p>Phone : ${number}</p><br />
                    <p>Interest : ${interest}</p><br />
                    <p>Description : ${description}</p><br />
                    <p>Address : ${address}</p><br />
                </div>`
            };
    
            this.transporter.sendMail(mailOptions, function(err: Error) {
                if (err) {
                    res.status(500).json({ 
                        success: false, 
                        description:err.message
                    });
                }
                else {
                    res.json({ 
                        success: true,
                        description:"Mail Sent"
                    });
                }
            });
        }
        else{
            res.status(500).json({
                success: false,
                description:"Provide all the details"
            })
        }
    }
}

export default Mailer;
