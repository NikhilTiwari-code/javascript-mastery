const apiId = "67f85600cdd34a0182324ec3552efe02";
const url = `https://openexchangerates.org/api/latest.json?app_id=${apiId}`;

// Cache DOM elements
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const convertButton = document.getElementById("convert");
const resultElement = document.getElementById("result");
const swapButton = document.getElementById("swap-button");

// Initialize app
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (!data.rates) throw new Error("Invalid API response structure");
        
        const rates = data.rates;
        const currencies = Object.keys(rates);
        
        populateCurrencyDropdowns(currencies);
        setupEventListeners(rates);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        resultElement.textContent = "Error loading exchange rates. Please try again later.";
    });

function populateCurrencyDropdowns(currencies) {
    currencies.forEach(currency => {
        const option = new Option(currency, currency);
        fromCurrencySelect.add(option);
        toCurrencySelect.add(new Option(currency, currency));
    });

    // Set default selections
    fromCurrencySelect.value = "USD";
    toCurrencySelect.value = "INR";
}

function setupEventListeners(rates) {
    convertButton.addEventListener("click", () => performConversion(rates));
    swapButton.addEventListener("click", handleSwap);
}

function performConversion(rates) {
    const amount = parseFloat(amountInput.value);
    
    if (isNaN(amount)) {
        resultElement.textContent = "Please enter a valid number";
        return;
    }
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (!rates[fromCurrency] || !rates[toCurrency]) {
        resultElement.textContent = "Invalid currency selection";
        return;
    }

    const conversionRate = rates[toCurrency] / rates[fromCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);
    
    resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}

function handleSwap() {
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;
}