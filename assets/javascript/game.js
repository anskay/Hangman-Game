

// ========================ORIGINAL CODE=======================//
var $  = function (id) {
    return document.getElementById(id);
}

//declare variables
    var game = ['CHINA','JAPAN','UNITEDSTATES','BANGLADESH', 'BURUNDI', 'CAMBODIA', 'FINLAND', 'ISRAEL', 'MOZAMBIQUE','PHILIPPINES']
    var choice = Math.floor(Math.random()*10);
    var answer = game[choice];
    var myLength = answer.length;
    var display=[myLength];
    var win = myLength;
    var letters = answer.split('');
    var attemptsLeft= 26;
    var output="";
    var userLetter="";


var setup = function()
{
    for (var i=0; i< answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("game").innerHTML = output;
    output ="";
}

    else {
        display[i] = "_ ";

        // wrongLetters.push(letter);
        document.getElementById("wrongGuesses").innerHTML = output;
    output ="";
}
    

//loop through each answer to see if match guessed answer
var submit = function()
{    output = "";
    userLetter=$("letter").value;
    $("letter").value ="";

    for (var c= 0; c< answer.length; c++)
    {
        if (userLetter.toUpperCase() == letters[c])
        {display[c] = userLetter.toUpperCase();
        win--;}
        output = output + display[c] + " ";
    }


    //redisplay output
    document.getElementById("game").innerHTML = output;
    output="";
    attemptsLeft--;

    if (win<1){
        document.getElementById("guesses").innerHTML="THAT'S IT!";
    }
    else if  (attemptsLeft<1){
        document.getElementById("guesses").innerHTML="GAME OVER!";
    }
    else {
        document.getElementById("guesses").innerHTML ="You have " + attemptsLeft + " chances left";
    }
}


window.onload = function()
{
    setup();
    $("submit").onclick = submit;
}


// ===========ignore below, unsuccessful attempts=======

// function roundComp(){
//     console.log("Win Count: "+winCount+ " |Loss Count: "+lossCount)
// }

// document.onkeyup = function (event){
//     var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
//     document.innerHTML = letterGuessed;
// }


