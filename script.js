// set up Luxon's DateTime w/CDN
var DateTime = luxon.DateTime;

// Get the local current date and time
var dt = DateTime.local();

// store the current date as a string, displaying month, date, and year
var currentDate = dt.toLocaleString(DateTime.DATE_MED);
var currentHour = dt.hour;

// Debugging
console.log(dt.toLocaleString(DateTime.TIME_SIMPLE));
console.log(currentDate);
console.log(currentHour);

// Write the date to the console, as "MONTH dd, yyyy"
$("#currentDay").text(currentDate);

// Variable for the timeblock text areas by hour
var timeBlock9 = $("#hour-9");
var timeBlock10 = $("#hour-10");
var timeBlock11 = $("#hour-11");
var timeBlock12 = $("#hour-12");
var timeBlock1 = $("#hour-1");
var timeBlock2 = $("#hour-2");
var timeBlock3 = $("#hour-3");
var timeBlock4 = $("#hour-4");
var timeBlock5 = $("#hour-5");

// Create a variable for local storage from previous entries. We will store this in the variable and call it if necessary
var toDoInput9 = localStorage.getItem("hour-9");
var toDoInput10 = localStorage.getItem("hour-10");
var toDoInput11 = localStorage.getItem("hour-11");
var toDoInput12 = localStorage.getItem("hour-12");
var toDoInput1 = localStorage.getItem("hour-1");
var toDoInput2 = localStorage.getItem("hour-2");
var toDoInput3 = localStorage.getItem("hour-3");
var toDoInput4 = localStorage.getItem("hour-4");
var toDoInput5 = localStorage.getItem("hour-5");

// the values from local storage are displayed in the textarea by using id variables. May be empty.
timeBlock9.val(toDoInput9);
timeBlock10.val(toDoInput10);
timeBlock11.val(toDoInput11);
timeBlock12.val(toDoInput12);
timeBlock1.val(toDoInput1);
timeBlock2.val(toDoInput2);
timeBlock3.val(toDoInput3);
timeBlock4.val(toDoInput4);
timeBlock5.val(toDoInput5);

function getTime() {

    // go through each text area element with class timeblock...
    $(".time-block").each(function () {
        // variable hour that stores the id as an integer for our timeblocks (9-17 for the workday)
        var hour = parseInt($(this).attr("id"));

        // if the current hour is less than the time-block's hour...
        if (hour < currentHour) {
            // give it a class of "past", colored grey on the calendar
            $(this).addClass("past");
        }
        // if the current time matches the timeblock id...
        else if (hour === currentHour) {
            // strip the "past" class...
            $(this).removeClass("past");
            // and add the present "red" class.
            $(this).addClass("present");

        } else {
            // otherwise, remove either class of "past" or "present" if they exist...
            $(this).removeClass("past");
            $(this).removeClass("present");
            // and give them the class "future", colored green.
            $(this).addClass("future");
        }
    });
};

getTime();

// Function to store user input to local storage when a user clicks the save icon
  $(".saveBtn").on("click", function (event) {
    // stops page from refreshing on button click
    event.preventDefault();

    // selects the previous element from the save button, which is the to-do element
    var toDoElement = $(this).prev();

    // variable to get the ID element of the hour (9-17)
    var hourElementId = toDoElement.attr("id");
    console.log(hourElementId);

    // toDo stores the text content of whatever is entered in the toDoElement
    var toDo = toDoElement.val();
    console.log(toDo);
    
    // Saves the user input if applicable corresponding to its hour ID. This is referenced in our "toDoInput[i]" variables above
    localStorage.setItem(hourElementId, toDo);
    
});
