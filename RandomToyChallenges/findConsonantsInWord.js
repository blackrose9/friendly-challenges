findNumberOfConsonants = (userword) => {
   const vowelArray = ['a', 'e', 'i', 'o', 'u']
   let consonantArray = []
   let word = userword.toLowerCase().split("")
   console.log(word)

   word.forEach(character => {
      if(!(vowelArray.includes(character))){
         consonantArray.push(character)
   }
   })
   console.log(consonantArray)
}
findNumberOfConsonants("hEllO")

findNumberOfConsonants = (userword) => {
   const vowelArray = ["a", "e", "i", "o", "u"]
   /* const vowelArray = ['a', 'e', 'i', 'o', 'u'] */
   let consonantArray = []
   let ourVowels = []
   let word = userword.toLowerCase().split("")
}

   // this was various attempts at the solution with no solution
//    debugger;
//    for(let i = 0; i<word.length; i++){
//         for(let j = 0; j<vowelArray.length; j++){
//           /* let letter = word[i];
//           let vowel = vowelArray[j]; */
//               if(word[i] != vowelArray[j] && consonantArray.includes(word[i]) && vowelArray.includes(word[i])){
//               		console.log(word);
//               		consonantArray.push(word);
//               }
//               else{
              	
//               }
//               /* else{
//                 consonantArray.push(word[i]);
//               } */
//       }
//    }
   
//    /* for(let i = 0; i<word.length; i++){
//         for(let j = 0; j<vowelArray.length; j++){
       
//       let letter = word[i];
//       let vowel = vowelArray[j];
//           if(vowel != word && j == vowelArray.length){
//               consonantArray.push(word[i]);
//               console.log(word[i]);
//               break;
//           }
//           break;
//       }
//    } */
   
//    /* for(let j = 0; j<word.length; j++){
//        for(let i = 0; i<word.length; i++){
//            if(vowelArray[j] == word[i]){
//               console.log(word[i])
//           }
//           else{
//             consonantArray.push(word[i])
//           }
//       }
//    } */
   
   
//    console.log(consonantArray)
// }
// findNumberOfConsonants("hElo")