const { nextISSTimesForMyLocation } = require("./iss_promised");
const { printPassTimes } = require("./index")
//fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, 


nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  // .catch((error) => {
  //   console.log("It didn't work: ", error.message);
;


// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));