//Post Model ID, TITLE, CONTENT, IMAGE, CATEGORY, CREATIONDATE.

module.exports = (sequelize, type) => {
  return sequelize.define("post", {
    id: {
      type: type.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: type.STRING,
      allowNull: false,
    },
    content: {
      type: type.TEXT,
    },
    image: {
      type: type.STRING,
    },
    categoryId: {
      type: type.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
    },
    creationDate: {
      type: type.DATE,
      defaultValue: type.NOW,
    },
  });
};
