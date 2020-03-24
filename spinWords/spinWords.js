function spinWords(sentence){
   let splitSentence = [];
    splitSentence = sentence.split(" ");
    let spanSentence = [];
    let sentenceLength = splitSentence.length
 
    for(let i=0; i<sentenceLength; i++){
       let word = splitSentence[i]
       if(word.length>=5){
          spanSentence.push(word.split("").reverse().join(""));
       }
       else{
          spanSentence.push(word)
       }
    }
    return spanSentence.join(" ");
 }