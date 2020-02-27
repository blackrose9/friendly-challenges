/* debugger; */

containsNumber = (intnum, key) => {
	for(let i=0; i<=intnum; i++){
		let strnum = i.toString();
    let strkey = key.toString();

    if(strnum.includes(strkey)){
       console.log(strnum);
    }
	}
}

containsNumber(100,5);