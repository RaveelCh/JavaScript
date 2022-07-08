/**
* Q1:
* Print the length of the country name (without using String-length property)
* 
*/
let countryName = 'Pakistan';
let countryNameArray = countryName.split('');
let countryNameLength = countryNameArray.length;
console.log(`The length of country name 'Pakistan' is ${countryNameLength}.`);




/**
* Q2:
* Count the number of words in the sentence
* 
*/ 
const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentenceArray = sentence.split(' ');
let sentenceNumberOfWords = sentenceArray.length;
console.log(`\nThe number of words in the sentence are ${sentenceNumberOfWords}.`)


 
/**
* Q3:
* Convert any 4-word sentence into Titlecase
* 
* 
* 'have a great day'   ->  'Have A Great Day'
* 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
* 
*/
let fourWordSentence1 =  'hAvE a GreAT dAy'
let fourWordSentence1LC = fourWordSentence1.toLowerCase()
let fourWordSentence1LCArray = fourWordSentence1LC.split(' ')
let fourWordSentenceTitlecase = fourWordSentence1LCArray[0].charAt(0).toUpperCase() + fourWordSentence1LCArray[0].slice(1)
fourWordSentenceTitlecase = fourWordSentenceTitlecase +" "+ fourWordSentence1LCArray[1].charAt(0).toUpperCase() + fourWordSentence1LCArray[1].slice(1)
fourWordSentenceTitlecase = fourWordSentenceTitlecase +" "+ fourWordSentence1LCArray[2].charAt(0).toUpperCase() + fourWordSentence1LCArray[2].slice(1)
fourWordSentenceTitlecase = fourWordSentenceTitlecase +" "+ fourWordSentence1LCArray[3].charAt(0).toUpperCase() + fourWordSentence1LCArray[3].slice(1)
console.log(`\nThe TitleCasde of '${fourWordSentence1}' is '${fourWordSentenceTitlecase}'.`)



 
/**
* Q4:
* Create abbreviation for any 4-word sentence
* 
* 'have a great day'   ->  'HAGD'
* 'YOu lIVe ONlY ONcE' ->  'YLOO'
* 'yOu neVER WaLK alOne'   ->  'YNWA'
* 
*/
let fourWordSentence2 = 'YOU arE ThE bEsT';
let fourWordSentence2UC = fourWordSentence2.toUpperCase();
let fourWordSentence2Array = fourWordSentence2UC.split(' ');
let fourWordAbbr = fourWordSentence2Array[0].charAt(0);
fourWordAbbr = fourWordAbbr + fourWordSentence2Array[1].charAt(0);
fourWordAbbr = fourWordAbbr + fourWordSentence2Array[2].charAt(0);
fourWordAbbr = fourWordAbbr + fourWordSentence2Array[3].charAt(0);

console.log(`\nThe abbreviation of '${fourWordSentence2}' is '${fourWordAbbr}'.`)
