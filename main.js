var valueLength;
var codeToCrack = 123456789012;
var inputFieldAssist = document.querySelector(".code-input p");
var video = document.querySelector(".media video");



function checkInputFieldValue(inputValue) {
  valueLength = inputValue.length;

  if (valueLength < 12) {
    setTextsFieldAssist("You're code is to short");
  }
  else if (valueLength > 12) {
    setTextsFieldAssist("You're code is to long");
  }
  else if (valueLength == 12) {
    if (inputValue == codeToCrack) {
      setTextsFieldAssist("You've cracked the code! Congratz.");
      startVideo();
    }
    else {
      setTextsFieldAssist("You're code is incorrect, please try again");
    }
  }
}

function setTextsFieldAssist(text) {
  inputFieldAssist.innerHTML = text;
}

function startVideo() {
  video.play();
  
}
