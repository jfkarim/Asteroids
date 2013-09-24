(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.DIM_X = 1000;
    this.DIM_Y = 1000;
    this.ship = new Asteroids.Ship([500, 500], [0,0]);
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
    console.log(this.ship);
    this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y); // ?
    this.ship.draw(this.ctx);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }
  };

  Game.prototype.move = function() {
    this.ship.move();
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  };

  Game.prototype.step = function() {
    // console.log("here");
    //console.log(this.asteroids);
    this.move();
    this.draw();
    this.checkCollisions();
  };

  Game.prototype.checkCollisions = function() {
    for (i = 0; i < this.asteroids.length; i++) {
      if (this.asteroids[i].isCollidedWith(this.ship)) {
        alert("Game Over!")
        this.stop();
        break;
      }
    }
  }

  Game.prototype.stop = function() {
    clearInterval(this.interId);
  }

  Game.prototype.start = function(canvasEl) {
    game = this;
    game.bindKeyHandlers();
    game.ctx = canvasEl.getContext("2d"); // was var before
    this.interId = window.setInterval(function() {
      game.step();
    }, 30); // fps constant?
  };

  Game.prototype.bindKeyHandlers = function() {
    var that = this;
    key('a', function(){ that.ship.power([-10,0]); });
    key('d', function(){ that.ship.power([10,0]); });
    key('w', function(){ that.ship.power([0,-10]); });
    key('s', function(){ that.ship.power([0,10]); });
  }

})(this);

