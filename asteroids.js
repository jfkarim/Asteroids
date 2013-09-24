(function (root) {
  var inherits = require("./inherits.js");
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid.COLOR = "blue";
  var Asteroid.RADIUS = 20;

  var Asteroid = Asteroids.Asteroid = function (pos, vel) {
    radius = Asteroid.RADIUS;
    color = Asteroid.COLOR;
    MovingObject.call(this, pos, vel, radius, color);
  }
  Asteroid.inherits(MovingObject);

  var Asteroid.randomAsteroid = function(dimX, dimY) {
    var randX = Math.random() * dimX;
    var randY = Math.random() * dimY;
    var randPos = [randX, randY];

    var randVel = Math.random() * 100;

    return new Asteroid(randPos, randVel);
  }

})(this);