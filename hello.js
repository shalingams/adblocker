$(document).ready(function(){
  setInterval(function() {
    homepage();
    removeIframes();
  }, 5000);
});


function homepage(){
  console.log("Started");
  $("#adde_modal-overlay").remove();
  $("#adde_modal-modal").remove();
  console.log("End");
}


function removeIframes() {
  console.log("IFRAME");
  var origin   = window.location.origin;
  $('iframe').each(function(index, frm) {
    if (undefined != frm.src && frm.src != '') {
      var parser = document.createElement('a');
      parser.href = frm.src;
      if (origin != parser.href){
        this.remove();
      }
      console.log(parser.hostname);
      console.log(origin);
    }
  });
}
