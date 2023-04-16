
import * as functions from "firebase-functions";
const nodemailer = require('nodemailer');
const cors = require('cors')({origin:true});
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        response.send({
            "data": {
                "message": `Hello, ${request.body.data.name}!`
            }
        });
    });
});

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'transformintolove@gmail.com',
        pass: 'oherhrnixtfsnqrn'
    }
});

export const sendEmail=functions.https.onRequest((request, response) => {
        cors(request, response, () => {
            console.log(request.body.data)
        const mailOptions = {
            from: 'Transform Into Love <transformintolove@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: 'shakimi88@gmail.com',
            subject: 'New Optional Client Reached Out', // email subject
            html: `<h1>Contact Form Message</h1>
            <p>
               <b>Email: </b>${request.body.data.email}<br>
               <b>Name: </b>${request.body.data.fullName}<br>
               <b>Message: </b>${request.body.data.msg}<br>
            </p>` // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (error: { toString: () => any; }, data: any) => {
            if(error){
                return response.send(error.toString());
            }
            return response.send({message:`Sent!`});
        });
    });
});
