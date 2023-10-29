const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityWeatherIconContainer = document.querySelector('[data-js="time-icon"]')
const cardDataContainer = document.querySelector('[data-js="card-data"]')

let timeImg = document.querySelector('[data-js="time"]')

const insertWeatherDateIntoDOM = (LocalizedName, WeatherText, Temperature) => {
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value
}

const insertImgIntoDOM = (WeatherIcon, IsDayTime) => {
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`
  const timeImgSrc = IsDayTime ? './src/day.svg' : './src/night.svg'

  timeImg.src = timeImgSrc
  cityWeatherIconContainer.innerHTML = timeIcon
}

const showCardIfItHidden = () => {
  if(cardDataContainer.classList.contains('d-none')){
    cardDataContainer.classList.remove('d-none')
  }
}

cityForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const [{LocalizedName, Key}] = await getCityInfo(inputValue)
  const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = 
    await getWeatherInfo(Key)
   

  showCardIfItHidden()
  insertImgIntoDOM(WeatherIcon, IsDayTime)
  insertWeatherDateIntoDOM(timeIcon, LocalizedName, WeatherText, Temperature, WeatherIcon)
   
  event.target.reset()
})