//step 243 w3schools form validation
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Please enter your name");
        return false;
    }
}