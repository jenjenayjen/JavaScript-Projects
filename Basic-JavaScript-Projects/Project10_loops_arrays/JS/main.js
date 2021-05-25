//step 198-199
function callLoop() {
    var x = "",
        counter = 0;
    while (counter < 10) {
        x += "<br>" + counter;
        counter++;
    }
    document.getElementById("loop").innerHTML = x;
}

//declar global array and string
var arr = [1, 2, 3, 4, 5];
var str = "Hello there!";
//step 201
function strLength() {
    document.getElementById("strLength").innerHTML = str.length;
}
//step 202
var instr = ["guitar", "piano", "bass", "violin", "trumpet", "flute"];
var content = "";
var y;

function forLoop() {
    for (y = 0; y < instr.length; y++) {
        content += instr[y] + "<br>";
    }
    document.getElementById("listInstr").innerHTML = content;
}
//step 206
function catPic() {
    var catPicture = [];
    catPicture[0] = "sleeping";
    catPicture[1] = "playing";
    catPicture[2] = "eating";
    catPicture[3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " +
        catPicture[3] + ".";
}

//step 207
function arrFunction() {
    content = "";
    for (x = 0; x < arr.length; x++) {
        content += arr[x] + "<br>";
    }
    document.getElementById("arr").innerHTML = content;
}

//step 215
function constantFunction() {
    const Suga = { name: "Yoongi", year: "1994", gender: "male", role: "lead rapper" };
    Suga.year = "1993";
    document.getElementById("constant").innerHTML = "Suga was born in " + Suga.year + ".";
    Suga.name = "Min";
    document.getElementById("constant").innerHTML = "Suga's real name is " + Suga.name + ".";
    Suga.ethnicity = "korean";
    document.getElementById("constant").innerHTML = "Suga is " + Suga.ethnicity + ".";

}