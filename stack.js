/**
 * @author mr.leon327@yandex.ru
 * @license MIT
 */

var stack = [];


/**
 * Adds element to stack
 * @param {*} element
 */
exports.push = function(element) {
  stack.push(element);
};


/**
 * Pops element from stack
 * @return {*}
 */
exports.pop = function() {
  return stack.pop();
};


/**
 * Checks for emptiness
 * @return {boolean}
 */
exports.isEmpty = function() {
  return !stack.length;
};
