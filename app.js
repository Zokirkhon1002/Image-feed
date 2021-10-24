const CONTAINER = document.querySelector(".container");
const URL = "https://source.unsplash.com/random/";
const row = 7;

for (let i = 0; i < row * 3; i++) {
  const IMG = document.createElement("img");
  IMG.src = `${URL}${getRandomSize()}`;
  CONTAINER.appendChild(IMG);
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}
