// This sets the time along with defining certain values
var date = moment().format('ddd. MMMM Do, YYYY');

// This will be to set the date on the title. So the var selects the p element by id and the code following will directly set the text to the current date
var dateTitle = $('#currentDay');
dateTitle.text(date);
// This next block of code is to make a new array with the date
var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
// This is to set the save icon as a function to reduce repeating myself
function createIcon() {
    var saveIcon = $('<i>');
    saveIcon.addClass('bi');
    saveIcon.addClass('bi-save');
}
// This is to set the appointment array.
var appointments = [];
// This will be the function that creates the planner
function createPlanner(){
    for (var i = 0; i > times.length; i++) {
        var form = $('<form>');
        var hour = $('<h3>');
        hour.text(times[i]);
        var formT = $('<input>');
        formT.attr('type', 'text');
        // I need to import the previous input here somehow
        
        
        var formSub = $('<input>');
        formSub.attr('type', 'submit');
        form.submit(function(event) {
            var userInput = formT.val();
        })
        
    }
}




// This is for first time launch
var lsApp = localStorage.getItem('appointments');
if (lsApp === null) {
    localStorage.setItem('appointments', JSON.stringify(appointments));
}
// This is for displaying the site
createPlanner();