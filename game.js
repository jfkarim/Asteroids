(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.DIM_X = 1000;
    this.DIM_Y = 1000;
    this.ship = new Asteroids.Ship([500, 500], [0,0]);
    this.asteroids = [];
    this.addAsteroids(5);
    this.bullets = [];
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
    //console.log(this.ship);
    this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y); // ?
    this.ctx.drawImage(this.img, 0, 0, 1000, 1000);
    this.ship.draw(this.ctx);

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }

    for (i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw(this.ctx);
    }
  };

  Game.prototype.move = function() {
    this.ship.move();

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }

    for (i = 0; i < this.bullets.length; i++) {
      this.bullets[i].move();
    }
  };

  Game.prototype.step = function() {
    // console.log("here");
    //console.log(this.asteroids);
    this.move();
    this.draw();
    this.checkCollisions();
    this.checkBounds();
  };

  Game.prototype.isOutOfBounds = function(obj) {
    if (obj.pos[0] < 0 || obj.pos[1] < 0) {
      return true;
    }

    if (obj.pos[0] > this.DIM_X || obj.pos[1] > this.DIM_Y) {
      return true;
    }

    return false;
  };

  Game.prototype.checkBounds = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      if (this.isOutOfBounds(this.asteroids[i])) {
        this.asteroids[i].remove();
      }
    }

    for (var i = 0; i < this.bullets.length; i++) {
      if (this.isOutOfBounds(this.bullets[i])) {
        this.bullets[i].remove();
      }
    }

    if (this.isOutOfBounds(this.ship)) {
      this.ship.remove();
    }
  }

  Game.prototype.checkCollisions = function() {
    for (i = 0; i < this.asteroids.length; i++) {
      if (this.asteroids[i].isCollidedWith(this.ship)) {
        alert("Game Over!")
        this.stop();
        break;
      }
    }

    var indices = [];
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].hitAsteroids();
    }
  }

  Game.prototype.removeAsteroid = function(asteroid) {
    var index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
  }

  Game.prototype.removeBullet = function(bullet) {
    var index = this.bullets.indexOf(bullet);
    this.bullets.splice(index, 1);
  }

  Game.prototype.stop = function() {
    clearInterval(this.interId);
  }

  Game.prototype.start = function(canvasEl) {

    game = this;
    game.bindKeyHandlers();
    game.ctx = canvasEl.getContext("2d"); // was var before

    game.img = new Image();
    game.img.onload = function () {
      game.ctx.drawImage(game.img, 0, 0, 1000, 1000);
    };
    game.img.src = './pic1.jpg';

    this.interId = window.setInterval(function() {
      game.step();
    }, 30); // fps constant?
  };

  Game.prototype.bindKeyHandlers = function() {
    var that = this;
    key('a', function(){ that.ship.power([-5,0]); });
    key('d', function(){ that.ship.power([5,0]); });
    key('w', function(){ that.ship.power([0,-5]); });
    key('s', function(){ that.ship.power([0,5]); });

    key('f', function(){
      var bullet = that.ship.fireBullet(that);
      if (bullet) {
        that.bullets.push(bullet);
      }
    });
  }

})(this);

