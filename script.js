/*CODE CHALLENGE 1 */
// BMI = mass/height * height (mass in kg and heigh in meters)

// 1. Store Mark's and John's mass in kg and height in meters in variables
var markMass = 90;
var markHeight = 1.8;

var johnMass = 102;
var johnHeight = 1.90;
// 2. Calculate both their BMI's
var markBmi = (markHeight * markHeight) % markMass ;
console.log(markBmi);

var johnBmi = (johnHeight * johnHeight) % johnMass ;
console.log(johnBmi);
/* 3. Create a boolean variable containing information about 
 whether Mark has a higher BMI than John*/
 var totalBmi = markBmi > johnBmi;
  console.log(totalBmi);
 /* 4. Print a string to the console containing the variable from step 3
 (something like "Is Mark's BMI higher than John's?  TRUE") */
console.log('Is Mark\'s BMI higher than John\'s? ' + totalBmi);
document.getElementById('challenge1').innerHTML = totalBmi;


/*CODE CHALLENGE 1 */
/*John and Mike both play basketball on different teams.  In the latest
 3 games, John's team scored 89, 120 and 103 points, while Mike's 
 team scored 116, 94 and 123 points */
 // 1. Calculate the average score for each team

 /*2. Decide which team wins on average (highest average score), 
 and print the winner to the console.  Also include the average 
 score in the output. */

 /*3. Then change the scores to show different winners.  Don't 
 forget to take into account there might be a draw (same average 
  score.) */

  /* 4.  EXTRA: Mary also plays basketball, and her team scored 
  97, 134 and 105 points.  Like before, log the average winner
   to the console.  HINT: you will need the && operator to take the 
   decision. */

   /* 5. Change the scores to generate different winners, keeping in 
   mind there might be draws */