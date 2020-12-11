$(document).ready(function() {
  var userScore = 0;
  var secondsLeft = 60;

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
    userScore++;
    $("#currentScore").text("YOUR SCORE: ("+userScore+" of 10)");
    $("#feedback").text("Correct!");
    var feedbackTimeOut = setTimeout(function() {
      $("#feedback").text("");
    }, 500);    
  });

  $(".wrong").on("click", function() {
    $("#feedback").text("Wrong!");
    secondsLeft = secondsLeft - 5;
    var feedbackTimeOut = setTimeout(function() {
      $("#feedback").text("");
    }, 500);
  });

  var numberOfQuestions = parseInt(localStorage.getItem("numberOfQuestion"));
  var questionTag = [];

  for (i=0; i < numberOfQuestions+1; i++){
    var varName = "question"+i;
    questionTag.push(varName);
  }
  var n = 0;
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

  $(".submitbtn").on("click", function() {
      var userNameLi = $("<li>");
      userNameLi.text($("#name").val()+" ("+ userScore +" of 10)");
      userNameLi.attr("class", "list-group-item item");
      $("#user-list").append(userNameLi);
      var userNameScore = $("<span>");
      userNameScore.attr("class", "userscore");
      userNameScore.text(userScore);
      $(".item").append(userNameScore);
  });

  function scoreList() {
    $(".quiz").attr("hidden", "");
    $(".scorePage").removeAttr("hidden");
    $(".currentscore").text("("+userScore+" of 10)");
  };

  $(".tryagin").on("click", function() {
    window.location.href ="index.html";
  });

  $(".highestscore").on("click", function() {
    $(".scorePage").removeAttr("hidden");
    $(".quiz").attr("hidden", "");
  });
});