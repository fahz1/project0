let count = 0;

const startGame = function() {
  document.turn = null;
    for(let i=1; i<=9; i++){
      clearBox(i);
    }
    document.winner = null;
   setMessage("Select Player");
}

//-----------------------------------------------------------
    const setMessage = function(msg) {
    document.getElementById("message").innerHTML = msg;
    }
//-----------------------------------------------------------
const nextMove = function(square) {
  count++;

  if(document.winner == null && count == 9){
    setMessage("Game Draw");
    return;

  }
    if(document.winner != null){
        setMessage(document.winner + " already Won the game.");
    } else if (square.innerHTML == ""){
    square.innerHTML = document.turn;
    switchTurn();
      } else {
          setMessage("That space is already used.");
      }
    }
    //-----------------------------------------------------------
    const switchTurn = function() {
      if(checkforWinner(document.turn)) {
        setMessage("Congratulation, " + document.turn + "! You WON!");
        document.winner = document.turn;
      } else if(document.turn == "X"){
      document.turn = "O";
      setMessage("It's " + document.turn + " turn.");
          } else {
            document.turn = "X";
            setMessage("It's " + document.turn + " turn.");
   }

}
//-----------------------------------------------------------

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

//-----------------------------------------------------------

    const checkRow = function (a, b, c, move) {
    let result = false;
    if ( getBox(a) == move && getBox(b) == move && getBox(c) == move ) {
    result = true;
  }
    return result;
}
//-----------------------------------------------------------

const getBox = function(number) {
    return document.getElementById("s" + number).innerHTML;
}

const clearBox = function (number) {
  document.getElementById("s" + number).innerHTML = "";
}

//---------------------------------------------------

const xStarts = function(){
  document.turn = "X";
}

const oStarts = function (){
  document.turn = "O";
}
