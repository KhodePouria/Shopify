import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

// Validate environment variables
const requiredEnvVars = {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
};

// Check for missing environment variables
const missingVars = Object.entries(requiredEnvVars)
    .filter(([key, value]) => !value)
    .map(([key]) => key);

if (missingVars.length > 0) {
    console.error("Missing required environment variables:", missingVars);
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
}

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
            console.log("SignIn callback:", { 
                user: user?.email, 
                provider: account?.provider,
                accountId: account?.providerAccountId 
            });
            return true;
        },
        async session({ session, token }) {
            console.log("Session callback:", { session: session?.user?.email });
            return session;
        },
        async jwt({ token, user, account, profile }) {
            if (account) {
                console.log("JWT callback:", { 
                    provider: account.provider, 
                    user: user?.email,
                    accountId: account.providerAccountId 
                });
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