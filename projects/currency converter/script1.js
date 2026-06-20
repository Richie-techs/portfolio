const apiURL = "https://api.exchangerate-api.com/v4/latest/USD";
const flagsAPI = "https://flagsapi.com/"

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");

let rates = {};

// Currency to country code
const currencyFlags = {
    USD: "us",
    GBP: "gb",
    EUR: "eu",
    GHS: "gh",
    NGN: "ng",
    CAD: "ca",
    AUD: "au",
    JPY: "jp",
    CNY: "cn",
    INR: "in"
};

// Fetch rates
fetch(apiURL)
.then(response => response.json())
.then(data => {

    rates = data.rates;

    for (let currency in rates) {

        let option1 = document.createElement("option");
        let option2 = document.createElement("option");

        option1.value = currency;
        option1.textContent = currency;

        option2.value = currency;
        option2.textContent = currency;

        fromCurrency.appendChild(option1);
        toCurrency.appendChild(option2);
    }

    // Default currencies
    fromCurrency.value = "USD";
    toCurrency.value = "GHS";

    updateFlags();
});

// Update flags
function updateFlags() {

    const from = fromCurrency.value;
    const to = toCurrency.value;

    fromFlag.src =
        `https://flagsapi.com/${currencyFlags[from]}/flat/64.png`;

    toFlag.src =
        `https://flagsapi.com/${currencyFlags[to]}/flat/64.png`;
}

// Change flags when currency changes
fromCurrency.addEventListener("change", updateFlags);
toCurrency.addEventListener("change", updateFlags);

// Convert currency
function convertCurrency() {

    const amount = document.getElementById("amount").value;

    const from = fromCurrency.value;
    const to = toCurrency.value;

    const result = (amount / rates[from]) * rates[to];

    document.getElementById("result").innerHTML =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}