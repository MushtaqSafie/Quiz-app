$(document).ready(function() {
  var allQuestions = {
    question1: {
      question: "Which property of JavaScript array returns the number of elements within that array?",
      ans: ["correct length","size","elementsNum","sizeOf"],
    },
    question2: {
      question: "Which of these script tag in a HTML file is used to link the JavaScript source file?",
      ans: ["link","jslink","correct src","js"],
    },
    question3: {
      question: "What is the value of a variable which is declared but not set to a value yet?",
      ans: ["null","correct undefined","value","''"],
    },
    question4: {
      question: "Which of the following statements about JavaScript is FALSE?",
      ans: ["correct All variables must be declared using var","JavaScript is a case sensitive","JavaScript strings can be defined within single quotes","var keyword assign a variable"],
    },
    question5: {
      question: "Which of these methods will retrieve an HTML element into JavaScript based on its id attribute?",
      ans: ["console.getElement()","window.elementId()","correct document.getElementById()","document.alert(id)"],
    },
    question6: {
      question: "Which of these methods can be used to write a message from JavaScript code to the browser console?",
      ans: ["console.write()","console.record()","correct console.log()","document.log()"],
    },
    question7: {
      question: "Which of these JavaScript functions can be used to receive a text input from a user?",
      ans: ["alert","getText","confirm","correct prompt"],
    },
    question8: {
      question: "Which of these statements about JavaScript is FALSE?",
      ans: ["It is a programming language","It can be executed by a web browser","correct It is incompatible with most browsers","It can control the behaviour of a web page"],
    },
    question9: {
      question: "Which of these represents a “truthy” value in JavaScript?",
      ans: ["correct 25","0","[]","{}"],
    },
    question10: {
      question: "What is the result of the operation Math.floor(14.9)?",
      ans: ["15.9","15","correct 14","[1, 4, 9]"],
    }
  };


  for (i=1; i <= 10; i++){  
    // the way you should access each object
    var eachQuestion = allQuestions['question'+ i];
    var questionDiv = $("<div>");
    questionDiv.attr("id", "question"+ i);
    questionDiv.attr("class", "bg-white p-3 border-bottom questionRow")
      questionDiv.attr("hidden", "");
    $("#questionHandlebar").append(questionDiv);

    var questionTitle = $("<div>");
    questionTitle.attr("class","d-flex flex-row align-items-center");
    questionTitle.attr("id", "questionTitle"+i)
    $("#question"+i).append(questionTitle);

    var questionTitleH3 = $("<h3>");
    questionTitleH3.attr("class", "text-danger");
    questionTitleH3.text("Q.");
    $("#questionTitle"+i).append(questionTitleH3);

    var questionTitleH5 = $("<h5>");
    questionTitleH5.attr("class", "question mt-1 ml-2");
    questionTitleH5.text(eachQuestion.question);
    $("#questionTitle"+i).append(questionTitleH5);
   
    for (n=0; n < 4; n++){
      var ansBtnDiv = $("<div>");
      ansBtnDiv.attr("class", "ml-2 ans"+n);
      $("#question"+i).append(ansBtnDiv);

      if (eachQuestion.ans[n].includes("correct")) {
        var newValue = eachQuestion.ans[n].replace("correct", "");
        eachQuestion.ans[n] = newValue;

        var ansBtn = $("<button>");
        ansBtn.attr("class", "ansBtn btn correct btn-info align-items-center");
        ansBtn.attr("type", "button")
        ansBtn.text(eachQuestion.ans[n]);
        $("#question"+i).append(ansBtn);
      } else {
        var ansBtn = $("<button>");
        ansBtn.attr("class", "ansBtn btn wrong btn-info align-items-center");
        ansBtn.attr("type", "button")
        ansBtn.text(eachQuestion.ans[n]);
        $("#question"+i).append(ansBtn);
      };
    }
  }
});

