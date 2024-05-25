import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.Model";
import bcrypt from "bcryptjs";

import { generateVerificationCode } from "@/utils/helperFunctions";
import { sendVerificationEmail } from "@/utils/sendEmails";
import { Role } from "@/constants";

export async function POST(req: Request): Promise<Response> {
  await dbConnect();

  try {
    const { email, username, password, name } = await req.json();

    const existingUser = await UserModel.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      if (existingUser.isVerified || existingUser.email === email) {
        return Response.json(
          {
            status: "error",
            message: `User already exists with this email.Please ${
              existingUser.isVerified ? "login" : "verify your email"
            }`,
          },
          { status: 500 }
        );
      } else {
        if (existingUser.verificationTokenExpires >= new Date(Date.now())) {
          return Response.json(
            {
              status: "error",
              message:
                "Username already taken. Please try again with a different username.",
            },
            { status: 500 }
          );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationCode = generateVerificationCode();

        // Update existing user with new details

        const newUser = await existingUser.updateOne({
          email,
          username,
          name,
          password: hashedPassword,
          isVerified: false,
          verificationCode: verificationCode,
          verificationTokenExpires: new Date(Date.now() + 3600000),
          role: Role.UNVERIFIED,
        });

        if (!newUser) {
          throw new Error("Error registering user");
        }
        // Send verification email
        const sendEmailResponse = await sendVerificationEmail({
          email,
          username,
          verifyCode: verificationCode,
        });

        if (sendEmailResponse.status === "success") {
          return Response.json(
            {
              status: "success",
              message: "User registered successfully. Verification email sent.",
            },
            { status: 200 }
          );
        } else {
          throw new Error("Error sending verification email");
        }
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationCode = generateVerificationCode();
      // Create new user
      const newUser = await UserModel.create({
        email,
        username,
        name,
        password: hashedPassword,
        isVerified: false,
        verificationCode: verificationCode,
        verificationTokenExpires: new Date(Date.now() + 3600000),
        role: Role.UNVERIFIED,
      });

      if (!newUser) {
        throw new Error("Error registering user");
      }
      // Send verification email
      const sendEmailResponse = await sendVerificationEmail({
        email,
        username,
        verifyCode: verificationCode,
      });

      if (sendEmailResponse.status === "success") {
        return Response.json(
          {
            status: "success",
            message: "User registered successfully. Verification email sent.",
          },
          { status: 200 }
        );
      } else {
        throw new Error("Error sending verification email");
      }
    }
  } catch (error) {
    console.error("SIGNUP ERROR", error);
    console.log(Response);

    return Response.json(
      {
        status: "error",
        message: "Error registering user",
        data: error,
      },
      { status: 500 }
    );
  }
}
