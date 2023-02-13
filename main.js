const xhr = new XMLHttpRequest();
const url = "https://api.github.com/repos/wolvthemes/adhamwaleed.github.io/contents/images/"

xhr.open('GET', url, true);

xhr.onload = function() {
  const data = JSON.parse(this.response);
  for (var i = 0; i < data.length; i++) {

    var dat = data[i].path;
    var images = dat;
    console.log(images)
    if (images.includes(".mp4")) {
      var spcL = $('<div class="socL"><video controls></video></div>');
      var socIm = $('<source></source>');
      socIm.attr("src", "./" + images);
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
