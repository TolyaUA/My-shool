// const button = document.querySelectorAll(".tests");
// // console.log(button);

// button.forEach(function (button, index) {
//   button.addEventListener("click", function () {
//     // console.log("clicked" + " " + index);
//     button.innerHTML = "clicked" + " " + index++;
//   });
// });

// const divBlock = document.querySelector(".block");
// const divHover = document.querySelector(".hover");

// divBlock.addEventListener("mouseover", function () {
//   //   divHover.style.display = "block";
//   divHover.classList.add("d-block");
// });

// divBlock.addEventListener("mouseout", function () {
//   //   divHover.style.display = "none";
//   divHover.classList.remove("d-block");
// });

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const submit = document.querySelector("#submit");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const value1 = input1.value;
  const value2 = input2.value;

  if (value2.length < 6) {
    return console.log("password must be at least 6 characters");
  }

  console.log(value1, value2);
});
