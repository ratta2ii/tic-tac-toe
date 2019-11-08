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

var newBoard = new Board("1", "2", "3", "4", "5", "6", "7", "8", "9");

var winningCombos = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["1", "4","7"], ["2", "5", "8"], ["3", "6", "9"],["1", "5", "9"], ["3", "5", "7"]];

var playerOnePicks = [];
var playerTwoPicks = [];
var turnCounter = 0;
var currentPick;

function alternatePlayer() {
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

var checkWinners = function(){
  playerOnePicks.sort();
  playerTwoPicks.sort();
  for (let i in winningCombos){
    if (playerOnePicks.includes(winningCombos[i][0]) && playerOnePicks.includes(winningCombos[i][1]) && playerOnePicks.includes(winningCombos[i][2])){
	    alert("Player One Wins!!!");
      resetPage();
    }
    if (playerTwoPicks.includes(winningCombos[i][0]) && playerTwoPicks.includes(winningCombos[i][1]) && playerTwoPicks.includes(winningCombos[i][2])){
      alert("Player Two Wins!!!");
      resetPage();
    }
  }
}

window.setInterval(checkWinners, 0);

function resetPage(){
  playerOnePicks = [];
  playerTwoPicks = [];
  turnCounter = 0;
}


// UI Logic ---------------------------------------


$(document).ready(function() {

  $("#box-one").click(function(){
    if ($(".box-one-text").html() !== ""){
      alert("Choose Another");
      return false;
    }
    else {
      $(".box-one-text").empty().append(alternatePlayer());
      if (currentPick == playerOne){
        playerOnePicks.push(newBoard.sq1);
      }
      else if (currentPick == playerTwo){
        playerTwoPicks.push(newBoard.sq1);
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
        playerOnePicks.push(newBoard.sq2);
      }
      else if (currentPick == playerTwo){
        playerTwoPicks.push(newBoard.sq2);
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
        playerOnePicks.push(newBoard.sq3);
      }
      else if (currentPick == playerTwo){
        playerTwoPicks.push(newBoard.sq3);
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
        playerOnePicks.push(newBoard.sq4);
      }
      else if (currentPick == playerTwo){
        playerTwoPicks.push(newBoard.sq4);
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
        playerOnePicks.push(newBoard.sq5);
      }
      else if (currentPick == playerTwo){
        playerTwoPicks.push(newBoard.sq5);
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
        playerOnePicks.push(newBoard.sq6);
      }
      else if (currentPick == playerTwo){
        playerTwoPicks.push(newBoard.sq6);
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
        playerOnePicks.push(newBoard.sq7);
      }
      else if (currentPick == playerTwo){
        playerTwoPicks.push(newBoard.sq7);
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
        playerOnePicks.push(newBoard.sq8);
      }
      else if (currentPick == playerTwo){
        playerTwoPicks.push(newBoard.sq8);
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
        playerOnePicks.push(newBoard.sq9);
      }
      else if (currentPick == playerTwo){
        playerTwoPicks.push(newBoard.sq9);
      }
    }
  });

  $("button#play-again-btn").click(function() {
    $("h1").text("");
    resetPage();
  });
  
});
