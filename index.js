var toggle = 1;
$(document).ready(() => {
  $(".hamicon").click(() => {
    // $(".sidebar").toggle("slow");
    if (toggle == 0) {
      $(".sidebar").animate({ left: "-400px" });
      toggle = 1;
    } else {
      $(".sidebar").animate({ left: "0px" });
      toggle = 0;
    }
  });
  $(".navsecondpart").click(() => {
    $(".ellipsismenu").slideToggle("slow");
  });
  $(".searchbutton").click(() => {
    $.get("", (data) => {});
  });
});
