// 
let icon;
fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.509865&lon=-0.118092&appid=")//key
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.wind);
        console.log(data.main.pressure)

        document.getElementById("ort").innerHTML = data.name;
        //Die Angabe der API in Kelvin in ° Celsius umwandeln;
        kelvinToCelsius = data.main.temp - 273.15;
        kelvinToCelsiusRounded = kelvinToCelsius.toFixed(2);
        document.getElementById("temp").innerHTML = kelvinToCelsiusRounded + "° C";

        //die Zeitangabe der API in MS in ein(e) für Normalsterbliche lesbares Datum/Zeitangabe umwandeln:
        let localUnixTime = data.dt;
        let currentTime;
        console.log(localUnixTime);
        function convertFromUnixTime() {
            let localTime = new Date(localUnixTime);
            currentTime = localTime.toLocaleTimeString("de-DE");
            return currentTime;
        };
        convertFromUnixTime();
        console.log(currentTime);

        //sunrise
        let sunriseTime = data.sys.sunrise;
        let showSunrise;
        console.log(sunriseTime);
        function convertSunriseTime() {
            let targetSunriseTime = new Date(sunriseTime * 1000);
            showSunrise = targetSunriseTime.toLocaleTimeString("en-UK");
            return showSunrise;
        }
        convertSunriseTime();
        console.log(showSunrise);

        //sunset
        let sunsetTime = data.sys.sunset;
        let showSunset;
        console.log(sunsetTime);
        function convertSunsetTime() {
            let targetSunsetTime = new Date(sunsetTime * 1000);
            showSunset = targetSunsetTime.toLocaleTimeString("en-UK");
            return showSunset;
        }
        convertSunsetTime();

        let imageIcon = document.querySelector("#icon");
        console.log(imageIcon);
        let iconID = data.weather[0].icon;
        console.log(iconID);

        icon = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
        console.log(icon);
        imageIcon.src = icon;
        //img.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        //console.log(img.src);
        //document.getElementById("condition").innerHTML = data.weather[0].description;

        let date = new Date();
        document.getElementById("obtained").innerHTML = currentTime;

        document.getElementById("timeValue").innerHTML = data.dt;

        wind = "Speed: " + data.wind.speed + "<br></br>" + "Degree: " + data.wind.deg
        document.getElementById("windValue").innerHTML = wind;

        //cloudiness

        document.getElementById("cloudinessValue").innerHTML = data.weather[0].description;

        //pressure

        document.getElementById("pressureValue").innerHTML = data.main.pressure;

        //humidity

        document.getElementById("humidityValue").innerHTML = data.main.humidity + "%";

        //sunrise

        document.getElementById("sunriseValue").innerHTML = showSunrise;

        //sunset
        document.getElementById("sunsetValue").innerHTML = showSunset;

        //geoCoords
        let coords = "lat. " + data.coord.lat + " lon: " + data.coord.lon;
        document.getElementById("geoCoordsValue").innerHTML = coords;
    });

