var todayMonth = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayMonth);

$(document).ready(function (){

    $(".saveBtn").on("click", function () {
        
     var inputEl = $(this).siblings(".discription").val();
     var timeEl =  $(this).parent().attr("id");

     localStorage.setItem(inputEl,timeEl);

    })

function CurrentTimeEl(){
    var TimeNowEl = moment().hour();

$(".time-block").each(function () {

    var BTnTIme = parseInt($(this).attr("id").split("hour")[1]);

if(BTnTIme < TimeNowEl){
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past")

}else if(BTnTIme === TimeNowEl){
 $(this).removeClass("past");
 $(this).removeClass("future");
 $(this).addClass("present");
    
}else{
    $(this).removeClass("present")
    $(this).removeClass("past")
    $(this).addClass("future")
}

})

}
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

CurrentTimeEl();



})