/*var submit = document.querySelector('#subM');
var textA = submit.querySelector("#mess");
submit.addEventListener("submit", function() {
  alert('Thanks for Submitting Your Message, We will reply as fast as possible');
  window.open("https://api.whatsapp.com/send/?phone=201062928325&text=" + (textA.value.replace(/\n/g, "%0A") || []));
})*/

$.ajax({
  url: "images/",
  success: function(data) {
    $(data).find("a:contains(.jpg)").each(function() {
      // will loop through 
      var images = $(this).attr("href");

      var spcL = $('<div class="socL">');
      var socIm = $('<img></img>');
      socIm.attr("src", images);
      socIm.appendTo(spcL);
      spcL.appendTo('.socI');
    })
  }
})