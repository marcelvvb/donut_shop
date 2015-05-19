var TopPotDonuts = function(loc, minChr, maxChr, avgDpc) {
  this.loc = loc;
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

TopPotDonuts.prototype.render = function(locationName) {
    var th = document.createElement('th');
    var row = document.getElementById('dt');
    var thText = document.createTextNode(locationName);
    th.appendChild(thText);
    var total = 0;
  for (var j = 0; j <= 11; j++) {
    var cell = document.createElement('td');
    var cellText = document.createTextNode(this.donutsPerHour());
    total += cellText.innerHTML;
    cell.appendChild(cellText);
    row.appendChild(cell);
    }
}


var downtown = new TopPotDonuts ('dt',8, 43, 4.50);
var capitolHill = new TopPotDonuts ('ch',4, 37, 2.00);
var southLakeUnion = new TopPotDonuts ('slu',9, 23, 6.33);
var wedgewood = new TopPotDonuts ('wed',2, 28, 1.25);
var ballard = new TopPotDonuts ('bal',8, 58, 3.75);

downtown.render("Downtown");
capitolHill.render("Capitol Hill");
southLakeUnion.render("South Lake Union");
wedgewood.render("Wedgewood");
ballard.render("Ballard");

console.log(downtown.donutsPerDay());
console.log(capitolHill.donutsPerDay());
console.log(southLakeUnion.donutsPerDay());
console.log(wedgewood.donutsPerDay());
console.log(ballard.donutsPerDay());

// Will S., Nick K. and Michael T. helped me with my Code

