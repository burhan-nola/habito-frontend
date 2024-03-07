import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "12345",
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        deviceID: { label: "deviceID", type: "deviceID" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { deviceID, password } = credentials as {
          deviceID: string;
          password: string;
        };
        const data: any = {
          id: 1,
          deviceID: "habito_001",
          role: "user",
        };
        if (deviceID === "habito_001" && password === "12345") {
          return data;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        (token.deviceID = user.deviceID), (token.role = user.role);
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("deviceID" in token) {
        session.user.deviceID = token.deviceID;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
