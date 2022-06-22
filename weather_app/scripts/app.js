const formControl = document.querySelector("form");
const card = document.querySelector(".card")
const cityName = document.querySelector(".cityname") 
const weatherCon=document.querySelector(".weatherCon")
const temp = document.querySelector(".temp")
const imgg =document.querySelector(".time")



console.log(card)
card.style.visibility = "hidden";


const update= (data)=>{
    const {citty,weather} = data
    
    cityName.textContent=citty.LocalizedName
   weatherCon.textContent=weather.WeatherText
   temp.textContent=weather.Temperature.Metric.Value
  const number =weather.WeatherIcon
  console.log(number)
  imgg.src=`icons/${number}.svg`

}



const updateCity = async (city)=>{
    const citty = await getCity(city)
    const weather = await getWeather(citty.Key) 

    return{
        citty,weather
    }
}

formControl.addEventListener("submit",e => {
    card.style.visibility = "visible";
    e.preventDefault()
    const cityie = formControl.city.value
    updateCity(cityie).then(data => {
        update(data)
        console.log(data)
    }).catch(err=>console.log(err))
    formControl.reset()

})