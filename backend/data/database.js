const Sequelize = require("sequelize");

const sequelize = new Sequelize("todolist", "root", "localhost", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
