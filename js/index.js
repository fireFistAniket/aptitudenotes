import { topicObj } from "./topics.js";

//Grabbing DOM
let pages = document.getElementById("pages");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let btnNav = document.getElementById("btnNav");
let nxtBtn = document.getElementById("nxtBtn");
let previousBtn = document.getElementById("previousBtn");
let searchTxtArea = document.getElementById("searchTxtArea");
let searchResult = document.getElementById("searchResult");

//Initial Setup
let i = 0;
pages.innerHTML = topicObj[i].data;
document.title = "| " + topicObj[i].title + " |";
let titleList = new Array();
for (let index = 0; index < topicObj.length; index++) {
  titleList.push(topicObj[index].title);
}

// Enable & Disable system
btnNav.addEventListener("click", function classCheck() {
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
});

//Search Input System
searchTxtArea.addEventListener("input", () => {
  searchResult.innerHTML = "";
  Array.from(titleList).forEach(function (element) {
    if (element.includes(searchTxtArea.value.toUpperCase())) {
      if (element == topicObj[i].title) {
        searchResult.innerHTML += `<a href="#" class="list-group-item list-group-item-action active searchAnchor" aria-current="true">${element}</a>`;
      } else {
        searchResult.innerHTML += `<a href="#" class="list-group-item list-group-item-action searchAnchor" aria-current="true">${element}</a>`;
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
});
