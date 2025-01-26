let number = document.getElementsByClassName("number");
let between = document.getElementsByClassName("between");
let check = document.querySelector(".check");
let message = document.querySelector(".message");
//RANDOM NUMBER
number_one = Math.floor(Math.random() * 20 + 1);

//INPUT
check.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (number_one === guess) {
    document.querySelector("body").style.backgroundColor = "green";
    message.textContent = "congratulations";
    document.querySelector(".number").innerHTML = number_one;
    number.textContent = number_one;
  } else if (guess > number_one) {
    message.textContent = "Too high";
  } else {
    message.textContent = "Too low";
  }
});
