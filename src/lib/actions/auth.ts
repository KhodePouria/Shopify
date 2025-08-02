"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export const logingit = async () => {
    try {
        await signIn("github", { redirectTo: "/" });
    } catch (error) {
        if (error instanceof AuthError) {
            console.error("GitHub auth error:", error.type, error.message);
            throw error;
        }
        console.error("Unexpected error during GitHub auth:", error);
        throw error;
    }
};

export const logingoogle = async () => {
    try {
        await signIn("google", { redirectTo: "/" });
    } catch (error) {
        if (error instanceof AuthError) {
            console.error("Google auth error:", error.type, error.message);
            throw error;
        }
        console.error("Unexpected error during Google auth:", error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await signOut({ redirectTo: "/" });
    } catch (error) {
        console.error("Logout error:", error);
        throw error;
    }
};
