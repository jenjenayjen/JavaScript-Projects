//step 276
//function hello() {
//    alert("Hello World!");
//}

var hello;
//hello = () => {
//    alert("Hello World!");}

hello = () => alert("Hello World!");

//step 278
var num = [23, 73, 12, 8, 9, 34];
var canVote = num.some(vote);


function vote(value, index, array) {
    return value > 18;
}

function checkVote() {
    document.getElementById("test").innerHTML = "Some can vote is " + canVote;
}