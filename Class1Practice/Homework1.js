/**Raveel Taimoor HomwWork1
 * 
 * 
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Due Date: Jul-3 EOD
 * 
 */


// F -> C
// T(°C) = (T(°F) - 32) × 5/9
let fTemp1 = 90;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);


// C -> F
// T(°F) = T(°C) × 1.8 + 32
let cTemp2 = 33;
let fTemp2 = (cTemp2 * 1.8 + 32);
console.log(`\n${cTemp2}°C is equals to ${fTemp2}°F`);


// C -> K
// T(K) = T(°C) + 273.15
let cTempA = 27.5;
let kTempA = (cTempA + 273.15);
console.log(`\n${cTempA}°C is equals to ${kTempA}°K`);


// K -> C
// T(°C) = T(K) - 273.15
let kTempB = 288.15;
let cTempB = (kTempB - 273.15);
console.log(`\n${kTempB}°K is equals to ${cTempB}°C`);


// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let fTemp3 = 107;
let kTemp3 = ((fTemp3 + 459.67) * 5/9 );
console.log(`\n${fTemp3}°F is equals to ${kTemp3}°K`);


// K -> F
// T(°F) = T(K) × 9/5 - 459.67
let kTemp4 = 300;
let fTemp4 = (kTemp4 * 9/5 - 459.67);
console.log(`\n${kTemp4}°K is equals to ${fTemp4}°F`);

