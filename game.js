(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.DIM_X = 1000;
    this.DIM_Y = 1000;
    this.asteroids = [];
    this.addAsteroids(5);
  };

  Game.prototype.addAsteroids = function(numAsteroids) {
    for (var i = 0; i < numAsteroids; i++) {
      var newAst = Asteroids.Asteroid.randomAsteroid(this.DIM_X, this.DIM_Y);
      console.log(this.DIM_X);
      console.log(newAst);
      console.log(i);
      this.asteroids.push(newAst);
    }
  };

  Game.prototype.draw = function() {
    // console.log(typeof(this.ctx));
    this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y); // ?
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }
  };

  Game.prototype.move = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  };

  Game.prototype.step = function() {
    // console.log("here");
    //console.log(this.asteroids);
    this.move();
    this.draw();
  };

  Game.prototype.start = function(canvasEl) {
    game = this;
    game.ctx = canvasEl.getContext("2d"); // was var before
    window.setInterval(function() {
      game.step();
    }, 30); // fps constant?
  };

})(this);

