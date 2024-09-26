setInterval(function() {  
    // Los Angeles
    let losAngelesElement = document.querySelector("#Los-Angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss[<small>]A[</small>]");

    // Cape Town
    let capeTownElement = document.querySelector("#Cape-Town");
    let capeTownDateElement = capeTownElement.querySelector(".date");
    let capeTownTimeElement = capeTownElement.querySelector(".time");
    let capeTownTime = moment().tz("Africa/Johannesburg");

    capeTownDateElement.innerHTML = capeTownTime.format("MMMM Do YYYY");
    capeTownTimeElement.innerHTML = capeTownTime.format("h:mm:ss[<small>]A[</small>]");

}, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone) {
        let cityName = cityTimeZone.split("/")[1].replace("_", " ");
        let cityElement = document.createElement("div");
        cityElement.className = "city";
        cityElement.innerHTML = `
            <div class="city-info">
                <h2>${cityName}</h2>
                <div class="date"></div>
            </div>
            <div class="time"></div>
        `;
        document.querySelector("#cities").appendChild(cityElement);

        setInterval(function() {
            let cityTime = moment().tz(cityTimeZone);
            cityElement.querySelector(".date").innerHTML = cityTime.format("MMMM Do YYYY");
            cityElement.querySelector(".time").innerHTML = cityTime.format("h:mm:ss[<small>]A[</small>]");
        }, 1000);
    }
}

let citiesSelectElement = document.querySelector("select[name='city']");
citiesSelectElement.addEventListener("change", updateCity);
