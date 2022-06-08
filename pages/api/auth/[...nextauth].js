import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findByEmail, verifyPassword } from "../../../models/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
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

  pages: {
    signIn: "/signup",
  },
});
