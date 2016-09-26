var output = document.getElementById("output");
var submitBtn = document.getElementById("submitBtn");
var newItem = document.getElementById("newItem");
output.innerHTML = "empty";

// initialize the array to empty
var myArray = [];

submitBtn.onclick = function(event){
  // event.preventDefault is necessary to prevent the form from submitting to the page and thereby reloading it
  event.preventDefault();

  // note you can also use "unshift" instead of push
  // usually we want things added to the end of our list
  myArray.push(newItem.value);

  // clear output
  output.innerHTML = "";

  // forEach will run through each element in the array
  // the "function" here is an anonymous function, a very common structure that we will cover probably next week
  myArray.forEach(function(item){
    output.innerHTML += item + "<br/>";
  });
  // this comment is an example of the above code in es6 format
  //myArray.forEach(item => output.innerHTML += item + "<br/>");

  // this will reset the input
  newItem.value = "";
};
