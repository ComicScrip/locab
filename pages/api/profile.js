// import { getSafeAttributes, validateUser, updateUser } from "../../models/user";
// import base from "../../middlewares/common";
// import FormData from "form-data";
// import { data } from "cypress/types/jquery";

// async function handleGet(req, res) {
//   res.send(getSafeAttributes(req.currentUser));
// }

// async function handlePatch(req, res) {
//   const validationErrors = validateUser(true);
//   if (validationErrors) res.status(422).send(validationErrors);

//   if (req.file) {
//     const form = new FormData();
//     form.append("files", { filename: req.file.originalname });
//     res.send(getSafeAttributes(await updateUser(req.currentUser.id, data)));
//   }
// }

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default base().get(handleGet).patch(handlePatch);
