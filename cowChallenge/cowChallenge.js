productionPerDay = cowProduce = () => {
   const litresPerShed = {A: 510, B: 308, C: 486, D: 572};
   let totalProduction=0;
   for (const shed in litresPerShed) {
       console.log(`Your production in Shed ${shed} ${litresPerShed[shed]} litres per day`);
       totalProduction+=litresPerShed[shed];
   }
   console.log(`The total production is ${totalProduction} litres per day`);
   return totalProduction;
}

calculate = calc = (sellingPrice, time, totalProduction) => {
   let income;
   income = totalProduction * time * sellingPrice;
   return income;
}

incomeOverTime = (sellingPrice, time) => {
   let totalProduction = productionPerDay();
   let income = calculate(sellingPrice, time, totalProduction);
   if(time == 7){
       console.log("Your weekly income will be Ksh " + income);
   }
   else if (time <= 31 && time >=28){
       console.log("Your monthly income will be Ksh " + income);
   }
   else if (time == 365 || time == 366){
       console.log("Your yearly income will be Ksh " + income);
   }
   else {
       console.log("Your custom time income will be Ksh " + income);
   }
}

incomeOverTime(45, 7);
console.log("\n")
incomeOverTime(45, 14);
console.log("\n")
incomeOverTime(45, 29);
console.log("\n")
incomeOverTime(45, 366);