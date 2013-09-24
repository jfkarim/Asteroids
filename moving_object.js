(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  MovingObject.prototype.move = function() {
    this.pos[0] = (this.pos[0] + this.vel[0]);
    this.pos[1] = (this.pos[1] + this.vel[1]);
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.linewidth = 5;
    ctx.stroke();
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var thisX = this.pos[0];
    var thisY = this.pos[1];
    var otherX = otherObject.pos[0];
    var otherY = otherObject.pos[1];

    var dx = thisX - otherX;
    var dy = thisY - otherY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    combinedRadii = this.radius + otherObject.radius;
    return (combinedRadii > distance);
  }

})(this);