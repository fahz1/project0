//-------------------------------------------------------
//who's turn it
const startGame = function() {

    for(let i=1; i<=9; i++){
      clearBox(i);
    }
    document.turn = "X"; //x'turn, document is for html and turn is var
    if(Math.random() < 0.5){ //we will use mathrandom function as it generates a random function btween 0 n 1 - so half of time randonly it will be O's turn and X's turn
      document.turn = "O";
    }
    //lets tell the user about this variable via a function called setMessage
    //using that specific func defined below, we are telling the machine, its the X and find the tag with message and pop up on screen with whatever we pass
    document.winner = null;//whos won the game, saying its emoty value and can be used as true and false in our next move function
    setMessage(document.turn + " get to start.");
}

//lets tell the user about this variable and show user the message via function
//creat a div id message in html where our messae will pop up for the user
const setMessage = function(msg) {
    document.getElementById("message").innerHTML = msg;//getElementById will return something with message id - that id's  or text equal to msg or what i need
}

//onclick in the table rows is the interactive function of nextMove(this) - this means its taking this tag we aer dealing now and it will pass it tot the called dunction as the parametr
//so the parameter will be we know a square or the table row we cerated
const nextMove = function(square) {
  ///just checking if the input box is empty to avoid the overwriitng of a box
    if(document.winner != null){
        setMessage(document.winner + " already Won the game.");
    } else if (square.innerHTML == ""){
    square.innerHTML = document.turn;
    switchTurn();//calling the turn switch function
    //square innerHTML means, take that tablerow/square and make that equal to our varable documemt.turn which means X turn to nextMove
    //but we cant have X alawys entr so we write another function called switchturn
  } else {
      setMessage("That space is already used.");
  }
}

//for seitchturn function, simple if the imput is x, turnt hat into o if not x then turn it into x
const switchTurn = function() {
  //now we are using the win combinations before letting the user enter new value
    if(checkforWinner(document.turn)) {//this check means if checkforWinner is returning true or false
        setMessage("Congratulation, " + document.turn + "! You WON!");//if we have a winner congratulate them and if not move to else
        document.winner = document.turn;
    } else if(document.turn == "X"){
        document.turn = "O";
        setMessage("It's " + document.turn + " turn.");//lets show the user

    } else {
      document.turn = "X";
      setMessage("It's " + document.turn + " turn.");//lets show the user

    }

}

////so the user can still overwrite the boxes in addtion to again using the box to entry
//so we will again go to nectMove function where we can check and stop the user to overwrite the written vale

// now lets figure out the winner combinations when can use can win so we can write a function to handle out the inputs of possible wining combo

//now passing on the winning combinations and we will pass the move as the argument
const checkforWinner = function (move) { //cpmbo where user can wiin and now we will use thos func in the switchturn
    let result = false;
    if(checkRow(1, 2, 3, move) ||
       checkRow(4, 5, 6, move) ||
       checkRow(7, 8, 9, move) ||
       checkRow(1, 4, 7, move) ||
       checkRow(2, 5, 8, move) ||
       checkRow(3, 6, 9, move) ||
       checkRow(1, 5, 9, move) ||
       checkRow(3, 5, 7, move)) {
         result = true;
       }
       return result;
}


const checkRow = function (a, b, c, move) { ///a,b,c entries in grid are equal to a particular move
    let result = false; //this variable is temp and will return something to us to use in other fucntions
    //but we have an issue that we dont have any specific id for a single box, box in a, box in a, box in b as in numbered boxes so we create another function called getBox
    //which would need an id for the boxes, so we will edit out=r table rows with IDs as well is=s1,s2setc
    if ( getBox(a) == move && getBox(b) == move && getBox(c) == move ) {
    result = true;//so this if statement will check about the valus in all those boxes, and return true but now we need to pass on the values so we will make another function
  }
    return result;
}

const getBox = function(number) { // number is the parameter of that elementby id we are calling below
    return document.getElementById("s" + number).innerHTML; //document give us the inner text/value of the element with id s and its number
}

//x shouldnt go first all the time - so we used mathrandom function in the beginning
//now instead of having to refresh over n over by ourselves, we will create another function called clear

const clearBox = function (number) {
    document.getElementById("s" + number).innerHTML = ""; //it will clear that box n we will use it in startgame
}
//
// const checkforDraw = function () {
//       for count=0; count
//       for ( document.getElementById("s").innerHTML != null) {
//         count = count++;
//       }
//       return count;
// }
