/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var result = area / 2;
console.log(result);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money >= 45000){
    console.log("Laptop");
}
else if(money >= 10000){
    console.log("Cycle");
}
else if(money >= 9999){
    console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for(var i=1; i<= lastDay ; i++){
    if(i % 3 === 0){
        console.log(i+" " +"- medicine");
    }
    else{
        console.log(i+" " +"- rest");
    }
}



/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if(fileName.endsWith(".docx") || fileName.endsWith(".pdf") ||fileName.startsWith("#")){
    console.log("Store");
}
else{
    console.log("Delete");
}


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary;
for(var i=1; i<= experience ;i++){
    currentSalary = currentSalary +currentSalary * 0.05;
}
console.log(currentSalary.toFixed(2));