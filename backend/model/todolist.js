const sequelize = require("../data/database");
const Sequelize = require("sequelize");

const Todolist = sequelize.define("todolist", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  taskname: {
    type: Sequelize.STRING,
  },
  taskdescription: {
    type: Sequelize.STRING,
  },
  finished: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Todolist;
