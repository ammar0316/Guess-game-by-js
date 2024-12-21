//guessGameZ
let count = 1;
let heart = ["❤", "❤", "❤"];
let h2 = document.getElementById("h2");
h2.innerHTML = "";
function display() {
  h2.innerHTML = heart.join("");
  h2.style.color = "red";
  h2.style.fontSize = "40px";
  h2.style.marginTop = "-10px";
}
function guessTheNumber() {
  let num = document.getElementById("num");
  let h3 = document.getElementById("h3");

  h3.innerHTML = "";

  if (num.value !== "") {
    if (count <= 3) {
      let rand = Math.random();
      rand = Math.floor(rand * 10);

      if (num.value == rand) {
        h3.innerHTML = "Wow! Congratulation you guess correct number.";
      } else {
        h3.innerHTML = "Try again for best approach";
      }
    } else {
      h3.innerText = "Game over";
      h3.style.color = "red";
    }
  } else {
    h3.innerHTML = `Please enter guess a number `;
  }

  count += 1;
  num.value = "";
}

function deleteBtn() {
  heart.shift();
  display();
}

display();
