let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];
let gameover = []; //To Check total > 21
let count = 0;
let first,
  second,
  third,
  fouth = false;
let cardcount = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;

//Start Random Card

function start() {
  first = true;

  document.getElementById("btnshow1").setAttribute("class", "btnshow btnmove");
  document
    .getElementById("btnstart")
    .setAttribute("class", "btnstart inactivestart");
  document
    .getElementById("btnstop")
    .setAttribute("class", "btnstop activestop");
  document.getElementById("btnstart").disabled = true;
  document.getElementById("btnstop").disabled = false;
  document.getElementById("btndraw1").disabled = false;
  document.getElementById("btnskip1").disabled = false;
  document.getElementById("btncheck1").disabled = false;
  document.getElementById("btncheck2").disabled = false;
  document.getElementById("btncheck3").disabled = false;
  document.getElementById("btnshow1").style.visibility = "visible";

  for (let index = 0; index < 8; index++) {
    let rand = Math.floor(Math.random() * 10) + 1;
    if (count < 2) {
      player1.push(rand);
      document.getElementsByClassName("card1")[
        count
      ].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName("card1")[
        count
      ].innerHTML += `<div class="logo"><img src="img/club-icon.png" id="logo" alt=""></div>`;
      count++;
    } else if (count == 2 || count == 3) {
      player2.push(rand);
      document.getElementsByClassName("card2")[
        count - 2
      ].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName("card2")[
        count - 2
      ].innerHTML += `<div class="logo"><img src="img/diamond.png" id="logo" alt=""></div>`;
      count++;
    } else if (count == 4 || count == 5) {
      player3.push(rand);
      document.getElementsByClassName("card3")[
        count - 4
      ].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName("card3")[
        count - 4
      ].innerHTML += `<div class="logo"><img src="img/spade.png" id="logo" alt=""></div>`;
      count++;
    } else {
      player4.push(rand);
      document.getElementsByClassName("card4")[
        count - 6
      ].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName("card4")[
        count - 6
      ].innerHTML += `<div class="logo"><img src="img/heart.png" id="logo" alt=""></div>`;
      count++;
    }
  }
}

//For First Player Draw
function drawplayer1() {
  if (first) {
    sum1 = 0;
    let rand = Math.floor(Math.random() * 10) + 1;
    player1.push(rand);
    if (cardcount == 0) {
      document.getElementById("card3").style.visibility = "visible";
      document.getElementsByClassName(
        "card1"
      )[2].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card1"
      )[2].innerHTML += `<div class="logo"><img src="img/club-icon.png" id="logo" alt=""></div>`;
      cardcount++;
    } else if (cardcount == 1) {
      document.getElementById("card4").style.visibility = "visible";
      document.getElementsByClassName(
        "card1"
      )[3].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card1"
      )[3].innerHTML += `<div class="logo"><img src="img/club-icon.png" id="logo" alt=""></div>`;
      cardcount++;
    } else if (cardcount == 2) {
      document.getElementById("card5").style.visibility = "visible";
      document.getElementsByClassName(
        "card1"
      )[4].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card1"
      )[4].innerHTML += `<div class="logo"><img src="img/club-icon.png" id="logo" alt=""></div>`;
      cardcount++;
      // skipplayer1();
    }
    //Total
    for (let index = 0; index < player1.length; index++) {
      sum1 = sum1 + Number(player1[index]);
    }
    console.log(sum1);

    //Bingo
    if (cardcount == 3) {
      if (sum1 <= 21) {
        console.log("Bingo");
        document.getElementById("btnshow1").innerHTML = " ";
        document.getElementById("btnshow1").innerHTML = "Player1 Bingo!";
      } else {
        console.log("Lose");
        document.getElementById("btnshow1").innerHTML = " ";
        document.getElementById("btnshow1").innerHTML = "Player1 Lose!";
      }
      document.getElementById("btncheck1").disabled = true;
      skipplayer1();
    }
  }
}

