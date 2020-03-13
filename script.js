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

//All saveBtns
let saveBtn = document.getElementsByClassName('saveBtn');

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
//-------------------------------Get Local Storage and Display on Screen----------------------------
Hours[0].innerHTML = localStorage.getItem('12AM');
Hours[1].innerHTML = localStorage.getItem('1AM');
Hours[2].innerHTML = localStorage.getItem('2AM');
Hours[3].innerHTML = localStorage.getItem('3AM');
Hours[4].innerHTML = localStorage.getItem('4AM');
Hours[5].innerHTML = localStorage.getItem('5AM');
Hours[6].innerHTML = localStorage.getItem('6AM');
Hours[7].innerHTML = localStorage.getItem('7AM');
Hours[8].innerHTML = localStorage.getItem('8AM');
Hours[9].innerHTML = localStorage.getItem('9AM');
Hours[10].innerHTML = localStorage.getItem('10AM');
Hours[11].innerHTML = localStorage.getItem('11AM');
Hours[12].innerHTML = localStorage.getItem('12PM');
Hours[13].innerHTML = localStorage.getItem('1PM');
Hours[14].innerHTML = localStorage.getItem('2PM');
Hours[15].innerHTML = localStorage.getItem('3PM');
Hours[16].innerHTML = localStorage.getItem('4PM');
Hours[17].innerHTML = localStorage.getItem('5PM');
Hours[18].innerHTML = localStorage.getItem('6PM');
Hours[19].innerHTML = localStorage.getItem('7PM');
Hours[20].innerHTML = localStorage.getItem('8PM');
Hours[21].innerHTML = localStorage.getItem('9PM');
Hours[22].innerHTML = localStorage.getItem('10PM');
Hours[23].innerHTML = localStorage.getItem('11PM');


