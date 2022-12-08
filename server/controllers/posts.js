const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//index
router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.all;
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json({ err });
  }
});
//show
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ err });
  }
});

//create
router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(422).json({ err });
  }
});

//update

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const updatedPost = await post.update(req.body);
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ err });
  }
});

module.exports = router;
