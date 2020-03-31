pigIt = (string) => {
   string = string.split(" ");
   let words = [];

   string.forEach(word => {
      let splitWord = word.split("");
      //if you want to process that is connected to a symbol.
      //if at beginning(index0) or end(index[end]) of the word has a symbol
      //splice symbol and put it in a variable
      //add variable at the end of the word after swapping and adding ay
      let lastIndex = splitWord.length;

      if(/[a-zA-Z]/.test(splitWord)){
         splitWord.splice(lastIndex, 0, splitWord[0]+"ay");
         splitWord.splice(splitWord[0],1);
      }
      words.push(splitWord.join(""));
   });
   return words.join(" ");
}
console.log(pigIt('Pig latin !is cool'));
console.log(pigIt('O tempora o mores !'));