//---------------------------------Save Buttons events-------------------------------------------------
//12 AM
saveBtn[0].addEventListener("click", function(){
    if (localStorage.getItem('12AM') === null){
        localStorage.setItem('12AM', Hours[0].innerHTML);
    }
    else {
       localStorage.removeItem('12AM');
       localStorage.setItem('12AM', Hours[0].innerHTML);
    }
})
//1 AM
saveBtn[1].addEventListener("click", function(){
    if (localStorage.getItem('1AM') === null){
        localStorage.setItem('1AM', Hours[1].innerHTML);
    }
    else {
       localStorage.removeItem('1AM');
       localStorage.setItem('1AM', Hours[1].innerHTML);
    }
})
//2 AM
saveBtn[2].addEventListener("click", function(){
    if (localStorage.getItem('2AM') === null){
        localStorage.setItem('2AM', Hours[2].innerHTML);
    }
    else {
       localStorage.removeItem('2AM');
       localStorage.setItem('2AM', Hours[2].innerHTML);
    }
})
//3 AM
saveBtn[3].addEventListener("click", function(){
    if (localStorage.getItem('3AM') === null){
        localStorage.setItem('3AM', Hours[3].innerHTML);
    }
    else {
       localStorage.removeItem('3AM');
       localStorage.setItem('3AM', Hours[3].innerHTML);
    }
})
//4 AM
saveBtn[4].addEventListener("click", function(){
    if (localStorage.getItem('4AM') === null){
        localStorage.setItem('4AM', Hours[4].innerHTML);
    }
    else {
       localStorage.removeItem('4AM');
       localStorage.setItem('4AM', Hours[4].innerHTML);
    }
})
//5 AM
saveBtn[5].addEventListener("click", function(){
    if (localStorage.getItem('5AM') === null){
        localStorage.setItem('5AM', Hours[5].innerHTML);
    }
    else {
       localStorage.removeItem('5AM');
       localStorage.setItem('5AM', Hours[5].innerHTML);
    }
})
//6 AM
saveBtn[6].addEventListener("click", function(){
    if (localStorage.getItem('6AM') === null){
        localStorage.setItem('6AM', Hours[6].innerHTML);
    }
    else {
       localStorage.removeItem('6AM');
       localStorage.setItem('6AM', Hours[6].innerHTML);
    }
})
//7 AM
saveBtn[7].addEventListener("click", function(){
    if (localStorage.getItem('7AM') === null){
        localStorage.setItem('7AM', Hours[7].innerHTML);
    }
    else {
       localStorage.removeItem('7AM');
       localStorage.setItem('7AM', Hours[7].innerHTML);
    }
})
//8 AM
saveBtn[8].addEventListener("click", function(){
    if (localStorage.getItem('8AM') === null){
        localStorage.setItem('8AM', Hours[8].innerHTML);
    }
    else {
       localStorage.removeItem('8AM');
       localStorage.setItem('8AM', Hours[8].innerHTML);
    }
})
//9 AM
saveBtn[9].addEventListener("click", function(){
    if (localStorage.getItem('9AM') === null){
        localStorage.setItem('9AM', Hours[9].innerHTML);
    }
    else {
       localStorage.removeItem('9AM');
       localStorage.setItem('9AM', Hours[9].innerHTML);
    }
})
//10 AM
saveBtn[10].addEventListener("click", function(){
    if (localStorage.getItem('10AM') === null){
        localStorage.setItem('10AM', Hours[10].innerHTML);
    }
    else {
       localStorage.removeItem('10AM');
       localStorage.setItem('10AM', Hours[10].innerHTML);
    }
})
//11 AM
saveBtn[11].addEventListener("click", function(){
    if (localStorage.getItem('11AM') === null){
        localStorage.setItem('11AM', Hours[11].innerHTML);
    }
    else {
       localStorage.removeItem('11AM');
       localStorage.setItem('11AM', Hours[11].innerHTML);
    }
})
//12 PM
saveBtn[12].addEventListener("click", function(){
    if (localStorage.getItem('12PM') === null){
        localStorage.setItem('12PM', Hours[12].innerHTML);
    }
    else {
       localStorage.removeItem('12PM');
       localStorage.setItem('12PM', Hours[12].innerHTML);
    }
})
//1 PM
saveBtn[13].addEventListener("click", function(){
    if (localStorage.getItem('1PM') === null){
        localStorage.setItem('1PM', Hours[13].innerHTML);
    }
    else {
       localStorage.removeItem('1PM');
       localStorage.setItem('1PM', Hours[13].innerHTML);
    }
})
//2 PM
saveBtn[14].addEventListener("click", function(){
    if (localStorage.getItem('2PM') === null){
        localStorage.setItem('2PM', Hours[14].innerHTML);
    }
    else {
       localStorage.removeItem('2PM');
       localStorage.setItem('2PM', Hours[14].innerHTML);
    }
})
//3 PM
saveBtn[15].addEventListener("click", function(){
    if (localStorage.getItem('3PM') === null){
        localStorage.setItem('3PM', Hours[15].innerHTML);
    }
    else {
       localStorage.removeItem('3PM');
       localStorage.setItem('3PM', Hours[15].innerHTML);
    }
})
//4 PM
saveBtn[16].addEventListener("click", function(){
    if (localStorage.getItem('4PM') === null){
        localStorage.setItem('4PM', Hours[16].innerHTML);
    }
    else {
       localStorage.removeItem('4PM');
       localStorage.setItem('4PM', Hours[16].innerHTML);
    }
})
//5 PM
saveBtn[17].addEventListener("click", function(){
    if (localStorage.getItem('5PM') === null){
        localStorage.setItem('5PM', Hours[17].innerHTML);
    }
    else {
       localStorage.removeItem('5PM');
       localStorage.setItem('5PM', Hours[17].innerHTML);
    }
})
//6 PM
saveBtn[18].addEventListener("click", function(){
    if (localStorage.getItem('6PM') === null){
        localStorage.setItem('6PM', Hours[18].innerHTML);
    }
    else {
       localStorage.removeItem('6PM');
       localStorage.setItem('6PM', Hours[18].innerHTML);
    }
})
//7 PM
saveBtn[19].addEventListener("click", function(){
    if (localStorage.getItem('7PM') === null){
        localStorage.setItem('7PM', Hours[19].innerHTML);
    }
    else {
       localStorage.removeItem('7PM');
       localStorage.setItem('7PM', Hours[19].innerHTML);
    }
})
//8 PM
saveBtn[20].addEventListener("click", function(){
    if (localStorage.getItem('8PM') === null){
        localStorage.setItem('8PM', Hours[20].innerHTML);
    }
    else {
       localStorage.removeItem('8PM');
       localStorage.setItem('8PM', Hours[20].innerHTML);
    }
})
//9 PM
saveBtn[21].addEventListener("click", function(){
    if (localStorage.getItem('9PM') === null){
        localStorage.setItem('9PM', Hours[21].innerHTML);
    }
    else {
       localStorage.removeItem('9PM');
       localStorage.setItem('9PM', Hours[21].innerHTML);
    }
})
//10 PM
saveBtn[22].addEventListener("click", function(){
    if (localStorage.getItem('10PM') === null){
        localStorage.setItem('10PM', Hours[22].innerHTML);
    }
    else {
       localStorage.removeItem('10PM');
       localStorage.setItem('10PM', Hours[22].innerHTML);
    }
})
//11 PM
saveBtn[23].addEventListener("click", function(){
    if (localStorage.getItem('11PM') === null){
        localStorage.setItem('11PM', Hours[23].innerHTML);
    }
    else {
       localStorage.removeItem('11PM');
       localStorage.setItem('11PM', Hours[23].innerHTML);
    }
})
