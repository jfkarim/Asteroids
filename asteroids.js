(function (root) {
  //var inherits = require("./inherits.js");
  var Asteroids = root.Asteroids = (root.Asteroids || {});


  //questino about where to define constants

  var Asteroid = Asteroids.Asteroid = function(pos, vel) {
    var COLOR = "blue";
    var RADIUS = 20;
    var radius = RADIUS;
    var color = COLOR;
    Asteroids.MovingObject.call(this, pos, vel, radius, color);
  }
  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function(dimX, dimY) {
    var randX = Math.random() * dimX;
    var randY = Math.random() * dimY;
    var randPos = [randX, randY];

    var randDX = Math.random() * 30 - 15;
    var randDY = Math.random() * 30 - 15;
    var randVel = [randDX, randDY];
    return new Asteroid(randPos, randVel);
  }

})(this);