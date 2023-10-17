const { Router } = require("express");
const {
  userDelete,
  usersGet,
  userPost,
  userPut,
} = require("../controllers/users.controllers");

const router = Router();

router.get("/", usersGet);
router.post("/", userPost);
router.put("/:id", userPut);
router.delete("/", userDelete);

module.exports = router;
