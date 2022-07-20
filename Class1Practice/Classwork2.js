let yourName = ''
let yourNameLC = yourName.toLowerCase()

if (yourName === 'happy') {
    console.log(`good name`)
} else if (yourNameLC === 'joy') {
    joyLength = yourName.length
    console.log(`Name is ${yourName} and the lenght is ${joyLength}. "Your name is too short" `)
} else if (yourNameLC === 'john') {
    console.log (yourName.toUpperCase())
} else {
    console.log (`You have a different name then we expected.`)
}