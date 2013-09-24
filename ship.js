(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function(pos, vel) {
    var RADIUS = 10;
    var COLOR = "green";
    var radius = RADIUS;
    var color = COLOR;

    // center of grid
    // var pos = [500, 500]; // do this in game

    Asteroids.MovingObject.call(this, pos, vel, radius, color);
  }
  Ship.inherits(Asteroids.MovingObject);


})(this);