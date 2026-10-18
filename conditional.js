// //    if
// if(3 !=2){
//     console.log(`nilesh yadav`)
// }
// let temperature=44
// if(temperature <50){
//     console.log(`temperature is less then 50`)
// }

// let val=50
// if(val<100) console.log(`yes`);

//       switch

let month=3
  
switch(month){
    case 1:
        console.log(`january`)
        break;

switch(month){
    case 2:
        console.log(`february`)
        break;
}
switch(month){
    case 3:
        console.log(`march`)
        break;
}
switch(month){
    case 4:
        console.log(`april`)
        break;
}
switch(month){
    case 5:
        console.log(`may`)
        break;
        default :
console.log(`no case match`)
break;
}
}



let mon="july";
switch(mon){
    case "june":
        console.log(`june`)
        break;
}
switch(mon){
    case "july":
        console.log(`july`)
        break;
}
switch(mon){
    case "augast":
        console.log(`augast`)
        break;

switch(mon){
    case "september":
        console.log(`september`)
        break;
}
switch(mon){
    case "october":
        console.log(`october`)
        break;
        default :
console.log(`no case match`)
break;
}
}



// some value is consider always false  falsy value
// fasle, 0,-0, Bigint on, "", null , undefined NaN 

// some vlue is aways true 
// "0","false"," ",[],{},function(){},


const userEmail=[]
if (userEmail.length===0){
    console.log("array is empty");
}


const emptyObj={}

if (Object.keys(emptyObj).length===0){
    console.log(`object is empty`);

}

// null coalescing operator(??):null undefined
// we use because kisi variable me null and undefing value hona achha nhi mana jata hai 
let val;
val=5 ?? 10
console.log(val);
val =null ?? 10
console.log(val);
val =undefined ?? 10??20
console.log(val);// rememver it is not ternary operator 



//         ternary opetetor

const iceTeaPrice=1000
iceTeaPrice<=500 ?console.log("less then 500"):console.log("more then 500")

 