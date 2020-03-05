import assert from 'assert';

// Function 'log' that prints a message to the console
log = arg => {console.log(arg)};

log("Javascript in Action!");

// 1 - Basic Arithmetic functions

// Identity function: function that always returns the same value that was used as its argument



assert(identity(1) ==1);
log(identity(2));

// Function 'add' that adds two numbers is the total of those values combined

// Function 'sub' that substracts two numbers:

// Function 'mul' that multiplies two numbers:

// 2 - Working with functions and function composition

// Function 'identityf' of 'a' that returns a function identity of 'a'

// Function 'addf' of 'a' that returns a function of 'b' that adds 'a' and 'b'

// Function 'liftf' of a binary function that returns a function of 'a' 
// that returns a function of 'b' that executes the binary function on 'a' and 'b'

// Apply this lift function to existing functions such as 'add' and 'mul'

// Function 'curry' of a binary function and 'a' that returns a function of 'b'
// which executes the binary function

// Apply the curry function to existing functions such as 'add' and 'mul'

// Find three possible solutions to create a function that increments a number by one 
// by reusing the functions that already exists


// Use 'liftf' function to create a function 'inc' that increments a number by one

// Use the 'curry' function to create a function 'inc2' that increments a number by one

// Use the 'addf' function to create a function 'inc3' that increments a number by one

// Function 'twice' of a binary function that returns a function of 'a' that executes
// the binary function on 'a'

// Function 'double' of 'a' that returns the doubles of the value of 'a' by reusing existing functions

// Function 'square' of 'a' that returns the square of the values of 'a' by reusing existing functions

// Function 'reverse' of a binary function that returns a function of 'a' and 'b' and execute the 
// binary function on 'b' and 'a'

// Use 'reverse' with 'sub' function to reverse the result of a substraction

// Function 'composeu' of a unary function 'a' and unary function 'b' that return a function of 'c'
// which execute 'b' on the result of 'a' over 'c'

// Use 'composeu' to compute the square of the double of a number (e.g. (5) -> 100)

// Function 'composeb' of a binary function 'a' and binary function 'b' that returns a function of 'c', 'd', 'e'
// that executes 'b' over the result of 'a(c, d)' and 'e'

// Use 'composeb' to multiply the sum of 'a' and 'b' by 'c' (e.g. (2,3,7) -> 35)


// 3 - Closure in action

// Function 'once' that ensures that a binary function can only be executed once and return undefined otherwise

// Use 'once' function to ensures that a function can only perform an addition once

// Function 'fromTo' of 'a' and 'b' that returns a function that increments 'a' by 1 while 'a' < 'b' 
// when called and returns undefined otherwise

// Function 'elements' of an array 'args' and a function 'generator' that returns a function which 
// extract the element of 'args' at the index provided by the 'generator' function

// Use this function 'elements' to extract the elements of ['a', 'b', 'c', 'd', 'e'] from index '1' to '3'

// Function 'collect' of a function 'generator' and an array 'recipient' which returns a function 
// that pushes the number produced by the 'generator' function to the array 'recipient' when called
// and returns the number produced by the 'generator'

// Use this function 'collect' to collect all the numbers from 0 to 4 into a 'recipient' array

// 