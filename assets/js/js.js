// variable that show today's week day, date and hours:mins  (used moment.js for grabbing time style)
var today = moment().format("LLLL");
// jQuery grabbing the id "currentDay" from html and updating to the variable today
$("#currentDay").html(today);


// save button 

$(".saveBtn").on('click', function() {
  var task = $(this).parent().attr('id');
  var clock = $(this).siblings('.description').val();
  localStorage.setItem(task,clock);
 console.log('clicked')
})

// function that will audit time and color time windows differently for past, present and future
function auditTime() {
  //get current hours from 
  var timeNow = moment().hour();

// jQuery uses $ to select the div with class time-window and will loop this function over time windows
  $(".time-block").each(function () {
    // timeWindow variable where we get the id hour with $jQuery
    var timeWindow = parseInt($(this).attr("id"));
// if the current time equals the time in the window, color with red
    if (timeNow === timeWindow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
// if time window is past the current time (timeNow) the class past will be added       
    } else if (timeWindow < timeNow) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
      // if timeblock wasn't color coded by the last two if statements it will add future class to timeblock
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

// function that will run to audit time so colors (past/present/future) are showing 
auditTime();



// when clear schedule button is clicked all 
$("#clearSchedule").on("click", function () {
  localStorage.clear();
  window.location.reload();
})


// Retrieves item from local storage if any
// getItem method returns the value of the key name that’s passed to it
$("#7 .description").val(localStorage.getItem("7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13.description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));

