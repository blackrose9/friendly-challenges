let scores = [2,3,6,6,5];
scores.sort();
let highscore = 0;

checkScores = (score) => {
   // find highest score
   // arrange array in descending order
   // search array from 0 if n is LESS than highscore then print n as runner up

   if(score<highscore){
      alert("Hey there runner up " + score)
   }
   else{
      alert("how?")
   }
}