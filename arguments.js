var sum = function() {
  var args = Array.prototype.slice.call(arguments);
  var sum = 1;

  for (var i = 0; i < args.length; i++) {
    sum *= args[i];
  }

  return sum;
};

// test = sum(1,2,3,4);
// console.log(test);

Function.prototype.myBind = function(obj) {
  var args = Array.prototype.slice.call(arguments);
  var that = this;
  var obj;
  var args = args.slice(1);

  return function() {
    that.apply(obj, args);
  }
};

// obj = {
//   name: "hi",
//
//   sum: function() {
//     console.log(this.name);
//     var sum = 0;
//
//     for (var i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//
//     console.log(sum);
//   }
// };
//
// var myBoundFunction = obj.sum.myBind(obj, 1, 2);
//
// (myBoundFunction());

var curriedSum = function(numArgs) {
  var numbers = [];
  var sum = 0

  var _curriedSum = function(number) {
    numbers.push(number);

    if (numbers.length === numArgs) {
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum; // can we access sum?
    } else {
      return _curriedSum;
    }

  }

  return _curriedSum;
}

// var func = curriedSum(4);
// var test = func(5)(30)(20)(1)
// console.log(test);


Function.prototype.curry = function(numArgs) {
  var that = this;
  var numbers = [];
  var obj;

  var _curried = function(number) {
    numbers.push(number);

    if (numbers.length === numArgs) {
      return that.apply(obj, numbers);
    } else {
      return _curried;
    }
  }

  return _curried;
}

// var func = sum.curry(4);
// var test = func(5)(30)(20)(1)
// console.log(test);
