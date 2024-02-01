const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {

    fetch(`https://v6.exchangerate-api.com/v6/816694e5d861cbc3c81fb2e6/pair/${currencyOne.value}/${currencyTwo.value}`)
    .then(res => res.json())
    .then(data => {
        const currency1 = currencyOne.value;
        const currency2 = currencyTwo.value;

        // console.log(data.conversion_rate);
        const rate = data.conversion_rate;

        rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`

        amountTwo.value = (amountOne.value * rate).toFixed(2)

    })
}

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);

calculate();