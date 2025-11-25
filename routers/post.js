const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// your routes:
router.post("/", postController.addPost);
router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);

// partner routes:
router.get("/filter/by-sender", postController.getPostsBySender);
router.put("/:id", postController.updatePost);

module.exports = router;
