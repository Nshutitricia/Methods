function map1(arr){
    let mapped1 = arr.map(n=>n**2)
    return mapped1;
}
console.log(map1([2, 4, 6, 8, 10]));


function map2(arr){
    return arr.map(n=>{
       const ma = n.toUpperCase()
       return `name: ${ma}, length: ${ma.length}`;
    })
}
console.log( map2(['alice', 'bob', 'charlie']))

function map3(arr){
    let mapped3 = arr.map(n=>{
        let grades = n.grade>=90 ? "A" : 
        n.grade>=80 ? "B" :
        n.grade>=70 ? "C" :
        n.grade>=60 ? "D" :
        "F"
        return {names : n.name , grade:grades}
    })
    return mapped3;
}
console.log(map3( [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 } ]
))

function map4(arr){
    let mapped4 = arr.map(n=>{
       let discounted = n.price - n.price*0.2
        let final = discounted + discounted * 0.10
        return {namess:n.name, price: n.price, discounted:discounted, final:final}
    })
    return mapped4;
}
console.log(map4( [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
  ]))

  function map5(arr){
    let mapped5 = arr.map(n=>{
        return `fullName: ${n.details.firstName} ${n.details.lastName} displaInfo: (${n.details.age}) - ${n.details.email} , id:${n.id}`
    })
    return mapped5;
  }
  console.log(map5( [
    {
      id: 1,
      details: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        email: 'john@example.com'
      }
    },
    {
      id: 2,
      details: {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 25,
        email: 'jane@example.com'
      }
    }
  ]))