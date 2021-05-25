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

//step 217
var p = 23;
document.write(p);

function letFunction() {
    let p = 30;
    document.getElementById("p").innerHTML = p;
}
document.write(p);

function varFunction() {
    var p = 80;
    document.getElementById("v").innerHTML = p;
}
document.write(p);

//step 220 return statement
function returnGreeting(name) {
    return "hello there " + name;
}
document.getElementById("return").innerHTML =
    returnGreeting("jenny");

//step 222

let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car").innerHTML = car.description();

//step 224 break
function breakOut() {
    content = "";
    for (x = 0; x < arr.length; x++) {
        if (x == 2) { break; }
        content += arr[x] + "<br>";
    }
    document.getElementById("breakOut").innerHTML = content;
}

//step 224 continue
function contOn() {
    content = "";
    for (x = 0; x < arr.length; x++) {
        if (x == 2) { continue; }
        content += arr[x] + "<br>";
    }
    document.getElementById("continueOn").innerHTML = content;
}