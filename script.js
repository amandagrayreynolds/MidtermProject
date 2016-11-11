
$(document).ready(function(){
//seat highlighting//
    $(".seat").mouseenter(function(){
      $(this).fadeTo("fast",1);

      });
    $(".seat").mouseleave(function(){
      $(this).fadeTo("fast",0.5);
    });


/*//// FORM SCRIPT BELOW ////*/
$("#formWrapper").hide();

$(".seat").click(function(){
  $("#formWrapper").slideDown();
});

/*////PULLING USER INFO FROM FORM////*/
var userInfo = [];

submitButton.onclick = pullInfo;

function pullInfo() {
  var seatNumber;
  var userName = $("#userName").val();
  var userPhone = $("#userPhone").val();
  var userEmail = $("#userEmail").val();

  userInfo.push(
    {seat: seatNumber,
     name: userName,
     phone: userPhone,
     email: userEmail});

  $("#formWrapper").slideToggle();
}

/*//// FORM SCRIPT END ////*/


});
