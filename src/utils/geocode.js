const request = require("request");

const geoCode = (location, callback) => {
  const geocodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(location) +
    ".json?access_token=pk.eyJ1Ijoic2ViODAiLCJhIjoiY2tzdnVsZGZmMXViOTJxb2R3YTVodWo3diJ9.CYc8vFQldqcyZTBl5o23hA&limit=1";

  request({ url: geocodeUrl, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to mapbox network.", undefined);
    } else if (body.features.length === 0) {
      callback("Please enter proper location.", undefined);
    } else {
      callback(undefined, {
        location: body.features[0].center.reverse().join(","),
        address: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
