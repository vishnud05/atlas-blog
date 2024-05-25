import APIFeatures from "@/lib/apiFeatures";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.Model";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  dbConnect();
  try {
    const { id } = params;
    const userQuery = new APIFeatures(UserModel.findById(id), {
      fields: "username name email role",
    }).selectFields();
    const user = await userQuery.query;
    if (!user) {
      throw new Error("Error fetching user");
    }
    return Response.json(
      {
        status: "success",
        message: "User fetched successfully",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        status: "error",
        message: "Error fetching user",
        data: error,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  dbConnect();
  try {
    const { id } = params;
    const data = await req.json();
    const userQuery = new APIFeatures(UserModel.findByIdAndUpdate(id, data), {
      fields: "username email role",
    }).selectFields();
    const user = await userQuery.query;
    if (!user) {
      throw new Error("Error updating user");
    }
    return Response.json(
      {
        status: "success",
        message: "User updated successfully",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        status: "error",
        message: "Error updating user",
        data: error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  dbConnect();
  try {
    const { id } = params;
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
      throw new Error("Error deleting user");
    }
    return Response.json({
      status: "success",
      message: "User deleted successfully",
      data: null,
    });
  } catch (error) {
    return Response.json({
      status: "error",
      message: "Error deleting user",
      data: error,
    });
  }
}
