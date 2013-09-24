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

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function(game) {
    // var vel = [this.vel[0] * 2, this.vel[1] * 2];

    //console.log(this.vel);
    var speed = Math.sqrt(this.vel[0] * this.vel[0] + this.vel[1] * this.vel[1]);
    if (speed === 0) {
      return null;
    }

    var dirX = this.vel[0] / speed;
    var dirY = this.vel[1] / speed;
    var vel = [dirX * 100, dirY * 100];
    var newPos = [this.pos[0], this.pos[1]];

    var bullet = new Asteroids.Bullet(newPos, vel, game);
    //console.log(this.vel);
    return bullet;
  }

  Ship.prototype.remove = function() {
    this.pos[0] = (this.pos[0] + 1000) % 1000;
    this.pos[1] = (this.pos[1] + 1000) % 1000;
  }


})(this);