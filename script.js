const apiKey = "d8f2dc010d60963f8edc9c0b4a7bc21e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";
const weatherIcon=document.querySelector('.temp-img')
const searchBtn=document.querySelector('.search button')
const searchBox=document.querySelector('.search input')

async function weatherCheck(city) {
    const response = await fetch(apiUrl+city+`&APPID=${apiKey}`);
    var data= await response.json()
    console.log(data)
    
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.speed').innerHTML=data.wind.speed+"km/h";
    document.querySelector('.tem-kel').innerHTML=Math.round((data.main.temp)-273)+" °C";

    if(data.weather[0].main=='Clouds'){
        weatherIcon.src='images/clouds.png'
    }
    else if(data.weather[0].main=='Clear'){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=='Mist'){
        weatherIcon.src="images/mist.png"
    }


}
searchBtn.addEventListener('click',()=>{
    weatherCheck(searchBox.value)
})



