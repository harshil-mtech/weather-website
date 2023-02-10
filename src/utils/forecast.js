const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=226816f3cb9152eba0a5b2c32a689925&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to forecast services!", undefined);
    } else if (body.error) {
      callback("Unable to find the location. Try another one!", undefined);
    } else {
      const data = body.current;
      callback(
        undefined,
        data.weather_descriptions[0] +
          ". It is currently " +
          data.temperature +
          " degrees out. It feels like " +
          data.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
