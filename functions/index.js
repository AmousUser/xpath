// core imports
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});
const functions = require("firebase-functions");

// Firebase Configuration
const admin = require("firebase-admin");

// eslint-disable-next-line
const serviceAccount = require("./xpath-website-firebase-adminsdk-2tfuh-d8e465e9f7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const {email, phone, comments, fullName} = req.body;
    const transporter = nodemailer.createTransport({
      port: 465,
      secure: true,
      host: "smtp.gmail.com",
      auth: {
        pass: "cube2018",
        user: "amous03.23.2022@gmail.com",
      },
    });

    const html = `
      <h1>From Xpath</h1>
      <div>
        <div><b>Full Name</b>: ${fullName}</div>
        <div><b>Phone</b>: ${phone}</div>
        <div><b>Email</b>: ${email}</div>
        <div><b>Comments</b>: ${comments}</div>
      </div>
    `;

    const mailOptions = {
      html,
      from: "XPath website",
      subject: "From Xpath Website",
      to: "apply@xpathlogistics.com",
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("-----transporter-----", error, info);

        return res.send(error.toString());
      }

      return res.send("Sended");
    });
  });
});
