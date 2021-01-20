var stringLuxon = JSON.stringify(luxon);
console.log(stringLuxon);
console.log(luxon.DateTime);

var DateTime = luxon.DateTime;
var dt = DateTime.fromISO(new Date().toISOString());
console.log(dt.toFormat('yyyy/MM/dd'));
var dt2 = DateTime.fromJSDate(new Date());
console.log(dt2.toFormat('yyyy/MM/dd'));