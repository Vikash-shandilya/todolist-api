window.addEventListener("DOMContentLoaded", async () => {
  let res = await axios.get("http://localhost:3002/");
  console.log(res);

  for (let i = 0; i < res.data.prod.length; i++) {
    let newdiv = document.createElement("div");
    let newli = document.createElement("li");
    let checkbox_btn = document.createElement("input");
    let cross_btn = document.createElement("button");

    checkbox_btn.type = "checkbox";
    checkbox_btn.addEventListener("change", clicked);
    cross_btn.onclick = deleted;
    cross_btn.type = "submit";
    cross_btn.innerText = "X";
    cross_btn.setAttribute("productid", res.data.prod[i].id);
    checkbox_btn.setAttribute("productid", res.data.prod[i].id);
    newli.textContent = `Task Name = ${res.data.prod[i].taskname} and Task description is  ${res.data.prod[i].taskdescription} `;

    newli.appendChild(cross_btn);
    newli.appendChild(checkbox_btn);
    newdiv.appendChild(newli);
    document.getElementById("tasks").appendChild(newdiv);
  }
  for (let i = 0; i < res.data.prod2.length; i++) {
    let newdiv = document.createElement("div");
    let newli = document.createElement("li");
    let checkbox_btn = document.createElement("input");
    let cross_btn = document.createElement("button");

    checkbox_btn.type = "checkbox";
    checkbox_btn.addEventListener("change", clicked);
    cross_btn.onclick = deleted;
    cross_btn.type = "submit";
    cross_btn.innerText = "X";
    cross_btn.setAttribute("productid", res.data.prod2[i].id);
    checkbox_btn.setAttribute("productid", res.data.prod2[i].id);
    newli.textContent = `Task Name = ${res.data.prod2[i].taskname} and Task description is  ${res.data.prod2[i].taskdescription} `;

    newli.appendChild(cross_btn);
    newli.appendChild(checkbox_btn);
    newdiv.appendChild(newli);
    document.getElementById("taskdone").appendChild(newdiv);
  }
});

async function submitform() {
  const taskname = document.getElementById("name").value;
  const taskdescription = document.getElementById("discript").value;
  const finished = false;
  myobj = { taskname, taskdescription, finished };

  let res = await axios.post("http://localhost:3002/submitform", myobj);
  let newdiv = document.createElement("div");
  let newli = document.createElement("li");
  let checkbox_btn = document.createElement("input");
  let cross_btn = document.createElement("button");

  checkbox_btn.type = "checkbox";
  checkbox_btn.addEventListener("change", clicked);
  cross_btn.onclick = deleted;
  cross_btn.type = "submit";
  cross_btn.innerText = "X";

  newli.textContent = `Task Name = ${res.data.taskname} and Task description is  ${res.data.description} `;

  newli.appendChild(cross_btn);
  newli.appendChild(checkbox_btn);
  newdiv.appendChild(newli);
  document.getElementById("taskdone").appendChild(newdiv);
}

async function clicked(e) {
  e.preventDefault();
  let id = e.target.getAttribute("productid");
  console.log(id);
  let res = await axios.get(`http://localhost:3002/clicked/${id}`);
  let res2 = await axios.get(`http://localhost:3002//checkbox_clicked/${id}`);
  window.location.reload();
}

async function deleted(e) {
  e.preventDefault();
  let id = e.target.getAttribute("productid");
  let res = await axios.get(`http://localhost:3002/delete/${id}`);
  window.location.reload();
}
