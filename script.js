const fromAmountElement =document.querySelector('.amount');
const convertedAmountElement =document.querySelector('.convertedamount');
const fromCurrencyElement =document.querySelector('.fromcurrency');
const toCurrencyElement =document.querySelector('.tocurrency');
const resultElement = document.querySelector('.result');

const countries =[
                  {code : "USD", name :"United State Dollar"},
                  {code :"INR", name :"Indian Rupee"},
                  {code :"ISK", name :"Icelandic Krone"},
                  {code :"JPY", name :"Japanese Yen"},
                  {code :"KRW",name:"South Korean Won"},
                  {code :"MXN",name:"Maxican Peso"},
                  {code :"MYR",name:"Malaysian Ringgit"},
                  {code :"NOK",name:"Norwegian Krone"},
                  {code :"NZD",name:"New Zealand Dollar"},
                  {code :"PEN",name:"Peruvian Sol"},
                  {code :"PHP",name:"Philippine Peso"},
                  {code :"PLN",name:"Polish Zloty"},
                  {code :"RON",name:"Romanian Leu"},
                  {code :"RUB",name:"Russian Ruble"},
                  {code :"SEK",name:"Swedish Krone"},
                  {code :"SGD",name:"Singapore Dollar"},
                  {code :"THB",name:"Thai Baht"},
                  {code :"TRY",name:"Turkish Lira"},
                  {code :"TWD",name:"Taiwan New Dollar"},
                  {code :"UAH",name:"Ukrainian Hryvnia"},
                  {code :"USD",name:"United State Dollar"},
                  {code :"UYU",name:"Uruguayan Peso"},
                  {code :"VND",name:"Vietnamese Dong"},
                  {code :"ZAR",name:"South African Rand"}
];

countries.forEach(country =>{
    const option1 = document.createElement('option');
    option1.value = country.code;
    option1.textContent = `${country.code} (${country.name})`;
    fromCurrencyElement.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = country.code;
    option2.textContent = `${country.code} (${country.name})`;
    toCurrencyElement.appendChild(option2);

    fromCurrencyElement.value = "USD";
    toCurrencyElement.value = "INR";

});

//function to get exchange rate using API

const getExchangeRate =async () =>{
    const amount = parseFloat(fromAmountElement.value);
    const fromcurrency =fromCurrencyElement.value;
    const tocurrency = toCurrencyElement.value;
    resultElement.textContent ="Fetching Exchange...";

    //fetch data from API
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromcurrency}`);
    const data = await response.json();
    console.log(data);
    const conversionRate =data.rates[tocurrency];
    const convertedamount =(amount * conversionRate);
    convertedAmountElement.value =convertedamount;
    resultElement.textContent =`${amount} ${fromcurrency} = ${convertedamount} ${tocurrency}`;
}
getExchangeRate();
fromAmountElement.addEventListener('input',getExchangeRate);
fromCurrencyElement.addEventListener('change',getExchangeRate);
toCurrencyElement.addEventListener('change',getExchangeRate);
window.addEventListener('load',getExchangeRate);
