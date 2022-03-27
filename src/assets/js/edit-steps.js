export function progressSteps() {
  // console.log("run");
  const progressSteps = document.querySelector("#edit-progressSteps");
  const prev = document.querySelector("#edit-prevSteps");
  const next = document.querySelector("#edit-nextSteps");
  const circleStepss = document.querySelectorAll(".circleSteps");
  const circleStepsTxt = document.querySelectorAll(".circleStepsTxt");

  let currentActive = 1;

  next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circleStepss.length) {
      currentActive = circleStepss.length;
    }
    update();
    updateTxt();
  });

  prev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
      currentActive = 1;
    }

    update();
    updateTxt();
  });

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
    progressSteps.style.width =
      ((actives.length - 1) / (circleStepss.length - 1)) * 100 + "%";

    let progressLength = (document.querySelector(
      "#edit-progressStepsSpan"
    ).innerHTML =
      ((actives.length - 1) / (circleStepss.length - 1)) * 100 + "%");

    // console.log("progressLength", progressLength);

    if (currentActive == 1) {
      prev.disabled = true;
    } else if (currentActive == circleStepss.length) {
      next.disabled = true;
      document.querySelector(".title").style.display = "block";
    } else {
      prev.disabled = false;
      next.disabled = false;
      document.querySelector(".title").style.display = "none";
    }
  }
}
