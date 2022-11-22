import NextAuth from 'next-auth'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

export const authOptions = {
    providers: [],
    pages: {
        signIn: '/admin/auth/signin'
    },
    adapter: MongoDBAdapter(clientPromise),
}

export default NextAuth(authOptions)
