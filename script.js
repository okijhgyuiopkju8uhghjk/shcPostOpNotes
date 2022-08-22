import addHours from './addTime.mjs'
//first wait for the DOM to load
window.onload = function(){
    //get date from dom
    //get sur end time from dom
    document.getElementById("surEndTime").onclick= 
    function(){
        myDate = new Date("2022-03-14T"+document.getElementById("surEndTimeValue").value);
        //alert(document.getElementById("surEndTimeValue").value +document.getElementById("currentDate").value );
        document.getElementById("liquidDiteAt").innerHTML=(addHours(2, mydate)).toLocaleString('en-US', {
            //day:    'numeric',
            //month:  'numeric',
            //year:   'numeric',
            hour:   '2-digit',
            minute: '2-digit',
            hours12: "true"
            
        });
    }
    
    //import js date time script
    //get the value of sur end time..
    

}
