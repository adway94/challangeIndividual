module.exports = (sequelize, type) => {
  return sequelize.define("category", {
    id: {
      type: type.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: type.STRING,
    },
  });
};
