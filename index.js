// receives a callback function and calls it


function receivesAFunction(callback){
    callback ();
}

// returnsANamedFunction function should:

// take no arguments
// return a named function

function returnsANamedFunction() {
    return function namedFunction() {
      // Function body
    };
  }

//   returnsAnAnonymousFunction function should:

// take no arguments
// return an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
      // Function body
    };
  }