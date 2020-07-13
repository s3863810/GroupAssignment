function enterSite() {
  window.open("personalinformation.html", "_self");
}

function fadeInPage() {
  if (!window.AnimationEvent) { return; }
  var fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
  if (!window.AnimationEvent) { return; }
  var anchors = document.getElementsByTagName('a');  
  for (var idx=0; idx<anchors.length; idx+=1) {
    if (anchors[idx].hostname !== window.location.hostname || anchors[idx].pathname === window.location.pathname) { continue; }
    anchors[idx].addEventListener('click', function(event) {
      var fader = document.getElementById('fader'),
      anchor = event.currentTarget;
      var listener = function() {
        window.location = anchor.href;
        fader.removeEventListener('animationend', listener);
      };
      fader.addEventListener('animationend', listener);
      event.preventDefault();
      fader.classList.add('fade-in');
    });
  }
});

window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});

function readMoreFunctionBen() {
  var dots = document.getElementById("dotsBen");
  var moreText = document.getElementById("readMoreBen");
  var btnText = document.getElementById("readMoreButtonBen");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readMoreFunctionChris() {
  var dots = document.getElementById("dotsChris");
  var moreText = document.getElementById("readMoreChris");
  var btnText = document.getElementById("readMoreButtonChris");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readMoreFunctionJohn() {
  var dots = document.getElementById("dotsJohn");
  var moreText = document.getElementById("readMoreJohn");
  var btnText = document.getElementById("readMoreButtonJohn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readMoreFunctionRomaisa() {
  var dots = document.getElementById("dotsRomaisa");
  var moreText = document.getElementById("readMoreRomaisa");
  var btnText = document.getElementById("readMoreButtonRomaisa");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readMoreFunctionEleni() {
  var dots = document.getElementById("dotsEleni");
  var moreText = document.getElementById("readMoreEleni");
  var btnText = document.getElementById("readMoreButtonEleni");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
