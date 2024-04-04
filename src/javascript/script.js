document.querySelector('#search').addEventListener('submit', (Event) => {
    Event.preventDefault();

    const cityName = document.querySelector('#city_name').value;

    if (!cityName) {
        return showAlert('Você precisa digitar uma cidade...');
    }

    console.log(cityName)
});

function showAlert(msg){
    document.querySelector('#alert').innerHTML = msg;
}

