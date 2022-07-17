import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findByEmail, verifyPassword } from "../../../models/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        const user = await findByEmail(credentials.username);
        if (
          user &&
          (await verifyPassword(credentials.password, user.hashedPassword))
        ) {
          return user;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    session: async (session, user) => {
      if (user) session.id = user.id;
      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: "/signup",
  },
});
