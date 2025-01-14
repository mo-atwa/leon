
let protoTwo = document.querySelectorAll(".col.hidden");
let showProtoTwo = document.querySelector(".button");
let test = document.getElementsByClassName("links")[0];

test.addEventListener("click", function (event) {
  if (test.className === "links display") {
    test.className = "links play";
    event.stopPropagation();
  } else {
    test.className = "links display";
  }
});
document.addEventListener("click", function (event) {
  if (test.className === "links play") {
    test.className = "links display";
  } else null;
  event.stopPropagation();
});
showProtoTwo.addEventListener("click", function (event) {
  protoTwo.forEach(function (element) {
    if (element.className === "col hidden") {
      element.className = "col";
      showProtoTwo.innerHTML = "Show Me Less";
    } else {
      element.className = "col hidden";
      showProtoTwo.innerHTML = "Show Me More";
    }
  });
  event.stopPropagation();
});
