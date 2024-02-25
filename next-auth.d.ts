import NextAuth from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    user?: DefaultUser;
  }
}
