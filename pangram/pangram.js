let alphabet1 = "abcdefghijklmnopqrstuvwxyz"
let alphabet = /([a-z])(?!.*\1)/g;
PangramChecker = (sentence) => {
   return (sentence.toLowerCase().match(alphabet).length === 26);
}
console.log(PangramChecker(alphabet1))


let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let alphabet1 = "abcdefghijklmnopqrstuvwxyz"
PangramChecker = (sentence) => {
   debugger;
   sentence = sentence.toLowerCase();
   alphabet.forEach(letter => {
      debugger;
      console.log(letter);
      if(!(sentence.includes(letter))){
         return false;
      }
   });
   return true;
}
console.log(PangramChecker("The quick brown fox jumps over the lazy dog"))