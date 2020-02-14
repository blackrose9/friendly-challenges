findNumberDivisibleByThree=(num)=>{
	/* if (num%3 == 0){
	  return "Foo"
	  }
	  else{
	  return "Bar"
	  }
	  return "what you want" ? "first return" : "default" */
    
  return  (num%3 == 0) ? "foo" : (num%2 == 0) ? "bar" : "foobar"
}

console.log(findNumberDivisibleByThree(9))