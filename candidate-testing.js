const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = []


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name.");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  }

}


function gradeQuiz(candidateAnswers) {

  let grade = 0
  let answersCorrect = 0
  for (let i = 0; i < candidateAnswers.length; i++) {

    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log(`"Your Answer:  ${candidateAnswers[i]} \n "Correct Answer:" ${correctAnswers[i]}"`);
      answersCorrect += 1;
    } else {
      console.log(`"Your Answer:  ${candidateAnswers[i]} \n "Correct Answer:" ${correctAnswers[i]}"`);
    }

  }

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  if (answersCorrect == 5) {
    grade = 5 / questions.length * 100
    console.log("passed")
    return grade;
  } else if (answersCorrect === 4) {
    grade = 4 / questions.length * 100
    console.log("passed")
    return grade;
  } else if (answersCorrect === 3) {
    grade = 3 / questions.length * 100
    return grade;
  } else if (answersCorrect === 2) {
    grade = 2 / questions.length * 100
    return grade
  } else if (answersCorrect === 1) {
    grade = 1 / questions.length * 100
    return grade
  } else {
    grade = 0 / questions.length * 100
    return grade
  }




}



function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("\nHello, " + candidateName + "\nnice to meet you");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};