//step 130
function rideFunction() {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}

//step 131
function ageFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age > 18) ? "You're old enough" : "You're too young";
    document.getElementById("vote").innerHTML = canVote + " to vote.";
}

//step 134 object constructor
function Vehicle(make, model, year, color) {
    this.VehicleMake = make;
    this.VehicleModel = model;
    this.VehicleYear = year;
    this.VehicleColor = color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function ErikFunction() {
    document.getElementById("keywordConstructors").innerHTML =
        "Erik drives a " + Erik.VehicleColor + "-colored " + Erik.VehicleModel + " manufactured in " + Erik.VehicleYear;
}

//step 136
function JackFunction() {
    document.getElementById("newThis").innerHTML =
        "Jack drives a " + Jack.VehicleColor + "-colored " + Jack.VehicleModel + " manufactured in " + Jack.VehicleYear;
}

//step 138 attempt to display reserved word as variable
//var new = 123;
//document.write(new); //fails to print out 123

//step 138 object constructor
function ARMY(name, age) {
    this.ARMYname = name;
    this.ARMYage = age;
}
var Jenny = new ARMY("Jenny", 26);
document.write(Jenny.ARMYname + " is now an ARMY, her age is " + Jenny.ARMYage);

//step 140 nested functions
function countFunction() {
    document.getElementById("counting").innerHTML = count();

    function count() {
        var start = 9;

        function plusOne() { start += 1; }
        plusOne();
        return start;
    }
}