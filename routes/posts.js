const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPost", upload.single("file"), postsController.createPost);


router.put("/likePost/:id", postsController.likePost);
router.put("/likeHappyFace/:id", postsController.likeHappyFace);
router.put("/likePoopFace/:id", postsController.likePoopFace);
router.put("/likeSadFace/:id", postsController.likeSadFace);

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
