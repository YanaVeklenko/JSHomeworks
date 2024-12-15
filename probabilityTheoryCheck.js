function checkProbabilityTheory(count){
 var countOfOddNumbers = 0;
 var countOfEvenNumbers = 0;
 for (let i = 0; i < count; i++) { 
   let randomNumber = Math.round(100 + (Math.random() * 900));
   if (randomNumber % 2 === 0) { countOfEvenNumbers += 1; } else {  countOfOddNumbers += 1; }
 }
 let evenPercentage = (countOfEvenNumbers / count * 100).toFixed(2);
 let oddPercentage = (countOfOddNumbers / count * 100).toFixed(2);
 console.log("generatedNumbersCount = ", count, "countOfOddNumbers = ", countOfOddNumbers, "countOfEvenNumbers = ", countOfEvenNumbers, "evenPercentage = ", evenPercentage, "oddPercentage = ", oddPercentage );
}

checkProbabilityTheory(55);
