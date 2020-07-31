// BMI = mass/height * height (mass in kg and heigh in meters)

// 1. Store Mark's and John's mass in kg and height in meters in variables
var markMass = 90;
var markHeight = 1.8;

var johnMass = 102;
var johnHeight = 1.90;
// 2. Calculate both their BMI's
var markBmi = markHeight * markHeight % markMass ;
console.log(markBmi);

var johnBmi = johnHeight * johnHeight % johnMass ;
console.log(johnBmi);
/* 3. Create a boolean variable containing information about 
 whether Mark has a higher BMI than John*/
 var totalBmi = markBmi > johnBmi;
  console.log(totalBmi);
 /* 4. Print a string to the console containing the variable from step 3
 (something like "Is Mark's BMI higher than John's?  TRUE") */
console.log('Is Mark\'s BMI higher than John\'s? ' + totalBmi);
document.getElementById('challenge1').innerHTML = totalBmi;
