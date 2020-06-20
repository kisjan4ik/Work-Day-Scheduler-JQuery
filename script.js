// display the current time using moment js
var currentDate = moment().format("MMMM Do YYYY, h a");

var time = $("#currentDay");

$(time).text(currentDate);




// When app opens, display content for each time block from local storage.
// it can be done with a loop (more efficient) or by tagreting each time a block sepaprately

for (let i = 8; i <= 19; i++) {
    $("#" + i).val(localStorage.getItem(i));

    console.log(localStorage.getItem(i));
}
// Click event to save text area content to local storage

$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    if (typeof (window.localStorage) != "undefined") {
        console.log(this);

        localStorage.setItem($(this).data("id"), $("#" + $(this).data("id")).val());

        console.log($(this).data("id"), $("#" + $(this).data("id")).val());
    }


});

// change time block background color depending on the current hour (past, present and future)

var currentTime = moment().hours();
console.log(currentTime);

var changeColor = $("textarea");
var planTime = $(".hour")

for (let i = 8; i <= 19; i++) {

let currentColor = (changeColor[i-8].id) 
 console.log(currentColor);
if (currentTime === currentColor) {

    $("#"+ currentColor).addClass("present");
}

else if (currentTime < currentColor) {
    
    $("#"+ currentColor).addClass("future");
} 

else if (currentTime > currentColor) {
    
    
    $("#"+ currentColor).addClass("past");
} 
}

