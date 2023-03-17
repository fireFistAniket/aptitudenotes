import { topicObj } from "./topics.js";

//Grabbing DOM
let pages = document.getElementById("pages");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let nxtBtn = document.getElementById("nxtBtn");
let previousBtn = document.getElementById("previousBtn");
let searchTxtArea = document.getElementById("searchTxtArea");
let searchResult = document.getElementById("searchResult");
let navLinkList = document.getElementById("navLinkList");
let btnDiv = document.getElementById("btnDiv");
let indexDiv = document.getElementById("indexDiv");
let startSlidePage = document.getElementById("startSlidePage");

//Initial Setup
let i = 0;

let titleList = new Array();
for (let index = 0; index < topicObj.length; index++) {
  titleList.push(topicObj[index].title);
}
//Loaded Page
if (document.title == "| Aptitude Notes |") {
  btnDiv.classList.add("visually-hidden");
} else {
  if (btnDiv.classList.contains("visually-hidden")) {
    btnDiv.classList.remove("visually-hidden");
  }
}
document.addEventListener("click", () => {
  if (document.title == "| Aptitude Notes |") {
    btnDiv.classList.add("visually-hidden");
  } else {
    if (btnDiv.classList.contains("visually-hidden")) {
      btnDiv.classList.remove("visually-hidden");
    }
  }
});
// Slide pages functionality
startSlidePage.addEventListener("click", () => {
  pages.innerHTML = topicObj[i].data;
  document.title = "| " + topicObj[i].title + " |";
});

// Added HomePage indexes
Array.from(topicObj).forEach((element) => {
  indexDiv.innerHTML += `<a href="#" class="col p-1 rounded text-success homeAnchors">${element.title}</a>`;
});
if (indexDiv.hasChildNodes()) {
  let homeAnchors = document.getElementsByClassName("homeAnchors");
  console.log(homeAnchors[0].innerText);
  for (let index = 0; index < homeAnchors.length; index++) {
    homeAnchors[index].addEventListener("click", () => {
      if (homeAnchors[index].innerText == topicObj[index].title) {
        document.title = topicObj[index].title;
        pages.innerHTML = topicObj[index].data;
        i = topicObj.indexOf(topicObj[index]);
        classCheck();
      }
    });
  }
}
// Enable & Disable system button
function classCheck() {
  if (i >= topicObj.length - 1) {
    next.classList.add("disabled");
  } else {
    if (next.classList.contains("disabled")) {
      next.classList.remove("disabled");
    }
  }

  if (i <= 0) {
    previous.classList.add("disabled");
  } else {
    if (previous.classList.contains("disabled")) {
      previous.classList.remove("disabled");
    }
  }
}
classCheck();
// NavBar List adding section
for (let index = 0; index < topicObj.length; index++) {
  navLinkList.innerHTML += `<a
  href="#"
  class="list-group-item list-group-item-action navAnchor"
  >${index + 1}. ${topicObj[index].title}</a
>`;
}
//NavBar anchors redirection
let navAnchor = document.getElementsByClassName("navAnchor");
for (let index = 0; index < navAnchor.length; index++) {
  navAnchor[index].addEventListener("click", () => {
    if (navAnchor[index].innerHTML.includes(topicObj[index].title)) {
      document.title = topicObj[index].title;
      pages.innerHTML = topicObj[index].data;
      i = topicObj.indexOf(topicObj[index]);
      classCheck();
    }
  });
}

//Search Input System
searchTxtArea.addEventListener("input", () => {
  searchResult.innerHTML = "";
  Array.from(titleList).forEach(function (element) {
    if (element.includes(searchTxtArea.value.toUpperCase())) {
      if (element == topicObj[i].title) {
        searchResult.innerHTML += `<a href="#pages" class="list-group-item list-group-item-action active searchAnchor" aria-current="true">${element}</a>`;
      } else {
        searchResult.innerHTML += `<a href="#pages" class="list-group-item list-group-item-action searchAnchor" aria-current="true">${element}</a>`;
      }
    }
    if (searchTxtArea.value == "") {
      while (searchResult.hasChildNodes()) {
        searchResult.removeChild(searchResult.firstChild);
      }
    }
    if (searchResult.hasChildNodes()) {
      let searchAnchor = document.getElementsByClassName("searchAnchor");
      for (let index = 0; index < searchAnchor.length; index++) {
        searchAnchor[index].addEventListener("click", () => {
          Array.from(topicObj).forEach((e) => {
            if (e.title == searchAnchor[index].innerText) {
              pages.innerHTML = e.data;
              document.title = "| " + e.title + " |";
              searchAnchor[index].classList.add("active");
              i = topicObj.indexOf(e);
              classCheck();
            }
          });
          searchTxtArea.value = "";
          searchResult.innerHTML = "";
        });
      }
    }
  });
});

//Next Button Listner
nxtBtn.addEventListener("mouseenter", () => {
  nxtBtn.classList.add("bg-primary");
  nxtBtn.classList.add("text-white");
});
nxtBtn.addEventListener("mouseleave", () => {
  nxtBtn.classList.remove("bg-primary");
  nxtBtn.classList.remove("text-white");
});
nxtBtn.addEventListener("click", function nextTopic() {
  i++;
  searchResult.innerHTML = "";
  document.title = "| " + topicObj[i].title + " |";
  pages.innerHTML = topicObj[i].data;
  classCheck();
});

// Previous Button Listner
previousBtn.addEventListener("mouseenter", () => {
  previousBtn.classList.add("bg-primary");
  previousBtn.classList.add("text-white");
});
previousBtn.addEventListener("mouseleave", () => {
  previousBtn.classList.remove("bg-primary");
  previousBtn.classList.remove("text-white");
});
previousBtn.addEventListener("click", function previousTopic() {
  i--;
  searchResult.innerHTML = "";
  document.title = topicObj[i].title;
  pages.innerHTML = topicObj[i].data;
  classCheck();
});
