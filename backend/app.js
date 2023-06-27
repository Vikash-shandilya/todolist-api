const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const sequelize = require("./data/database");

const taskdone = require("./router/taskdone");
const tasktodo = require("./router/tasktodo");

const app = express();
app.use(cors());

app.use(bodyparser.json());

app.use(tasktodo);
app.use(taskdone);

sequelize
  .sync({ force: true })
  .then((result) => {
    app.listen(3002);
  })
  .catch((err) => {
    console.log(err);
  });
