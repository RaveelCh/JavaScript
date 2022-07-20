let theDay = 'mon'
let theDayLC = theDay.toLowerCase()

switch (theDayLC) {
    case 'mon':
        console.log(`"Today is the Technosoft class"`) 
        break;
    case 'tue':
        console.log(`"Today is self learning day"`)
        break;
    case 'wed':
        console.log(`"Today is the Technosoft class"`)
        break;
    case 'thu':
        console.log(`"Today is self learning day"`)
        break;
    case 'fri':
        console.log(`"Today is the Technosoft class"`)
        break;
    case 'sat':
        console.log(`"Today is lab session day"`)
        break;
    case 'sun':
        console.log(`"No study today"`)
        break;
                        
    default:
        console.log(` "Entered day-value is not valid"`)
        break;
}




let sports = ['Football','Soccer','Basketball','Baseball','Rugby']
for (let counter = 0 ; counter , counter <= sports.length-1 ; counter+=3) {
    console.log(sports[counter])
}


/**
 * Create abbreviation for any sentence
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY' ->  'YLO'
 * 'yOu neVER WaLK alOne in liFe'   ->  'YNWAIL'
 * 'good Morning'   -> 'GM'
 * 
 */

let sentence = 'have  a great day sure'
let abbr = ' '
let sentUP = sentence.toUpperCase()
let sent = sentUP.split(' ')
console.log(sent)

for (let i=0 ; i <= sent.length-1 ; i++ ) {
    abbr = abbr + sent[i].substring(0,1)
}
console.log(abbr)

const sports2 = ['Football', 'Soccer', 'Basketball', 'Baseball', 'Rugby']
for(counter = sports.length - 1; counter >= 0; counter--){
    console.log(sports2[counter]);
}