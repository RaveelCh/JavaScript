/**
* Q1:
* Convert any sentence into Titlecase
* 
* 'have a great day'   ->  'Have A Great Day'
* 'YOu lIVe ONlY ONcE' ->  'You Live Only Once' 
* 'gooD mORNIng' -> 'Good Morning'
* 'apple banana cherry' -> 'Apple Banana Cherry'
*/
function titleCase(anySentence) {
let anySentenceLCArray = anySentence.toLowerCase().split(' ')
let titleCaseSent = '';
for (let a=0 ; a <= anySentenceLCArray.length-1 ; a++) { 
    titleCaseSent = titleCaseSent + anySentenceLCArray[a].charAt(0).toUpperCase() + anySentenceLCArray[a].slice(1) +' ' 
}
return titleCaseSent
}
let anySentence = 'i Am from laHORE pAkistan, in aSIA.'
console.log(titleCase(anySentence))



/**
* Q2:
* Reverse a String (word by word)
* 
* 'have a great day'   ->  'day great a have'
* 'good morning'   -> 'morning good'
* 'hello dear how are you doing' -> doing you are how dear hello'
* 'Learn' -> 'Learn'
*/
function reverse(anyString) {
let anyStringA = anyString.split(' ')
let revString = '';
for (let i = anyStringA.length-1 ; i >= 0 ; i--) {
    revString = revString  + anyStringA[i] + ' '
} 
return revString
}
let anyString = ('Have a good day kind sir.')
console.log(reverse(anyString))
 
 
 
 
/**
* Q3:
* Find the total of numbers in the array
* 
* [1, 2, 3, 4, 5] -> 15
* [1, 1, 1, 2, 3, 1, 2] -> 11
* [1, -1] -> 0
*/
function sum(arrayNum) {
let totalOfArray = 0
for (let o = 0 ; o <= arrayNum.length-1 ; o++) {
   totalOfArray += arrayNum[o]
} 
return totalOfArray
}
let arrayNum = [1, 1, 12, 1, 2, 3, 5, 1, 2]
console.log(sum(arrayNum))
 
 
 
 
 
/**
* Q4:
* Find the average of the given array:
* 
* avg = totalOfValues/numberOfValues
* 
* [1, 2, 3, 4, 5] -> 15/5 -> 3
* [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
* [1, -1] -> 0/2 -> 0
*/
function average(arrayNum1) {
let totalOfArray1 = 0
let totalValues = arrayNum1.length
let averageOfArray = ''
for (let u = 0 ; u <= arrayNum1.length-1 ; u++) {
    averageOfArray = (totalOfArray1 += arrayNum1[u]) / totalValues
}
return averageOfArray
}
let arrayNum1 = [1, 2, 6, 4, 5]
  console.log(average(arrayNum1))
