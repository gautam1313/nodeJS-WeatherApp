const request = require("request");

const forecast = (coordinates, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e8ef5822f8273f7386a481b91666749c&query=" +
    coordinates +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weatherstack network.", undefined);
    } else if (body.error) {
      callback(body.error.info, undefined);
    } else {
      const temperature = body.current.temperature;
      const feelslike = body.current.feelslike;
      const weatherStatement =
        body.current.weather_descriptions[0] +
        "\nIt is currently " +
        temperature +
        " degrees out. It feels like " +
        feelslike +
        " degrees out.";
      callback(undefined, weatherStatement);
    }
  });
};

module.exports = forecast;
