const router = require("express").Router();
const postControllerApi = require("../controller/postControllerApi");

router.get("/posts", postControllerApi.allPost);
router.get("/posts/:id", postControllerApi.postById);
router.post("/posts", postControllerApi.createPost);
router.patch("/posts/:id", postControllerApi.updateAPost);
router.delete("/posts/:id", postControllerApi.deleteAPost);

module.exports = router;
