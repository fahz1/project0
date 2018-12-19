//Basic Tic Tac Toe-------------------------------------------------------

const startGame = function() {

    for(let i=1; i<=9; i++){
      clearBox(i);
    }
    document.turn = "X"; 
    if(Math.random() < 0.5){ 
      document.turn = "O";
    }
    
    document.winner = null;
    setMessage(document.turn + " get to start.");
}

const setMessage = function(msg) {
    document.getElementById("message").innerText = msg;//getElementById will return something with message id - that id's innertext or text equal to msg or what i need
}

//onclick in the table rows is the interactive function of nextMove(this) - this means its taking this tag we aer dealing now and it will pass it tot the called dunction as the parametr
//so the parameter will be we know a square or the table row we cerated
const nextMove = function(square) {
  ///just checking if the input box is empty to avoid the overwriitng of a box
    if(document.winner != null){
        setMessage(document.winner + " already Won the game.");
    } else if (square.innerText == ""){
    square.innerText = document.turn;
    switchTurn();//calling the turn switch function
    //square innertext means, take that tablerow/square and make that equal to our varable documemt.turn which means X turn to nextMove
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
      setMessage("It's " + document.turn + " turn.");

    }

}

const checkforWinner = function (move) {
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
    let result = false;     if ( getBox(a) == move && getBox(b) == move && getBox(c) == move ) {
    result = true;
  }
    return result;
}

const getBox = function(number) { 
    return document.getElementById("s" + number).innerText; 
}


const clearBox = function (number) {
    document.getElementById("s" + number).innerText = ""; //it will clear that box n we will use it in startgame
}
