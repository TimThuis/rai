var valueLength;
var codeToCrack = 123456789012;
var inputFieldAssist = document.querySelector(".input-field-assist");
var video = document.querySelector("#media video");

var videoTl = new TimelineMax({paused:true});

// videoTl.to("#media", {opacity: 0.5}, 1);

videoTl.to("#media", 0, {display: "flex"})
.to("#media", 1, {opacity: 1}, "+=0.5"
).addCallback(function(){
  video.play();
});


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
      setTextsFieldAssist("De code is gekraakt, gefeliciteerd!");
      startVideo();
    }
    else {
      setTextsFieldAssist("De code is incorrect, probeer het nog eens.");
    }
  }
}

function setTextsFieldAssist(text) {
  inputFieldAssist.innerHTML = text;
}

function startVideo() {
    videoTl.play();
}
