// with --
let sumOfMultiples = sum = (x) => {
   //debugger;
   let total = 0;
      for(let number=x; x>0; x--){
         
         /* (x%3==0 && x%5==0) ? total+=x : (x%3==0) ? total+=x : (x%5==0) ? total+=x : x--; */
         
         if(x%3==0 && x%5==0){
             total+=x;
         } 
         else if(x%3==0){
             total+=x;
         }
         else if(x%5==0){
             total+=x;
         }
      }
      return total;
   }
   console.log(sumOfMultiples(10));
   
   // ................................

   //with ++
   let sumOfMultiples = number = (x) => {
      //debugger;
      let total = 0;
         for(let x=0; x<=number; x++){
            
            /* (x%3==0 && x%5==0) ? total+=x : (x%3==0) ? total+=x : (x%5==0) ? total+=x : x++; */
            
            if(x%3==0 && x%5==0){
                total+=x;
            } 
            else if(x%3==0){
                total+=x;
            }
            else if(x%5==0){
                total+=x;
            }
         }
         return total;
      }
      console.log(sumOfMultiples(10));