let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let color1Text = document.querySelector("#color1_text");
let color2Text = document.querySelector("#color2_text");

color1.value = localStorage.getItem("color1") || "#f38f3d";
color2.value = localStorage.getItem("color2") || "#3df358";

let r = document.querySelector(":root");

r.style.setProperty("--theme-color1", color1.value);
r.style.setProperty("--theme-color2", color2.value);

color1Text.textContent = `Color 1: ${color1.value}`;
color2Text.textContent = `Color 2: ${color2.value}`;

color1.addEventListener("change", (e) => {
  r.style.setProperty("--theme-color1", e.target.value);
  localStorage.setItem("color1", e.target.value);
});

color2.addEventListener("change", (e) => {
  r.style.setProperty("--theme-color2", e.target.value);
  localStorage.setItem("color2", e.target.value);
});
