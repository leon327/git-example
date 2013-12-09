/**
 * @author 0@39.yt (Yurij Mikhalevich)
 * @license MIT
 */


/**
 * @type {Object}
 */
var abPairs = {};


/**
 * Creates object, which stores a and b variable for module with provided name
 * @param {string} moduleName
 * @return {Error|object}
 */
exports.createABPair = function(moduleName) {
  var toReturn;
  if (typeof(moduleName) !== 'string' || abPairs[moduleName] !== undefined) {
    toReturn = new Error('module name should be string and should be not ' +
        'used before');
  } else {
    toReturn = abPairs[moduleName] = {};
  }
  return toReturn;
};


/**
 * Sets a variable value for module with provided name
 * @param {number} a
 * @param {string} moduleName
 */
exports.setA = function(a, moduleName) {
  abPairs[moduleName].a = a;
};


/**
 * Sets b variable value for module with provided name
 * @param {number} b
 * @param {string} moduleName
 */
exports.setB = function(b, moduleName) {
  abPairs[moduleName].b = b;
};


/**
 * Calculates and returns sum
 * @param {string} moduleName
 * @return {number}
 */
exports.calculate = function(moduleName) {
  return abPairs[moduleName].b + abPairs[moduleName].a;
};
