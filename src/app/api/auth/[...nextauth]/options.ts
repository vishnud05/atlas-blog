import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.Model";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        await dbConnect();

        try {
          const user = await UserModel.findOne({
            $or: [
              { username: credentials.username },
              { email: credentials.username },
            ],
          });

          if (!user) {
            throw new Error("No user found");
          }

          if (!user.isVerified) {
            throw new Error(
              "User is not verified yet. Please verify your email first."
            );
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isValid) {
            throw new Error("Password is incorrect");
          }

          return user;
        } catch (error) {
          console.log({
            message: "SIGN IN ERROR",
            error,
          });
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id.toString();
        token.username = user.username?.toString();
        token.email = user.email?.toString();
        token.isVerified = user.isVerified;
        token.role = user.role?.toString();
      }

      return token;
    },
    async session({ session, token }) {
      session.user._id = token._id?.toString();
      session.user.username = token.username?.toString();
      session.user.email = token.email?.toString();
      session.user.role = token.role?.toString();
      session.user.isVerified = token.isVerified as boolean;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },
};

export default authOptions;
