const taskdone = require("../model/taskdone");
const tasktodo = require("../model/todolist");

exports.checkbox_clicked = (req, res, next) => {
  const productid = req.params.productid;
  console.log(productid);
  tasktodo
    .findByPk(productid)
    .then((prod) => {
      console.log(prod);
      if (prod.finished) {
        let prod2 = Object.assign({}, prod);
        console.log(prod2);
        return prod.destroy().then((res) => {
          taskdone.create({
            taskname: prod2.dataValues.taskname,
            taskdescription: prod2.dataValues.taskdescription,
          });
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
    console.log("clicked-done");
    res.redirect("/");
  });
};
