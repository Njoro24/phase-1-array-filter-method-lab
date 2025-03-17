// Code your solution here
const drivers = [
    { name: "Bobby", hometown: "Pittsburgh" },
    { name: "Sammy", hometown: "New York" },
    { name: "Sally", hometown: "Cleveland" },
    { name: "Annette", hometown: "Los Angeles" },
    { name: "Sarah", hometown: "Chicago" },
    { name: "Bobby", hometown: "Tampa Bay" }
  ];
  
  const findMatching = (driversArray, name) => {
    return driversArray.filter(driver => driver.toLowerCase() === name.toLowerCase());
  };
  
  
  const fuzzyMatch = (driversArray, letters) => {
    return driversArray.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  };
  
  const matchName = (driversArray, name) => {
    return driversArray.filter(driver => driver.name === name);
  };
  
  
  console.log(findMatching(["Bobby", "Sammy", "Sally", "Annette"], "bobby")); 
  
  
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette"], "Sa")); 
 
  
  console.log(matchName(drivers, "Bobby")); 
  
  