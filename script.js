const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");
const BgBtn = document.querySelector(".Bg");

const getRandomColor = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  console.log(randomHex);
  return `#${randomHex}`;
};

changeBg = false;
let gradient;

const generateGradient = (isRandom) => {
  if (isRandom) {
    // If isRandom is true, update the colors inputs value with random color
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }
  gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
  if (changeBg) {
    document.body.style.background = gradient;
  } else {
    document.body.style.background =
      "linear-gradient(to left top, #5665E9, #A271F8)";
  }
};

const backgroundchange = () => {
  changeBg = true;
  if (gradient) {
    document.body.style.background = gradient;
  }
};

const copyCode = () => {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "Code Copied";
  setTimeout(() => (copyBtn.innerText = "Copy Code"), 1600);
};

colorInputs.forEach((input) => {
  input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);
BgBtn.onclick = () => {
  backgroundchange();
};
