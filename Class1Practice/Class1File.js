console.log('Hello World!')

let myAge = 24
let myName = 'Raveel'
let myFav = null

console.log (myName)



/**
 * null = empty
 * undefined = which is undefined
 * 
 * number = all number are consdidered numbers, with/without decimal
 * 
 * string = any value enclosed in single or double quotes
 * 'hello' "hello world"
 * 
 * boolean = true or false
 * 
 * array = can store one or more values at a time
 * 
 * object = holds key value pair
 * name
 * age
 * location
 * gender
 * courses
 * 
 * 
 * 
 * 
 */




let arrayNum1 = [1, 2, 3, 4, 5]
let totalOfArray1 = 0
let totalValues = arrayNum1.length
let averageOfArray = ''
for (let u = 0 ; u <= arrayNum1.length-1 ; u++) {
    averageOfArray = (totalOfArray1 += arrayNum1[u]) / totalValues
}
 console.log(averageOfArray)
 