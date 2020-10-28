let intViewportHeight = window.innerHeight;

document.getElementById("welcome").style.height = intViewportHeight + "px";

document.getElementById("about").style.top = intViewportHeight + "px";
document.getElementById("about").style.height = intViewportHeight + "px";

document.getElementById("contacts").style.top = intViewportHeight * 2 + "px";
document.getElementById("contacts").style.height = intViewportHeight + "px";

let professions = [", web developer", ", backend developer", ", frontend developer", ", fullstack developer", ", студент"]
var i = 1;

let timerId = setInterval(() => {
  document.getElementById("profession").innerText = professions[i];
  i++;
  if(i == professions.length) i = 0;
}, 2500);


function task1(arg) {
  return arg;
}

function task2(...args) {
  var summ = 0;
  for(let num of args) {
    summ += num;
  }
  return summ;
}

function task3(array) {
  for(let i in array) {
    if(typeof array[i] === 'number') {
      array[i] *= array[i];
    } else {
      array[i] = 0;
    }
  }
  return array;
}

console.log(task1("task1"));
console.log("task2: ", task2(1, 9, 10));
console.log("task3: ", task3([1, "d", 2, 3]));


var state = "white";
function changeColor() {
  if(state == "white") {
    document.getElementById("welcome").style.backgroundColor = "#000000";
    state = "black";
  } else if(state == "black") {
    document.getElementById("welcome").style.backgroundColor = "#ffffff";
    state = "white";
  }
}

function changeAvatar() {
  let url = document.createElement('a');
  url.href = document.getElementById("avatar").src;

  if(url.pathname == "/images/hero.png") document.getElementById("avatar").src = "/images/roy.png";
  if(url.pathname == "/images/roy.png") document.getElementById("avatar").src = "/images/touka.jpg";
  if(url.pathname == "/images/touka.jpg") document.getElementById("avatar").src = "/images/hero.png";
}
