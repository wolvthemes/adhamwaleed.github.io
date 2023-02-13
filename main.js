const xhr = new XMLHttpRequest();
const url = "https://api.github.com/repos/wolvthemes/adhamwaleed.github.io/contents/images/"

xhr.open('GET', url, true);

xhr.onload = function() {
  const data = JSON.parse(this.response);
  for (var i = 0; i < data.length; i++) {

    var dat = data[i].path;
    var images = dat;
    if (images.includes(".mp4")) {
      var wid = spcL.innerHeight();
      var hit = spcL.innerWidth();
      var spcL = $('<div class="socL vid"></div>');
      var socIm = $('<video controls></video>');
      var socVd = $('<source></source>');
      socIm.attr("src", "./" + images);
      socIm.attr("height", "100%");
      socIm.attr("width", "100%");
    } else {
      var spcL = $('<div class="socL">');
      var socIm = $('<img></img>');
      socIm.attr("src", "./" + images);
    }

    socIm.appendTo(spcL);
    spcL.appendTo('.socI');
  }
};

xhr.send();