//For First Player Skip
function skipplayer1() {
  cardcount = 0; //For next player card counting
  first = false;
  second = true;
  document.getElementById("btndraw1").disabled = true;
  document.getElementById("btnskip1").disabled = true;
  document.getElementById("btndraw2").disabled = false;
  document.getElementById("btnskip2").disabled = false;
  document.getElementById("btnshow2").style.visibility = "visible";
  document.getElementById("btnshow2").setAttribute("class", "btnshow btnmove");

  //To check total > 21
  if (sum1 > 21) {
    gameover.push(1);
  } else {
    gameover.push(0);
  }
  console.log(gameover);
}

//For Second Player Draw
function drawplayer2() {
  if (second) {
    sum2 = 0;
    let rand = Math.floor(Math.random() * 10) + 1;
    player2.push(rand);
    if (cardcount == 0) {
      document.getElementById("card8").style.visibility = "visible";
      document.getElementsByClassName(
        "card2"
      )[2].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card2"
      )[2].innerHTML += `<div class="logo"><img src="img/diamond.png" id="logo" alt=""></div>`;
      cardcount++;
    } else if (cardcount == 1) {
      document.getElementById("card9").style.visibility = "visible";
      document.getElementsByClassName(
        "card2"
      )[3].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card2"
      )[3].innerHTML += `<div class="logo"><img src="img/diamond.png" id="logo" alt=""></div>`;
      cardcount++;
    } else if (cardcount < 3) {
      document.getElementById("card10").style.visibility = "visible";
      document.getElementsByClassName(
        "card2"
      )[4].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card2"
      )[4].innerHTML += `<div class="logo"><img src="img/diamond.png" id="logo" alt=""></div>`;
      cardcount++;
    }
    //Total
    for (let index = 0; index < player2.length; index++) {
      sum2 = sum2 + Number(player2[index]);
    }
    console.log(sum2);

    //Bingo
    if (cardcount == 3) {
      if (sum2 <= 21) {
        console.log("Bingo");
        document.getElementById("btnshow2").innerHTML = " ";
        document.getElementById("btnshow2").innerHTML = "Player2 Bingo!";
      } else {
        console.log("Lose");
        document.getElementById("btnshow2").innerHTML = " ";
        document.getElementById("btnshow2").innerHTML = "Player2 Lose!";
      }
      document.getElementById("btncheck2").disabled = true;
      skipplayer2();
    }
  }
}

//For Second Player Skip
function skipplayer2() {
  cardcount = 0;
  second = false;
  third = true;
  document.getElementById("btndraw2").disabled = true;
  document.getElementById("btnskip2").disabled = true;
  document.getElementById("btndraw3").disabled = false;
  document.getElementById("btnskip3").disabled = false;
  document.getElementById("btnshow3").style.visibility = "visible";
  document.getElementById("btnshow3").setAttribute("class", "btnshow btnmove");

  if (sum2 > 21) {
    gameover.push(1);
  } else {
    gameover.push(0);
  }
  console.log(gameover);
}

//For third Player Draw
function drawplayer3() {
  if (third) {
    sum3 = 0;
    let rand = Math.floor(Math.random() * 10) + 1;
    player3.push(rand);
    if (cardcount == 0) {
      document.getElementById("card13").style.visibility = "visible";
      document.getElementsByClassName(
        "card3"
      )[2].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card3"
      )[2].innerHTML += `<div class="logo"><img src="img/spade.png" id="logo" alt=""></div>`;
      cardcount++;
    } else if (cardcount == 1) {
      document.getElementById("card14").style.visibility = "visible";
      document.getElementsByClassName(
        "card3"
      )[3].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card3"
      )[3].innerHTML += `<div class="logo"><img src="img/spade.png" id="logo" alt=""></div>`;
      cardcount++;
    } else if (cardcount < 3) {
      document.getElementById("card15").style.visibility = "visible";
      document.getElementsByClassName(
        "card3"
      )[4].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card3"
      )[4].innerHTML += `<div class="logo"><img src="img/spade.png" id="logo" alt=""></div>`;
      cardcount++;
    }

    for (let index = 0; index < player3.length; index++) {
      sum3 = sum3 + Number(player3[index]);
    }
    console.log(sum3);

    //Bingo
    if (cardcount == 3) {
      if (sum3 <= 21) {
        console.log("Bingo");
        document.getElementById("btnshow3").innerHTML = " ";
        document.getElementById("btnshow3").innerHTML = "Player3 Bingo!";
      } else {
        console.log("Lose");
        document.getElementById("btnshow3").innerHTML = " ";
        document.getElementById("btnshow3").innerHTML = "Player3 Lose!";
      }
      document.getElementById("btncheck3").disabled = true;
      skipplayer3();
    }
  }
}

