import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { apiClient } from "../../../../lib/axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        mobile_number: { label: "Mobile Number", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await apiClient.post("/users/login/", credentials);

          if (response.data.user && response.data.token) {
            return {
              ...response.data.user,
              accessToken: response.data.token.access,
              refreshToken: response.data.token.refresh,
            };
          }
          return null;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.user = token.user;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
