const Sequelize = require("sequelize");

const PostModel = require("./models/post");
const CategoryModel = require("./models/category");

const sequelize = new Sequelize("blog", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Post = PostModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
Post.hasOne(Category);

sequelize.sync({ force: false }).then(() => {
  console.log("Im working");
});

module.exports = {
  Post,
  Category,
};
