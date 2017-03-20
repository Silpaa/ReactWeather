import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=66709c9a503012c414bce3aed4a99089&units=imperial';
//
module.exports = {
  getTemp(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){
      if(res.data.code && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    },function(res){
      throw new Error(res.data.message);
    })
  }
}
