let input = prompt("input date dd/mm/yyyy");//collects user input
let rawdate = (new Date(input)).toISOString().split('T')[0];//processes the date inputed by the user
let date = [];
date = rawdate.split('-');//splits it at the '-' so it can be put in an array
//alert(rawdate); //returns the month as -1 apparently JS counts months from 0-11
alert(date);
let [year,day,month]=date;//defines the 3 index into day month and year
let addmonth = parseInt(month)+2; //add 2 so it can minus 1 and leave you with the correct one.
/* alert(addmonth); */
let input2 = [day, addmonth, year] //puts new date in an array
let final = (new Date(input2)).toISOString().split('T')[0]; // formats and splits new month
alert(final); //display the date YYYY-DD-MM