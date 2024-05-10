// 

import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ]
});

export { handler as GET, handler as POST };