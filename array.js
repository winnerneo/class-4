let users = [
    { 
        name: 'John',
        age: 50,
        },
        
{
    name: 'Fred' ,
    age: 45
}
]
for (let i = 0; i < users.length; i++ ) 
{
console.log(users[i].age);
}

users.forEach(function (val){
    console.log(val)
})

for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}
  