// 1. findMatching: case-insensitive match
function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// 2. fuzzyMatch: match beginning letters
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// 3. matchName: match exact name in driver objects
function matchName(drivers, query) {
  return drivers.filter(driver => driver.name === query);
}

