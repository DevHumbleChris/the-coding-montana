import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          const client = await clientPromise;
          const db = client.db("coding-montana");
          console.log(db);
          return null;
        } catch (err) {
          throw new Error(err.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin/auth/signin",
  },
  adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth(authOptions);
