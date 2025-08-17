//Palindrome Checker
function palindromeChecker(arr){
    let reversed ="";
    for(const char of arr){
        if(char){
            reversed = char + reversed;  
        }
    }
    if(reversed === arr){
        return true; 
    }
    return false;
}
const word = "noon";
const palindrome = palindromeChecker(word);
console.log(palindrome);

//Find the Largest Number in an Array
function largest(arr){
    let first = arr[0];
    for(const char of arr){
        if(char > arr[0] ){
            first = char;
        }
    }
    return first;
}
const numbers =[1,6,5];
const lar = largest(numbers);
console.log(lar);

//Remove Duplicates from an Array
function duplicateRemove(arr){
    let unique = [];
    for(const char of arr){
        if(unique.includes(char) === false){
            unique.push(char);
        }
    }
    return unique ;
}
const num =[9,9,7,5,4,4,4,4];
const remove = duplicateRemove(num);
console.log(remove);

//FizzBuzz
for(let i = 1; i<=100 ; i++){
    if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
       console.log(i);
    }
}

//Anagram Checker.
function isAnagram(str1, str2) {
    
    let s1 = str1.toLowerCase().split('').sort().join('');
    let s2 = str2.toLowerCase().split('').sort().join('');
    
    return s1 === s2;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));   
