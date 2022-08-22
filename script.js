//add hrs to date time =fun to add hours to your date time
function addHours(numOfHours, date ) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  
    return date;
  }
//first wait for the DOM to load
window.onload = function(){
    //get date from dom
    //get sur end time from dom
    document.getElementById("surEndTime").onclick= 
    function(){
        //myDate = new Date("2022-03-14T"+document.getElementById("surEndTimeValue").value);
        //console.log(typeof myDate);
        alert(document.getElementById("surEndTimeValue").value +document.getElementById("currentDate").value );
        document.getElementById("liquidDiteAt").innerHTML= "yes";
    }
    
    //import js date time script
    //get the value of sur end time..
    

}
