function filter1(arr){
    let filtered1 = arr.filter(n=>n>0)
    return filtered1
}
console.log(filter1([-3, 5, -1, 0, 8, -4, 7]))

function filter2(arr){
    let filtered2 = arr.filter(n=>n.length >5)
    return filtered2;
}
console.log(filter2(['cat', 'dog', 'elephant', 'fox', 'butterfly']));

function filter3(arr){
    let filtered3 = arr.filter(n => n.age > 18)
    return filtered3;
}
console.log(filter3([
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 19 }
  ]));
  

  function filter4(arr){
    return arr.filter(n=>{
        if(n<=1){
            return false
        }
        for(i=2; i<=Math.sqrt(n);i++){
            if(n%i===0)return false
        }
        return true
    })
  }
  console.log(filter4( [1, 2, 3, 4, 5, 6]))

  function filter5(arr){
    let filtered5 = arr.filter(n=>n.amount>40)
    return filtered5;
  }
  console.log(filter5( [
    { type: 'purchase', amount: 50, category: 'groceries' },
    { type: 'sale', amount: 100, category: 'electronics' },
    { type: 'purchase', amount: 30, category: 'books' },
    { type: 'purchase', amount: 45, category: 'clothes' }
  ]));
  