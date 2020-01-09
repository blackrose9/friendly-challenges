let score = [2,3,6,6,5];

score.sort((a,b)=>b-a); // sort array in decending order
let scorelength = score.length; // find size of the score array

// search array from 1, if n is LESS than highscore then print n as runner up
for(let n=1;n<scorelength;n++){
  if(score[n]<score[0]){
   // log the runner up that meets the condition and end the loop
    console.log("Runner up is " + score[n]);
    return;
  }
  else{
  }
}