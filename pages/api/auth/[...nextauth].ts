import { loginUser } from "@/app/service/authentication";
import { User } from "@/next-auth";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "CredentialsProvider",
      credentials: {
        email: {label: "email",type: "email"},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const emailCredentials : string = credentials?.email || '';
        const passwordCredentials : string = credentials?.password || '';
        
        const apiResponse = await loginUser(emailCredentials, passwordCredentials);
        console.log("Printing the apiResponse at authOptions.ts ===> ", apiResponse);
        const res = apiResponse.result[0];
        const message = apiResponse.message;

        if (!message.includes('success')) {
          throw new Error(apiResponse.message);
        }
        if (message.includes('success') && apiResponse.result.length>0) {
          return {
            id: res.role,
            email: res.email,
            name : res.username,
            role : res.role,
            image : res.image,
            token: res.token
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/components/login",
    // signIn: `${process.env.NEXTAUTH_URL}/components/login`,
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
callbacks: {
    async jwt({token, user}) {
      // If there's a user, add it to the token
      if (user) {
        token.user = user
        console.log("Printing the token.user in jwt block at authOptions.ts ===> ", token.user);
        // Add other user properties as needed
      }
      return token;
    },
    async session({session, token}) {
      console.log("Priting the token in session block at authOptions.ts ===> ", token);
      
      session.user = token.user as User || '';
      console.log("Priting the session in session block at authOptions.ts ===> ", session);
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);