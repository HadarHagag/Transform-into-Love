
// import * as functions from "firebase-functions";
// const nodemailer = require('nodemailer');




// var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'transformintolove@gmail.com',
//         pass: 'Trn$f4@2958'
//     }
// });


// export const sendEmail=functions.firestore.document('mail/{mailId}')
// .onCreate((snap, context) => {
    
//     const mailOptions = {
//         from: `transformintolove@gmail.com`,
//         to: 'shakimi88@gmail.com',
//         subject: 'contact form message',
//         html: `<h1>Order Confirmation</h1>
//          <p> <b>Email: </b>${snap.data().email} </p>`
//     };

//     return transporter.sendMail(mailOptions, (error:any, data:any) => {
//         if (error) {
//             console.log(error)
//             return
//         }
//         console.log("Sent!")
//     });
// });
