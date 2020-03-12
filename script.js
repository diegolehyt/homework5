//-----------------------------
//Library
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust', 'September', 'October', 'November', 'December'];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//time variables
let currentDate = new Date();
let cDate = currentDate.getDate();
let cMonth = months[currentDate.getMonth()];
let cDay = days[currentDate.getDay()];
let cHour = currentDate.getHours();


//HTML elements Variables
let pDay = document.getElementById('currentDay');
let Hours = document.getElementsByClassName('description');




//---------------------Program starts here!----------------------------
//Current Date Display
pDay.innerHTML = cDay + ', ' + cMonth + ' ' + cDate + 'th';
//Color Blocks
for (let i = 0; i < 24 ; i++){
    if (i < cHour){
        Hours[i] = Hours[i].classList.add('past');
    }
    else if (i === cHour){
        Hours[i] = Hours[i].classList.add('present');
    }
    else {
        Hours[i] = Hours[i].classList.add('future');
    }
}

