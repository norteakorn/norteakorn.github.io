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
    img: "images/Territorio3.png",
    text: "Información del territorio 3"
  }
};

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
