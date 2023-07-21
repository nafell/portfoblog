import NextAuth, { DefaultSession, Profile } from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GitHubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";
import { z } from "zod";

const envVariables = z.object({
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    NEXTAUTH_SECRET: z.string(),
});

envVariables.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envVariables> {}
    }
}

const authOptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
});
export {authOptions as GET, authOptions as POST}