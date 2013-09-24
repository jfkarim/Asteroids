Function.prototype.inherits = function(superclass) {
  function Surrogate() {};
  Surrogate.prototype = superclass.prototype;
  this.prototype = new Surrogate(); //this refers to function
};

function MovingObject(name) {
  this.name = name;
};

MovingObject.prototype.test = function() {
  console.log("test");
};



function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);
Asteroid.prototype.showName = function() {
  console.log(this.name);
};


// testAsteroid = new Asteroid();
// testAsteroid.name = "Theresa"
// testAsteroid.test();
// //console.log(typeof(testAsteroid));
// console.log(MovingObject.prototype)
// // testMo = new MovingObject("Moe");
// // testMo.showName();
//
// testAsteroid.showName();
//
//
// testShip = new Ship();
// testShip.name = "Ship";
// //testShip.showName();