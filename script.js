const apiKey = "780d3712f88cb43761d7676384b5efe8"; // Your actual API key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.innerHTML = "<p style='color:red;'>lucknow.</p>";
    return;
  }

  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      weatherResult.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Condition:</strong> ${data.weather[0].main}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
    })
    .catch(error => {
      weatherResult.innerHTML = <p style="color:red;">${error.message}</p>;
    });
}