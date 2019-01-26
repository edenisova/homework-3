//1 задание
function printWindowValues() {
  for (let i in window) {
    console.log(i);
  }
}

printWindowValues();

//2 задание
function expTen(x) {
  var res = x;
  for (var i = 2; i <= 10; i++) {
    res *= x;
  }
  return res;
}

console.log(expTen(4));

//3 задание
function getFuncRes(func, arg) {
  return func(arg);
}

getFuncRes(console.log, "Hello World");
