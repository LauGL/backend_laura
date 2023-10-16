const { Router } = require("express");
const { userDelete } = require("../controllers/users.controllers");

const router = Router();

router.app.get("/", usersGet);
router.app.post("/", userPost);
router.app.put("/:id", userPut);
router.app.delete("/", userDelete);

module.exports = router;
