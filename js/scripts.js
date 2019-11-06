var playerOne = "X";
var playerTwo = "O";

function Board(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9){
  this.sq1 = sq1;
  this.sq2 = sq2;
  this.sq3 = sq3;
  this.sq4 = sq4;
  this.sq5 = sq5;
  this.sq6 = sq6;
  this.sq7 = sq7;
  this.sq8 = sq8;
  this.sq9 = sq9;
}

var newBoard = new Board([1, 1], [1, 2], [3, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3,3]);

var winningCombos = [[newBoard.sq1, newBoard.sq2, newBoard.sq3], [newBoard.sq4, newBoard.sq5, newBoard.sq6], [newBoard.sq7, newBoard.sq8, newBoard.sq9], [newBoard.sq1, newBoard.sq4, newBoard.sq7], [newBoard.sq2, newBoard.sq5, newBoard.sq8], [newBoard.sq3, newBoard.sq6, newBoard.sq9],[newBoard.sq1, newBoard.sq5, newBoard.sq9], [newBoard.sq7, newBoard.sq5, newBoard.sq3]];


var playerOnePicks = [];

var playerTwoPicks = [];

var turnCounter = 0;
var currentPick;


function alternatePlayer() {
  checkWinners();
  if (turnCounter % 2 === 0){
    currentPick = playerOne;
    turnCounter += 1;
    return playerOne;
  }
  else if (turnCounter % 2 === 1) {
    currentPick = playerTwo;
    turnCounter += 1;
    return playerTwo;
  }
}





function checkWinners(){



 if (20 < 1000){      //// Fix this conditon
   alert("You win!!!");
   playerOnePicks = [];
   playerTwoPicks =[];
   turnCounter = 0;
 }
}




$(document).ready(function() {


  $("#box-one").click(function(){
    if ($(".box-one-text").html() !== ""){
      alert("Choose Another");
      return false;
    }
    else {
      $(".box-one-text").empty().append(alternatePlayer());

      if (currentPick == playerOne){
        return playerOnePicks.push(newBoard.sq1);
      }
      else if (currentPick == playerTwo){
        return playerTwoPicks.push(newBoard.sq1);
      }
    }
  });


  $("#box-two").click(function(){
    if ($(".box-two-text").html() !== ""){
      alert("Choose Another");
      return false;
    }
    else {
      $(".box-two-text").empty().append(alternatePlayer());
      if (currentPick == playerOne){
        return playerOnePicks.push(newBoard.sq2);
      }
      else if (currentPick == playerTwo){
        return playerTwoPicks.push(newBoard.sq2);
      }
    }
  });


  $("#box-three").click(function(){
    if ($(".box-three-text").html() !== ""){
      alert("Choose Another");
      return false;
    }
    else {
      $(".box-three-text").empty().append(alternatePlayer());
      if (currentPick == playerOne){
        return playerOnePicks.push(newBoard.sq3);
      }
      else if (currentPick == playerTwo){
        return playerTwoPicks.push(newBoard.sq3);
      }
    }
  });


  $("#box-four").click(function(){
    if ($(".box-four-text").html() !== ""){
      alert("Choose Another");
      return false;
    }
    else {
      $(".box-four-text").empty().append(alternatePlayer());
      if (currentPick == playerOne){
        return playerOnePicks.push(newBoard.sq4);
      }
      else if (currentPick == playerTwo){
        return playerTwoPicks.push(newBoard.sq4);
      }
    }
  });


  $("#box-five").click(function(){
    if ($(".box-five-text").html() !== ""){
      alert("Choose Another");
      return false;
    }
    else {
      $(".box-five-text").empty().append(alternatePlayer());
      if (currentPick == playerOne){
        return playerOnePicks.push(newBoard.sq5);
      }
      else if (currentPick == playerTwo){
        return playerTwoPicks.push(newBoard.sq5);
      }
    }
  });


  $("#box-six").click(function(){
    if ($(".box-six-text").html() !== ""){
      alert("Choose Another");
      return false;
    }
    else {
      $(".box-six-text").empty().append(alternatePlayer());
      if (currentPick == playerOne){
        return playerOnePicks.push(newBoard.sq6);
      }
      else if (currentPick == playerTwo){
        return playerTwoPicks.push(newBoard.sq6);
      }
    }
  });


  $("#box-seven").click(function(){
    if ($(".box-seven-text").html() !== ""){
      alert("Choose Another");
      return false;
    }
    else {
      $(".box-seven-text").empty().append(alternatePlayer());
      if (currentPick == playerOne){
        return playerOnePicks.push(newBoard.sq7);
      }
      else if (currentPick == playerTwo){
        return playerTwoPicks.push(newBoard.sq7);
      }
    }
  });


  $("#box-eight").click(function(){
    if ($(".box-eight-text").html() !== ""){
      alert("Choose Another");
      return false;
    }
    else {
      $(".box-eight-text").empty().append(alternatePlayer());
      if (currentPick == playerOne){
        return playerOnePicks.push(newBoard.sq8);
      }
      else if (currentPick == playerTwo){
        return playerTwoPicks.push(newBoard.sq8);
      }
    }
  });


  $("#box-nine").click(function(){
    if ($(".box-nine-text").html() !== ""){
      alert("Choose Another");
      return false;
    }
    else {
      $(".box-nine-text").empty().append(alternatePlayer());
      if (currentPick == playerOne){
        return playerOnePicks.push(newBoard.sq9);
      }
      else if (currentPick == playerTwo){
        return playerTwoPicks.push(newBoard.sq9);
      }
    }

  });
});
