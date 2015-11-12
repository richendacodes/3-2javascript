
function greaterthan() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
 
  if (firstNumber > secondNumber) {
    alert(firstNumber + " is greater");
  } else if (firstNumber < secondNumber) {
    alert(secondNumber + " is greater");
  } else if (firstNumber = secondNumber) {
    alert("Both are equal");
  };
}
