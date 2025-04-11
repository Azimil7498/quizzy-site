const quizData = [
    {
      question: "Which language is used for web apps?",
      options: ["Python", "HTML", "C++", "Java"],
      correct: 1
    },
    {
      question: "Who is the founder of Microsoft?",
      options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
      correct: 1
    },
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
      correct: 2
    }
  ];
  
  let current = 0;
  let score = 0;
  
  function loadQuiz() {
    const q = quizData[current];
    document.getElementById("question").textContent = q.question;
    for (let i = 0; i < 4; i++) {
      document.getElementById("option" + i).textContent = q.options[i];
      document.getElementsByName("option")[i].checked = false;
    }
    document.getElementById("result").textContent = "";
  }
  
  function submitAnswer() {
    const options = document.getElementsByName("option");
    let selected = -1;
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        selected = i;
        break;
      }
    }
  
    if (selected === -1) {
      alert("Please select an answer!");
      return;
    }
  
    if (selected == quizData[current].correct) {
      score++;
      document.getElementById("result").textContent = "✅ Correct!";
    } else {
      document.getElementById("result").textContent = "❌ Wrong! The correct answer is: " + quizData[current].options[quizData[current].correct];
    }
  
    current++;
    if (current < quizData.length) {
      setTimeout(loadQuiz, 1000);
    } else {
      setTimeout(() => {
        window.location.href = "feedback.html";

      }, 1000);
    }
  }
  
  window.onload = loadQuiz;
  