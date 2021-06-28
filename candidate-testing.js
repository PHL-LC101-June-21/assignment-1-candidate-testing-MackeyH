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
  
  // assignment 3

  console.log(`\nCandidate Name: ${candidateName}`);

  for (let i = 0; i < questions.length; i++){
      let currentquestion = questions[i];
  let message1 = `${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`;
  console.log(message1);
  }
  
  
  // (Number of Correct Answers) / (Number of Quiz Questions) * 100
  

  for ( let i = 1; i < candidateAnswers.count; i++){
  }
      if (candidateAnswers === correctAnswers) {
         console.log(candidateAnswers);
      }

  // let quizAnswers;
  // let results;

  // if (candidateAnswers === correctAnswers) {
    // quizAnswers++;
   

  // results = `${quizAnswers} out of ${questions.length}`;
  // console.log(results);




  // let array;

  // array = [0,1,2,3,4];
  // // array = [0, 1, 2, 3, 4];
  // let sum = 0;

  // for (let i = 0; i < array.length; i++)
  //   sum += array;
  //   console.log(array + i);
  


  // let arrayTotal = [candidateAnswers];
  // let sum = 0;

  // for (let i = 0; i < arrayTotal.length; i++)
  //   sum += arrayTotal[i];
  
  


// message or response
  // array of questions
    // questions = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
  // array of candidateAnswers
    // let yAnswer = (`Your Answer: ${candidateAnswers}`);
    // console.log(yAnswer);
  // array of correctAnswers
    //  let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
    //  let cAnswer = (`Correct Answer: ${correctAnswers}`);
    //  console.log(cAnswer);
    

   

  return grade;
}

// Part 3: Grade the Quiz

// Finally, calculate the candidate's score and print the results. There are no TODOs in this section, just be sure to only modify code that you have written, or add code. Don't remove anything in the file that you haven't written. Doing so may cause your program to behave unexpectedly - and we might not be able to grade it!

// Your task here is to:

//     Compare the candidate answers with the correct answers,
//     Calculate the candidate's score as a percentage,
//     Convey to the candidate if they have passed the quiz with an 80% or if they have failed.


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