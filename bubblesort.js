module.exports = function(arr) {
  console.log(arr);

var sorted = false;
var temp = null;

for (var i= 0; i < arr.length ; i++){
//   if (typeof arr[i] !== "number") {
//     arr.toString(arr[i]);
//   }
    sorted = true;

  if (arr[i] > arr[i+1]) {
    temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
    sorted = false;
  }
}
  console.log(arr);
  return arr;
};
