function progressSteps() {
  const progressSteps = document.querySelector("#progressSteps");
  const prev = document.querySelector("#prevSteps");
  const next = document.querySelector("#nextSteps");
  const circleStepss = document.querySelectorAll(".circleSteps");
  const circleStepsTxt = document.querySelectorAll(".circleStepsTxt");

  let currentActive = 1;

  /*next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circleStepss.length) {
      currentActive = circleStepss.length;
    }
    update();
    updateTxt();
  });*/

  /*prev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
      currentActive = 1;
    }
    update();
    updateTxt();
  });*/

  function updateTxt() {
    circleStepsTxt.forEach((i, index) => {
      if (index < currentActive) {
        i.classList.add("activeStepsTxt");
      } else {
        i.classList.remove("activeStepsTxt");
      }
    });
  }

  function update() {
    circleStepss.forEach((i, index) => {
      if (index < currentActive) {
        i.classList.add("activeSteps");
      } else {
        i.classList.remove("activeSteps");
      }
    });

    const actives = document.querySelectorAll(".activeSteps");
    console.log(actives.length);
    console.log(circleStepss.length);
    progressSteps.style.width = ((actives.length - 1) / (circleStepss.length - 1)) * 100 + "%";

    (document.querySelector("#progressStepsSpan").innerHTML = ((actives.length - 1) / (circleStepss.length - 1)) * 100 + "%");

    if (currentActive == 1) {
      /*prev.disabled = true;*/
    } else if (currentActive == circleStepss.length) {
      /*next.disabled = true;*/
      document.querySelector(".title").style.display = "block";
    } else {
      /*prev.disabled = false;
      next.disabled = false;*/
      document.querySelector(".title").style.display = "none";
    }
  }
}
