function reduce1(arr){
    let reduced1 = arr.reduce((total,currentVal)=>total + currentVal , 0)
    return reduced1;
}
console.log(reduce1([1, 2, 3, 4, 5]))

function reduce2(arr){
    let reduced2 = arr.reduce((total,currentVal)=>total + currentVal , 0)
    let avr= reduced2 /arr.length 
    let min = arr.reduce((min,current)=>Math.min(min,current))
    let max = arr.reduce((max,current)=>Math.max(max,current))
    return {sum: reduced2, average: avr, min: min, max: max}
}
console.log(reduce2([-1, -2, 0, 2, 1]))

