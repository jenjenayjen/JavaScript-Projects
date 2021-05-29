//step 226 switch function
function biasFunction() {
    var biasOutput;
    var bias = document.getElementById("bias").value;
    var biasString = " is awesome~";
    switch (bias) {
        case "RM":
            biasOutput = "RM" + biasString;
            break;
        case "Jin":
            biasOutput = "Jin" + biasString;
            break;
        case "Suga":
            biasOutput = "Suga" + biasString;
            break;
        case "J-Hope":
            biasOutput = "J-Hope" + biasString;
            break;
        case "Jimin":
            biasOutput = "Jimin" + biasString;
            break;
        case "V":
            biasOutput = "V" + biasString;
            break;
        case "Jungkook":
            biasOutput = "Jungkook" + biasString;
            break;
        default:
            biasOutput = "Please enter the name as written above. Thank you."
    }
    document.getElementById("output").innerHTML = biasOutput;
}

//step 237 get element by class name
function textChange() {
    var A = document.getElementsByClassName("text");
    A[0].innerHTML = "I changed!";
}

//step 241 creates a purple gradient
var c = document.getElementById("canvasID");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 400, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);

//step 395 popup form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//step 399 auto slideshow
$("#slideshow>div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);

//step 424turning text red on double click
function turnRed() {
    document.getElementById("red").style.color = "red";
}