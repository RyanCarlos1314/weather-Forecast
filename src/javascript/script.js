document.querySelector('#search').addEventListener('submit',async (Event) => {
    Event.preventDefault();

    const cityName = document.querySelector('#city_name').value;

    if (!cityName) {
        return showAlert('Você precisa digitar uma cidade...');
    }

    const apiKey =  'eca8ab7da441fc6a2b8858906fc76ec8';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&Lang=pt_br`
    
    const results = await fetch(apiUrl);
    const json = await results.json();


    if(json.cod === 200){

        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            description: json.weather[0].description,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity,

        });

    }else {
        showAlert('Não foi possivel localizar...')
    }
});

function showInfo(json){
    showAlert('');

    document.querySelector("#weather").classList.add('show');

    document.querySelector('#title').innerHTML = `${json.city}, ${json.country}`;

    document.querySelector('#temp_value').innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')} <sup>°C</sup>`;
    document.querySelector('#title').innerHTML = `${json.city}, ${json.country}`;


}

function showAlert(msg){
    document.querySelector('#alert').innerHTML = msg;
}

