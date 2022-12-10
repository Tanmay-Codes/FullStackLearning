const router = require("express").Router();

const { response } = require("express");
const { json } = require("express/lib/response");
const Post = require("../models/Post");
const Users = require("../models/Users");

//create a post

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    response.status(500).json(err);
  }
});

//update a post

router.put("/:id", async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (post.userId == req.body.userid) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated sucessfully!");
    } else {
      res.status(403).json("You can update only yours post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a post

router.delete("/:id", async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (post.userId == req.body.userid) {
      await post.deleteOne();
      res.status(200).json("Post deleted sucessfully!");
    } else {
      res.status(403).json("You can delete only yours post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//like/dislike a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post is liked!");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post is disliked!!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get timeline posts
router.get("/timeline/all", async (req, res) => {
    try {
      const currentUser = await Users.findById(req.body.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.following.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
