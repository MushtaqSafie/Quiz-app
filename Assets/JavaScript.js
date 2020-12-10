$(document).ready(function() {
  var userScore = 0;
  var userScoreTime = 0;   
  var n = 0;

  var numberOfQuestions = 10;
  var questionTag = [];
  var secondsLeft = 60;

  for (i=0; i < numberOfQuestions+1; i++){
    var varName = "question"+i;
    questionTag.push(varName);
  }

  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
      $("#timer").text("Timer: "+ secondsLeft +" sec");
    }, 500);
  }

  $(".start").on("click", function() {
    setTime();
  });


  $(".correct").on("click", function() {
    userScore = userScore + 1;
    $("#currentScore").text("YOUR SCORE: ("+userScore+" of 10)");
    $("#feedback").text("Correct!");
    var feedbackTimeOut = setTimeout(function setTime() {
      $("#feedback").text("");
    }, 500);    
  });

  $(".wrong").on("click", function() {
    $("#feedback").text("Wrong!");
    var feedbackTimeOut = setTimeout(function setTime() {
      $("#feedback").text("");
    }, 500);
  });

  $(".ansBtn").on("click", function() {

    if (n < questionTag.length-1) {
      var toHide = document.getElementById(questionTag[n]);
      toHide.setAttribute("hidden","");
      n = n + 1;
      var toShow = document.getElementById(questionTag[n]);
      toShow.removeAttribute("hidden","");
    } else {
      var toHide = document.getElementById(questionTag[n]);
      toHide.setAttribute("hidden","");
      $("#feedback").text("");
      // else ask user to submit there score
      scoreList();
    }
      // display the current score
    
      // set the timer interval here, with global vericable
  });

  function scoreList() {
    window.location.href ="scorepage.html";
    console.log("ends");
    // userScoreTime = secondsLeft;
    console.log(secondsLeft);
  };

  $(".tryagin").on("click", function() {
    window.location.href ="index.html";
  });

});