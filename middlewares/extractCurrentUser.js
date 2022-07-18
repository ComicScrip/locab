import { findById } from "../models/user";
import { getSession } from "next-auth/react";

const extractCurrentUser = async (req, res, next) => {
  const session = await getSession({ req });
  if (session?.token?.sub)
    req.currentUser = await findById(parseInt(session?.token?.sub, 10));
  next();
};

export default extractCurrentUser;
