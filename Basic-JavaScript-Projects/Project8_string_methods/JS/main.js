//step 158
function fullSent() {
    var p1 = "I have ";
    var p2 = "made this ";
    var p3 = "into a complete ";
    var p4 = "sentence.";
    var wholeSent = p1.concat(p2, p3, p4);
    document.getElementById("concat").innerHTML = wholeSent;
}
//step 160
function sliceMethod() {
    var sent = "All work and no play makes Johnny a dull boy.";
    var sect = sent.slice(27, 33);
    document.getElementById("slice").innerHTML = sect;
}

//step 162 uppercase method and search method
var sent = "All work and no play makes Johnny a dull boy.";

function upper() {
    var up = sent.toUpperCase();
    document.getElementById("upSent").innerHTML = up;
}

function search() {
    var searchFor = sent.search("Johnny");
    document.getElementById("searching").innerHTML = searchFor;
}

//step 163
function string() {
    var x = 182;
    document.getElementById("numToString").innerHTML = x.toString();
}

//step 165
function precise() {
    var x = 12.3454313653143452;
    document.getElementById("precision").innerHTML = x.toPrecision(5);
}

//step 167
var x = 23.12432;

function fix() {
    num = x.toFixed(3);
    document.getElementById("fixed").innerHTML = num;
}

function valueof() {
    val = sent.valueOf();
    document.getElementById("value").innerHTML = val;
}