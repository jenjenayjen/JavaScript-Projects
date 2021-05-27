//step 279

//this var keeps track of whose turn it is
let activePlayer = "X";
//this array stores an array of moves, use to determine win conditions
let selectedSquares = [];

//function is for placing an x or o in a square
function placeXorO(squareNumber) {
    //this condition ensures a square hasnt been taken yet
    //.some method() is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this var retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //this condition checks whos' turn it is
        if (activePlayer === "X") {
            //if activePlayer is equal to X then x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be x or o, if not x it must be o
        } else {
            //if activePlayer is o, o.png is placed in html
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated togeether and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions
        checkWinConditions();
        //this condition is for changing the activePlayer
        if (activePlayer === "X") {
            //if active player is X change it to O
            activePlayer = "O";
            //if active player is anything other than X
        } else {
            //change activePlayer to X
            activePlayer = "X";
        }

        //this function plays placement sound
        audio('./media/place.mp3');
        //this condition checks to see if it is a computers turn
        if (activePlayer === "O") {
            //this function disables click for computer choice
            disableClick();
            //this function waits 1 sec before computer places img and enables click
            setTimeout(function() { computersTurn(); }, 1000)
        }
        //returning true is needed for our computersTurn()function to work
        return true;
    }

    //this function results in a random square being selected
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this var stores a random num 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //a random number btw 0-8 is chosen
            if (placeXorO(pickASquare)) {
                //this line calls the function
                placeXorO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}


//this function parses the selectedSquares array to search for win conditions
//drawWinLine function is called to draw line if condition ismet
function checkWinConditions() {
    //x 0,1,2 condition
    if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100) }
    //x 3,4,5 condition
    else if (arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304) }
    //x 6,7,8 condition
    else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508) }
    //x 0,3,6 condition
    else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558) }
    //x 1,4,7 condition
    else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558) }
    //x 2,5,8 condition
    else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558) }
    //x 6,4,2 condition
    else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90) }
    //x 0,4,8 condition
    else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520) }
    //o 0,1,2 condition
    else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100) }
    //o 3,4,5 condition
    else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304) }
    //o 6,7,8 condition
    else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508) }
    //o 0,3,6 condition
    else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558) }
    //o 1,4,7 condition
    else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558) }
    //o 2,5,8 condition
    else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558) }
    //o 6,4,2 condition
    else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90) }
    //o 0,4,8 condition
    else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520) }
    //this condition checks for tie, if none of the above conidtions register and 
    //9 squares are selected the code excutes
    else if (selectedSquares.length >= 9) {
        //function plays the tie game sound
        audio('./media/tie.mp3');
        //this function sets a .3 sec timer before the resetGame is called
        setTimeout(function() { resetGame(); }, 1000);
    }

    //this function checks if an array includes 3 strings. it is used to check for 
    //each win conditions
    function arrayIncludes(squareA, squareB, squareC) {
        //3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
            //if the 3 variable we pass are all include in our array true is
            //returned and our else if condition executes the drawWinLine Function
        if (a === true && b === true && c === true) { return true }
    }
}

//function makes body element temp unclickable
function disableClick() {
    //this makes body unclickable
    body.style.pointerEvents = "none";
    //this makes our body clickable again after 1 sec
    setTimeout(function() { body.style.pointerEvents = "auto"; }, 1000);
}

//function takes a string parameter of the path you set earlier for 
//placement sound('.media/place,mp3')
function audio(audioURL) {
    //we create a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //play method plays our audio sound
    audio.play();
}

//this function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses our html canvas element
    const canvas = document.getElementById("win-lines");
    //this line gives us access to method and properties to use on canvas
    const c = canvas.getContext("2d");
    //this line indicates where the start of a line x axis is
    let x1 = coordX1,
        //this line indicates where the start of a line y axis is
        y1 = coordY1,
        //this line indicates where the start of line x axis is
        x2 = coordX2,
        //this line indicates where the start of line y axis is
        y2 = coordY2,
        //this variable stores temp x axis data we update in our animation loop
        x = x1,
        //this variable stores temp y axis data we update in our animation loop
        y = y1;

    //this function interacts with the canvas
    function animateLineDrawing() {
        //this variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);
        //this method starts a new path 
        c.beginPath();
        //this method moves us to a starting point for our line
        c.moveTo(x1, y1);
        //this method indicates the end point in our line
        c.lineTo(x, y);
        //this method sets the width of our line
        c.lineWidth = 10;
        //this method draws everything we laid out above
        c.stroke();
        //this condition checks if we've reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to the previous end x point
            if (x < x2) { x += 10; }
            //this condition adds 10 to the previous end y point
            if (y < y2) { y += 10; }
            //this condition cancels our animation loop
            //if we've reach the end point
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //this function clears our canvas after our win line is draw
    function clear() {
        //this line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //this line clears our canvas
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //this line disallows clickings while the win sound is playing
    disableClick();
    //this line plays the win sounds
    audio('./media/winGame.mp3');
    //this line calls our main animation loop
    animateLineDrawing();
    //this line waits 1 sec, then clears canvas, reset game, and allows clicking again
    setTimeout(function() {
        clear();
        resetGame();
    }, 1000);
}

//this function resets the game in the event of a tie or a win
function resetGame() {
    //this for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //this var gets the html element of i
        let square = document.getElementById(String(i));
        //this removes our elements backgrounImage
        square.style.backgroundImage = '';
    }
    //this resets our array so it is empty and we can start over
    selectedSquares = [];
}