import * as nodemailer from "nodemailer";

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: '"qiye.aliyun"',
    host: "smtp.ethereal.email",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "admin@jeffy.cc", // generated ethereal user
        pass: "Jsung12369" // generated ethereal password
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
            from: `"Jef.Site" <admin@jeffy.cc>`, // sender address
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
