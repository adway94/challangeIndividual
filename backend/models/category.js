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

//Category ID, NAME.
const Category = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

export default Category;
