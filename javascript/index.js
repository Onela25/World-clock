
//Los Ageles
let losAngelesElement = document.querySelector("#Los-Angeles");
let losAngelesDateElement = document.querySelector(".date");
let losAngelesTimeElement = document.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY") ;
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss[<small>]A[</small>]");



//Cape Town
let CapeTownElement = document.querySelector("#Cape-Town");
let CapeTownDateElement = document.querySelector(".date");
let CapeTownTimeElement = document.querySelector(".time");
let CapeTownTime = moment().tz("South_Africa/Western_Cape");

CapeTownDateElement.innerHTML = CapeTownTime.format("MMMM Do YYYY") ;
CapeTownTimeElement.innerHTML = CapeTownTime.format("h:mm:ss[<small>]A[</small>]");
