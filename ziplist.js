function zipList(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i]);
    result.push(array2[i]);
  }
  return result;
}
const list1 = ['a', 'b', 'c'];
const list2 = ['1', '2', '3'];
console.log(zipList(list1, list2));

function zipListTheSimpleWay(array1, array2) {
  // Flatten the array of pairs produced by _.zip()
  return _.flatten(_.zip(array1, array2));
}
console.log(zipListTheSimpleWay(list1, list2)); // Output: ['a',  1, 'b',  2, 'c',  3]
