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



//     high order Array loops  and these loop are array specific loop

// for of loop
 
// const arr=[1,2,3,4,5,7,]
// for (const num of arr){
//      console.log(num);
// }

// maps == its is a key value pair and it remember hthe original insertion order of key
// all the value are unique 
const map =new Map()
map.set("IN","india")
map.set("USA","united stste of america")
map.set("Fr","france")
//console.log(map)
// loop on map
for (const [key,value]of map){
    console.log(key,':-',value)
}





