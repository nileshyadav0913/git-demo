//    

// function addTwoNumber(num1,num2){//function will not return anythings
//     console.log(num1+num2)
// }
// addTwoNumber(2,4)


// function addTwoNumber(num1,num2){//function will not return anythings
//     // let res= num1+num2
//     // return res
//     return num1+num2
// }
// let result= addTwoNumber(4,4)
// console.log(result)


// function loginUserMassage(username){// back tick is us to create Template Literals 
//     return `${username}just loggin`

// }
// console.log(loginUserMassage("nilesh "))


// 
// function loginUserMassage(username ="happy"){  //can set defult value of username if we will not pass any value it will take defultvalue
//     if(username === undefined){
//         console.log("plese enter the user name")
//         return
//     }
//     return `${username}just loggin`

// }
// console.log(loginUserMassage())





// when is don't now how may parameter function will recieve 
// (...)is called spread prerator as well as rest operator based on their us case


// function calculateCartPrice(... num1){
//   Yahan ... ko Rest Operator kehte hain. Ye function mein diye gaye multiple arguments ko ek array mein collect karta hai

//     return num1;
// }

// console.log(calculateCartPrice(1,2,3,4,5,5,66,3))
// let n=calculateCartPrice(1,2,3,4,5,5,66,3)
// console.log(typeof n)

// function calculateCartPrice(num1,num2,... num3){
// // 1 num1 me store hog and 2 num2 me store  hog aur baki sb argument num3 me stor hoga as a array
//     return num1;
// }

// console.log(calculateCartPrice(1,2,3,4,5,5,66,3))




// passing a object as  a parameter

// const user={
//     username:"nilesh",
//     price:199
// }
// function handelObject(anyObject){
//     console.log(`username is ${anyObject.username}and price is ${anyObject.price}`)

// }

// handelObject(user)


// passing array as a parameter 
// const myNewArray=[100,200,300]

// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray))