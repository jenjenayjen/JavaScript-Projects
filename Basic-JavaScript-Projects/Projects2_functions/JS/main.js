//step 68 returns a string
function returnSth() {
    var str = "Hi Im a string.";
    var result = str.fontcolor("green");
    document.getElementById("say-sth").innerHTML = result;
}
//step 70 returns a concatenated string
function concat() {
    var sentence = "I am learning";
    sentence += " a lot from this course!";
    document.getElementById("concatenate").innerHTML = sentence;
}

//step 77 does not work mathematically,only concetenates what user inputed
function add() {
    var x = prompt("Please enter a number to add");
    var y = prompt("Please enter another number to add");
    var result = x + y;
    document.getElementById("add").innerHTML = result;
}

function additionFunction() {
    var addition = 2 + 2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition;
}