let NotesContainer = document.querySelector(".Notes-Container");
let Boxs = document.querySelectorAll(".Box");
let RemoveBtn = document.querySelector(".RemoveBtn");

window.onload = function () {
  NotesContainer.innerHTML = localStorage.getItem("notes");
  if (NotesContainer.children.length > 1) {
    RemoveBtn.style.display = "block";
  } else {
    RemoveBtn.style.display = "none";
  }
};

function Create() {
  let Box = document.createElement("div");
  Box.className = "Box";
  Box.setAttribute("contenteditable", "true");
  Box.setAttribute("spellcheck", "false");

  let Delete = document.createElement("img");
  Delete.src = "img/cross.png";
  Box.appendChild(Delete);

  NotesContainer.appendChild(Box);
  SavaData();
}

NotesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.closest(".Box").remove();
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

NotesContainer.addEventListener("DOMSubtreeModified", function () {
  Boxs = NotesContainer.querySelectorAll(".Box");
  if (Boxs.length > 1) {
    RemoveBtn.style.display = "block";
  } else {
    RemoveBtn.style.display = "none";
  }
});

RemoveBtn.addEventListener("click", function () {
  Boxs = NotesContainer.querySelectorAll(".Box");
  Boxs.forEach((box) => {
    box.remove();
  });
  RemoveBtn.style.display = "none";
  SavaData();
});

function SavaData() {
  localStorage.setItem("notes", NotesContainer.innerHTML);
}
