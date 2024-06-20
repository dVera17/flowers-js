
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


var lyricsData = [
  { text: "Valentina", time: 5 },
  { text: "O mas bien cachetitos", time: 10 },
  { text: "Se que hemos pasado por muchas etapas", time: 15 },
  { text: "Hemos vivido momentos hermosos", time: 20 },
  { text: "y otros no tanto", time: 25 },
  { text: "Pero quiero que sepas", time: 30 },
  { text: "que nunca, lee bien, NUNCA", time: 35 },
  { text: "voy a dejar de luchar por los dos", time: 40 },
  { text: "por ti", time: 45 },
  { text: "Te amo", time: 50 },
  { text: "Te amo de todas las formas posibles", time: 55 },
  { text: "Y siempre te amare", time: 60 },
  { text: "recuerda siempre eso", time: 65 },
  { text: "y si esto es de parte de Dios", time: 70 },
  { text: "Se nos va a dar", time: 75 },
  { text: "Te amo infinitamente", time: 80 },
  { text: "Y eres lo mejor que me ha pasado", time: 85 },
  { text: "Te amo", time: 90 }
];


function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);