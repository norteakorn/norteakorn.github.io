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
    text:  `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
  2: {
    img: "images/Territorio 2.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `

  },
  3: {
    img: "images/Territorio 3.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
  4: {
    img: "images/Territorio 4.png",
    text:`
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
  5: {
    img: "images/Territorio 5.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
6: {
    img: "images/Territorio 6.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
7: {
    img: "images/Territorio 7.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
8: {
    img: "images/Territorio 8.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
9: {
    img: "images/Territorio 9.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      Velez Sarfield 53<br>
      Diciembre 2015<br><br>
    </div>
  `
  },
10: {
    img: "images/Territorio 10.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      Velez Sarfield 53 <br>
      28-11-18<br><br>

      Ameghino 92 <br>
     29-11-18<br><br>

     Almirante Brown 73  <br>
     14-07-19<br><br>
    </div>
  `
  },
11: {
    img: "images/Territorio 11.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      San Martín 93  <br>
      Diciembre 2015<br><br>

      Bullrich 133  <br>
     Diciembre 2015

     El Salvador 969   <br>
     Diciembre 2024<br><br>
    </div>
  `
  },
12: {
    img: "images/Territorio 12.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      Libertad 277 <br>
      Diciembre 2015<br><br>

      Uruguay 762 <br>
      Enero 2015<br><br>
    </div>
  `
  },
13: {
    img: "images/Territorio 13.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      Esmeralda 76  <br>
      09-12-18<br><br>

      Esmeralda 62  <br>
      09-12-18<br><br>

      Suipacha 133<br>

      Esmeralda 74<br>
    </div>
  `
  },
14: {
    img: "images/Territorio 14.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
15: {
    img: "images/Territorio 15.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
16: {
    img: "images/Territorio 16.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
17: {
    img: "images/Territorio 17.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
18: {
    img: "images/Territorio 18.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
19: {
    img: "images/Territorio 19.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      Colón 982<br>

      Nicaragua 263<br>
    </div>
  `
  },
20: {
    img: "images/Territorio 20.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
21: {
    img: "images/Territorio 21.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
22: {
    img: "images/Territorio 22.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
23: {
    img: "images/Territorio 23.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
24: {
    img: "images/Territorio 24.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      Seguí 74<br>
      Febrero 2019<br>
      
    </div>
  `
  },
25: {
  img: "images/Territorio 25.png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
},

26: {
    img: "images/Territorio 26.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      Vidal 412<br>
    </div>
  `
  },
27: {
    img: "images/Territorio 27.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
28: {
    img: "images/Territorio 28.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
29: {
    img: "images/Territorio 29.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
30: {
    img: "images/Territorio 30.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
31: {
    img: "images/Territorio 31.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
32: {
    img: "images/Territorio 32.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
33: {
  img: "images/Territorio 33.png",
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

34: {
    img: "images/Territorio 34.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      Lavalle 111<br>
      Abril 2019<br>
      </div>
   ` 
  },
35: {
    img: "images/Territorio 35.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      Moreno 84<br>
      27-07-2018<br>
      </div>
   ` 
  },
36: {
    img: "images/Territorio 36.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      25 de Mayo 187<br>
      Diciembre 2015<br>
      </div>
   ` 
  },
37: {
    img: "images/Territorio 37.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
38: {
    img: "images/Territorio 38.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      America 149-159 <br>
      02-08-2018<br>

      Ruta 210 29.221 <br>
      </div>
   ` 
  },
39: {
    img: "images/Territorio 39.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
40: {
    img: "images/Territorio 40.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
41: {
    img: "images/Territorio 41.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
42: {
    img: "images/Territorio 42.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      Lorenzini 1346 <br>
      24-09-2019<br>
      </div>
   ` 
  },
43: {
    img: "images/Territorio 43.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
44: {
    img: "images/Territorio 44.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
45: {
    img: "images/Territorio 45.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
46: {
    img: "images/Territorio 46.png",
    text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
  },
47: {
  img: "images/Territorio 47.png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
},
48: {
  img: "images/Territorio 48.png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
},
49: {
  img: "images/Territorio 49.png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
},
50: {
  img: "images/Territorio 50.png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
},
51: {
  img: "images/Territorio 51.png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
},
52: {
  img: "images/Territorio 52.png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>

      Japón 2753 <br>
      Marzo 2019<br>
      </div>
   ` 
},
53: {
  img: "images/Territorio 53.png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
},
54: {
  img: "images/Territorio 54 (RURAL).png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
},
55: {
  img: "images/Territorio 55 (RURAL).png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
},
56: {
  img: "images/Territorio 56 (RURAL).png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
},
57: {
  img: "images/Territorio 57 (RURAL).png",
  text: `
    <div style="text-align: left;">
      <strong>No visitar</strong><br><br>
    </div>
  `
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

