//Raveel Taimoor HomeWork2

const sentence1 = 'Hello dear, how are you doing?';

/**
* if the length of sentence1 is greater than or equals to 10
*      assign 15 in result1
* otherwise
*      assign 25 in result1
*/
 
let lengthOfSentence1 = sentence1.length ;

let result1 = lengthOfSentence1 >= 10 ? 15 : 25;

console.log(`result1 -> ${result1}`);





const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
  
//replace all instances of a/A with 'Alpha', print the result in console
  let sentence2_Replace_All_a_Alpha_IgnoreCase = sentence2.replace(/a/gi, 'Alpha');

console.log(`\nsentence2_Replace_All_a_Alpha_IgnoreCase -> ${sentence2_Replace_All_a_Alpha_IgnoreCase}`);





const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 
// print the result in console:
// 1. the length of sentence3
let lengthOfSentence3 = sentence3.length;

console.log (`\nThe length of Sentence3 is ${lengthOfSentence3}`);





// 2. does sentence3 starts with 'health' (ignore cases)
let startsWithHealth = 'health';

let sentence3LowerCase = sentence3.toLowerCase();

let sentence_StartsWith = sentence3LowerCase.startsWith('health');

console.log(`Does Sentence3 starts with 'health' --> ${sentence_StartsWith}`);





// 3. does sentence3 contains 'Body' (ignore cases)
let sentence3Contains = sentence3LowerCase.includes('body');

console.log(`Does Sentence3 contains 'Body' --> ${sentence3Contains}`);





// 4. index of 'Body' in sentence3  (ignore cases)
let indexOfBody = sentence3LowerCase.indexOf('body');

console.log(`The index of 'body' in Sentence3 is ${indexOfBody}`);





// 5. the last-character in sentence3
let lastIndex = sentence3.length-1;

let lastCharacterInSentence3 = sentence3.charAt(lastIndex);

console.log(`The last character of Sentence3 is '${lastCharacterInSentence3}'`);





// 6. word 'Body' is present only once. (true or false)
let bodyPresentOnce = sentence3LowerCase.indexOf('body') === sentence3LowerCase.lastIndexOf('body');

console.log(`The word 'Body' is present only once --> ${bodyPresentOnce}.`);

