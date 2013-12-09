/**
 * @author 0@39.yt (Yurij Mikhalevich)
 * @license MIT
 */

var sum = require('./sum');

sum.createABPair('app');
sum.setA(0, 'app');
sum.setB(0, 'app');

for (var i = 0; i < 10; ++i) {
  console.log(i);
  if (i % 2) {
    sum.setA(i, 'app');
    console.log('Нечётное число');
  } else {
    sum.setB(i, 'app');
    console.log('Чётное число');
  }
  console.log('sum of previous two: ' + sum.calculate('app'));
}
