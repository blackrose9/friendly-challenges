let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
PangramChecker = (sentence) => {
   sentence = sentence.split(" ").join("").toLowerCase().split("");
   let checkedAlphabet = []
   let sentenceLength = sentence.length;
   for (let i = 0; i<sentenceLength; i++){
      let letter = (sentence[i]);
      console.log(letter)
      if(alphabet.includes(letter)){
         let a = alphabet.indexOf(letter)
         checkedAlphabet = alphabet.splice(a,1)
      }
      else{
         return "not pangram"
      }
   }
}
// isPangram = (sentence) => {
//    let alphabetLength = alphabet.length;
//    for (let i = 0; i<alphabetLength; i++){}
// }
console.log(PangramChecker("The quick brown fox jumps over the lazy dog"))
// programmatic
// xml