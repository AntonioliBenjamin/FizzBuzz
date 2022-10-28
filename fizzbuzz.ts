//Je n'ai pas typé le FIZZ_NUMBER car j'ajoute un "+" devant mon process.env. ce qui en soit lui donne déjà un type number. || bonne ou mauvaise pratique ?
const FIZZ_NUMBER = +process.env.FIZZ_NUMBER;

function fizzbuzz(FIZZ_NUMBER: number): string {

  if (FIZZ_NUMBER < 1 || FIZZ_NUMBER > 20) {
    return "I accept numbers from 1 to 20";

  } else if (FIZZ_NUMBER % 3 === 0 && FIZZ_NUMBER % 5 === 0) {
    return "FizzBuzz";

  } else if (FIZZ_NUMBER % 3 === 0) {
    return "Fizz";

  } else if (FIZZ_NUMBER % 5 === 0) {
    return "Buzz";

  } else {
    return `${FIZZ_NUMBER}`;
  }
}

fizzbuzz(FIZZ_NUMBER);
