songDecoder = (song) => {
   let noWUBstring = song.replace(/WUB/g, " ") // replaces all WUBs with spaces
   return noWUBstring.replace(/\s+/g, " ").trim(); //removes multiple spaces and replaces them with one space

//   return song.replace(/(WUB)+/g, " ").trim(); //this line does both things in one go (not my solution)
}
console.log (songDecoder("AWUBBWUBC"));
console.log (songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
console.log (songDecoder("WUBAWUBBWUBCWUB"));