// Immediately invoked funcition (IIFE) it is used to over come from polution of globle scope variable 
// used for  immediate call;
(function chai(){
    console.log(`nilesh yadav`)
})();// us semicolon

( ()=>{
    console.log(`happy`);
})();

((name)=>{
    console.log(`mukesh yadav${name}`);
})(`ayush`);