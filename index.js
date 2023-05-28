const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}
findMatching(drivers, "Bobby")

function fuzzyMatch(drivers, letters){
    const lowercaseLetters = letters.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowercaseLetters))

    }
fuzzyMatch(drivers, 'bo')

const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(array, name){

    for(let driver of array){
      return driversObj.filter(driver => driver["name"] === name)
      }
 }
  

  matchName(driversObj, 'Bobby')