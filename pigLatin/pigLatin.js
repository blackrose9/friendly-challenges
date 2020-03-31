pigIt = (string) => {
   string = string.split(" ");
   let words = [];

   string.forEach(word => {
      let splitWord = word.split("");
      let lastIndex = splitWord.length;

      if(/[a-zA-Z]/.test(splitWord)){
         splitWord.splice(lastIndex, 0, splitWord[0]+"ay");
         splitWord.splice(splitWord[0],1);
      }
      words.push(splitWord.join(""));
   });
   return words.join(" ");
}
console.log(pigIt('Pig latin is cool'));
console.log(pigIt('O tempora o mores !'));