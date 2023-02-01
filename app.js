//Can be used with function expressions. Can be passed as callback expressions.

//anonimous function expression:
array.map(function(x){
    return x * 2;
})

// Function declaration (cannot be replaced by arrow function):

function greet(){

}

//function expression (saving into a variable):
const add = function(x,y) {
    return x+y;
}

/* Syntax:
() - we put parameter list.
create function, save it in a variable

const add = (x,y) => {
    return x+y;
} */

//Find the max:

[2,3,6,79,104,23].reduce(function(max,currNum){
return Math.max(max,currNum);
});

[2,3,6,79,104,23].reduce((max,currNum) => {
return Math.max(max,currNum);
});

// shortcuts:

//if we have a single parameter:
[1,2,3,4,5].forEach((n) =>{
    console.log(n*10);
})

[1,2,3,4,5].forEach(n =>{
    console.log(n*10);
})

//no parameters:
const greet = () => {
    console.log('Hello');
}

// no typing return:
//get even numbers:
[1,2,3,4,5].filter((num) => num % 2 === 0);

const double = (n) => n*2;

//map an array of nums into an array of even and odd:

[1,2,3,4,5,6].map((n) =>{
    if(n % 2 === 0){
        return 'even';    
    }
    return 'odd';
})

//if we want an impicit return for the above:
[1,2,3,4,5,6].map((n) => (n % 2 === 0 ? 'even' : "odd"));

//to sum each subarray and turn it into a new array:
const dailyRainTotals = [[1.2, 0.35, 2.2],[1.7,0.6,0.1]]; 
dailyRainTotals.map((hourlyRainTotals) =>{
    return hourlyRainTotals.reduce((sum,inchesOfRain)=>{
        return sum + inchesOfRain;
    })
})

//rewrite the above with implicit returns:
const dailyRainTotals = [[1.2, 0.35, 2.2],[1.7,0.6,0.1]]; 
dailyRainTotals.map((hourlyRainTotals) => (hourlyRainTotals.reduce((sum,inchesOfRain)=> sum + inchesOfRain)
));

