//step 144 global variables
var a = 100;
var b = 10;

function local() {
    var x = 100;
}

//document.write(x); //will return an error

//step 147
function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("greet").innerHTML = "How are you today?";
    } else {
        document.getElementById("greet").innerHTML = "How were you today?";
    }
}
//step 149
function good() {
    if (new Date().getHours() < 18) {
        document.getElementById("reply").innerHTML = "Awesome! Have a good day!";
    } else {
        document.getElementById("reply").innerHTML = "Good to hear! Have a good night!";
    }
}

function bad() {
    if (new Date().getHours() < 18) {
        document.getElementById("reply").innerHTML = "Cheer up! Take a day off! Go relax!";
    } else {
        document.getElementById("reply").innerHTML = "At least the day is over, turn in early tonight and start fresh tomorrow!";
    }
}

//step 150
function ageFunction() {
    age = document.getElementById("age").value;
    if (age >= 18) {
        vote = "You're old enough to vote!";
    } else {
        vote = "You're not old enough to vote!";
    }
    document.getElementById("howOldAreYou").innerHTML = vote;
}

//step 152
function getTime() {
    var times = new Date().getHours();
    var reply;
    console.log(times);
    if (times < 12 == times > 0) {
        reply = "Good morning sunshine!";
    } else if (times >= 12 == times < 18) {
        reply = "Hey there sunshine!";
    } else {
        reply = "Good evening!";
    }
    document.getElementById("time").innerHTML = reply;
}