/* let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; */
let alphabet = ["j","a","v","a","s","c","r","i","p","t"]
let vowelArray = ["a","e","i","o","u"];
let vowels = [];
let vowelnot = [];
let letter;
length = alphabet.length;
// console.log(length);

/* for (let r = 0; r<length; r++){
  if(alphabet[r]==a||e||i||o||u){
    vowels=push.alphabet[r];
  }
  else{
    vowelless=push.alphabet[r];
  }
  console.log(vowels[r] + "\n");
} */
/* let even = []
let odd = []
for (let r=0; r<length; r++){
  if(r%2==0){
    even.push(r);
    console.log(even[r] + "\n");
  }
  else{
    odd.push(r);
  }
  console.log(odd[r] + "\n");
  return
} */

//-------------------------------------------------------
/* debugger; */
for (let r = 0; r<length; r++){
letter = alphabet[r];
  if (vowelArray.includes(letter)){
    console.log(letter + "\n")
    vowels.push(alphabet[r]);
  }
  else{
  vowelnot.push(alphabet[r]);
  }
}
let i = 0;
while(i<vowelnot.length){
	console.log(vowelnot[i] + "\n")
  i++
}

/* -------------------------------------------------------------- */

/* for (let r = 0; r<length; r++){
  vowelless = alphabet.split"a","e","i","o","u")
  console.log(vowelless + "\n")
}
 */
