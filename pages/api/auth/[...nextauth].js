import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findByEmail, verifyPassword } from "../../../models/user";
import {
  findByEmailCustomer,
  verifyPasswordCustomer,
} from "../../../models/customer";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const user = await findByEmail(credentials.username);
        const customer = await findByEmailCustomer(credentials.username);
        if (
          user &&
          (await verifyPassword(credentials.password, user.hashedPassword))
        ) {
          return user;
        }
        if (
          customer &&
          (await verifyPasswordCustomer(
            credentials.password,
            customer.hashedPassword
          ))
        ) {
          return customer;
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/signup",
  },
});
