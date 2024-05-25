import { Role } from "@/constants";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.Model";

export async function POST(req: Request): Promise<Response> {
  await dbConnect();
  try {
    const { username, verifyCode } = await req.json();

    const user = await UserModel.findOne({
      username,
      verificationCode: verifyCode,
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.verificationTokenExpires < new Date(Date.now())) {
      throw new Error("Verification token expired");
    }

    const verifiedUser = await user.updateOne({
      isVerified: true,
      verificationCode: "",
      verificationTokenExpires: new Date(Date.now()),
      role: Role.USER,
    });

    if (!verifiedUser) {
      throw new Error("Error verifying user");
    }

    return Response.json(
      {
        status: "success",
        message: "User verified successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error verifying user: ", error);
    return Response.json(
      {
        status: "error",
        message: "Error verifying user",
        data: error,
      },
      { status: 500 }
    );
  }
}
