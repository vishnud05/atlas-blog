import BlogModel from "@/models/Blog.Model";
import UserModel from "@/models/User.Model";
import mongoose, { Model } from "mongoose";

type ConnectionOptions = {
  isConnected?: number;
};

const connectionObject: ConnectionOptions = {};

const dbConnect = async () => {
  UserModel;
  BlogModel;

  try {
    if (connectionObject.isConnected) {
      console.log("Using existing connection");
      return;
    }

    console.log("Establishing new connection");

    const db = await mongoose.connect(
      process.env.MONGODB_URI?.replace(
        "<PASSWORD>",
        process.env.MONGODB_PSWD!
      ).replace("<USERNAME>", process.env.MONGODB_USER!) || "",
      {}
    );

    if (db.connections[0]) {
      connectionObject.isConnected = db.connections[0].readyState;
    }
  } catch (error) {
    console.log("Error connecting to database: ", error);

    process.exit(1);
  }
};

export default dbConnect;
