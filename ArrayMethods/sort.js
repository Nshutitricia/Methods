function sort1(arr){
    let sorted1 = arr.sort((a,b) => a-b)
    return sorted1;
}
console.log(sort1( [23, 12, 45, 6, 2, 91, 34]));

function sort2(arr){
   let sorted2 = arr.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
   return sorted2
}
console.log(sort2(['John', 'alice', 'Bob', 'david', 'Charlie']));


function sort3(arr){
    let sorted3 = arr.sort((a,b)=> b.price - a.price)
    return sorted3;
}
console.log(sort3([
    { name: 'Laptop', price: 999 },
    { name: 'Phone', price: 699 },
    { name: 'Tablet', price: 399 },
    { name: 'Smartwatch', price: 199 },
    { name: 'Headphones', price: 99 }
]))

function sort4(arr){
    let sorted4 = arr.sort((a,b)=> 
        b.grade!== a.grade ? b.grade - a.grade : a.name.localeCompare(b.name)
    )
    return sorted4;
}
console.log(sort4([ { name: 'John', grade: 85, age: 16 },
    { name: 'Alice', grade: 85, age: 15 },
    { name: 'Bob', grade: 92, age: 17 },
    { name: 'Carol', grade: 78, age: 16 },
    { name: 'David', grade: 92, age: 15 }]))
    

function sort5(arr){
    let count = (word) => word.match(/[aeiouAEIOU]/g)?.length || 0;
    let sorted5 = arr.sort((a,b)=>
        a.length !== b.length ? a.length - b.length :
        count(b) - count(a) !==0 ? count(b)-count(a):
        a.localeCompare(b)
    )
    return sorted5
}
console.log(sort5([
    'hello','world','apple','piece','stand','brain','explained','corporate'
]))