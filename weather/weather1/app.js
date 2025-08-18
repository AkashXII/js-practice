const apiKey = "b2f93ed104048677206d9b32d69d92ea"; 
document.getElementById("searchBtn").addEventListener("click", getWeather);
function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById("temperature").textContent = `🌡 ${data.main.temp} °C`;
            document.getElementById("description").textContent = `☁ ${data.weather[0].description}`;
            document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            document.getElementById("weatherResult").classList.remove("hidden");
        })
        .catch(error => {
            alert(error.message);
        });
}
