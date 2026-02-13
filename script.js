const startStar = document.getElementById("startStar");
if (startStar) {
  startStar.addEventListener("click", () => {
    sessionStorage.setItem("fromClick", "yes");
    window.location.href = "message.html";
  });
}

function goBack() {
  window.location.href = "message.html";
}
