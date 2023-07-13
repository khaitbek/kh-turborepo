import { DrizzleAdapter } from "@/auth/drizzle-adapter";
import { db } from "@/server/db";
import { users } from "@/server/schema";
import { eq } from "drizzle-orm";
import type { NextAuthOptions } from "next-auth";
import credentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  session: {
    strategy: "jwt",
  },
  secret: process.env["NEXTAUTH_SECRET"],
  providers: [
    credentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials!.email));
        if (!user) return null;
        return user[0];
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user!.id = token.id;
        session.user!.name = token.name;
        session.user!.email = token.email;
        session.user!.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const [dbUser] = await db
        .select()
        .from(users)
        .where(eq(users.email, token.email || ""))
        .limit(1);

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
};
