function myfunction(){
    document.getElementById('demo').innerHTML ="The Paragraph has changed"
}
document.write("emeka");
//window.alert("frontend")
console.log(900);
 
var x = 5;
let y = 6; 

var z = x + y;

console.log(z) 

var person ='Winner' ; //string data type
var age = 15 ; //you dont need any qoute
var rightWrong = true; //its either true or false 
var numChildren = null;
var definition = undefined;// when you declare a varible without add any value to it gives undifined 

//console.log
console.log(person)
console.log(age)
console.log(rightWrong)
console.log(numChildren)

//innerhtml

document.getElementById('name').innerHTML = person
document.getElementById('number').innerHTML = age
document.getElementById('question').innerHTML = true
document.getElementById('ask').innerHTML = null



//addition operators
var number1 = 5;
var number2 = 20;
var sum = number1 + number2;

console.log(sum)

//multiplication operators

var a = 5;
var b = 6;

var multiple = a * b;

console.log(multiple)

//increament
var s = 100
s++;

console.log('increament operator', s);

const arr2 =['emeka','james' ,'yemi','lucky']
//length
console.log(arr2.length)

//sort method 
console.log(arr2.sort())

//to string
console.log(arr2.toString())

//pop
console.log('this is pop', arr2.pop())
console.log(arr2)

//push
arr2.push('chidera')
console.log(arr2)

//unshift adds to the begining ofelements
arr2.unshift('Bola')
console.log(arr2)

//shift removes elements at the begining 
arr2.shift()
console.log(arr2)

function gradescore(){
    let score = document.getElementById('pass').innerHTML
    let fail = document.getElementById('fail').innerHTML
    let score = document.getElementById('score').Value;
    (score >= 50 )? 'You Passed' : 'You Failed'
}