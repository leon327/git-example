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
 * @return {Error|number}
 */
exports.setA = function(a, moduleName) {
  abPairs[moduleName].a = a;
};


/**
 * Sets b variable value for module with provided name
 * @param {number} b
 * @param {string} moduleName
 * @return {Error|number}
 */
exports.setB = function(b, moduleName) {
  var toReturn;
  return toReturn;
};


/**
 * Calculates and returns sum
 * @param {string} moduleName
 * @return {Error|number}
 */
exports.calculate = function(moduleName) {
  if (!abPairs[moduleName]) {
    return new Error('there is no such module');
  } else {
    return abPairs[moduleName].b + abPairs[moduleName].a;
  }
};
