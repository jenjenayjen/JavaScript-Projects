//step 81 adds 2+2
function add() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;
}

//step 82 subtracts 5-2
function minus() {
    var sub = 5 - 2;
    document.getElementById("math").innerHTML = "5 - 2 = " + sub;
}

//step 84 multiplies 6 * 8
function multiply() {
    var mul = 6 * 8;
    document.getElementById("math").innerHTML = "6 x 8 = " + mul;
}

//step 84 divides 48 by 6
function divide() {
    var div = 48 / 6;
    document.getElementById("math").innerHTML = "48 / 6 = " + div;
}

//step 86 more math
function math() {
    var simmath = (1 + 5) * 7 / 2 - 8;
    document.getElementById("math").innerHTML = "(1 + 5) * 7 / 2 - 8 = " + simmath;
}

//step 88 get the remainder
function mod() {
    var simmath = 25 % 6;
    document.getElementById("math").innerHTML = "25 / 6 leaves a remainder of " + simmath;
}

//step 91 negative
function negate() {
    var neg = -10;
    document.getElementById("math").innerHTML = neg;
}

var x = 0; //declare global variable to be used in incre() and decre()
document.write("starting x is " + x); //prints out the starting x

//step 93 adds 1 to x
function incre() {
    x++;
    document.getElementById("math").innerHTML = "x + 1 = " + x;
}

//step 93 minus 1 from x
function decre() {
    x--;
    document.getElementById("math").innerHTML = "x - 1 = " + x;
}

//step 94 return a rounded random number
function rand() {
    window.alert(Math.round(Math.random() * 100));
}