import { findById } from "../models/user";
import { getSession } from "next-auth/react";

const requireCurrentUser = async (req, res, next) => {
  const session = await getSession({ req });
  if (session?.token?.sub)
    req.currentUser = await findById(parseInt(session?.token?.sub, 10));
  if (!req.currentUser) return res.status(401).send("Unauthorized");
  next();
};

export default requireCurrentUser;
