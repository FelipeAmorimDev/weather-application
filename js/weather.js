const APIKey = "IzIAiuZUU3lwGna1vwSQfUb8s7WZHJ70";
const baseUrl = "http://dataservice.accuweather.com/";

const getCityUrl = (cityName) =>
  `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

const getWeatherUrl = ({ Key }) =>
  `${baseUrl}currentconditions/v1/${Key}?apikey=${APIKey}`;

const fetchData = async (url) => {
  try {
    const reponse = await fetch(url);

    if (!reponse.ok) {
      throw new Error("Não foi possivel buscar a cidade informada");
    }

    return reponse.json();
  } catch ({ name, message }) {
    console.log(`${name}: ${message}`);
  }
};

const getCityInfo = (cityName) => fetchData(getCityUrl(cityName));

const getWeatherInfo = async (cityName) => {
  const [cityData] = await getCityInfo(cityName);
  return fetchData(getWeatherUrl(cityData));
};

getWeatherInfo("Petrolina").then(console.log);
