// 1

let exo1 = document.querySelector("h1");
exo1.addEventListener("click", () => {
  exo1.classList.add("text-blue");
});

// 2

let exo2 = document.querySelector("h3");
exo2.addEventListener("dblclick", () => {
  exo2.classList.add("text-error");
});

// 3

let exo3 = document.querySelector("p");
exo3.addEventListener("click", () => {
  exo3.classList.toggle("text-style");
});

// 4

let exo4 = document.getElementsByTagName("p")[1].children;
[...exo4].forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("bolder");
  });
});

// 5

let exo5 = document.getElementsByTagName("p")[2].children;
[...exo5].forEach((element) => {
  element.addEventListener("click", () => {
    [...exo5].forEach((e) => {
      e.classList.remove("bolder-red");
    });
    element.classList.add("bolder-red");
  });
});