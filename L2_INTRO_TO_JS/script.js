console.log("TESTING JAVASCRIPT");

// // HOW TO DECLARE VARIABLES

// // var a = 200;

// // var a = 400;

// // a = 599

// // console.log(a);

// // let b = 300;

// let b =400;

// b= 50000;
// console.log(b);

// const c = 500;
// c =4000;

// console.log(c);


// console.log("HELLO");


// function nameOfFunc(param1,param2){
//     var sumOfTwo = param1+param2;
//     return sumOfTwo;
// }

// var arg1 = 200;
// var arg2 = 300;

// nameOfFunc(arg1,arg2);



// GEC [ GLOBAL EXECUTION CONTEXT]


// console.log("STARTING JS CODE");

// var a =20;
// var b =40;
// console.log(a);
// console.log(b);

// var sumOfTwo = a+b;
// console.log(sumOfTwo);

// function doubleTwoNumbers(xx,yy){
//     var ans = (xx+yy)/2;
//     return ans;
// }


// var answerOfDouble =doubleTwoNumbers(300,200);
// console.log(answerOfDouble)
// console.log("BYE JS CODE");


// For loop

// for (var i = 0; i<=3;i++){
//     console.log(i);
// };

// 0 0<=3 -> 1 1<=3 => 2<=3 ==> 3<=3 => 4<=3 

// 0,1,2,3


// setTimeout

// console.log("start")
// setTimeout(function (){
//     console.log("HI I AM SETTIMOUT ILL RUN AFTER 5 SECS")
// },5000 );

// setInterval(function (){
//     console.log("I AM SET INTERVAL AND RUN AFETER 2 SECS")
// },2000);
// console.log("end")


// for (let a =0; a<=5;a++){
//     setTimeout(function (){
//         console.log(a)
//     },2000);
// }

// KATRINA - 5sec 0 5 sec 1
// ANONYMOUS - 5sec 0 1 2 3
// ARYAN - 5sec 0 1 2 3
// RAJAN = 5sec 0 5 sec 1
// NIHARIKA 5sec 0 5 sec 1


/// 

// console.log(a);

// var a =200;

// hello();

// function hello(){
//     console.log("HELLOO WORLD")
// }

// let a =10;
// let b =20;
// let c =30;


// {
//     let d =40;
//     console.log(d);
//     {
//         let x =60;
//         let d =999;
//         console.log(a);
//         console.log(d);
//         console.log(x);
//     }
// }

// LET's START NEWWW

// for (var a = 0; a <= 5; a++) {

//     function close(i) {
//         setTimeout(function () {
//             console.log(i)
//         }, 2000);
//     }
//     close(a);
// }



/// FUNCTIONS

//1. NORMAL FUNCTION

// function nameOfFunc(){
//     return 1
// }

// 2. Anonymous Function

// function (){

// }

// 3. ARRROW FUNCTION

// () =>{

// }

//4. function expression

// var myFunction = ()=>{

// }

// named function
// var myFunction2 = function (){
//     console.log("HELLOOOOOO")
// }

// myFunction2();



//NEW CASE

// console.log("CLASS START");

// var a = 200;
// console.log(a);

// function functionB(){
//     console.log("THIS IS FUNCTION B");
// }

// var functionB = (x) =>{
//     // var x =100;
//     console.log("THIS IS OUTPUT: ",x);
// }

// var functionB = function () {
//     console.log("HELLOOO WORLD")
// }
// functionB();

// FUNCTION AS AN ARGUMENT

// function outerFunction(arg1){
//     console.log("HELOO I AM OUTER FUNCTION");
//     arg1();
// }

// outerFunction(function (){
//     console.log("HELLOOO I AM INNER FUNCTION");
// })




// function outerFunction(collegeName){
//     console.log("THIS IS MY COLLEGE DETAIL");
//     return function xyz(){
//         console.log("HELLO FROM : ",collegeName);
//         return 1
//     }
// };

// var myData =outerFunction("VIPS");

// console.log(myData());


// callback function

// setTimeout(() => {
//     console.log("Menu");
// }, 5000)

// setTimeout(() => {
//     console.log("Order");
// }, 2000)

// setTimeout(() => {
//     console.log("Dinner");
// }, 10000)


// setTimeout(() => {
//     console.log("Sauf");

// }, 1000)

// setTimeout(() => {

//     console.log("Pay");
// }, 3000);


// Let's make callback functions

function menuDetail(cb) {
    console.log("Checking Menu");
    setTimeout(cb, 5000)
    
}

function orderDo(cb) {
    console.log("I AM DOING Order");
    setTimeout(cb,3000)
}

function dinnerStart(cb) {
    console.log("Let's Eattttt  Dinner");
    setTimeout(cb, 10000)
}

function saufEat(cb) {
    console.log("Let's Eat Sauf");
    setTimeout(cb, 1000)
}


function payBill(cb) {
        console.log("PayBill");

    setTimeout(cb, 3000);
}

function eatIcecream(cb) {
        console.log("Eating Icecream");

    setTimeout(cb, 5000);
}

function eatBrownie(cb) {
        console.log("Eating Brownie");

    setTimeout(cb, 3000);
}

function walkHome() {
        

    setTimeout(()=>{
            console.log("HomeComing Walk");
    }, 3000);
}
// payBill();

// menuDetail(orderDo(dinnerStart(saufEat(payBill))));

// saufEat(payBill)

menuDetail(()=>{
    orderDo(()=>{
        dinnerStart(()=>{
            saufEat(()=>{
                payBill(()=>{
                    eatIcecream(()=>{
                        eatBrownie(()=>{
                            walkHome();
                        })
                    })
                });
            })
        })
    })
})