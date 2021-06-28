const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers = [];
let answer;
let quizAnswers;
// let yAnswer;

  questions = ["1) Who was the first American woman in space?", "2) True or false: 5 kilometer == 5000 meters?", "3) (5 + 3)/2 * 10 = ?", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "5) What is the minimum crew size for the ISS?"];

  correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  candidateName = input.question("What is the candidate's name? ");

  console.log("Hello, " + candidateName + "!" + " " + "Welcome to the program!" )
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  
  
   let i = 0;
   while (i < questions.length){
     const currentquestion = questions[i];
     const answerNew = input.question(currentquestion);
     candidateAnswers[i] = answerNew;
    //  console.log(questions[i]);
     i++;
   }
  // console.log(candidateAnswers);
  }

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;

  console.log(`\nCandidate Name: ${candidateName}`);

  for (let i = 0; i < questions.length; i++){
      let currentquestion = questions[i];
  let message1 = `${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`;
  console.log(message1);
  }
  

// I googled trying to figure out how to calculate and separate the correct answers from the incorrect answers out of the user (candidateAnswers). I couldn't think of way to do it. I can rationalize it in my and on paper, but I"m not sure how to convert that into code. I couldn't find any examples that online that were close to what I was trying to do. I had to turn in something. 

// my code reasoning would look like 

// calculate and subtract the correct answers from the wrong answers in candidateAnswers. That would give me "number of correct answers from the user".  I would use this formula     (Number of Correct Answers) / (Number of Quiz Questions) * 100  to get the percentage.  

let score;
let n = candidateAnswers - correctAnswers;
score = (n / 5) * 100;
console.log(score);



  return grade;
}  

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //

  // let candidateName = "";
  // console.log(`Candidate Name: ${candidateName}`);


 
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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