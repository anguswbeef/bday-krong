const images1 = [
  "assets/bread (1).svg",
  "assets/bread (2).svg",
  "assets/bread (4).svg"
];

const images2 = [
  "assets/gus n kris (1).svg",
  "assets/gus n kris (2).svg",
  "assets/gus n kris (3).svg"
];

let index1 = 0;
let index2 = 0;
const character1 = document.getElementById("object2");
const character2 = document.getElementById("object3");

setInterval(() => {
  index1 = (index1 + 1) % images1.length;
  index2 = (index2 + 1) % images2.length;
  
  character1.src = images1[index1];
  character2.src = images2[index2];
}, 700);
