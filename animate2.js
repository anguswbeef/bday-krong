const images = [
"assets/bread (1).svg",
"assets/bread (2).svg",
"assets/bread (3).svg"
];

let index = 0;
const character = document.getElementById("object1");

setInterval(() => {
index = (index + 1) % images.length;
character.src = images[index];
}, 700);
