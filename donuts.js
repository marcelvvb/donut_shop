var TopPotDonuts = function(minChr, maxChr, avgDpc) {
  this.minChr = minChr;
  this.maxChr = maxChr;
  this.avgDpc = avgDpc;
}

TopPotDonuts.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random () * (max - min + 1)) + min;
}

TopPotDonuts.prototype.donutsPerHour = function() {
  var customers = this.generateRandom(this.minChr, this.maxChr);
  return Math.floor(customers * this.avgDpc);
}

TopPotDonuts.prototype.donutsPerDay = function() {
  var open = 7;
  var close = 6 + 12;
  var total = 0;

  for (var i = 0; i < (close - open); i++) {
    total += this.donutsPerHour();
  }
  return total;
}

TopPotDonuts.prototype.render = function(locationName, id) {
  var th = document.createElement('th');
  var row = document.getElementById(id);
  var thText = document.createTextNode(locationName);
  th.appendChild(thText);
  var total = 0;
  for (var j = 0; j <= 11; j++) {
    var cell = document.createElement('td');
    var donutsPerHour = this.donutsPerHour();
    var cellText = document.createTextNode(donutsPerHour);
    total += donutsPerHour;
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  cell = document.createElement('td');
  cellText = document.createTextNode(total);
  cell.appendChild(cellText);
  row.appendChild(cell);
}

var downtown = new TopPotDonuts (8, 43, 4.50);
var capitolHill = new TopPotDonuts (4, 37, 2.00);
var southLakeUnion = new TopPotDonuts (9, 23, 6.33);
var wedgewood = new TopPotDonuts (2, 28, 1.25);
var ballard = new TopPotDonuts (8, 58, 3.75);

downtown.render("Downtown", "dt");
capitolHill.render("Capitol Hill", "ch");
southLakeUnion.render("South Lake Union", "slu");
wedgewood.render("Wedgewood", "wed");
ballard.render("Ballard", "bal");

// Hana F., Will S., Nick K. and Michael T. assisted me with my Code.
