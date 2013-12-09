/**
 * @author 0@39.yt (Yurij Mikhalevich)
 * @license MIT
 */

var stack = [];


/**
 * @param {*} element
 */
exports.push = function(element) {
  stack.push(element);
};


/**
 * @return {*}
 */
exports.pop = function() {
  return stack.pop();
};


/**
 * @return {boolean}
 */
exports.isEmpty = function() {
  return !stack.length;
};
