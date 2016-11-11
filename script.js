//DIVS AND CLASSES _ 
$(document).ready(function() {
var seats = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", 
"B5","C1","C2","C3","C4","C5","C6","C7","D1","D2","D3","D4",
"D5","D6","D7","D8"];

 for(var i =0; i< seats.length; i++){
 var element = seats[i];
  if (element.charAt(0)==="A"){ 
    $("#row1").append('<div class="Assie seat" id="'+element+'"">' + seats[i]+ '</div>');
  } 
  
  else if (element.charAt(0)==="B"){
  $("#row2").append('<div class="Bassie seat">' + seats[i]+ '</div>');  
  }

  else if (element.charAt(0)==="C"){
  $("#row3").append('<div class="Cassie seat">' + seats[i]+ '</div>');  
  }

  else {
  $("#row4").append('<div class="Dassie seat">' + seats[i]+ '</div>');  
  }
};



//END CLASS

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
