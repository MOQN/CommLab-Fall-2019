// declare and initialize our list just like any other variable
let helloList = [
  "Hello",
  "Namaste",
  "Hola",
  "Bonjour",
  "Hej",
  "Ahoj",
  "Xin chao",
  "Jambo",
  "Zdravstvuyte",
  "Ni hao"
];

// declare and initialize our counter
let counter = 0;

// this is the function that swaps out text
function rotate() {
  // display the text in the index currently called by the counter
  document.getElementById("helloText").innerHTML = helloList[counter];

  // if the counter is greater than the number of things in the array, reset to 0, otherwise add 1
  if (counter >= helloList.length - 1) {
    counter = 0;
  } else {
    counter = counter + 1;
  }
}

//function to remove the last element of the list
function removeFromList() {
  let removedText = helloList[helloList.length - 1];
  document.getElementById("removed").innerHTML =
    "<em>" + removedText + " was removed.</em>";
  helloList.splice(helloList.length - 1, 1);
}
