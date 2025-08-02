import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const {auth, handlers, signIn, signOut} = NextAuth({
    providers:[
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    pages: {
        error: '/auth/error', // Custom error page
    },
    debug: process.env.NODE_ENV === "development",
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log("SignIn callback:", { user: user?.email, provider: account?.provider });
            return true;
        },
        async session({ session, token }) {
            console.log("Session callback:", { session: session?.user?.email });
            return session;
        },
        async jwt({ token, user, account, profile }) {
            if (account) {
                console.log("JWT callback:", { provider: account.provider, user: user?.email });
            }
            return token;
        }
    },
    events: {
        async signIn(message) {
            console.log("SignIn event:", message);
        },
        async signOut(message) {
            console.log("SignOut event:", message);
        },
    }
});