// Hero Calc

function heroCalc() {
  let distance = document.querySelector("#commute").value;
  let burn = document.querySelector("#burn");
  let extend = document.querySelector("#extend");
  let reduce = document.querySelector("#reduce");

  burn.textContent = Math.ceil((distance * 1600) / 1000) + "k";
  extend.textContent = Math.ceil((distance * 4)) + "hrs";
  reduce.textContent = Math.ceil((distance * 1060) / 100) + "kg"
}

// Share Button

var getWindowOptions = function() {
  var width = 500;
  var height = 350;
  var left = window.innerWidth / 2 - width / 2;
  var top = window.innerHeight / 2 - height / 2;

  return [
    "resizable,scrollbars,status",
    "height=" + height,
    "width=" + width,
    "left=" + left,
    "top=" + top
  ].join();
};
var twitterBtn = document.querySelector(".twitter-share");
var text = encodeURIComponent(
  "Hey everyone, come check out the Loop! It's amazing!"
);
var shareUrl =
  "https://twitter.com/intent/tweet?url=" + location.href + "&text=" + text;
twitterBtn.href = shareUrl; // 1

twitterBtn.addEventListener("click", function(e) {
  e.preventDefault();
  var win = window.open(shareUrl, "ShareOnTwitter", getWindowOptions());
  win.opener = null; // 2
});
var fbButton = document.querySelector(".facebook-share");
var url = window.location.href;

fbButton.addEventListener("click", function() {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + url,
    "facebook-share-dialog",
    getWindowOptions()
    // 'width=800,height=600,left=250,top=250'
  );
  return false;
});

// Weather Box

! function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'weatherwidget-io-js');