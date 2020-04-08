// split the input - "1 beer" -(\d)
// ["1", "beer"]
// toInt???
// loop through array
// at each digit, get digit value add it to glassofwater
// display glassofwater glass of water

Drinkin = (drinkString) => {
   let splitdrinks = drinkString.split("/d");
   let waters = 0;
   splitdrinks.forEach(drink => {
   let num = parseInt(drink);
   if(!isNaN(num)){
   		waters += num;
   }
   })
   return waters;
}
console.log(Drinkin("1 shot") + " glasses of water");