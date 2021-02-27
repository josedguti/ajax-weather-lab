// state variable

let weatherData;

// constants

const API_KEY = "3257c3f6537ccbd449c3040d5a766e78";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

// selected DOM elements

const $city = $('#city');
const $temp = $('#temp');
const $feels = $('#feels');
const $weather = $('#weather');
const $input = $('#insert');
const metric = "°";

// event listeners

$('form').on('submit', handleSubmit);

// functions

function handleSubmit (ga) {
    ga.preventDefault();

    const term = $input.val();

    $input.val("");

    $.ajax(BASE_URL + "?q=" + term + "&appid=" + API_KEY + "&units=imperial")
    .then(function(data) {
        console.log('weather data ', data);
        weatherData = data;
        render();
    }, function(error) {
        console.log('error', error);
    });
    }     


function render() {
    if(weatherData) {
        $city.text(weatherData.name);
        $temp.text(weatherData.main.temp + metric);
        $feels.text(weatherData.main.feels_like + metric);
        $weather.text(weatherData.weather[0].description);
    }
}

