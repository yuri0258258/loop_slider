export default () => {
    document.addEventListener("DOMContentLoaded", () => {
      window.onload = () => {
        loopSetUp();
        loop();
      };
  
      let windowWidth = 0;
      let imageWidth = 641;
      let slider_loop_inner = document.querySelector(".slider_loop_inner");
      let slider_loop_inner_li = document.querySelectorAll(
        ".slider_loop_inner li"
      );
      var $clone = $('.slider_loop_inner li').clone(true);
      $('.slider_loop_inner')
        .append($clone);
  
      var resizetimer = false;
      $(window).resize(function() {
        if (resizetimer !== false) {
          clearTimeout(resizetimer);
        }
        resizetimer = setTimeout(function() {
          loopSetUp();
        }, 200);
      });
  
      //loopSetUp関数
      function loopSetUp() {
        let windowWidth = window.innerWidth;
  
        switch (true) {
          case windowWidth > 768:
            imageWidth = 641;
            break;
          case windowWidth > 400:
            imageWidth = 641;
            break;
          default:
            imageWidth = 641;
        }
  
        document.querySelectorAll(".slider_loop_inner li").forEach((value) => {
          value.style.width = imageWidth + "px";
        });
        slider_loop_inner.style.width =
          imageWidth * document.querySelectorAll(".slider_loop_inner li").length +
          "px";
      }
      //loop処理
      function loop() {
        setTimeout(function () {
          $(".slider_loop_inner").css(
            "left",
            $(".slider_loop_inner").position().left - 1
          );
          if (
            $(".slider_loop_inner").position().left <
            (-imageWidth * $(".slider_loop_inner li").length) / 2
          ) {
            $(".slider_loop_inner").css("left", function () {
              return 0;
            });
          }
          loop();
        }, 1000 / 50);
      }
    });
  };
  