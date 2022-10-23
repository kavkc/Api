const btnBackPosts = document.querySelector("#btn-back-posts");
const btnPlayAudio = document.querySelector("#btn-play-audio");
const btnPlay = document.querySelector("#play");
const btnPause = document.querySelector("#pause");
const btnStop = document.querySelector("#stop");

const audioContext = new AudioContext();
const audio = new Audio("./sample/sample.mp3");

// const audio = new Audio("https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg");
audio.crossOrigin = "anonymous";

const source = audioContext.createMediaElementSource(audio);
source.connect(audioContext.destination);



btnBackPosts.addEventListener("click", event => {
  window.location.href=("../page1/index.html");
});

btnPlay.addEventListener("click", () => {
  console.log("clicked play button");
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
    audio.play();
});

btnPause.addEventListener("click", () => {
  console.log("clicked pause button");
  audio.pause();
});

btnStop.addEventListener("click", () => {
  console.log("clicked stop button");
  audio.pause();
  audio.currentTime = 0;
});
