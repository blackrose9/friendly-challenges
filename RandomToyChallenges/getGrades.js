grades = (marks) => {
   marks.forEach(mark=>{
      if(mark<40){
         console.log("dropped")
      }
      else if(mark<79){
         console.log("repeat")
      }
      else{
         console.log("passed")
      }
   })
}

const marks = [10,20,70,55,5,90,40]
grades(marks);