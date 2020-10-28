let intViewportHeight = window.innerHeight;

document.getElementById("about").style.top = intViewportHeight + "px";
document.getElementById("about").style.height = intViewportHeight + "px";

document.getElementById("contacts").style.top = intViewportHeight * 2 + "px";
document.getElementById("contacts").style.height = intViewportHeight + "px";

function task1(arg) {
  return arg;
}

function task2(...args) {
  var summ = 0;
  for(num of args) {
    summ += num;
  }
  return summ;
}

function task3(array) {
  for(i in array) {
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
