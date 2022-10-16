// This makes a new empty object that has all the values for the current date and time
var date = new Date();
// These make new objects for day month and year that update with the current date.
var day = date.getDay();
var dayNum = date.getDate();
var month = date.getMonth(); 
var year = date.getFullYear();
var currentHour = date.getHours();
var container = $('.container');
// This will be to set the date on the title. So the var selects the p element by id and the code following will directly set the text to the current date
var dateTitle = $('#currentDay');
dateTitle.text(moment().format('ddd. MMM Do, YYYY'));
// This next block of code is to make a new array with the date
var times = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
// 
var ids = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
// This is to set the appointment array.
var appointments = ['eeee', '', '', '', '', '', '', '', ''];
// This will be the function that creates the planner
function createPlanner(){
    for (var i = 0; i < times.length; i++) {
        var timeblock = $('<div>');
        timeblock.addClass('time-block');
        timeblock.addClass('row');
        var hour = $('<div>');
        hour.addClass('hour');
        if (times[i] > 12){
            hour.text(times[i] - 12 +' PM');
        } else {
            hour.text(times[i] + ' AM');
        }
        var formT = $('<textarea>');
        formT.attr('id', ids[i]);
        formT.text(appointments[i]);
        if (currentHour < times[i]) {
            formT.addClass('future');
        } else if (currentHour == times[i]) {
            formT.addClass('present');
        } else {
            formT.addClass('past');
        }
        var bttn = $('<button>');
        bttn.addClass('saveBtn');
        var saveIcon = $('<i>');
        saveIcon.addClass('bi');
        saveIcon.addClass('bi-save');
        bttn.append(saveIcon);
        timeblock.append(hour);
        timeblock.append(formT);
        timeblock.append(bttn);
        container.append(timeblock);
    }
}
// This is for first time launch
var lsApp = localStorage.getItem('appointments');
if (lsApp === null) {
    localStorage.setItem('appointments', JSON.stringify(appointments));
}
// This is for displaying the page
createPlanner();