var array = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = 0;
var pro = 1;
for (var i = 0; i < array.length; i++) {

    sum = array[i] + sum;
    pro = array[i] * pro;
}
console.log(sum);
console.log(pro);

