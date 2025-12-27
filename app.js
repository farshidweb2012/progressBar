//get html  element in
const circles = document.querySelectorAll(".circle");
const proggresBar=document.querySelector('')
//get buutons  here and add event listener yo them

console.log(circles);

let currentStep = 1;

//add
const updateStep = (e) => {
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  circles.forEach((circle, index) => {
    circle.classList[`${(index, currentStep ? "add" : "remove")}`]("active");
  });

  proggresBar.styled.width=
};
