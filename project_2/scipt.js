const form =document.querySelector('form')
// we will take out side of Eventlistener it will take a empty value
form.addEventListener('submit',function(e){
    e.preventDefault()

const height=parseInt(document.querySelector('#Height').value)
const weight=parseInt(document.querySelector('#Weight').value)
const result=document.querySelector('#result')


if (height===''||height<0||isNaN(height)){
    result.innerHTML="please inter  a valid hieght"
}
else if (weight===''||weight<0||isNaN(weight)){
    result.innerHTML="please inter  a valid weight"
} else{
  const BMI = weight / ((height * height) / 10000).toFixed(2)
  result.innerHTML=`<span>${BMI}</span>`
}
})