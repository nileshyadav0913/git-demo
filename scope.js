//   var is can access it our of its scope 
//closer:closer means parent cann't access the child varible but child can access the parent variabel



// ++++++++++++interestin++++++++++++
console.log(addone(5))//it will run inteas it is calling before declaration
function addone(num){
    return num + 1
}


console.log(addTwo(5)) //not run  because calling before declaration

const addTwo= function(num){// it is called express where variable storing function

    return num +2
}

