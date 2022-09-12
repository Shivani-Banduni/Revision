//problem 1
// we are given an array of n elements and a number m with limit 
//example  n=[1,3,4,8,9] m=4 and limit=1
// so our output will be 1+3+4+2+9=19 because 4 and 8 both are multiples of m but as limit is only 1
// we will consider the greater one 

//problem 1 (recursion=>printing sum on n numbers)
//  function num(n){
    

//     if(n==8){
//         return  n

//     }
//     else{
// return num(n-1)+n
//     }
// }
// var n=10
// console.log(num(n))



//problem 2(printing sum of digits in a number)


// function num(n){
//     if(n==0){
//         return 0
//     }
//     return (n%10+ num(Math.floor(n/10)))

// }
// var n=456
// console.log(num(n))





// function num(n){
    
//     if(n==1){
//         return true
//     }else if(n!==0){
//         return false
//     }
    
//     else{
//     return (Math.pow(n%10,2)+num(Math.floor(n/10)))
// }
// }
// var n=19
// console.log(num(n))



// var a=4
// var a=8
// console.log(a)

// function ss(){
//     let a=9
//     console.log(a)
// }
// ss()



// var a=9

// function abc(){
//     console.log(a)

// }






// const a=9
// const a=7
// console.log(a)







// var newpro=promise(function (a,b){

// })
// function abscr(a,b){

// }



//prime number
function num(n){
    var flag=false

for(var i=2;i<=Math.floor(n/2);i++){
    if(n%i==0){
        flag=true  
    }
}
if(flag==true){
    console.log(' not prime num')

}else{
    console.log('prime')
}
}
num(9)