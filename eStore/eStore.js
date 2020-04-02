function featuredProduct(products) {
   // Write your code here
   products.sort();
   let isProduct = []
   let productOccur = {}
   products.forEach(product => {
       if(!(isProduct.includes(product))){
           isProduct.push(product);
           productOccur[product] = 1;
       }
       else{
           productOccur[product] = [key+1];
       }
   });
   Object.keys(productOccur).sort((a,b)=>a-b).forEach(function(key){
       if(productOccur.key){}
   })
}
    featuredProduct("yellowShirt","redHat","blackShirt","bluePants","redHat","pinkHat","blackShirt","yellowShirt","greenPants","greenPants","greenPants")

    //hashmaps