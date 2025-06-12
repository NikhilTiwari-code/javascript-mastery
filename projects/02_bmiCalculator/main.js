// BMI calculator

const calculate = document.getElementById("calculate");


calculate.addEventListener("click", function() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat( document.getElementById("weight").value);
    const result = document.getElementById("result");
   

    if (isNaN(height) || isNaN(weight) || height<= 0 || weight <= 0 
    || height==='' || weight==='') {
        result.innerHTML = "Please enter valid height and weight values.";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;
        console.log(bmi);

       
    }
});
