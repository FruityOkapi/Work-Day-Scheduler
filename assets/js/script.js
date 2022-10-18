// These make new objects for day month and year that update with the current date.
var currentHourMoment = moment().format('h');
// parses the string from moment into a integer for proper math to occur later
var currentHour = parseInt(currentHourMoment);
// adds id selecting for certain elements to be appended
var container = $('.container');
var validateSave = $('#validated-save');
// This will be to set the date on the title. So the var selects the p element by id and the code following will directly set the text to the current date
var dateTitle = $('#currentDay');
dateTitle.text(moment().format('ddd. MMM Do, YYYY'));
// This next block of code is to make a new array with the times in 24 hour format which will be fixed in the first function
var times = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
// 
var ids = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
// This is to set the appointment array.
var appointments = ['', '', '', '', '', '', '', '', ''];
// This will be the function that creates the planner
function createPlanner(){
    // For loop creates each block and does the delegation on what is in the future and what is in the past and present while also setting functionality for buttons to save whats written in the correct textareas.
    for (var i = 0; i < times.length; i++) {
        // makes new div and adds classes
        var timeblock = $('<div>');
        timeblock.addClass('time-block');
        timeblock.addClass('row');
        // makes new div and adds classes with an if statement that sets the text of this div to am or PM
        var hour = $('<div>');
        hour.addClass('hour');
        if (times[i] > 12){
            hour.text(times[i] - 12 +' PM');
        } else {
            hour.text(times[i] + ' AM');
        }
        // makes new textarea. adds id corresponding to the current box being made. adds a row. adds text from appointments array.
        var formT = $('<textarea>');
        formT.attr('id', ids[i]);
        formT.attr('rows', '3');
        formT.text(appointments[i]);
        // this else if statement checks current time and adds a class based on current time
        if (currentHour < times[i]) {
            formT.addClass('future');
        } else if (currentHour == times[i]) {
            formT.addClass('present');
        } else {
            formT.addClass('past');
        }
        // makes a button, adds a class, and sets the function to save the text of the textarea that was made in the same iteration of the for loop as the button. There might be a better way to code this but the only way I could think of doesn't work in jQuery syntax. I try to get "effectedButton" to select an id in an array based on the value of 'i' with a for loop but because of the way jQuery syntax works it makes it impossible because of the quotes make it a string.
        var bttn = $('<button>');
        bttn.addClass('saveBtn');
        if (i === 0) {
            bttn.click(function() {
                var effectedButton = $('#9am');
                appointments[0] = effectedButton.val();
                localStorage.setItem('appointments', JSON.stringify(appointments));
                dispSaveNotif();
            })
        } else if (i === 1) {
            bttn.click(function() {
                var effectedButton = $('#10am');
                appointments[1] = effectedButton.val();
                localStorage.setItem('appointments', JSON.stringify(appointments));
                dispSaveNotif();
            })
        } else if (i === 2) {
            bttn.click(function() {
                var effectedButton = $('#11am');
                appointments[2] = effectedButton.val();
                localStorage.setItem('appointments', JSON.stringify(appointments));
                dispSaveNotif();
            })
        } else if (i === 3) {
            bttn.click(function() {
                var effectedButton = $('#12pm');
                appointments[3] = effectedButton.val();
               localStorage.setItem('appointments', JSON.stringify(appointments));
               dispSaveNotif();
            })
        } else if (i === 4) {
            bttn.click(function() {
                var effectedButton = $('#1pm');
                appointments[4] = effectedButton.val();                
                localStorage.setItem('appointments', JSON.stringify(appointments));
                dispSaveNotif();
            })
        } else if (i === 5) {
            bttn.click(function() {
                var effectedButton = $('#2pm');
                appointments[5] = effectedButton.val();                
                localStorage.setItem('appointments', JSON.stringify(appointments));
                dispSaveNotif();
            })
        } else if (i === 6) {
            bttn.click(function() {
                var effectedButton = $('#3pm');
                appointments[6] = effectedButton.val();                
                localStorage.setItem('appointments', JSON.stringify(appointments));
                dispSaveNotif();
            })
        } else if (i === 7) {
            bttn.click(function() {
                var effectedButton = $('#4pm');
                appointments[7] = effectedButton.val();                
                localStorage.setItem('appointments', JSON.stringify(appointments));
                dispSaveNotif();
            })
        } else if (i === 8) {
            bttn.click(function() {
                var effectedButton = $('#5pm');
                appointments[8] = effectedButton.val();                
                localStorage.setItem('appointments', JSON.stringify(appointments));
                dispSaveNotif();
            })
        }
        // makes a save icon and appends it to the button
        var saveIcon = $('<i>');
        saveIcon.addClass('bi');
        saveIcon.addClass('bi-save');
        bttn.append(saveIcon);
        // appending the elements created above to the page
        timeblock.append(hour);
        timeblock.append(formT);
        timeblock.append(bttn);
        container.append(timeblock);
    }
}
// sets the array to the current planner
function setAppointments() {
    var getAppts = localStorage.getItem('appointments');
    appointments = JSON.parse(getAppts);
}
// this makes the save notif and makes it not visible
function SaveNotif() {
    var saveNotif = $('<h2>');
    saveNotif.text('Saved appointment! ')
    var calIcon = $('<i>');
    calIcon.addClass('bi');
    calIcon.addClass('bi-calendar-check-fill');
    calIcon.attr('id', 'align-center')
    validateSave.append(saveNotif);
    validateSave.append(calIcon);
    validateSave.show().fadeOut(0);
}
// makes the save notif display for 3 seconds while fading out
function dispSaveNotif() {
    validateSave.show().fadeOut(3000);
}
// This is for first time launch so the item appointments in the localStorage doesn't get set as a null object if my code tries to grab an item that doesn't exist it sets it as null and is unable to be altered.
var lsApp = localStorage.getItem('appointments');
if (lsApp === null) {
    localStorage.setItem('appointments', JSON.stringify(appointments));
}
// This is for displaying the page and setting the correct appointments.
SaveNotif();
setAppointments();
createPlanner();