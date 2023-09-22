$(document).ready(function () {
  console.log('hello')
  var planner = document.querySelector(".planner");
  var currentTime = new Date();
  $(".saveBtn").on("click", function () {
    console.log('working')
    var textValue = $(this).siblings(".description").val()
    console.log(textValue)
    var timeblockHour = $(this).siblings(".hour").text()
    localStorage.setItem(timeblockHour, textValue)
    var JohnDoe = localStorage.getItem('myName')
  })
  for (let i = 1; i <= 12; i++) {
    if (i < 6 || i === 12) {
      $(`#hour-${i} .description`).val(localStorage.getItem(`${i}PM`))
    }
    else if (i > 5 && i < 9) {
      console.log('skip')
    }
    else if (i > 8 && i < 12) {
      $(`#hour-${i} .description`).val(localStorage.getItem(`${i}AM`))
    }
  }
  
  var currentDate = new Date();
  var currentDateElement = document.getElementById("current-date");
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = currentDate.toLocaleDateString('en-US', options);
  currentDateElement.textContent = "Today's Date: " + formattedDate;

  // Tells the elements where I want them displayed: (i.e. 'header')
  var headerElement = document.getElementById("Work Day Scheduler");
  // Formats the date to the current day
  var formatDate = currentDate.toDateString('Today is ');
  // Sets the current date to the header string
  var currentHour = currentDate.getHours()
  console.log(currentHour)
  // This is where the color coding comes in 
  // Lines 39-43 parse the time as numbers since javascript doesnt read time 
  $('.time-block').each(function () {
    var timeHour = parseInt($(this).attr('id').split('-')[1])
    if (timeHour < 9) {
      timeHour += 12
    }
    // lines 46-57 change the color of each timeblock based on the hour that it is and the corresponding class in CSS 
    if (timeHour < currentHour) {
      $(this).addClass('past')
      $(this).removeClass('present')
      $(this).removeClass('future')
    } else if (timeHour === currentHour) {
      $(this).addClass('present')
      $(this).removeClass('past')
      $(this).removeClass('future')
    } else {
      $(this).addClass('future')
      $(this).removeClass('present')
      $(this).removeClass('past')
    }
  })
})
