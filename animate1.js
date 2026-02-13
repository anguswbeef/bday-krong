const images1 = [
  "assets/jiji (1).svg",
  "assets/jiji (2).svg",
  "assets/jiji (3).svg"
];

const images2 = [
  "assets/baymax (1).svg",
  "assets/baymax (2).svg",
  "assets/baymax (3).svg"
];

let index1 = 0;
let index2 = 0;
const character1 = document.getElementById("character1");
const character2 = document.getElementById("character2");

setInterval(() => {
  index1 = (index1 + 1) % images1.length;
  index2 = (index2 + 1) % images2.length;
  
  character1.src = images1[index1];
  character2.src = images2[index2];
}, 500);
