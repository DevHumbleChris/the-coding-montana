import NextAuth from 'next-auth'

export const authOptions = {
    providers: [],
    pages: {
        signIn: '/admin/auth/signin'
    }
}

export default NextAuth(authOptions)
