// Task: Output a multiplication table of 1 to 10
// for (let i = 1; i<=10; i++){
//     for (let j=1; j<=10; j++){
//         console.log(i , '*', j, '=', i*j)
//     }
// }


// Function Declaration

// function greet(){
//     console.log('hello')
// }

// // Function call
// greet()



function greet(Name){
    console.log('hello', Name)
}

// Function call
greet('bibek')



var sum =  function (a, b){
    let c =  a+ b;
    console.log(c)
}

sum(5, 6)

var mult = (a, b) =>{
    let d = a*b;
    console.log(d)
}

mult(5, 6)


var prod = (a, b) =>{
    let d = a*b;

    return d
}


var product  = prod(6, 7);
console.log(product)



function findMax(arr){
    let max = arr[0];
    for (let i=0; i<arr.length; i++){
        if (arr[i]>max){
            max = arr[i]
        }
    }
    return max

}

console.log("the maximum number is: ",findMax([1, 2, 5,14, 3]))







// // Print Multiplication table of 1 to 10
// for (let i=1; i<=10; i++){
//     for (let j=1; j<=10; j++){
//         console.log(i, '*', j, '=', i*j)
//     }
// }

// // Functions Declartion

// function greet(name){
//     console.log('hello', name)
//     console.log(5*6)
// }

// // Function Call
// greet('bibek')


// var sum = function add(a, b){
//     let c = a+b;
//     console.log(c)
// }
// sum (5,10)

// // sum(5, 6)
// var summation = function (x, y){
//     let z = x+y;
//     console.log(z)
// }
// summation (15,10)
// summation(20, 25)

// var mul = (a, b) =>{
//     let d = a*b;
//     console.log(d)

// }

// mul(5,6)