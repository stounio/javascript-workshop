/*jshint esversion: 6 */
const assert = require('assert');

// Function 'log' that prints a message to the console
log = arg => {console.log(arg)};

log("Javascript in Action!");

// 1 - Basic Arithmetic functions

// Identity function: function that always returns the same value that was used as its argument
identity = (a) => a;


assert(identity(2) ==2);
log(identity(3));

// Function 'add' that adds two numbers is the total of those values combined

var add = (x, y) => {return x + y};
assert (add(4, 5) == 9);

// Function 'sub' that substracts two numbers:

var sub = (a,b) => {return a - b};
assert(sub(10, 4) == 6);
// Function 'mul' that multiplies two numbers:

var mul = (a, b) => {return a * b};

assert(mul(4, 3) == 12);

// 2 - Working with functions and function composition

// Function 'identityf' of 'a' that returns a function identity of 'a'
var identityf = (a) => () => identity(a);

var identityOne = identityf(1);
assert( identityOne() == 1);

// Function 'addf' of 'a' that returns a function of 'b' that adds 'a' and 'b'

var addf = (a) => (b) => add(a,b);

assert(addf(2)(3) == 5);

// Function 'liftf' of a binary function that returns a function of 'a' 
// that returns a function of 'b' that executes the binary function on 'a' and 'b'

var liftf = (f) => (a) => (b) => f(a, b);

var curryAdd = liftf(add);
assert(curryAdd(3)(4) == 7);

// Apply this lift function to existing functions such as 'add' and 'mul'

var curryMul = liftf(mul);
assert(curryMul(3)(4) == 12);


// Function 'curry' of a binary function and 'a' that returns a function of 'b'
// which executes the binary function on 'a' and 'b'

var curry = (f, a) => liftf(f)(a);

assert(curry(add, 5)(3) == 8);

// Apply the curry function to existing functions such as 'add' and 'mul'

curyMul2 = curry(mul, 2);

assert(curyMul2(4) == 8);

// Find three possible solutions to create a function that increments a number by one 
// by reusing the functions that already exists

// Use 'liftf' function to create a function 'inc' that increments a number by one

inc1 = liftf(add)(1);

assert(inc1(3) == 4);
// Use the 'curry' function to create a function 'inc2' that increments a number by one

inc2 = curry(add, 1);

assert(inc2(5) == 6);

// Use the 'addf' function to create a function 'inc3' that increments a number by one

inc3 = addf(1);

assert(inc3(4) == 5);

// Function 'twice' of a binary function that returns a function of 'a' that executes
// the binary function on 'a'

twice = (f) => (a) => f(a,a);

assert(twice(add)(3) == 6);

// Function 'double' of 'a' that returns the doubles of the value of 'a' by reusing existing functions

double = (a) => mul(a,2);

assert(double(8) == 16);

doubl2 = (a) => twice(add)(a);

assert(doubl2(2) == 4);

// Function 'square' of 'a' that returns the square of the values of 'a' by reusing existing functions

square = (a) => twice(mul)(a);

assert(square(3)==9);

// Function 'reverse' of a binary function that returns a function of 'a' and 'b' and execute the 
// binary function on 'b' and 'a'

reverse = (f) => (a,b) => f(b,a);

assert(reverse(sub)(4,3) == -1);

// Use 'reverse' with 'sub' function to reverse the result of a subtraction
reverseSub = reverse(sub);

assert(sub(6,4)== 2);
assert(reverseSub(6,4)== -2);


// Function 'composeu' of a unary function 'a' and unary function 'b' that return a function of 'c'
// which execute 'b' on the result of 'a' over 'c'

composeu = (a, b) => (c) => a(b(c));

// Use 'composeu' to compute the square of the double of a number (e.g. (5) -> 100)
assert(composeu(square, double)(2) == 16)


// Function 'composeb' of a binary function 'a' and binary function 'b' that returns a function of 'c', 'd', 'e'
// that executes 'b' over the result of 'a(c, d)' and 'e'

composeb = (f1, f2) => (a, b, c) => f2(f1(a, b), c);

// Use 'composeb' to multiply the sum of 'a' and 'b' by 'c' (e.g. (2,3,7) -> 35)
assert(composeb(add ,mul)(2,3,7) == 35);


// 3 - Closure in action

// Function 'once' that ensures that a binary function can only be executed once and return undefined otherwise
// function once(binaryFunction){
//     var called = false;
//     return function(a, b){
//         if(!called){
//             called = true;
//             return binaryFunction(a, b);

//         }
//         //return undefined; // This is the contract of a function
//     };
// }

once = (f) => {
    var counter = true;
    return (a, b) => {
        if (counter) {
            counter = false;
            return f(a,b);    
        }
    }
};

// Use 'once' function to ensures that a function can only perform a multiplication once
onceMul = once(mul);

assert(onceMul(2,2) == 4);
assert(onceMul(2,3) === undefined);


// Function 'fromTo' of 'a' and 'b' that returns a function that increments 'a' by 1 while 'a' < 'b' 
// when called and returns undefined otherwise



// Function 'elements' of an array 'args' and a function 'generator' that returns a function which 
// extract the element of 'args' at the index provided by the 'generator' function

// Use this function 'elements' to extract the elements of ['a', 'b', 'c', 'd', 'e'] from index '1' to '3'

// Function 'collect' of a function 'generator' and an array 'recipient' which returns a function 
// that pushes the number produced by the 'generator' function to the array 'recipient' when called
// and returns the number produced by the 'generator'

// Use this function 'collect' to collect all the numbers from 0 to 4 into a 'recipient' array

// Function 'filter' of a generator function and a predicate function that returns a function that returns
// The number produced by the generator only when it satisfy the predicate and undefined once there is no more
// numbers to generate

// Function 'fibonacci' of 'a' and 'b' that returns a function that returns the next number of the 
// fibonacci series when called

// Function 'counter' of 'a' being the starting index that returns an object with a function 'next' that 
// increments the index and a function 'prev' that decrements the index

// Function 'revocable' of a unary function 'a' that returns an object with a function 'invoke' of 'b' that
// applies the unary function 'a' on 'b' if defined and a 'revoke' function make the unary function undefined

// Apply the function revocable to the identity function and try invoking the identity function after it has been
// revoked

// Function 'liftg' of a binary function 'a' that returns a function that will apply the binary function 'a' as follow:
// liftg(mul)()); //undefined
// liftg(mul)(3)()); // 3
// liftg(mul)(3)(0)(4)()); // 0
// liftg(mul)(1)(2)(4)(8)()); // 64