//For Second Player Skip
function skipplayer3() {
  cardcount = 0;
  third = false;
  fouth = true;
  document.getElementById("btndraw3").disabled = true;
  document.getElementById("btnskip3").disabled = true;
  document.getElementById("btndraw4").disabled = false;
  document.getElementById("btnshow4").style.visibility = "visible";
  document.getElementById("btnshow4").setAttribute("class", "btnshow btnmove");
  if (sum3 > 21) {
    gameover.push(1);
  } else {
    gameover.push(0);
  }
  console.log(gameover);
}

//For fouth Player Draw
function drawplayer4() {
  if (fouth) {
    sum4 = 0;
    let rand = Math.floor(Math.random() * 10) + 1;
    player4.push(rand);
    if (cardcount == 0) {
      document.getElementById("card18").style.visibility = "visible";
      document.getElementsByClassName(
        "card4"
      )[2].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card4"
      )[2].innerHTML += `<div class="logo"><img src="img/heart.png" id="logo" alt=""></div>`;
      cardcount++;
    } else if (cardcount == 1) {
      document.getElementById("card19").style.visibility = "visible";
      document.getElementsByClassName(
        "card4"
      )[3].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card4"
      )[3].innerHTML += `<div class="logo"><img src="img/heart.png" id="logo" alt=""></div>`;
      cardcount++;
    } else if (cardcount < 3) {
      document.getElementById("card20").style.visibility = "visible";
      document.getElementsByClassName(
        "card4"
      )[4].innerHTML = `<div class="num">${rand}</div>`;
      document.getElementsByClassName(
        "card4"
      )[4].innerHTML += `<div class="logo"><img src="img/heart.png" id="logo" alt=""></div>`;
      cardcount++;
    }
    //Total
    for (let index = 0; index < player4.length; index++) {
      sum4 = sum4 + Number(player4[index]);
    }
    console.log(sum4);

    if (sum4 > 21) {
      gameover[3] = 1;
    } else {
      gameover[3] = 0;
    }
    console.log(gameover);

    //Bingo

    if (cardcount == 3) {
      if (sum4 <= 21) {
        console.log("Bingo");
        document.getElementById("btnshow4").innerHTML = " ";
        document.getElementById("btnshow4").innerHTML = "Bookie Bingo!";
      } else {
        console.log("Lose");
        document.getElementById("btnshow4").innerHTML = " ";
        document.getElementById("btnshow4").innerHTML = "Bookie Lose!";
      }
      document.getElementById("btndraw4").disabled = true;
    }
  }
}

