const express = require("express");
const router = express.Router();

const { getPost, createPost, getPostById, createComment } = require("../controllers/Post");

router.get('/',getPost)
router.get('/:id',getPostById)

router.post('/create',createPost)
router.post('/comment',createComment)

module.exports = router;