const checkbox = document.querySelector(".check-box");
const showBtn = document.querySelector(".checked");
const key = document.querySelectorAll(".key");

// check-box
checkbox.addEventListener("click", () => {
  showBtn.classList.toggle("checked-btn");
  key.forEach((err) => err.classList.toggle("disabled-keys"));
});

// Play function
function playsound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener("keydown", playsound);


// error inside the code
/**
function playsoundClick () {
  let audios = document.querySelectorAll("audio");

  // Iterate over each audio element and play it
  audios.forEach((audio) => {
    audio.currentTime = 0;
    audio.play();
    console.log(audio);
  });
}

window.addEventListener("click",playsoundClick);
 */
