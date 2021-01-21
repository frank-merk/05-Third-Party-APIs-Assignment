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



function displayCurrentDate() {
    $("#currentDay").text(currentDate);
  }

  displayCurrentDate();