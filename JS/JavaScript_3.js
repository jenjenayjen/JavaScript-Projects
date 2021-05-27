//step 256
function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is " + character.innerHTML + "'s real name!");
}