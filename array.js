// // array of javascripte is resizable hote hai 
// //  array me jab copy operation chalte hai to wo shallow copy banata hai 


//  const myArr =[0,1,2,3,4,5,6,7]

// // const myArr1 =new Array(1,2,3,4)
// // console.log(myArr1[0])

// // // methods

// // myArr.push(6)
// // console.log(myArr)


// // myArr.pop();
// // console.log(myArr)

// // myArr.unshift(11)//to add at starting by replacing all existing element

// // console.log(myArr)

// // myArr.shift()//delete from starting and shift all element
// // console.log(myArr)





// //  console.log(myArr.includes(1))//give true or false
// //  console.log(myArr.indexOf(2))  // give the value stored at the index 2



// // const newArr=myArr.join() // schnge data type of array to string and bind it
// // // console.log(myArr)
// // // console.log(typeOf newArr)


// // //slice  , splice

// // console.log("A",myArr);

// // const myr1=myArr.slice(1,3)
// // console.log(myr1);
// // console.log("B",myArr);

// // const myr2=myArr.splice(1,3)    // change original array

// // console.log(myr2);
// // console.log("C",myArr);









//  const marvel_heros=["thor","Ironman","spiderman"];
//  const dc_heros=["superman","flash","batman"]
//  marvel_heros.push(dc_heros);//array ke andar array a jata hai

//  //console.log(marvel_heros);
//  // console.log(marvel_heros[2]);
//  //  console.log(marvel_heros[3][1]);// array ke andar array ke element access karne keliye  but add in same array


//   const allHero= marvel_heros.concat(dc_heros)//same as push  but return new array

// console.log(allHero)





// const anotherArr=[1,2,3,[4,5,6],2,3,[5,6,[1,2]]]  // jo array ke andar array hai usko ek single array me kar deta hai
// const real_anotherArr=anotherArr.flat(Infinity)
// console.log(real_anotherArr)




// console.log(Array.isArray("nilesh"))    //to check where it is array or not
// console.log(Array.from("nilesh"))      // to convert it into array


// console.log(Array.from({name:"nilesh"}))//  we have to tell where key ka ya value ka array banana hai  agar nahi batayenge to ye empty array return karega


console.log(Array.of("score1","score2","score3"));//ye jo bhi item denge use array me conver kar dega 