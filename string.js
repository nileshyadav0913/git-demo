
const name ="nilesh"
const repocount= 64
console.log(name + repocount+ "value")

// or

console.log(`my name is ${name } and my reco count is ${repocount }`)// it is called sting maniputation


// new way of decaration of string  (this will give various method and indexing )
const myname = new String('nilesh')
console.log(myname.__proto__)//{} object
console.log(myname.length)
console.log(name.length)
console.log(name.charAt(2));  // to find kis index per kaun sa char hai 
console.log(name.indexOf("e"))// ye charater kis index per hia 
//trim()
//  include()
//  replace();
// splite()  to convert string to array 
//slice()   can give (-ve) index (of it we give a negative index then it will start from last index)
// substring() we can not give negative index(if we will give it willl start from index [0]) 

