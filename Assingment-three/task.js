const products = [
    {name:'Pant', price:400},
    {name: 'shirt',price:600},
    {name:'cap', price: 200}
]

function productsTotal(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;

    }
    return sum;
}
const productTotal = productsTotal(products);
console.log("total taka khoroch holo:",productTotal);