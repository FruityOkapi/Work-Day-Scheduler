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
        if (i === 0) {
            bttn.click(function() {
                var effectedButton = $('#9am');
                appointments[0] = effectedButton.val();
                localStorage.setItem('appointments', JSON.stringify(appointments));
            })
        } else if (i === 1) {
            bttn.click(function() {
                var effectedButton = $('#10am');
                appointments[1] = effectedButton.val();
                localStorage.setItem('appointments', JSON.stringify(appointments));
            })
        } else if (i === 2) {
            bttn.click(function() {
                var effectedButton = $('#11am');
                appointments[2] = effectedButton.val();
                localStorage.setItem('appointments', JSON.stringify(appointments));
            })
        } else if (i === 3) {
            bttn.click(function() {
                var effectedButton = $('#12pm');
                appointments[3] = effectedButton.val();
               localStorage.setItem('appointments', JSON.stringify(appointments));
            })
        } else if (i === 4) {
            bttn.click(function() {
                var effectedButton = $('#1pm');
                appointments[4] = effectedButton.val();                localStorage.setItem('appointments', JSON.stringify(appointments));
            })
        } else if (i === 5) {
            bttn.click(function() {
                var effectedButton = $('#2pm');
                appointments[5] = effectedButton.val();                localStorage.setItem('appointments', JSON.stringify(appointments));
            })
        } else if (i === 6) {
            bttn.click(function() {
                var effectedButton = $('#3pm');
                appointments[6] = effectedButton.val();                localStorage.setItem('appointments', JSON.stringify(appointments));
            })
        } else if (i === 7) {
            bttn.click(function() {
                var effectedButton = $('#4pm');
                appointments[7] = effectedButton.val();                localStorage.setItem('appointments', JSON.stringify(appointments));
            })
        } else if (i === 8) {
            bttn.click(function() {
                var effectedButton = $('#5pm');
                appointments[8] = effectedButton.val();                localStorage.setItem('appointments', JSON.stringify(appointments));
            })
        }
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
function setAppointments() {
    var getAppts = localStorage.getItem('appointments');
    appointments = JSON.parse(getAppts);
}

// This is for first time launch
var lsApp = localStorage.getItem('appointments');
if (lsApp === null) {
    localStorage.setItem('appointments', JSON.stringify(appointments));
}
// This is for displaying the page
setAppointments();
createPlanner();