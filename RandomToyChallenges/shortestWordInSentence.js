shortestWordInSentence = (sentence) => {
  splitsen = sentence.split(" ");
  let wordObj = {}
  let orderedWordObj = {}

  splitsen.forEach(word => {
    wordObj[word.length] = word;
  });
  // console.log(JSON.stringify(wordObj));

  Object.keys(wordObj).sort((a,b)=>a-b).forEach(function(key){
    orderedWordObj[key] = wordObj[key];
  });
  // console.log(JSON.stringify(orderedWordObj));
  
  console.log("The shortest word is " + Object.values(orderedWordObj)[0]);
}

shortestWordInSentence("hey is everything sarah")