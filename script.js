function app() {
    let search = document.querySelector(".btnSr"); 

    if (search) { 
        search.addEventListener("click", () => {
            let cityInput = document.getElementById("int");
            
            if (cityInput) {
                let city = cityInput.value.trim(); 
                if (city === "") {
                    console.log("Enter city name ...");
                    return;
                }

                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c52d8efd462a3c24c02e0e60fc552a55&units=metric`)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        let T=document.getElementById("temp")
                        T.textContent= data.main.temp + "°C";
                        let M=document.getElementById("humidity")
                        M.textContent= data.main.humidity;
                        let CT=document.getElementById("ct")
                        CT.textContent=data.name;
                        let state =document.getElementById("cm")
                        state.textContent = data.weather[0].main.toLowerCase();
                        let etat = document.querySelector(".descriptionMeteo");
                let conditions = data.weather[0].main.toLowerCase();
                etat.textContent = conditions;


                let icons = {
                    clear: "img/rainy-4.svg",
                    clouds:"img/rainy-4.svg",
                    rain :"img/rainy-4.svg",
                    snow:"img/rainy-4.svg",
                };

                let iconPic = icons[conditions] || "images/animated/weather.svg";
                document.querySelector(".sun").src = iconPic;
                    })
                    .catch(err => console.log("Error:", err)); 
            }
        });
    }
}

        const toggleBtn = document.getElementById('mode-toggle');
        
      
        toggleBtn.addEventListener('change', () => {
         
            document.body.classList.toggle('dark-mode');
          
        });

app();