const btn = document.getElementById("btn");
const quadrado = document.getElementById("quadrado");

function animarQuadrado(propriedade, valor, aoTerminar) {
  quadrado.style[propriedade] = `${valor}`;

  setTimeout(() => {
    quadrado.style[propriedade] = "none";
  }, 300);

  setTimeout(aoTerminar, 700);
}

function clickBtn() {
  animarQuadrado("left", "100px", () => {
    alert("acabo");
  });
}

btn.addEventListener("click", clickBtn);
