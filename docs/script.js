$(document).ready(function() {
    var currentDate = moment().format("MMMM Do, YYYY");
    var currentTime = moment().format("hh:mm:ss A"); // Extra variable, if the user wants to see the current hour
    var currentHour;
    var possibleHours = {
        before: ["12AM", "01AM", "02AM", "03AM", "04AM", "05AM", "06AM", "07AM", "08AM"],
        business: ["09AM", "10AM", "11AM", "12PM", "01PM", "02PM", "03PM","04PM", "05PM"],
        after: ["06PM", "07PM", "08PM", "09PM", "10PM", "11PM"]
    };

    function init() {
        // Display current date
        $("#date").text(currentDate);
        // Display current time
        // $("#time").text(currentTime);
        // Set colors based on current time
        timeColor();
        // Update current date and time every second
        let currentTimer = setInterval(function() {
            currentDate = moment().format("MMMM Do, YYYY");
            $("#date").text(currentDate);
            // currentTime = moment().format("hh:mm:ss A");
            // $("#time").text(currentTime);
            timeColor();
        }, 1000);
    }

    // Change text box/area to a specific color for past, present and future hours
    function timeColor() {
        currentHour = moment().format("hhA");
        // If currentHours is before 9am set all hours to background-color gray
        if (possibleHours.before.indexOf(currentHour) !==-1){
            $(".hourNotes").css("backgorund-color", "#d3d3d3");
        }
        // If currentHours is after 5, set all hours to background-color gray
        if (possibleHours.after.indexOf(currentHour) !== -1) {
            $(".hourNotes").css("background-color", "#d3d3d3");
        }
        // If currentHours is between 9 and 5 do the next steps
        if (possibleHours.business.indexOf(currentHour) !== -1) {
            // Set id that matches currentHour to background-color red
            $("#" + currentHour).css("background-color", "#ff6961");
            // Set all hours before currentHour to background-color gray
            for (let i = 0; i < possibleHours.business.indexOf(currentHour); i++){
                $("#" + possibleHours.business[i]).css("background-color", "#d3d3d3");
            }
            // Set all hours after currentHour to background-color green
            for (let i = possibleHours.business.length - 1; i > possibleHours.business.indexOf(currentHour); i--) {
                $("#" + possibleHours.business[i]).css("background-color", "#77dd77");
                
            }
        }
    }
    init();
});

// When the save button is clicked, it will be stored in the local storage

$(".saveBtn").on("click", function(){
    var clickId = $(this).attr("id");
    var textId;
    switch (clickId) {
        case "09AMsave":
            textId = $("#09AM").val();
            localStorage.setItem("09AMtext", textId);
            break;
        case "10AMsave":
            textId = $("#10AM").val();
            localStorage.setItem("10AMtext", textId);
            break;
        case "11AMsave":
            textId = $("#11AM").val();
            localStorage.setItem("11AMtext", textId);
            break;
        case "12PMsave":
            textId = $("#12PM").val();
            localStorage.setItem("12PMtext", textId);
            break;
        case "01PMsave":
            textId = $("#01PM").val();
            localStorage.setItem("01PMtext", textId);
            break;
        case "02PMsave":
            textId = $("#02PM").val();
            localStorage.setItem("02PMtext", textId);
            break;
        case "03PMsave":
            textId = $("#03PM").val();
            localStorage.setItem("03PMtext", textId);
            break;
        case "04PMsave":
            textId = $("#04PM").val();
            localStorage.setItem("04PMtext", textId);
            break;
        case "05PMsave":
            textId = $("#05PM").val();
            localStorage.setItem("05PMtext", textId);
    }
});

// Saved data is added to the current boxes where there were added previously

function loadData() {
    $("#09AM").text(localStorage.getItem("09AMtext"));
    $("#10AM").text(localStorage.getItem("10AMtext"));
    $("#11AM").text(localStorage.getItem("11AMtext"));
    $("#12PM").text(localStorage.getItem("12PMtext"));
    $("#01PM").text(localStorage.getItem("01PMtext"));
    $("#02PM").text(localStorage.getItem("02PMtext"));
    $("#03PM").text(localStorage.getItem("03PMtext"));
    $("#04PM").text(localStorage.getItem("04PMtext"));
    $("#05PM").text(localStorage.getItem("05PMtext"));
}

loadData();


