import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"
export default NextAuth({
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username" },
                password: { label: "Password", type: "password" }
            },
            authorize: (credentials) => {
                if (credentials.username === process.env.ADMINUSER) {
                    if (credentials.password === process.env.PASSWORD) {
                        return {
                            id: 1,
                            name: "Admin"
                        }
                    }
                }
                else {
                    return null
                }
            },

        }),
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.id = user.id
            }
            return token
        },
        session: ({ session, token }) => { 
            if (token){
                session.id = token.id
            }
            return session
        }
    },
    secret: process.env.SECRET,
    jwt: {
        secret: process.env.JWTSECRET,
        encryption: true
    },
    pages:{
        signIn: "https://eldossjogy.vercel.app/admin"
    }
})