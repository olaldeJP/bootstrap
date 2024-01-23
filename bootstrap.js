$(document).ready(function () {
  $("#miCarrusel").carousel();
  setInterval(function () {
    $("#miCarrusel").carousel("next");
  }, 3000);
});
