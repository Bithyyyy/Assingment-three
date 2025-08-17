/** Problem -02 ( Cycle or Laptop ) */
var money = 1;
//write your code here
if(money >= 45000){
    console.log("Laptop");
}
else if(money >= 10000){
    console.log("Cycle");
}
else if(money <= 9999){
    console.log("Chocolate");
}

for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}