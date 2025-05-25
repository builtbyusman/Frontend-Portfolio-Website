
const menuDiv = document.querySelector(".sec").firstElementChild;
const cress = document.querySelector(".sec-sec").lastElementChild;
const menu = document.querySelector(".sec-sec").firstElementChild;
menu.addEventListener("click", () => {
  menuDiv.style.opacity = "1";
  menu.style.opacity = "0";
  cress.style.opacity = "1";
});
cress.addEventListener("click", () => {
  menuDiv.style.opacity = "0";
  menu.style.opacity = "1";
  cress.style.opacity = "0";
});


window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const usman = document.querySelector(".fir");
  const ancher = document.querySelectorAll(".ancher")
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    usman.style.color = "#5B3DB7";
    ancher.forEach(anchers => {
      anchers.style.color = "#5B3DB7";
    });
  } else {
    header.classList.remove('scrolled');
    usman.style.color = "#eaeaea";
    ancher.forEach(anchers => {
      anchers.style.color = "#eaeaea";
    });
  }
});

const cv = document.querySelector("#cv");
cv.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "cv/Muhammad usman.pdf";
  link.download = "cv-Muhammad usman";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


document.getElementById('view').addEventListener('click', function () {
  window.open('cv/Muhammad usman.pdf', '_blank');
});

const spotify = document.querySelector("#spotify");
const game = document.querySelector("#game");
const netflix = document.querySelector("#netflix");
const amazone = document.querySelector("#amazone");
const ultra = document.querySelector("#ultra");
const port = document.querySelector("#index");

spotify.addEventListener("click", () => {
  window.open("../Spotify/index.html", "_blank");
});
game.addEventListener("click", () => {
  window.open("../Tic-Tac-Tao/index.html", "_blank");
});
ultra.addEventListener("click", () => {
  window.open("../ex-6-7/index.html", "_blank");
});
amazone.addEventListener("click", () => {
  window.open("../Amzone Apna/index.html", "_blank");
});
netflix.addEventListener("click", () => {
  window.open("../Netflix S/index.htm", "_blank");
});
port.addEventListener("click", () => {
  window.open("index.html", "_blank");
});



const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((v) => {
      if (v !== video) {
        v.pause();
      }
    });
  });
});


function showOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';

  // Hide overlay after 3 seconds
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 500); // 3000ms = 3 seconds
}


