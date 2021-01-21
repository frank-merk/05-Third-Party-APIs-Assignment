// set up Luxon's DateTime w/CDN
var DateTime = luxon.DateTime;

// Get the local current date and time
var dt = DateTime.local();

// store the current date as a string, displaying month, date, and year
var currentDate = dt.toLocaleString(DateTime.DATE_MED);
var currentHour = dt.hour;
console.log(dt.toLocaleString(DateTime.TIME_SIMPLE));
console.log(currentDate);
console.log(currentHour);

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

// the values from local storage are displayed th textarea by using id variables. May be empty.
toDoInput9.val(timeBlock9);
toDoInput10.val(timeBlock10);
toDoInput11.val(timeBlock11);
toDoInput12.val(timeBlock12);
toDoInput1.val(timeBlock1);
toDoInput2.val(timeBlock2);
toDoInput3.val(timeBlock3);
toDoInput4.val(timeBlock4);
toDoInput5.val(timeBlock5);



function displayCurrentDate() {
    $("#currentDay").text(currentDate);
  }

  displayCurrentDate();