var DateTime = luxon.DateTime;
var dt = DateTime.fromISO(new Date().toISOString());
console.log(dt.toFormat('yyyy/MM/dd'));
var dt2 = DateTime.fromJSDate(new Date());
console.log(dt2.toFormat('yyyy/MM/dd'));

var currentDate = dt.toLocaleString(DateTime.DATETIME_MED);
console.log(currentDate);

function displayCurrentDate() {
    $("#currentDay").text(currentDate);
  }

  displayCurrentDate();