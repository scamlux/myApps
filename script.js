const input = document.querySelector("input");
const btn = document.querySelector("button");
const boilingBox = document.querySelector(".boiling");

btn.addEventListener("click", () => {
  let timer = input.value;
  if (!timer) {
    alert("Son kiriting");
  }
  if (timer == parseInt(timer)) {
    const bounce = document.createElement("p");
    bounce.innerText = timer;
    boilingBox.appendChild(bounce);
    setInterval(() => {
      bounce.innerText--;
      if (bounce.innerText == 0) {
        bounce.style.display = "none";
      }
      if (bounce.innerText == 5) {
        bounce.style.backgroundColor = "red";
      }
    }, 1000);
  }
  timer = "";
});
