const APIKey = "spR1yRtJjLQpoG9icbpzXkzQi9mAzz5A";
const baseUrl = "http://dataservice.accuweather.com/";

const getCityUrl = (cityName) =>
  `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

const getWeatherUrl = (key) =>
  `${baseUrl}currentconditions/v1/${key}?apikey=${APIKey}`;

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

const getWeatherInfo = (key) => fetchData(getWeatherUrl(key));
