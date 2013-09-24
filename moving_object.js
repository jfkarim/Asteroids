(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  MovingObject.prototype.move = function() {
    //movement, update pos based on time and velocity
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = "black";
    ctx.beginPath();

    ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
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
    return (combinedRadii < distance);
  }

})(this);