function app() {
    let search = document.querySelector(".btnSr");

    if (search) {
        search.addEventListener("click", () => {
            let cityInput = document.getElementById("int");

            if (cityInput) {
                let city = cityInput.value.trim();
                if (city === "") {
                  
                    return;
                }

                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c52d8efd462a3c24c02e0e60fc552a55&units=metric`)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                          if (data.cod == "404") {
                             alert("Ville introuvable ! Veuillez vérifier.");
                           return;
                 }

                        let T = document.getElementById("temp");
                        T.textContent = data.main.temp + "°C";

                        let M = document.getElementById("humidity");
                        M.textContent = data.main.humidity;

                        let CT = document.getElementById("ct");
                        CT.textContent = data.name;

                        let state = document.getElementById("cm");
                        state.textContent = data.weather[0].main.toLowerCase();

                        let iconCode = data.weather[0].icon;


                        let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;


                        let iconImg = document.querySelector(".weather-icon");
                        if (iconImg) {
                            iconImg.src = iconUrl;
                        }

                    })
                    .catch(err => console.log("Error:", err));
            }
        });
    }
}


const btnDark = document.getElementById("dark");
btnDark.addEventListener("click", function () {
    document.body.classList.toggle("darkMode")
})
app();