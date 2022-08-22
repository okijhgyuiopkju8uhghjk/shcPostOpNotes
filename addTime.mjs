// fun to add hours to your date time
function addHours(numOfHours, date ) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  
    return date;
  }

// 👇️ named export
export { addHours };