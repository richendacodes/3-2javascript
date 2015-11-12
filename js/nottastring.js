function nottastring() {
  var animal = document.getElementById("animal").value;;

  console.log("animal is a ", typeof animal);

  if (typeof animal === 'string') {
    alert("That variable is a string");
  } else {
    alert("That variable is not a string")
  };

}