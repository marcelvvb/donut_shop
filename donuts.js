var TopPotDonuts = function(locationName, minChr, maxChr, avgDpc) {
  this.locationName = locationName;
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

TopPotDonuts.prototype.render = function() {
  var th = document.createElement('th');
  var bakedDonuts = document.getElementById('bakedDonuts');
  var row = document.createElement('tr');
  var thText = document.createTextNode(this.locationName);
  th.appendChild(thText);
  row.appendChild(th);
  bakedDonuts.appendChild(row);
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

  var locations = [];

  locations.push(new TopPotDonuts ("Downtown", 8, 43, 4.50));
  locations.push(new TopPotDonuts ("Capitol Hill", 4, 37, 2.00));
  locations.push(new TopPotDonuts ("South Lake Union", 9, 23, 6.33));
  locations.push(new TopPotDonuts ("Wedgewood", 2, 28, 1.25));
  locations.push(new TopPotDonuts ("Ballard", 8, 58, 3.75));

  for (var k = 0; k < locations.length; k++) {
    locations[k].render();
  }

  var newDonutShop = function() {
    var newLoc, minC, maxC, avgDon, brandNewLoc;

  newLoc = document.getElementById('location').value;
  minC = parseInt(document.getElementById('minCust').value);
  maxC = parseInt(document.getElementById('maxCust').value);
  avgDon = parseInt(document.getElementById('average').value);
  brandNewLoc = new TopPotDonuts(newLoc, minC, maxC, avgDon);
  locations.push(brandNewLoc);
  brandNewLoc.render();

  }
  document.getElementById('submit1').addEventListener('click', newDonutShop);

// Hana F., Will S., Nick K. and Michael T. assisted me with my Code.
