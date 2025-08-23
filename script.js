let display = document.querySelector('#suar');
let coin = document.querySelector('.coin');
let button = document.querySelector('#button');

function random() {
  // Reset animation
  coin.classList.remove("flip");
  void coin.offsetWidth; // trick to re-trigger animation

  // Start flip animation
  coin.classList.add("flip");

  // Decide result after animation
  setTimeout(() => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    display.textContent = result;
    console.log(result);

    if (result === "Tails") {
      coin.style.backgroundImage = `url('tails.svg')`;
    } else {
      coin.style.backgroundImage = `url('heads.svg')`;
    }
  }, 1000); // match animation duration (1s)
}

button.addEventListener("click", random);
coin.addEventListener("click", random);


