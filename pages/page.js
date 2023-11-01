$(document).ready(function () {
  $(".vid")
    .children("svg")
    .click(function () {
      if ($(this).parent(".vid").siblings(".vid")) {
        $(this)
          .parent(".vid")
          .siblings(".vid")
          .children("video")
          .trigger("pause");
        $(this).parent(".vid").siblings(".vid").children(".blackLayer").show();
        $(this).parent(".vid").siblings(".vid").children("svg").show();
      }
      $(this).siblings("video").trigger("play");
      $(this).hide();
      $(this).siblings(".blackLayer").hide();
    });
});
