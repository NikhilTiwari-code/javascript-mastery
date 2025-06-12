
document.addEventListener("DOMContentLoaded", () => {
    const lengthSlider = document.querySelector("#length-slider");
    const lengthValue = document.querySelector("#length-value");
    const password = document.querySelector("#password");
    const copy = document.querySelector("#copy");
    const upperCaseCheckbox = document.querySelector("#upper-case");
    const lowerCaseCheckbox = document.querySelector("#lower-case");
    const numberCheckbox = document.querySelector("#number-case");


    function passwordGenerator(length) {
        let characters = "";
        if (upperCaseCheckbox.checked) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowerCaseCheckbox.checked) characters += "abcdefghijklmnopqrstuvwxyz";
        if (numberCheckbox.checked) characters += "0123456789";

        if (!characters) characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        let result = "";
        for (let i = 0; i < length; i++) {
            const randomNumber = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomNumber);
        }
        return result;
    }

   
    lengthSlider.addEventListener("input", () => {
        lengthValue.textContent = lengthSlider.value;
        password.value = passwordGenerator(lengthSlider.value);
    });
 
   
    upperCaseCheckbox.addEventListener("change", () => {
        password.value = passwordGenerator(lengthSlider.value);
    });
    lowerCaseCheckbox.addEventListener("change", () => {
        password.value = passwordGenerator(lengthSlider.value);
    });
    numberCheckbox.addEventListener("change", () => {
        password.value = passwordGenerator(lengthSlider.value);
    });


    copy.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(password.value);
            console.log("Password copied to clipboard");
        } catch (err) {
            console.error("Failed to copy password: ", err);
        }
    });

   
    password.value = passwordGenerator(lengthSlider.value);
});