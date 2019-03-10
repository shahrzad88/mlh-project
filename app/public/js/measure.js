$(document).ready(function() {
  const pageWidth = document.getElementById("line").style.width;
  document.getElementById("bottom").style.width = pageWidth - 20;
  var greenList = ['TD', 'Dell', 'Telus'];
  var redList = ['Nestle', 'Max Mara', 'Diesel'];
  var greenDiv = document.getElementById("greenCompanies");
  var redDiv = document.getElementById("nonGreenCompanies");
  /*
  var newP = document.createElement("p");
  newP.textContent = "Your top 3 green companies: "
  */
  greenList.forEach(function(green) {
    var newGreen = document.createElement("p");
    newGreen.textContent = green;
    greenDiv.appendChild(newGreen);
  });
  redList.forEach(function(red) {
    var newRed = document.createElement("p");
    newRed.textContent = red;
    redDiv.appendChild(newRed);
  });
});