function check1() {
  if (sum4 > 21) {
    gameover[3] = 1;
  } else {
    gameover[3] = 0;
  }
  console.log(gameover);

  if (gameover[0] == 1 && gameover[3] == 0) {
    console.log("Player1 Lose");
    document.getElementById("btnshow1").innerHTML = " ";
    document.getElementById("btnshow1").innerHTML = "Player1 Lose!";
  } else if (gameover[0] == 0 && gameover[3] == 1) {
    console.log("Player1 Win");
    document.getElementById("btnshow1").innerHTML = " ";
    document.getElementById("btnshow1").innerHTML = "Player1 Win!";
  } else if (gameover[0] == 1 && gameover[3] == 1) {
    console.log("Draw");
    document.getElementById("btnshow1").innerHTML = " ";
    document.getElementById("btnshow1").innerHTML = "Draw!";
  } else {
    if (sum1 > sum4) {
      console.log("Player1 Win");
      document.getElementById("btnshow1").innerHTML = " ";
      document.getElementById("btnshow1").innerHTML = "Player1 Win!";
    } else if (sum1 == sum4) {
      console.log("Draw");
      document.getElementById("btnshow1").innerHTML = " ";
      document.getElementById("btnshow1").innerHTML = "Draw!";
    } else {
      console.log("Player1 Lose");
      document.getElementById("btnshow1").innerHTML = " ";
      document.getElementById("btnshow1").innerHTML = "Player1 Lose!";
    }
  }
  document.getElementById("btncheck1").disabled = true;
}

function check2() {
  if (sum4 > 21) {
    gameover[3] = 1;
  } else {
    gameover[3] = 0;
  }
  console.log(gameover);

  if (gameover[1] == 1 && gameover[3] == 0) {
    console.log("Player2 Lose");
    document.getElementById("btnshow2").innerHTML = " ";
    document.getElementById("btnshow2").innerHTML = "Player2 Lose!";
  } else if (gameover[1] == 0 && gameover[3] == 1) {
    console.log("Player2 Win");
    document.getElementById("btnshow2").innerHTML = " ";
    document.getElementById("btnshow2").innerHTML = "Player2 Win!";
  } else if (gameover[1] == 1 && gameover[3] == 1) {
    console.log("Draw");
    document.getElementById("btnshow2").innerHTML = " ";
    document.getElementById("btnshow2").innerHTML = "Draw!";
  } else {
    if (sum2 > sum4) {
      console.log("Player2 Win");
      document.getElementById("btnshow2").innerHTML = " ";
      document.getElementById("btnshow2").innerHTML = "Player2 Win!";
    } else if (sum2 == sum4) {
      console.log("Draw");
      document.getElementById("btnshow2").innerHTML = " ";
      document.getElementById("btnshow2").innerHTML = "Draw!";
    } else {
      console.log("Player2 Lose");
      document.getElementById("btnshow2").innerHTML = " ";
      document.getElementById("btnshow2").innerHTML = "Player2 Lose!";
    }
  }
  document.getElementById("btncheck2").disabled = true;
}

function check3() {
  if (sum4 > 21) {
    gameover[3] = 1;
  } else {
    gameover[3] = 0;
  }
  console.log(gameover);

  if (gameover[2] == 1 && gameover[3] == 0) {
    console.log("Player3 Lose");
    document.getElementById("btnshow3").innerHTML = " ";
    document.getElementById("btnshow3").innerHTML = "Player3 Lose!";
  } else if (gameover[2] == 0 && gameover[3] == 1) {
    console.log("Player3 Win");
    document.getElementById("btnshow3").innerHTML = " ";
    document.getElementById("btnshow3").innerHTML = "Player3 Win!";
  } else if (gameover[2] == 1 && gameover[3] == 1) {
    console.log("Draw");
    document.getElementById("btnshow3").innerHTML = " ";
    document.getElementById("btnshow3").innerHTML = "Draw!";
  } else {
    if (sum3 > sum4) {
      console.log("Player3 Win");
      document.getElementById("btnshow3").innerHTML = " ";
      document.getElementById("btnshow3").innerHTML = "Player3 Win!";
    } else if (sum3 == sum4) {
      console.log("Draw");
      document.getElementById("btnshow3").innerHTML = " ";
      document.getElementById("btnshow3").innerHTML = "Draw!";
    } else {
      console.log("Player3 Lose");
      document.getElementById("btnshow3").innerHTML = " ";
      document.getElementById("btnshow3").innerHTML = "Player3 Lose!";
    }
  }
  document.getElementById("btncheck3").disabled = true;
}

function stop() {
  location.reload();
}

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
