//get html  element in
const circles = document.querySelectorAll(".circle");
const proggresBar = document.querySelector(".indicator");
const buttons = document.querySelectorAll(".btn");
const formtitle = document.getElementById("formtitle");
const forms = document.querySelectorAll(".form-step");
const stepTitletext = document.querySelectorAll(".steptText");

//get buutons  here and add event listener yo them
let currentStep = 1;

const updateStep = (e) => {
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  stepTitletext.forEach((element) => {
    const idInt = parseInt(element.id);
    if (currentStep === idInt) {
      formtitle.textContent = element.innerHTML;
    }
  });

  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });


  proggresBar.style.width = `${
    ((currentStep - 1) / (circles.length - 1)) * 100
  }%`;

  
  if (currentStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currentStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
  }
  forms.forEach((form, index) => {
    if (index + 1 === currentStep) {
      form.classList.add("form-active");
    } else {
      form.classList.remove("form-active");
    }
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", updateStep);
});
