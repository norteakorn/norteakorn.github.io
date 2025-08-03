function checkPassword() {
  const correctPassword = "korn"; // Cambiá esto por la contraseña que quieras
  const input = document.getElementById("password-input").value;

  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    createButtons();
    showCard(1);
  } else {
    document.getElementById("password-error").style.display = "block";
  }
}

const cards = {
  1: {
    img: "images/Territorio 1.png",
    text: "Información del territorio 1"
  },
  2: {
    img: "images/Territorio 2.png",
    text: `
  <h3>Territorio 4</h3>
  <p>Este territorio incluye varias regiones destacadas por su biodiversidad.</p>
  <ul>
    <li>Clima templado</li>
    <li>Presencia de ríos y montañas</li>
    <li>Culturas originarias</li>
  </ul>
`

  },
  3: {
    img: "images/Territorio 3.png",
    text: "Información del territorio 3"
  },
  4: {
    img: "images/Territorio 4.png",
    text: "Información del territorio 4"
  },
  5: {
    img: "images/Territorio 5.png",
    text: "Información del territorio 4"
  },
6: {
    img: "images/Territorio 6.png",
    text: "Información del territorio 4"
  },
7: {
    img: "images/Territorio 7.png",
    text: "Información del territorio 4"
  },
8: {
    img: "images/Territorio 8.png",
    text: "Información del territorio 4"
  },
9: {
    img: "images/Territorio 9.png",
    text: "Información del territorio 4"
  },
10: {
    img: "images/Territorio 10.png",
    text: "Información del territorio 4"
  },
11: {
    img: "images/Territorio 11.png",
    text: "Información del territorio 4"
  },
12: {
    img: "images/Territorio 12.png",
    text: "Información del territorio 4"
  },
13: {
    img: "images/Territorio 13.png",
    text: "Información del territorio 4"
  },
14: {
    img: "images/Territorio 14.png",
    text: "Información del territorio 4"
  },
15: {
    img: "images/Territorio 15.png",
    text: "Información del territorio 4"
  },
16: {
    img: "images/Territorio 16.png",
    text: "Información del territorio 4"
  },
17: {
    img: "images/Territorio 17.png",
    text: "Información del territorio 4"
  },
18: {
    img: "images/Territorio 18.png",
    text: "Información del territorio 4"
  },
19: {
    img: "images/Territorio 19.png",
    text: "Información del territorio 4"
  },
20: {
    img: "images/Territorio 20.png",
    text: "Información del territorio 4"
  },
21: {
    img: "images/Territorio 21.png",
    text: "Información del territorio 4"
  },
22: {
    img: "images/Territorio 22.png",
    text: "Información del territorio 4"
  },
23: {
    img: "images/Territorio 23.png",
    text: "Información del territorio 4"
  },
24: {
    img: "images/Territorio 24.png",
    text: "Información del territorio 4"
  },
25: {
    img: "images/Territorio 25.png",
    text: `
  <div style="text-align: left;">
    <strong>No visitar</strong><br><br>

    La Madrid 351<br>
    Diciembre 2015<br><br>

    La Madrid 365<br>
    Diciembre 2015
  </div>
`
  },
26: {
    img: "images/Territorio 26.png",
    text: "Información del territorio 4"
  },
27: {
    img: "images/Territorio 27.png",
    text: "Información del territorio 4"
  },
28: {
    img: "images/Territorio 28.png",
    text: "Información del territorio 4"
  },
29: {
    img: "images/Territorio 29.png",
    text: "Información del territorio 4"
  },
30: {
    img: "images/Territorio 30.png",
    text: "Información del territorio 4"
  },
31: {
    img: "images/Territorio 31.png",
    text: "Información del territorio 4"
  },
32: {
    img: "images/Territorio 32.png",
    text: "Información del territorio 4"
  },
33: {
    img: "images/Territorio 33.png",
    text: "Información del territorio 4"
  },
34: {
    img: "images/Territorio 34.png",
    text: "Información del territorio 4"
  },
35: {
    img: "images/Territorio 35.png",
    text: "Información del territorio 4"
  },
36: {
    img: "images/Territorio 36.png",
    text: "Información del territorio 4"
  },
37: {
    img: "images/Territorio 37.png",
    text: "Información del territorio 4"
  },
38: {
    img: "images/Territorio 38.png",
    text: "Información del territorio 4"
  },
39: {
    img: "images/Territorio 39.png",
    text: "Información del territorio 4"
  },
40: {
    img: "images/Territorio 40.png",
    text: "Información del territorio 4"
  },
41: {
    img: "images/Territorio 41.png",
    text: "Información del territorio 4"
  },
42: {
    img: "images/Territorio 42.png",
    text: "Información del territorio 4"
  },
43: {
    img: "images/Territorio 43.png",
    text: "Información del territorio 4"
  },
44: {
    img: "images/Territorio 44.png",
    text: "Información del territorio 4"
  },
45: {
    img: "images/Territorio 45.png",
    text: "Información del territorio 4"
  },
46: {
    img: "images/Territorio 4.png",
    text: "Información del territorio 4"
  },
47: {
  img: "images/Territorio 47.png",
  text: "Información del territorio 47"
},
48: {
  img: "images/Territorio 48.png",
  text: "Información del territorio 48"
},
49: {
  img: "images/Territorio 49.png",
  text: "Información del territorio 49"
},
50: {
  img: "images/Territorio 50.png",
  text: "Información del territorio 50"
},
51: {
  img: "images/Territorio 51.png",
  text: "Información del territorio 51"
},
52: {
  img: "images/Territorio 52.png",
  text: "Información del territorio 52"
},
53: {
  img: "images/Territorio 53.png",
  text: "Información del territorio 53"
},
54: {
  img: "images/Territorio 54 (RURAL).png",
  text: "Información del territorio 54"
},
55: {
  img: "images/Territorio 55 (RURAL).png",
  text: "Información del territorio 55"
},
56: {
  img: "images/Territorio 56 (RURAL).png",
  text: "Información del territorio 56"
},
57: {
  img: "images/Territorio 57 (RURAL).png",
  text: "Información del territorio 57"
},

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
//createButtons();

// Opcional: mostrar la primera tarjeta al cargar
//showCard(1);

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

