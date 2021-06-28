//Js file for loveday-scheduler

//Declare Globals
//Variable for current time on run
let currentTime = "";

//Local Storage
let local = window.localStorage;

//Planner Array
let planner = ["", "", "", "", "", "", "", "", ""];


//Set & Display current date
console.log("start setDate()");
setDate();
console.log("exit setDate()");
console.log("----------------------");

console.log("start load()");
load();
console.log("exit load()");
console.log("----------------------");

console.log("start rowColors()");
rowColors();
console.log("exit rowColors()");
console.log("----------------------");



//Button listeners
//9:00am
$("#9-save").click(function() {
    let text = $("#9-textArea").val();
    planner[0] = text;

    save();
    console.log("Saved contents of 9:00am");
});

//10:00am
$("#10-save").click(function() {
    let text = $("#10-textArea").val();
    planner[1] = text;

    save();
    console.log("Saved contents of 10:00am");
});

//11:00am
$("#11-save").click(function() {
    let text = $("#11-textArea").val();
    planner[2] = text;

    save();
    console.log("Saved contents of 11:00am");
});

//12:00pm
$("#12-save").click(function() {
    let text = $("#12-textArea").val();
    planner[3] = text;

    save();
    console.log("Saved contents of 12:00pm");
});

//1:00pm
$("#1-save").click(function() {
    let text = $("#1-textArea").val();
    planner[4] = text;

    save();
    console.log("Saved contents of 1:00pm");
});

//2:00pm
$("#2-save").click(function() {
    let text = $("#2-textArea").val();
    planner[5] = text;

    save();
    console.log("Saved contents of 2:00pm");
});

//3:00pm
$("#3-save").click(function() {
    let text = $("#3-textArea").val();
    planner[6] = text;

    save();
    console.log("Saved contents of 3:00pm");
});

//4:00pm
$("#4-save").click(function() {
    let text = $("#4-textArea").val();
    planner[7] = text;

    save();
    console.log("Saved contents of 4:00pm");
});

//5:00pm
$("#5-save").click(function() {
    let text = $("#5-textArea").val();
    planner[8] = text;

    save();
    console.log("Saved contents of 5:00pm");
});


//Loads planner from local
function load() {

    planner = JSON.parse(local.getItem("planner") || "[]");

    //Load existing text in
    $("#9-textArea").val(planner[0]);
    $("#10-textArea").val(planner[1]);
    $("#11-textArea").val(planner[2]);
    $("#12-textArea").val(planner[3]);
    $("#1-textArea").val(planner[4]);
    $("#2-textArea").val(planner[5]);
    $("#3-textArea").val(planner[6]);
    $("#4-textArea").val(planner[7]);
    $("#5-textArea").val(planner[8]);
    console.log("-Contents Loaded");
}

//Saves whole planner
function save() {
    local.setItem("planner", JSON.stringify(planner));
}

//Function to set time backgrounds
function rowColors() {
    let time1 = "9:00am";
    let time1Check = compareTime(time1);

    let time2 = "10:00am";
    let time2Check = compareTime(time2);

    let time3 = "11:00am";
    let time3Check = compareTime(time3);

    let time4 = "12:00pm";
    let time4Check = compareTime(time4);

    let time5 = "1:00pm";
    let time5Check = compareTime(time5);

    let time6 = "2:00pm";
    let time6Check = compareTime(time6);

    let time7 = "3:00pm";
    let time7Check = compareTime(time7);

    let time8 = "4:00pm";
    let time8Check = compareTime(time8);

    let time9 = "5:00pm";
    let time9Check = compareTime(time9);

    let time10 = "6:00pm";
    let time10Check = compareTime(time10);

    //1st
    if (time1Check == false && time2Check == false) {
        $("#9-textBackground").addClass("bg-danger");
    } else if (time2Check == true && time1Check == false) {
        $("#9-textBackground").addClass("bg-warning");
    } else {
        $("#9-textBackground").addClass("bg-success");
    }

    //2nd
    if (time2Check == false && time3Check == false) {
        $("#10-textBackground").addClass("bg-danger");
    } else if (time2Check == false && time3Check == true) {
        $("#10-textBackground").addClass("bg-warning");
    } else {
        $("#10-textBackground").addClass("bg-success");
    }

    //3rd
    if (time3Check == false && time4Check == false) {
        $("#11-textBackground").addClass("bg-danger");
    } else if (time3Check == false && time4Check == true) {
        $("#11-textBackground").addClass("bg-warning");
    } else {
        $("#11-textBackground").addClass("bg-success");
    }

    if (time4Check == false && time5Check == false) {
        $("#12-textBackground").addClass("bg-danger");
    } else if (time4Check == false && time5Check == true) {
        $("#12-textBackground").addClass("bg-warning");
    } else {
        $("#12-textBackground").addClass("bg-success");
    }

    //5th
    if (time5Check == false && time6Check == false) {
        $("#1-textBackground").addClass("bg-danger");
    } else if (time5Check == false && time6Check == true) {
        $("#1-textBackground").addClass("bg-warning");
    } else {
        $("#1-textBackground").addClass("bg-success");
    }

    //6th
    if (time6Check == false && time7Check == false) {
        $("#2-textBackground").addClass("bg-danger");
    } else if (time6Check == false && time7Check == true) {
        $("#2-textBackground").addClass("bg-warning");
    } else {
        $("#2-textBackground").addClass("bg-success");
    }

    //7th
    if (time7Check == false && time8Check == false) {
        $("#3-textBackground").addClass("bg-danger");
    } else if (time7Check == false && time8Check == true) {
        $("#3-textBackground").addClass("bg-warning");
    } else {
        $("#3-textBackground").addClass("bg-success");
    }

    //8th
    if (time8Check == false && time9Check == false) {
        $("#4-textBackground").addClass("bg-danger");
    } else if (time8Check == false && time9Check == true) {
        $("#4-textBackground").addClass("bg-warning");
    } else {
        $("#4-textBackground").addClass("bg-success");
    }

    //9th
    if (time9Check == false && time10Check == false) {
        $("#5-textBackground").addClass("bg-danger");
    } else if (time9Check == false && time10Check == true) {
        $("#5-textBackground").addClass("bg-warning");
    } else {
        $("#5-textBackground").addClass("bg-success");
    }

}


//Compare Row time w/ Current Time
function compareTime(blockTime) {
    //Take parameter and format to comparible var
    let rowTime = moment(blockTime, "h:mma");

    //Convert currentTime to proper format
    let cTime = moment(currentTime, "h:mma");

    //Set boolean status
    let bool = cTime.isBefore(rowTime);

    //If current time is past cell time:
    if (bool == false) {
        //console.log("Row time has expired!");
        return false;

    //Else if current time is before cell time:
    } else if (bool == true) {
        //console.log("Row time is still valid!");
        return true;
    }
    console.log("exit compareTime()");
}


//Set & Display current date function
function setDate() {
    let getDate = moment().toDate();
    let currentDate = moment(getDate).format("dddd, MMMM Do YYYY");
    currentTime = moment(getDate).format("h:mma");
    
    $("#currentDay").html("<p>" + currentDate + "</p>");
    console.log("-Current Date set");
}
