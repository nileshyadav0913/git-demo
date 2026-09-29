// date is a objecte
let myDate =new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());


let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());


let myCreatedDate1=new Date(2023,0,23,2,3)
console.log(myCreatedDate1.toDateString());


let myTimeStap=Date.now()//iska us   koi ki question ka kitna fast answer diya hai ye pata karne ke liye
console.log(myTimeStap)


let newDate=new Date();
console.log(newDate.getMonth())
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday:"long",
    
})

