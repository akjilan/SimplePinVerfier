// const pinGenerator = () => {
//   const newPin = Math.round(Math.random() * 10000);
//   if (newPin >=1000 && newPin !==undefined) {
//     // console.log(newPin);
//     return newPin;
//   } else {
//     pinGenerator();
//   }
// };
const pinGenerator = () => {
  const newPin = Math.round(Math.random() * 10000);
  newPinString = newPin + "";
  if (newPinString.length == 4 && newPinString != undefined) {
    return parseInt(newPinString);
  } else {
    return pinGenerator(); // Add the return statement here
  }
};

//setting random pin in input:

document
  .getElementById("generatePinButton")
  .addEventListener("click", function () {
    let randomPin = pinGenerator();
    let inputId = document.getElementById("pinInputId");
    inputId.value = randomPin;
  });

//calculator section:
document
  .getElementById("calculator-body")
  .addEventListener("click", function (event) {
    let singleDigitString = event.target.innerText;
    const upperInputId = document.getElementById("calculator-upper-input");

    if (isNaN(singleDigitString)) {
      if (singleDigitString === "C") {
        upperInputId.value = "";
      } else if (singleDigitString === "<") {
        let prevCalcString = upperInputId.value;
        let digits = prevCalcString.split("");
        digits.pop();
        let reimainigDigits = digits.join("");
        upperInputId.value = reimainigDigits;
      }
    } else {
      let prevInputString = upperInputId.value;
      let prevInput = prevInputString;
      let newInput = singleDigitString;
      let totalInput = prevInput + newInput;
      upperInputId.value = totalInput;
    }
  });

document
  .getElementById("submitButtonId")
  .addEventListener("click", function () {
    let updatedInput = document.getElementById("calculator-upper-input");
    let inputId = document.getElementById("pinInputId");
    const notifyAlert1 = document.getElementById("notifyHasMatched");
    const notifyAlert2 = document.getElementById("notifyNotMatched");
    if (updatedInput.value == inputId.value) {
      notifyAlert1.style.display = "block";
      notifyAlert2.style.display = "none";
    } else {
      notifyAlert2.style.display = "block";
      notifyAlert1.style.display = "none";
    }
  });
