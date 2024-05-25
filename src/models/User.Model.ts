import { Role } from "@/constants";
import { User } from "@/types";
import mongoose, { Model, Schema } from "mongoose";

const UserSchema: Schema<User> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid email"],
    },

    bio: { type: String, default: "" },

    password: { type: String, required: [true, "Password is required"] },

    isVerified: { type: Boolean, default: false },

    role: { type: String, enum: Object.values(Role), default: Role.UNVERIFIED },

    verificationCode: { type: String, default: "" },

    verificationTokenExpires: { type: Date, default: Date.now() },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const UserModel =
  (mongoose.models.User as Model<User>) ||
  mongoose.model<User>("User", UserSchema);
export default UserModel;
