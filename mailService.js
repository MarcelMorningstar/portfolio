var nodemailer = require("nodemailer");

export async function sendMail(name, email, subject, messege) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
            pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
        },
    });

    var mailOptions = {
        from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
        to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
        subject: subject,
        html: `
            <h1>Roland's Portfolio</h1>

            <p>${ messege }<p>

            <span>${ name }, ${ email }</span>
        `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            throw new Error(error);
        } else {
            console.log("Email Sent");
            return true;
        }
    });
}