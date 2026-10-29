// filter is same as foreach loop  but it can return value 
// filte also take call bakc funtion 
// if we us ()then it will retunr automaticaly if we will us {}then it need to return auto mannualy
//multiple filter funtion can be used at a time
//  with {}
// const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNum.filter((num)=>{
//     return num>4
// }) 
// console.log(newNums)

// // without {}
// const newNum=myNum.filter((num)=> (num> 4)) 
// console.log(newNum);

// const books=[
//     {title:"Book one",genre:"Fiction ",publish:1981,edition:2004},
//     {title:"Book two",genre:"Non Fiction",publish:1992,edition:2008},
//     {title:"Book three",genre:"History",publish:1999,edition:2007},
//     {title:"Book four",genre:"Non Fiction",publish:1989,edition:2010},
//     {title:"Book five",genre:"Science",publish:2009,edition:2014},
//     {title:"Book six",genre:"Fiction",publish:1987,edition:2010},
//     {title:"Book seven",genre:"History",publish:1986,edition:1996},
//     {title:"Book eight",genre:"Science",publish:2011,edition:2016},
//     {title:"Book nine",genre:"Non Fiction",publish:1981,edition:1989}

// ]
// const userBooks=books.filter((bk)=>bk.genre==="History")

// console.log(userBooks)


////////////////

// map    it is also a call back function

// const mynum=[1,2,3,4,5,6,7,8,9]
// //const newnum =mynum.map((num)=>num+10)
// const newnum =mynum.map((num)=>{ return num+10})
// console.log(newnum)


////////////////

//   chaining map over map
// const mynum=[1,2,3,4,5,6,7,8,9]
// const newnum =mynum
// .map((num)=>num*10)
// .map((num)=>num+1)
// .filter((num) =>num>40)

// console.log(newnum)


//////////////////

//        reducer function

 const myNum=[1,2,3,4,5,6,7,8]
//  const myTotal =myNum.reduce(function(acc,curr){
//     console.log(`acc:${ass}and currval:${curr}`)
//     return acc+curr;
// console.log(myNum)

//  },0)

//  using arrow function
const mytotal=myNum.reduce((acc,curr)=> acc + curr,0)
console.log(myNum)




