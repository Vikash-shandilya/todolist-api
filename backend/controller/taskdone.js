const taskdone = require("../model/taskdone");
const tasktodo = require("../model/todolist");

exports.checkbox_clicked = (req, res, next) => {
  const productid = req.params.productid;
  tasktodo
    .findByPk(productid)
    .then((prod) => {
      if (prod.finished) {
        let prod2 = prod;
        prod.destroy();
        taskdone.create({
          taskname: prod2.taskname,
          taskdescription: prod2.taskdescription,
        });
      }
    })
    .then((prod) => {
      res.redirect("/");
    });
};

exports.clicked = (req, res, next) => {
  const id = req.params.productid;
  tasktodo.update({ finished: true }, { where: { id } }).then((prod) => {
    res.redirect("/");
  });
};
