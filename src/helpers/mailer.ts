import nodemailer from "nodemailer";
import User from "../models/userModel";
import bcryptjs from "bcryptjs";


export const sendEmail = async ({email, emailtype, userId}:any) => {
    try {
        // create a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

            if (emailtype === "VERIFY") {
                await User .findByIdAndUpdate(userId, {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000}) // token expires in 1 hour
            } else if (emailtype === "RESET") {
                await User.findByIdAndUpdate(userId, {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000})
            }

            var transport = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "08d3d15908999d",
                    pass: "d05d2ac47fd048"
                    //TODO add these credentials to .env file
                }
                });

            const mailOptions = {
                from: 'amresh2006@gmail.com',
                to: email,
                subject: emailtype === "VERIFY" ? "Verify Your email" : "Reset Your Password",
                html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailtype === "VERIFY" ? "verify your email" : "reset your password"}
                or copy and paste the following link in your browser:<br>
                ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
                </p>`
            }

            const mailResponse = await transport.sendMail(mailOptions);
            return mailResponse;


    } catch (error: any) {
        throw new Error(error.message);
    }
}