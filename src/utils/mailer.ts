import * as nodemailer from "nodemailer";

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    // service: 'QQ',
    host: "smtp.exmail.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "admin@jef.site", // generated ethereal user
        pass: "yourpasswd" // generated ethereal password
    }
});

interface SendMailIn {
    to: string;
    subject: string;
    text: string;
    html: string;
}

export default (opt: SendMailIn) => {
    return new Promise((resolve, reject) => {
        // setup email data with unicode symbols
        const mailOptions = {
            from: `"Jeff" <admin@jef.site>`, // sender address
            to: opt.to, // list of receivers
            subject: opt.subject, // Subject line
            text: opt.text, // plain text body
            html: opt.html // html body
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(0);
                return;
            }
            resolve(info);
        });
    });
};
