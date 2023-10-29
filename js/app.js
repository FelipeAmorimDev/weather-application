const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityWeatherIconContainer = document.querySelector('[data-js="time-icon"]')
const cardDataContainer = document.querySelector('[data-js="card-data"]')

let timeImg = document.querySelector('[data-js="time"]')

cityForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const [{LocalizedName, Key}] = await getCityInfo(inputValue)
  const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = 
    await getWeatherInfo(Key)
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`

  if(IsDayTime){
    timeImg.src = './src/day.svg'
  }else{
    timeImg.src = './src/night.svg'
  }

  if(cardDataContainer.classList.contains('d-none')){
    cardDataContainer.classList.remove('d-none')
  }
  
  cityWeatherIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value
  
  event.target.reset()
})