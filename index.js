window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".Scircle div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#c13584",
    "#833ab4",
    "#c13584",
    "#833ab4",
    "tomato",
    "#5851db",
    "#fd1d1d",
    "tomato",
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = (index) => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
