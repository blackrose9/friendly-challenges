//with ++
let sumOfMultiples = sum = (number) => {
    //debugger;
    let total = 0;
    for (let i = 0; i < number; i++) {
        (i % 3 == 0 && i % 5 == 0) ? total += i : (i % 3 == 0) ? total += i : (i % 5 == 0) ? total += i : null;
//         // if(i%3 === 0 && i%5 === 0){
//         //     total+=i
//         // }
//         // else if(i%3===0){
//         //     total+=i
//         // }
//         // else if(i%5===0){
//         //     total+=i
    }
    return total;
}
console.log(sumOfMultiples(10));

// ................................................

// with --
// let sumOfMultiples2 = sum = (number) => {
//     //debugger;
//     let total = 0;
//     for(let x=number-1; x>0; x--){

//         (x%3==0 && x%5==0) ? total+=x : (x%3==0) ? total+=x : (x%5==0) ? total+=x : null;

//         // if(x%3==0 && x%5==0){
//         //     total+=x;
//         // }
//         // else if(x%3==0){
//         //     total+=x;
//         // }
//         // else if(x%5==0){
//         //     total+=x;
//         // }
//     }
//     return total;
// }
// console.log(sumOfMultiples2(10));