var toggle = 1;
$(document).ready(() => {
  $("body>*:not(.sidebar):not(.navbar)").click(() => {
    if (toggle == 0) {
      $(".sidebar").animate({ left: "-320px" });
      $("body").css("overflow", "scroll");
      $("body > *:not(.sidebar):not(.navbar)").css("filter", "blur(0)");
      toggle = 1;
    }
  });
  $(".hamicon").click(() => {
    // $(".sidebar").toggle("slow");
    if (toggle == 0) {
      $(".sidebar").animate({ left: "-320px" });
      $("body").css("overflow", "scroll");
      $("body > *:not(.sidebar):not(.navbar)").css("filter", "blur(0)");
      toggle = 1;
    } else {
      $(".sidebar").animate({ left: "0px" });
      $("body").css("overflow", "hidden");
      $("body > *:not(.sidebar):not(.navbar)").css("filter", "blur(3px)");

      toggle = 0;
    }
  });
  $(".submit").click(() => {
    var name = $("#name").val();
    var email = $("#email").val();
    var number = $("#number").val();
    var subject = $("#subject").val();
    var textmessage = $("#textmessage").val();
    var data = { name, mail: email, subject, textmessage };

    $.ajax({
      url: "https://ancient-dusk-88387.herokuapp.com/sendmessage",
      type: "post",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", //for object property name, use quoted notation shown in second
      },
      dataType: "json",
      success: function (data) {
        console.log("message was sent");
      },
    });
  });
  $(".navsecondpart").click(() => {
    $(".ellipsismenu").slideToggle();
  });
});
