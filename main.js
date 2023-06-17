import "./styles/global/index.scss";
import "./styles/markup/index.scss";
const spanHex = document.getElementById("hex");
const spanRGB = document.getElementById("rgb");
const changeColor = document.querySelector(".wrapper__color");

const randomHEX = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase()
  );
};

const changeHexRgb = () => {
  spanHex.innerHTML = randomHEX();
  const r = parseInt(spanHex.innerHTML.slice(1, 3), 16);
  const g = parseInt(spanHex.innerHTML.slice(3, 5), 16);
  const b = parseInt(spanHex.innerHTML.slice(5, 7), 16);

  spanRGB.innerHTML = `rgb (${r},${g},${b})`;
  changeColor.style.backgroundColor = spanHex.innerHTML;
  return spanHex.innerHTML;
};

changeHexRgb();

changeColor.addEventListener("click", (event) => {
  changeHexRgb();
});

const changeColorButton = document.getElementById("change-color");

changeColorButton.addEventListener("click", (event) => {
  changeHexRgb();
});

const copyImg = document.querySelectorAll("#copy-hex-color,#copy-rgb-color");
const arrCopy = Array.prototype.slice.call(copyImg);

arrCopy.forEach((item) =>
  item.addEventListener("click", (event) => {
    let content;
    if (item.id == "copy-hex-color") {
      content = document.getElementById("hex").textContent;
    } else {
      content = document.getElementById("rgb").textContent;
    }

    return navigator.clipboard.writeText(content);
  })
);
