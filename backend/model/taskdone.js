const sequelize = require("../data/database");
const Sequelize = require("sequelize");

const taskdone = sequelize.define("taskdone", {
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
});

module.exports = taskdone;
