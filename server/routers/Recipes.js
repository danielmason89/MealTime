const { Router } = require("express");
const router = Router();

router // equivalent to /users/:id
  .get("/", (request, res) => {
    res.send("send all routes");
  });
// .patch((request, response) => {
//   const id = request.params.id;
//   const user = db
//     .get("Recipes")
//     .updateById(id, request.body)
//     .write();

//   if (user) {
//     response.json(user);
//   } else {
//     response.status(404).json({ message: "Not Found" });
//   }
// })
// .delete((request, response) => {
//   const id = request.params.id;
//   const user = db
//     .get("users")
//     .removeById(id)
//     .write();

//   if (user) {
//     response.json(user);
//   } else {
//     response.status(404).json({ message: "Not Found" });
//   }
// });

// don't forget to export the router Object
module.exports = router;
