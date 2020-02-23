let select = document.querySelector('select');

let cityId = 0;
let icon = document.createElement('img');

function city() {

    for (let i = 0; i < select.length; i++) {
        if (select[i].selected === true) {
            cityId = select[i].value;
        }
    }


    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=359d6944066194e9c8bb2e8692a94c58`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            document.querySelector('.package-name').innerHTML = data.name + '<br>';
            document.querySelector('.country').innerHTML = data.sys.country;
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.disclamer').textContent = data.weather[0].description;
            icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        })
        .catch(function () {
            // catch any errors
        });
}
document.querySelector('.features li').append(icon);

document.querySelector('button').onclick = city;