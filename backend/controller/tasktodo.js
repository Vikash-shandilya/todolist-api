const taskdone = require("../model/taskdone");
const tasktodo = require("../model/todolist");

exports.indexpage = (req, res, next) => {
  tasktodo
    .findAll()
    .then((prod) => {
      taskdone
        .findAll()
        .then((prod2) => {
          let response = { prod: prod, prod2: prod2 };
          res.json(response);
        })
        .catch((error) => {
          // Handle any errors that occurred during taskdone retrieval
          res.status(500).json({
            error: "An error occurred while retrieving taskdone data",
          });
        });
    })
    .catch((error) => {
      // Handle any errors that occurred during tasktodo retrieval
      res
        .status(500)
        .json({ error: "An error occurred while retrieving tasktodo data" });
    });
};

exports.submitform = (req, res, next) => {
  const taskname = req.body.taskname;
  const description = req.body.taskdescription;

  tasktodo
    .create({
      taskname: taskname,
      taskdescription: description,
      finished: false,
    })
    .then((prod) => {
      res.json(prod);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.delete = (req, res, next) => {
  const productid = req.params.productid;
  tasktodo
    .findByPk(productid)
    .then((prod) => {
      return prod.destroy();
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
