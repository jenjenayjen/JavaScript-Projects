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