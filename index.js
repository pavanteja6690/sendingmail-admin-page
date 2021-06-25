var toggle = 1;

$(document).ready(() => {
  $("body>*:not(.sidebar):not(.navbar)").click(() => {
    if (toggle == 0) {
      $(".sidebar").animate({ left: "-380px" });
      $("body").css("overflow", "scroll");
      $("body > *:not(.sidebar):not(.navbar)").css("opacity", "1");
      toggle = 1;
    }
  });
  $(".hamicon").click(() => {
    // $(".sidebar").toggle("slow");
    if (toggle == 0) {
      $(".sidebar").animate({ left: "-380px" });
      $("body").css("overflow", "scroll");
      $("body > *:not(.sidebar):not(.navbar)").css("opacity", "1");
      toggle = 1;
    } else {
      $(".sidebar").animate({ left: "0px" });
      $("body").css("overflow", "hidden");
      $("body > *:not(.sidebar):not(.navbar)").css("opacity", "0.4");

      toggle = 0;
    }
  });
  $(".submit").click(() => {
    var to = $(".to").val();
    console.log(to);
    console.log(simplemde.value());
    var mail = simplemde.value();
    var data = { to, mail };
    console.log("entered");
    $.ajax({
      url: "http://localhost:5000/sendmail",
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
    $(".notification").text("message sent").addClass("notification-temp");
    $(".notification").slideDown();
    $(".to").val("0");
    simplemde.value("");
    setInterval(() => {
      $(".notification").text("").removeClass("notification-temp");
      $(".notification").slideUp();
    }, 3000);
  });
  $(".navsecondpart").click(() => {
    $(".ellipsismenu").slideToggle();
  });
});
