anagrams = (word, words) => {
   let anagrams = [];
   word=word.split("")
   let eheh = words.filter(one => {
      let badpoints=0;
      console.log(word)
      // word.foreach(letter => {
      //    if(!(one.contains(letter))){
      //       badpoints+=1;
      //    }
      // })
      if(badpoints==0){
         anagrams.push(one);
      }
   });
   return eheh;
}

console.log(anagrams("abba", ["bbaa", "abcd", "aabb", "dada"]));