import base from "../../../middlewares/common";
import {
  findByEmail,
  hashPassword,
  updateUser,
  verifyPassword,
} from "../../../models/user";

async function handlePost(req, res) {
  const { email, newPassword, newPasswordConfirmation, resetPasswordToken } =
    req.body;

  if (newPassword !== newPasswordConfirmation)
    return res
      .status(400)
      .send("les deux mots de passe ne correspondent pas !");

  const user = await findByEmail(email);

  if (!user) return res.status(404).send("l'utilisateur n'est pas actif !");

  if (!(await verifyPassword(resetPasswordToken, user.resetPasswordToken)))
    return res.status(400).send("invalid token");

  await updateUser(user.id, {
    hashedPassword: await hashPassword(newPassword),
    resetPasswordToken: null,
  });

  res.send("password reset successfully");
}

export default base().post(handlePost);
