const { Post } = require("../db");

exports.allPost = async (req, res) => {
  const posts = await Post.findAll({
    order: [["creationDate", "DESC"]],
  });
  res.status(200);
  res.json(posts);
};

exports.postById = async (req, res) => {
  const postId = req.params.id;
  const onePost = await Post.findAll({
    where: {
      id: postId,
    },
  });
  if (onePost.length == 0) {
    res.status(404);
    res.send({ Error: "Id not found" });
  } else {
    res.status(200);
    res.json(onePost);
  }
};

exports.createPost = async (req, res) => {
  const newPost = await Post.create(req.body);
  res.status(200);
  res.json(newPost);
};

exports.updateAPost = async (req, res) => {
  const updatedPost = await Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (updatedPost == 0) {
    res.status(404);
    res.send({ Error: "Id not found" });
  } else {
    res.status(200);
    res.json({ Succes: `The post with id: ${req.params.id} has been updated` });
  }
};

exports.deleteAPost = async (req, res) => {
  const deletedPost = await Post.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (deletedPost == 0) {
    res.status(404);
    res.send({ Error: "Id not found" });
  } else {
    res.status(200);
    res.json({ Succes: `The post with id: ${req.params.id} has been deleted` });
  }
};
