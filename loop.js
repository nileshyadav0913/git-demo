//   for loop 
// let array=[1,2,3,4,5,6,7,8,9]
// for(let index=0;index<array.length;index++){
//     if(array[index]==3) continue;
//     if(array[index]==9)break;
//     const element =array[index];
//     console.log(element)
//~}




//  while loop and do while loop



// let array=[1,2,3,4,5,6,7,8,9]
// let index=0;
// while(index<=array.length){
  
//     const element =array[index];
//     console.log(element)
//     index++;
// }


//      do while loop

// let array=[1,2,3,4,5,6,7,8,9]
// let index=0;

// do{
//     const element =array[index];
//     console.log(element)
//     index++;

// }while(index<=array.length)





            // for of loop   ****  it give value directly   ***
 
// const arr=[1,2,3,4,5,7,]
// for (const num of arr){
//      console.log(num);
// }

// maps == its is a key value pair and it remember hthe original insertion order of key
// all the value are unique 

// Map mein entries ko add karne ke liye set() use hota hai, jabki kisi key ki value access karne ke liye get(using index) use hota hai
const map =new Map()
map.set("IN","india")
map.set("USA","united stste of america")
map.set("Fr","france")
//console.log(map)
// loop on map
for (const [key,value]of map){
    console.log(key,':-',value)// key is used to access all the key and value is used to access value
}
// const myObject={// object is not itratable using for of loop but map  is itratble 
//     'game1':'NFS',
//      'game':'Spiderman'


// }
// for(const [key,value]of myObject){
//     console.log(key ,':-',value);
// }



// instead of for of loop we can us for in loop to traverse in object
//for in loop always give key(index)
// const language={
//     js:'java script',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple'
// }
// for(const key in language){
//     console.log(`${key}  shortcut is for${language[key]}`);
// }

// // for in loop in js array

// const programming=["js","rb","py","java","cpp"]
// for(const key in programming){
//     console.log(key);
// }




//   for each loop  *****//   in for each loop we pass call back funtion
// array ke har element par function execute karta hai.

// const coding=["js","rb","py","java","cpp"]
// coding.forEach(function(val){
//   //  console.log(val)

// })

//arrwo function in for each loop
// coding.forEach((item)=>{
//     console.log(item);

//})
  

//user define function


// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)




// for each ka us karke value ,index, complete arrya bhi le sakte hai

// coding.forEach((item,index,arr)=>{
//     console.log(item, index  ,arr)
// })

// //  using for each loop we can access object in side of a array
// const mycoding=[
//     {
//         languageName:"javascript",
//         languagefileName:"ja"
//     },
//     {
//         languageName:"java",
//         languagefileName:"java"
//     },
//     {
//         languageName:"python",
//         languagefileName:"py"
//     }
// ]
// mycoding.forEach((item)=>{
//     console.log(item.languageName)

// })



  



