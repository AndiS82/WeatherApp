// API KEY 7ec4990a53922c2b475ea15b406ba79c


let icon;
fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.509865&lon=-0.118092&appid=7ec4990a53922c2b475ea15b406ba79c")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.wind);
        console.log(data.main.pressure)

        document.getElementById("ort").innerHTML = data.name;

        kelvinToCelsius = data.main.temp - 273.15;
        kelvinToCelsiusRounded = kelvinToCelsius.toFixed(2);
        document.getElementById("temp").innerHTML = kelvinToCelsiusRounded + "° C";

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
        document.getElementById("obtained").innerHTML = "Obtained at: " + date;

        document.getElementById("timeValue").innerHTML = data.dt;

        wind = "Speed: " + data.wind.speed + " Degree: " + data.wind.deg + " Gust: " + data.wind.gust
        document.getElementById("windValue").innerHTML = wind;

        //cloudiness

        document.getElementById("cloudinessValue").innerHTML = data.weather[0].description;

        //pressure

        document.getElementById("pressureValue").innerHTML = data.main.pressure;

        //humidity

        document.getElementById("humidityValue").innerHTML = data.main.humidity + "%";

        //sunrise

        document.getElementById("sunriseValue").innerHTML = data.sys.sunrise;

        //sunset
        document.getElementById("sunsetValue").innerHTML = data.sys.sunset;

        //geoCoords
        let coords = "lat. " + data.coord.lat + " lon: " + data.coord.lon;
        document.getElementById("geoCoordsValue").innerHTML = coords;
    });