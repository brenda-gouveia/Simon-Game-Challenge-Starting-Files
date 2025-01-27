/*
O trabalho se trata de um site que roda o Simon's Game, um jogo de memória. O jogo consiste em um botão que é clicado e em seguida uma sequência de botões 
é mostrada ao jogador. 
O jogador deve clicar nos botões na mesma ordem que foram mostrados. Caso o jogador erre a ordem, o jogo acaba.
O jogo possui um contador de nível que aumenta a cada rodada que o jogador acerta. O jogo também possui um botão de reiniciar o jogo. */
 var level = 0;
 var userClickedPattern = [];
 var gamePattern = [];
 var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];

    //gamePattern is for keeping track of the sequence of colors that the game shows to the user
    gamePattern.push(randomChosenColor);

    ++level;
    $("#level-title").text("Level " + level);

    setAnimation(randomChosenColor);
    
}
function setAnimation(color) {
    $("#" + color).fadeOut(100).fadeIn(100);

    let audio = new Audio("sounds/" + color + ".mp3");
    audio.play();

    // Animate Press - Adiciona a classe pressed ao botão que foi clicado, fazendo com que ele fique com uma sombra

    $("#" + color).addClass("pressed");
    setTimeout(function() {
    $("#" + color).removeClass("pressed");}, 100);
}

function checkAnswer(currentLevel) {
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    //    console.log("success");

       if (gamePattern.length === userClickedPattern.length) {
            userClickedPattern = [];
            console.log("limpou userClickedPattern");
       }
       setTimeout(function() {
            nextSequence();
        }, 1000);
   } else {
       console.log("wrong");

    //    $("body").addClass("game-over");
    //    setTimeout(function() {
    //         $("body").removeClass("game-over");
    //     }, 200);
    //     let audio = new Audio("sounds/wrong.mp3");
    //     audio.play();
    //     $("#level-title").text("Game Over, Press Any Key to Restart");
   }

}

function clickButton() {
    $(".btn").click(function() {

        let userChosenColor = $(this).attr("id");
        setAnimation(userChosenColor);
        //userClickedPattern is for keeping track of the sequence of colors that the user clicks on
       userClickedPattern.push(userChosenColor);
       checkAnswer(level-1);
      
    });

    
    
}
function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

/////////////////////////////////////////////////////////////////////////////////////////
function main(){
    $(document).keydown(function() {
        if (level === 0) {
            nextSequence();
        }
    });

    clickButton();

}
main();