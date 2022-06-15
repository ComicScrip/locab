export default function requireAdmin(req, res, next) {
  if (req.currentUser.role === "admin") return next();
  else return res.status(403).send("Forbidden");
}
