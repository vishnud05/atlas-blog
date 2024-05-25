import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "blogs.atlas.ce@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export default transporter;
