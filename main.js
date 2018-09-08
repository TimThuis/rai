var valueLength;
// var codeToCrack = 821982411637;
var codeToCrack = 123456789012;
var inputFieldAssist = document.querySelector(".input-field-assist");
var inputField = document.querySelector(".code-input input");

var transistionTl = new TimelineMax({paused:true});

transistionTl.to(".page-two", 1, {top: 0})
.to(".main", 0, {overflow: "auto"});


function checkInputFieldValue(inputValue) {
  valueLength = inputValue.length;

  if (valueLength < 12) {
    setTextsFieldAssist("De code is te kort.");
  }
  else if (valueLength > 12) {
    setTextsFieldAssist("De code is te lang.");
  }
  else if (valueLength == 12) {
    if (inputValue == codeToCrack) {
      setTextsFieldAssist("De code is correct.");
      toPageTwo();
    }
    else {
      setTextsFieldAssist("De code is incorrect, probeer het nog eens.");
    }
  }
}

function setTextsFieldAssist(text) {
  inputFieldAssist.innerHTML = text;
}

function toPageTwo() {
    transistionTl.play();
}
