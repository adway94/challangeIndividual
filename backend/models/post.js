const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("blog", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});

//Testing connection
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//Post Model ID, TITLE, CONTENT, IMAGE, CATEGORY, CREATIONDATE.
const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  },
  image: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
    references: {
      model: Category,
      key: "id",
    },
  },
  creationDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Post;
