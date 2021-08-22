/**
 * Get a random number that is >= `min` and < `max`.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values}
 * @param {number} min Expects an integer.
 * @param {number} max Expects an integer.
 * @returns {number}
 */
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = getRandomInt;
