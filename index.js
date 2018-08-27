// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integ) {
  return function (fare) {
    return integ * fare
  }
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, foo) {
  return foo(arrayOfDrivers)
  
}
