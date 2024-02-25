import { loginUser } from "@/app/service/authentication";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {},
      async authorize(credentials) {
        const { username, password } = credentials as { username: string, password: string }
        const response = await loginUser(
          username,
          password)
        const { message, result } = response;
        if (result.length > 0) {
          return result[0];
        } else throw new Error(message);
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.user = user
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user
      }
      return session;

    },
  },
  pages: {
    signIn: "/components/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};