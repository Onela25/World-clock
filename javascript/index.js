let losAngelesElement = document.querySelector("#Los-Angeles");
let losAngelesDateElement = document.querySelector(".date");
let losAngelesTimeElement = document.querySelector(".time");
let losAngelesTime = moment();

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do yyyy") ;
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss[<small>]A[</small>]");;
