//step 38
alert("Hello, World via alert!");
//step 40
window.alert("Hello, world via window.alert!");
//step 42
document.write('Hello world via document.write!');
//step 46
var A = "This is a string from variable A.";
document.write(A);
//step 49
var B = "This ia variable B and print via window alert.";
window.alert(B);
//seems like all alerts happen before seeing website

//step 50-51
document.write("Lisa told Bart,\"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded.");
//if need to display \, use two \\

//step 53
document.write("Combining A+B" + A + B);

//step 55-56
var Family = "The Simpsons",
    Dad = "Homer",
    Mom = "Marge",
    Daughter = "Lisa",
    Son = "Bart";
document.write("Document.write is printing out the father of the family:" + Dad);

//step 57
var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write("Document.write is printing the blues" + blues);

//step 58 assign colors to all variables
A = A.fontcolor("yellow"); //giving A a font color of yellow
B = B.fontcolor("orange"); //giving B a font color of orange
Family = Family.fontcolor("brown"); //giving Family a font color of brown
Dad = Dad.fontcolor("darkblue"); //giving Dad a font color of dark blue
Mom = Mom.fontcolor("green"); //giving Mom a font color of green
Daughter = Daughter.fontcolor("red"); //giving Daughter a font color of red
Son = Son.fontcolor("aqua"); //giving Son a font color of aqua
document.write(A + B + Family + Dad + Mom + Daughter + Son); //printing out variables with their new color

//step 60
document.write(6 + 6); //adding expression 

//step 63 functions
function My_First_Function() { //start of function
    var str = "This text is green!"; //create a variable
    var result = str.fontcolor("green"); //giving the variable result the str in green while keeping str reg black
    document.getElementById("Green_Text").innerHTML = result; //returns result
}