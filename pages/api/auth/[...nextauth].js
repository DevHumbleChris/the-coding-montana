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
      console.log(url, baseUrl)
      return url.startsWith(baseUrl)
        ? Promise.resolve(`${baseUrl}/admin/dashboard`)
        : Promise.resolve(url);
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(token, user)
      if (user) {
        token.id = user._id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log(token, user)
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
    secret: process.env.NEXTAUTH_SECRET,
    encode: async ({ secret, token }) => {
      return jwt.sign({ ...token, userId: token.id }, secret, {
        algorithm: "HS256",
        expiresIn: 30 * 24 * 60 * 60, // 30 days
      })
    },
    decode: async ({ secret, token }) => {
      return jwt.verify(token, secret, { algorithms: ["HS256"] })
    },
  },
};

export default NextAuth(authOptions);
