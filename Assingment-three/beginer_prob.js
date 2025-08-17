// Even odd of an integer
function evenOdd(number){
    if(number % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
const num = evenOdd(56);
console.log(num);

//Sum of an array
function sum(arr){
    let sum = 0;
    for(const num of arr){
        sum += num;
    }
    return sum;
}
const numbers = [5,16,1];
const total = sum(numbers);
console.log(total);

//Reverse a string
function reverse(str){
    let rev = [];
    for(const char of str){
        rev.unshift(char);
    }
   return rev.join('');
}
const word = "hello";
const reve = reverse(word);
console.log(reve);


//Vowels Count 
function vowelsCount(arr){
    let vowels = ["a","e","i","o","u"];
    let count = 0;
    for(const char of arr){
        if(vowels.includes(char) ){
            count ++
        }
    }
    return count ;
}
const lets = "hello"
const count = vowelsCount(lets);
console.log(count);

//Factorial of a Number
function factorial(number){
    let count = 1;
    for(let i = 1; i <= number ;i++){
        count = count * i;
    }
return count;
}
const number = 3;
const fact = factorial(number);
console.log(fact);