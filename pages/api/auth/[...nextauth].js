import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          const client = await clientPromise;
          const db = client.db("montana");
          const user = await db
            .collection("user")
            .findOne({ email: req.body.email })

          // * Check if Password Matches
          const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
          console.log(isPasswordCorrect, req.body.password)
          if(!isPasswordCorrect) throw new Error("Incorrect Admin User Password");
          if (!user) throw new Error("Unauthorized Admin User");
          if (user.role !== "ADMIN") throw new Error("Unauthorized Admin User");
          return user;
        } catch (err) {
          throw new Error(err.message);
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user._id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      const sess = {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
        },
      };
      return sess;
    },
  },
  pages: {
    signIn: "/admin/auth/signin",
  },
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 30 * 24 * 30 * 60, // 30 days
  },
};

export default NextAuth(authOptions);
