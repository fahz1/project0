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
    document.getElementById("message").innerText = msg;
}

const nextMove = function(square) {
  ///just checking if the input box is empty to avoid the overwriitng of a box
    if(document.winner != null){
        setMessage(document.winner + " already Won the game.");
    } else if (square.innerText == ""){
    square.innerText = document.turn;
    switchTurn();//calling the turn switch function
    
  } else {
      setMessage("That space is already used.");
  }
}

const switchTurn = function() {
 
    if(checkforWinner(document.turn)) {
        setMessage("Congratulation, " + document.turn + "! You WON!");
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
