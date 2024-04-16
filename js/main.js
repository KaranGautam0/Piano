const checkbox = document.querySelector(".check-box");
const showBtn = document.querySelector(".checked");
const key = document.querySelectorAll(".key");

// check-box
checkbox.addEventListener("click", () => {
  showBtn.classList.toggle("checked-btn");
  key.forEach((err) => err.classList.toggle("disabled-keys"));
});

// Play function with key
function playsound_Kay(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function
  audio.currentTime = 0;
  audio.play();
}


// Play function with click
function playsound_click(e) {
  // Check if the clicked element has the "key" class
  if (!e.target.classList.contains("key")) return;

  // Find the audio element using data-key attribute
  const keyCode = e.target.dataset.key;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
    console.log("play");
  }
}

window.addEventListener("keydown",  playsound_Kay);
window.addEventListener("click", playsound_click);
 

