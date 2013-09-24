(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  console.log("Entered bullet.js");

  var Bullet = Asteroids.Bullet = function(pos, vel, game) {
    var RADIUS = 2;
    var COLOR = "red";

    this.game = game
    var radius = RADIUS;
    var color = COLOR;

    Asteroids.MovingObject.call(this, pos, vel, radius, color);
  };
  Bullet.inherits(Asteroids.MovingObject);

  Bullet.prototype.hitAsteroids = function() {
    for (var i = 0; i < this.game.asteroids.length; i++) {
      if (this.game.asteroids[i].isCollidedWith(this)) {
        this.game.removeAsteroid(this.game.asteroids[i]);
        this.game.removeBullet(this);
      }
    }
  };

})(this);