function multi(numbers){
    let mul = 1 ;
    for (const number of numbers){
        mul = mul * number;

    }
    return mul;
}

const abb =[5,6,1,2];

let result = multi(abb);
console.log(result);


function oddmulti(num){
    if(num %2  === 0 ){
        num = num /2;
    }
    else{
        num = num*2;
    }
    return num;

}
const a = oddmulti(7);
console.log(a);


function make_avg(num ,size){
    let sum = 0 ;
    for (const number of num){
        sum = sum + number;

    }
    let avg = sum / size;

    return avg;
}

const abbs =[4,6,1,1];

let results = make_avg(abbs, abbs.length);
console.log(results);


function count_Zero(binaryString){
    let count = 0;
    for(const char of binaryString){
        if(char === '0'){
            count += 1;
        }
    }
    return count;
}

const abc = "111100000110101010";
const resul = count_Zero(abc);
console.log(resul);


function odd_even(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


console.log(odd_even(10)); 
console.log(odd_even(7));  
