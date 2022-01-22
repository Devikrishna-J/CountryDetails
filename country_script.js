
fetch(`https://restcountries.com/v2/all`).then(res => res.json()).then(countries => {    
  getCountryNames(countries);
});  
function getCountryNames(countries){
  var select = document.querySelector('#select_cntry');
  countries=countries.flat();

  countries.forEach(country => {
    let opt = document.createElement('option');
    opt.text = country.name;
    opt.value = country.name;
    select.append(opt);
  })
}

function fetchCountryData(){
    let cnt_name=select_cntry.value;
    
    fetch(`https://restcountries.com/v2/name/${cnt_name}?fullText=true`).
    then(res=>res.json()).then(data=>populateValues(data))
}
function populateValues(country){
    //country name//flag//population//currency name//currency symbol//language//capital
    //console.log(country);
    let html_data=``;
  
    let cname=country[0].name;
    let cflag=country[0].flag;
    let cpopulation=country[0].population;
    let currencyname=country[0].currencies[0].name;
    let currencysymbol=country[0].currencies[0].symbol;
    let clangugage1=country[0].languages[0].name;    
    let ccapital=country[0].capital;

    html_data=`<div class="card" style="width: 18rem;">
    <img src="${cflag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Country Name: ${cname}</h5>   
      <h6 class="card-title">Capital: ${ccapital}</h6>   
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Population:${cpopulation}</li>
      <li class="list-group-item">Currency: ${currencyname}<br>symbol: ${currencysymbol}</li>
      <li class="list-group-item">Language: ${clangugage1}</li>
    </ul>
    
  </div>
            `;
    document.querySelector("#result").innerHTML=html_data;
}