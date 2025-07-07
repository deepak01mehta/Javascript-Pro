  let apikey = "c912696ffda8a9444f3fa2fe482faec5";

      const loader = document.getElementById("loader");
      const resultBox = document.getElementById("result");
      const searchBtn = document.getElementById("search");
      const input = document.getElementById("input");

      searchBtn.addEventListener("click", async () => {
        const city = input.value.trim();
        if (!city) return;

        loader.classList.remove("hidden"); // Show loader
        resultBox.innerHTML = ""; // Clear old result

        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
          );
          const data = await res.json();

          resultBox.innerHTML = `
      <div class="weather-header">
        <h2>${data.name}</h2>
        <p class="description">${data.weather[0].description}</p>
      </div>
      <div class="weather-main">
        <img src="http://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png" alt="${data.weather[0].description}">
        <div>
          <h1>${data.main.temp}°C</h1>
          <p>Feels like: ${data.main.feels_like}°C</p>
        </div>
      </div>
      <div class="weather-info">
        <div><strong>Humidity:</strong> ${data.main.humidity}%</div>
        <div><strong>Wind:</strong> ${data.wind.speed} m/s</div>
        <div><strong>Pressure:</strong> ${data.main.pressure} hPa</div>
        <div><strong>Min / Max:</strong> ${data.main.temp_min}°C / ${
            data.main.temp_max
          }°C</div>
        <div><strong>Visibility:</strong> ${data.visibility / 1000} km</div>
        <div><strong>Sunrise:</strong> ${new Date(
          data.sys.sunrise * 1000
        ).toLocaleTimeString()}</div>
        <div><strong>Sunset:</strong> ${new Date(
          data.sys.sunset * 1000
        ).toLocaleTimeString()}</div>
      </div>
    `;
        } catch (err) {
          resultBox.innerHTML = `<p style="color: red;">Something went wrong!</p>`;
        } finally {
          loader.classList.add("hidden"); // Hide loader
        }
      });