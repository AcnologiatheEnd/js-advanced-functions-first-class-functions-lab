// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  const first = []
  first.push(drivers[0])
  first.push(drivers[1])
  return first
}

const returnLastTwoDrivers = function (drivers) {
  const last = []
  last.push(drivers[drivers.length-2])
  last.push(drivers[drivers.length-1])
  return last
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return multiplier * fare
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
   return func(drivers)
}