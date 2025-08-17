const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reversed=[];

for(let i =0; i<colors.length;i++){
    reversed.unshift(colors[i]);
}
console.log(reversed);
console.log(colors.reverse());


const numbers = [12, 98, 5, 41, 23, 78, 46];
const even = [];
for(let i =0; i<numbers.length;i++){
    if(numbers[i] % 2 === 0){
        even.push(numbers[i]);

    }
    else{

    }
}
console.log(even);


var number = ['Tom', 'Tim', 'Tin', 'Tik'];
var result = '';

for (let name of number) {
    result = result.concat(name);
}

console.log(result);


const statement = 'I am a hard working person'
const results = statement.split(' ');

console.log(results);


const statements = 'I am a hard working person';

const resut = statements.split(' ').reverse().join(' ');

console.log(resut);
// Output: 'person working hard a am I'


const students =[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
for(const student of students){
    console.log(student.name + " scored "+ student.marks);
}

let original= [1, 2, 3];
//let copy = [...original];
let copy = original.slice();
copy[0] = 99;
copy[1] = 10;
console.log(original);
console.log(copy);


const nums=[
  [1, 2],
  [3, 4],
  [5, 6]
]
console.log(nums);
nums[1][0] = 99;
console.log(nums);

