spinWords = (sentence) => {
   let splitSentence = [];
   splitSentence = sentence.split(" ");
   let spanSentence = [];
   spanSentence.push(splitSentence[0]);
   console.log(splitSentence);

   for(let i=1; i<splitSentence.length; i++){
      let reversedWord = splitSentence.splice(i,1);
      console.log(reversedWord);
      spanSentence.push(reversedWord.reverse());
      console.log(spanSentence);
   }
   return sentence;
}

console.log(spinWords("Stop Spinning My Words"));