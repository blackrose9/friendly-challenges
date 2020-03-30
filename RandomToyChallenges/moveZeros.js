moveZeros = (randomArr) => {
   let lastIndex = randomArr.length;
   randomArr.forEach(element => {
      (element===0) ? randomArr.splice(lastIndex, 0, element) && randomArr.splice(randomArr.indexOf(element),1) : null;
   });
   // for(let a=0; a<lastIndex;a++){
   //    let element = randomArr[a];
   //    if(element===0){
   //       randomArr.splice(lastIndex, 0, element);
   //       randomArr.splice(randomArr.indexOf(element),1);
   //    }
   // }
   
   return randomArr;
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));