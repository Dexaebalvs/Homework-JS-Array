// Conditia de baza
let initialValues = ['string', 27, 13, 100, true, false, undefined, null, 'Sparta'];
// 1.
let otherValues = ['Leonidas', 300, false, 1]
// 2.
initialValues.push(otherValues);
console.log(initialValues);
// 3.
let numbersArray = initialValues.filter(digit => typeof digit === 'number');

let addedArray = [];

for (let i = 0; i < numbersArray.length; i++) {
    addedArray.push(numbersArray[i] + 10);
}
console.log(addedArray);
// 4.
initialValues.splice(1, 3, addedArray[0], addedArray[1], addedArray[2]);
console.log(initialValues);
// 5.
let stringsArray = initialValues.filter(string => typeof string === 'string');
let concatStringArray = [];
for (let i = 0; i < stringsArray.length; i++) {
    concatStringArray.push(stringsArray[i] + 'happy coding');
}
console.log(concatStringArray);
// 6.
let booleanArray = initialValues.filter(boolean => typeof boolean === 'boolean');
let oppositeBooleanArray = [];
console.log(booleanArray);
for (let i = 0; i < booleanArray.length; i++) {
    oppositeBooleanArray.push(!booleanArray[i])
}
console.log(oppositeBooleanArray);