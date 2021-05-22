//step 108
document.write(typeof 5);

//step 110
function test() {
    document.getElementById("test").innerHTML = 0 / 0;
}

//not returning anything atm
function test_one() {
    document.getElementById("test").innerHTML = isNaN('this is a string');
}

//not returning anything atm
function test_two() {
    document.getElementById("test").innerHTML = isNaN('007');
}

//step 112 infinity
document.write(2E310);

//step 113 neg infinity
document.write(-3E310);

//step 116 boolean
document.write(116);
document.write(213 < 312);
document.write(432 > 764);

//step 118 console log
console.log(2 + 2);

//step 121 double equal
document.write(121);
document.write(1 == 1);
document.write(1 == 2);

//step 123 triple equal
document.write(123);
var j = 1;
var k = 1;
var l = "1";
var p = 2;
var o = "one;"
document.write(j === k);
document.write(j === l);
document.write(j === p);
document.write(j === o);

//step 125 logical operators
document.write(125);
document.write(5 > 2 && 10 > 4);
document.write(5 > 10 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);

//step 127 not operator
document.write(127);
document.write(!(20 > 10));
document.write(!(10 > 30));