/*----------------- CODE CHALLENGE 1 ----------------*/
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



/*----------------- CODE CHALLENGE 2 ----------------*/
/*John and Mike both play basketball on different teams.  In the last
 3 games, John's team scored 89, 120 and 103 points, while Mike's 
 team scored 116, 94 and 123 points */
 // 1. Calculate the average score for each team
var johnAvgScore = (89 + 120 + 103) / 3;
  console.log(johnAvgScore);

var mikeAvgScore = (116 + 94 + 123) / 3;
  console.log(mikeAvgScore);

var maryAvgScore = (116 + 94 + 123) / 3;
console.log(maryAvgScore);
 /*2. Decide which team wins on average (highest average score), 
 and print the winner to the console.  Also include the average 
 score in the output. */
function avgScore()  {
if (maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore) {
  console.log('Mary\'s team has the highest average score!' + maryAvgScore);
} else if 
  (mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore)  {
  console.log('Mike\'s team has the highest average score of: ' + mikeAvgScore);
} else if (johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
    console.log('John\'s team has the highest average score of: ' + johnAvgScore);
}
 /*3. Then change the scores to show different winners.  Don't 
 forget to take into account there might be a draw (same average 
  score.) */
else  {
  console.log('There is a draw.');
}
console.log(avgScore);
}


  /* 4.  EXTRA: Mary also plays basketball, and her team scored 
  97, 134 and 105 points.  Like before, log the average winner
   to the console.  HINT: you will need the && operator to take the 
   decision. */
   
   /* 5. Change the scores to generate different winners, keeping in 
   mind there might be draws */

/*----------------- CODE CHALLENGE 3 ----------------*/
/* john and his family went on a holiday and went to 3 different 
restaurants.  The bills were $124, $48, and $268.
To tip the waiter a fair amount, John creaated a simple tip 
calculator (as a function).  He likes to tip 20% of the bill when
the bill is between $50 and $200, and 10% if the bill is more than
$200.
In the end, John would like to have 2 arrays:  */

// 1. Containing all three tips (one for each bill

function tipCalculator(bill)  {
  var percentage;
  if (bill < 50)  {
     percentage = .20;
  } else if (bill >= 50 && bill < 200)  {
    percentage = .15;
  }  else {
    percentage = .10;
  }
  return percentage * bill;
}
 
console.log(tipCalculator(225)); 
 

// 2. Containing all three final paid amounts (bill + tip ).
var billAmount = [124, 48, 268];

var tips = [tipCalculator(billAmount[0]),
            tipCalculator(billAmount[1]),
            tipCalculator(billAmount[2])];

console.log(tips);

var finalBill = [billAmount[0] + tips[0],
                 billAmount[1] + tips[1],
                 billAmount[2] + tips[2]
];
console.log(finalBill);

/*----------------- CODE CHALLENGE 3 ----------------*/
/*  Let's remember the first coding hallenge where Mark and John compared their BMI's.  Let's now implement the same functionality with objects and methods.*/
/*  1.  For each of them, create an object with properties for their full name, mass, and height */
var mark = {fullName: 'Mark Jackson',
            mass: 190,
            height: 1.8,
            calcBmi: function() {
            this.bmi = this.mass / (this.height * this.height);
             return this.bmi;
            }
          }

var john = {fullName: 'John Simpson',
            mass: 102,
            height: 1.9,
            calcBmi: function() {
              this.bmi = this.mass / (this.height * this.height);
             return this.bmi;
            }
          }
/*  2. Then, add a method to each object to calculate the BMI.  Save the BMI to the object and also return it from the method. (BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meters)) */
mark.calcBmi();
john.calcBmi();
console.log(mark, john);
/*  3.  In the end, log to the console who has the hightes BMI, together with the full name and the respective BMI.  Don't forget they might have the same BMI */
if (john.bmi > mark.bmi) {
  console.log(john.fullName + ' has a higher BMI than, ' + mark.fullName + '.');
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has a higher BMI than, ' + john.fullName + '.');
} else {
  console.log("Mark and John's BMI's are the same.");
}

/*----------------- CODE CHALLENGE 4 ----------------*/
for(var i = -10; i < 10; i++)  {
  console.log(i);
}

for (var i = 0; i < 5; i++)  {
  console.log(billAmount);
}
var stan = ['stan', 'smith', 2005, 'programmer', false];

for(var i = 0; i < stan.length; i++)  {
  console.log(stan[3]);
}

