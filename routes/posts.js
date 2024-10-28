const express = require("express");
const {
	createPost,
	deletePost,
	getPost,
	getPosts,
	updatePost,
} = require("../controllers/post-controller");
const router = express.Router();

// Get all posts
router.get("/", getPosts);
// Get single post
router.get("/:id", getPost);
// Create post
router.post("/", createPost);
// Update
router.put("/:id", updatePost);
// Delete
router.delete("/:id", deletePost);

module.exports = router;
