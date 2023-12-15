$(document).ready(function () {
  $(".cover").click(function () {
    $(this).fadeOut(200);
    $(".reelbgvid").trigger("play");
  });

  $(".name").click(function (e) {
    e.preventDefault();
    //   $(".cover").hide();
    if ($(".mid").hasClass("reel")) {
      $(".reelbgvid").trigger("play");
    } else {
      $(".mid").removeClass("mid active").addClass("right");
      $(".right").children(".vid").children(".bgvid").trigger("pause");
      $(".right")
        .children(".curvedContainer")
        .stop(true, false)
        .removeClass("animate");
      $(".right").children(".curvedContainer").width();
      $(".left").removeClass("left").addClass("mid");
      $(".next").show();
      $(".reelbgvid").trigger("play");
    }
  });

  $(".next").click(function () {
    $(".reelbgvid").trigger("pause");
    $(".reel").removeClass("mid").addClass("left");
    $(".right").removeClass("right").addClass("mid active");
    $(this).hide();
    $(".back").removeClass("hidden");

    let curvedText = $(".active").children(".curvedContainer");
    let video = $(".active").children(".vid").children(".bgvid");
    let song = $(".active").children(".albumText").children("a");

    video[0].currentTime = 0;
    video.on("timeupdate", function () {
      let du = this.duration;
      curvedText.addClass("animate");
      curvedText.css({
        "animation-duration": `${du}s`,
      });
    });
    video.trigger("play");

    curvedText.children(".curvedTitle").lettering();
    for (let i = 1; i <= $("span").length; i++) {
      $(`.char${i}`).css("transform", `rotate(${i * 1.1}deg)`);
    }

    song.mouseenter(function () {
      let index = song.index(this) + 1;
      console.log(index);
      $(this).siblings().removeClass("selected");
      $(this).addClass("selected");
      curvedText.children(".curvedTitle").html($(this).html());
      curvedText.children(".curvedTitle").lettering();
      for (let i = 1; i <= $("span").length; i++) {
        $(`.char${i}`).css("transform", `rotate(${i * 1.1}deg)`);
      }
      video.attr({
        src: `../assets/${index}.mp4`,
        currentTime: 0,
      });
      curvedText.removeClass("animate");
      curvedText.width();
      curvedText.addClass("animate");
      video.on("timeupdate", function () {
        let du = this.duration;
        curvedText.css({
          "animation-duration": `${du}s`,
        });
      });
      video.trigger("play");
    });

    video.on("ended", function () {
      //   console.log(song.index($(".selected")));
      if (song.index($(".selected")) < song.length - 1) {
        $(".selected").removeClass("selected").next("a").addClass("selected");
        let index = song.index($(".selected")) + 1;
        console.log(song.index($(".selected")));
        curvedText.children(".curvedTitle").html($(".selected").html());
        curvedText.children(".curvedTitle").lettering();
        for (let i = 1; i <= $("span").length; i++) {
          $(`.char${i}`).css("transform", `rotate(${i * 1.1}deg)`);
        }
        video.attr({
          src: `../assets/${index}.mp4`,
          currentTime: 0,
        });
        curvedText.removeClass("animate");
        curvedText.width();
        curvedText.addClass("animate");
        video.on("timeupdate", function () {
          let du = this.duration;
          curvedText.css({
            "animation-duration": `${du}s`,
          });
        });
        video.trigger("play");
      } else {
        $(".selected").removeClass("selected");
        $(".active")
          .children(".albumText")
          .children("a:first-of-type")
          .addClass("selected");
        let index = song.index($(".selected")) + 1;
        curvedText.children(".curvedTitle").html($(".selected").html());
        curvedText.children(".curvedTitle").lettering();
        for (let i = 1; i <= $("span").length; i++) {
          $(`.char${i}`).css("transform", `rotate(${i * 1.1}deg)`);
        }
        video.attr({
          src: `../assets/${index}.mp4`,
          currentTime: 0,
        });
        curvedText.removeClass("animate");
        curvedText.width();
        curvedText.addClass("animate");
        video.on("timeupdate", function () {
          let du = this.duration;
          curvedText.css({
            "animation-duration": `${du}s`,
          });
        });
        video.trigger("play");
      }
    });
  });

  $(".back").click(function () {
    $(".mid").removeClass("mid active").addClass("right");
    $(".right").children(".vid").children(".bgvid").trigger("pause");
    $(".right")
      .children(".curvedContainer")
      .stop(true, false)
      .removeClass("animate");
    $(".right").children(".curvedContainer").width();
    $(".left").removeClass("left").addClass("mid");
    $(this).addClass("hidden");
    $(".next").show();
    $(".reelbgvid").trigger("play");
  });
});
