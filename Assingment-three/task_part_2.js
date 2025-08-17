function lowestnumbers(numbers){
    let lowest = numbers[0];
    for(const num of numbers){
        if( lowest > num){
            lowest = num;
        }
    }
    return lowest;

}
const heights2 = [167, 190, 120, 156, 137];
const lowest = lowestnumbers(heights2);
console.log(lowest);



function lowestName(str){
    let lowest = str[0];
    for (const char of str){
        if(lowest.length > char.length){
            lowest = char;
        }
    }
    return lowest;
}
const heights1 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const small = lowestName(heights1);
console.log(small);




function calculateElectronicsBudget(laptopCount, tabletCount,mobileCount){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const total = laptopCount * laptopPrice +
                   tabletCount * tabletPrice +
                   mobileCount * mobilePrice ;

    return total;
}

const total = calculateElectronicsBudget(1,1,1);
console.log(total);




function phonesTotalPrice(arr){
    let totalP = 0;
    for(const char of arr){
        if(char.price){
            totalP = totalP +char.price;
        }
    }
    return totalP;
    
}

const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];


const totalU = phonesTotalPrice(phones);
console.log(totalU);



function totalMonthlySalary(employees) {
    let total = 0;

    for (const emp of employees) {
        let currentSalary = emp.starting + (emp.increment * emp.experience);
        total += currentSalary;
    }

    return total;
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

console.log(totalMonthlySalary(employees)); // 146000















