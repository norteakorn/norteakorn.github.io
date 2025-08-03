const cards = {
  1: {
    img: "images/Territorio 1.png",
    text: "Información del territorio 1"
  },
  2: {
    img: "images/Territorio 2.png",
    text: "Información del territorio 2"
  },
  3: {
    img: "images/Territorio 3.png",
    text: "Información del territorio 3"
  },
  4: {
    img: "images/Territorio 4.png",
    text: "Información del territorio 4"
  }
  // agregá más tarjetas acá
};

function createButtons() {
  const buttonsContainer = document.getElementById("buttons-container");
  buttonsContainer.innerHTML = ""; // limpia por si se llama otra vez

  for (const id in cards) {
    const btn = document.createElement("button");
    btn.textContent = id;
    btn.onclick = () => showCard(id);
    buttonsContainer.appendChild(btn);
  }
}

// Llamamos a createButtons para que aparezcan los botones al cargar la página
createButtons();

// Opcional: mostrar la primera tarjeta al cargar
showCard(1);

function showCard(id) {
  const container = document.getElementById("card-container");
  const cardData = cards[id];

  container.innerHTML = `
    <div class="card" onclick="this.classList.toggle('flipped')">
      <div class="card-inner">
        <div class="card-front">
          <img src="${cardData.img}" alt="Territorio ${id}" />
        </div>
        <div class="card-back">
          ${cardData.text}
        </div>
      </div>
    </div>
  `;
}

