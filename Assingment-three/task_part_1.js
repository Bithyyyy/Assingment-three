// function celsiusToFahrenheit(number){
//     let F = (9/5)*number+32;
//     return F;

// }

// const fahrenheit = celsiusToFahrenheit(42);
// console.log(fahrenheit);

// function repeatCount(numbers){
//     let seen = [];
//     let count = 1;
//     for(const number of numbers){
//         if (seen.includes(number)) {
//             count++;
//         } else {
//             seen.push(number);
//         }

//     }
//     return count;
// }

// const numbers = [5,6,11,5,98,5];
// const repeatCounts = repeatCount(numbers);
// console.log(repeatCounts);


// function countVowels(str){
//     let vowels = ['a','e','i','o','u'];
//     let count =0;
//     for (const char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// const totalVowels = countVowels("aeiou");
// console.log(totalVowels);

function countLongest(str){
    let words = str.split(" ")
    let longestWord = "" ;
    for (const word of words){
        if(word.length > longestWord.length){
            longestWord = word; 
        }
    }
    return longestWord;

}
const long = countLongest("I am learning progarmming to become a progaramer");
console.log(long);

const arr =[];
for (let i = 10; i<=20 ;i++){
    arr.push(i);
}
console.log(arr);
let num = Math.floor(Math.random(arr)*arr.length);
console.log(num);