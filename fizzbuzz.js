const FIZZ_NUMBER = process.env.FIZZ_NUMBER;

function fizzbuzz(FIZZ_NUMBER) {
    
  if (FIZZ_NUMBER < 0 || FIZZ_NUMBER > 20) {
    return console.log("I accept numbers from 1 to 20");

  } else if (FIZZ_NUMBER % 3 === 0 && FIZZ_NUMBER % 5 === 0) {
    return console.log("FizzBuzz");

  } else if (FIZZ_NUMBER % 3 === 0) {
    return console.log("Fizz");

  } else if (FIZZ_NUMBER % 5 === 0) {
    return console.log("Buzz");

  } else {
    return console.log(FIZZ_NUMBER);
  }
}

fizzbuzz(FIZZ_NUMBER);
