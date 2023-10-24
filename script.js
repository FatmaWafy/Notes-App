let NotesContainer = document.querySelector(".Notes-Container");
let Boxs = document.querySelectorAll(".Box");
NotesContainer.innerHTML = localStorage.getItem("notes");

function Create() {
  let Box = document.createElement("div");
  Box.className = "Box";
  Box.setAttribute("contenteditable", "true");

  let Delete = document.createElement("img");
  Delete.src = "img/cross.png";
  Box.appendChild(Delete);

  NotesContainer.appendChild(Box);
  SavaData();
}

NotesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    SavaData();
  } else if (e.target.tagName === "DIV") {
    Boxs = document.querySelectorAll(".Box");
    Boxs.forEach((box) => {
      box.onkeyup = function () {
        SavaData();
      };
    });
  }
});

function SavaData() {
  localStorage.setItem("notes", NotesContainer.innerHTML);
}
