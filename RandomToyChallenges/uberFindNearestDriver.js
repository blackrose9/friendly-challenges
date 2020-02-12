findNearestDrivers=(origin, drivers)=>{
	let rangeDistanceObj = [];
  let results = [];
  drivers.forEach(driver => {
  	rangeDistanceObj.push({name: driver.name, approxDistance: driver.location - origin})
  })
  //drivers.sort((a,b) => a.approxDistance - b.approxDistance)
//   drivers.sort((a,b) =>())
  
  console.log(rangeDistanceObj)
  for(let i=0;i<=1;i++){
  results.push(rangeDistanceObj[i])
  }
}

const drivers= [
  {name: "Henry", location: 100},
  {name: "Lawrence", location: 20},
  {name: "Belle", location: 120}
]

findNearestDrivers(20, drivers)

// this is broken code