const result = document.querySelector("#result")
const div = document.querySelector("#container")
const body = document.querySelector("body")
console.log(body)

document.addEventListener("keypress" ,function (e){
   console.log(e)
   console.log(e.type)
   div.textContent=`you pressed ${e.key}`
})