import { resend } from "./resendConfig";
import { VerificationEmailTemplate } from "../../templates/verificationEmail";
import { sendVerificationEmailProps } from "@/types";
import transporter from "./nodemailerConfig";

export async function sendVerificationEmail({
  email,
  username,
  verifyCode,
}: sendVerificationEmailProps) {
  const mailOptions = {
    from: "blogs.atlas.ce@gmail.com",
    to: email,
    subject: "Verification Email",
    text: `Welcome ${username} to ATLAS.\nVerify your ATLAS account.\nThis is your verification code: ${verifyCode}`,
  };

  try {
    const data = await transporter.sendMail(mailOptions);

    return {
      status: "success",
      message: "Email sent successfully",
      data,
    };
  } catch (error) {
    console.log("Error sending email", error);

    return {
      status: "error",
      message: "Error sending email",
      data: error,
    };
  }
}
