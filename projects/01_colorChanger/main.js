// const blue = document.querySelector("#blue");
// const green = document.querySelector("#green");
// const red = document.querySelector("#red");
// const orange = document.querySelector("#orange");




// function changeColor(color) {
//     return function() {
//         document.body.style.backgroundColor = color;
//     }
// }

// // blue.onclick =   changeColor("blue");
// // green.onclick = changeColor("green");
// // red.onclick = changeColor("red");   
// // orange.onclick = changeColor("orange");

// blue.addEventListener("click", changeColor("blue"));
// green.addEventListener("click", changeColor("green"));
// red.addEventListener("click", changeColor("red"));
// orange.addEventListener("click", changeColor("orange"));



// ALTERNATIVE METHOD

 const buttons = document.querySelectorAll(".button")
 
 buttons.forEach((button) => {
     button.addEventListener("click", () => {
        document.body.style.backgroundColor = button.id
     })
 })

 
 
