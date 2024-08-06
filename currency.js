const getExchangeRate = async () => {
    let api = await fetch('https://v6.exchangerate-api.com/v6/e641db159faea9f3b62b7676/latest/INR');
    api = await api.json();
    let keys = Object.keys(api.conversion_rates)
    return keys;
}

const makeDropdown = async () => {
    let dropdowns = document.querySelectorAll("select")
    let countries = await getExchangeRate()

    dropdowns.forEach(dropdown => {
        countries.forEach(element => {
            const opt = document.createElement("option")
            opt.innerHTML = element;
            opt.value = element;
            // opt.value = element
            // opt.textContent = element
            dropdown.appendChild(opt)
        });
        dropdown.addEventListener(("change"),(evt) => {
            updateFlag(evt.target)
        })
    })
}

makeDropdown()

const updateFlag = (element) => {
    let counCode = element.value.slice(0,2);
    let img = element.parentElement.querySelector("img");
    newSrc = `https://flagsapi.com/${counCode}/flat/64.png`
    img.src = newSrc;
}

let exchangeRateAPI = async (srcCode , destCode) => {
    let res = await fetch(`https://v6.exchangerate-api.com/v6/e641db159faea9f3b62b7676/latest/${srcCode}`);
    res = await res.json();
    let conversion_rates = res.conversion_rates
    return conversion_rates[destCode]
}