let addFunction = addFunc = (number) => {
   //debugger;
     var total = 0;
     let arr = [];
     arr = splitNumberFunction(number);
      arr.forEach(digit => {
         total += digit;
      });
      if (total > 9){
         return addFunction(total);
      } else {
            return total;
      }
   }
   
   let splitNumberFunction = splitFunc = (number) => {
   number = number.toString();
      let arrayOfNums = [];
     for(i=0;i<number.length;i++){
        arrayOfNums.push(+number.charAt(i));
     }
     return arrayOfNums;
   }
   
   digitalroot = (number) => {
      return addFunction(number);
   }
   
   console.log(digitalroot(12) + " i'm the answer");
   console.log(digitalroot(942) + " i'm the answer");
   console.log(digitalroot(493193) + " i'm the answer");