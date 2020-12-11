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
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        scoreList();
      }
      $("#timer").text("Timer: "+ secondsLeft +" sec");
    }, 1000);
  }

  $(".start").on("click", function() {
    setTime();
  });


  $(".correct").on("click", function() {
    userScore = userScore + 1;
    $("#currentScore").text("YOUR SCORE: ("+userScore+" of 10)");
    $("#feedback").text("Correct!");
    var feedbackTimeOut = setTimeout(function() {
      $("#feedback").text("");
    }, 500);    
  });

  $(".wrong").on("click", function() {
    $("#feedback").text("Wrong!");
    secondsLeft = secondsLeft - 10;
    var feedbackTimeOut = setTimeout(function() {
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
      scoreList();
    }
  });

  function scoreList() {
    $(".quiz").attr("hidden", "");
    $(".scorePage").removeAttr("hidden");
    // set the time and score
    $(".currentscore").text("("+userScore+" of 10)");
  };

  $(".tryagin").on("click", function() {
    window.location.href ="index.html";
  });

  $(".highestscore").on("click", function() {
    $(".scorePage").removeAttr("hidden");
    $(".quiz").attr("hidden", "");
    $(".scoretitle").attr("hidden", "");
  });

  $(".submitbtn").on("click", function() {
    var listItems = $("<div>");
    listItems.attr("class", "bg-white p-2 list-group list-field text-center userlist");
    listItems.text("helos");
    $("#highestscoreList").append(listItems);
  });
});