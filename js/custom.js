/* slick */
$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      fade: true,
      autoplaySpeed: 3000,
      pauseOnDotsHover:true
    });
  });

  $('.js-stop').on('click', function() {
    $('.slider').slick('slickPause');
  });
  
  $('.js-play').on('click', function() {
    $('.slider').slick('slickPlay');
  });

/* slick */

/*** pc_gallery ***/
jQuery(document).ready(function () {
    //Slide Gallery 이미지 샐랙터
    jQuery(".list_wrap ul li").click(function () {
        jQuery(this).addClass("active").siblings().removeClass();
        jQuery(".photo_img img").attr("src", jQuery(this).children("a").attr("href"));
        return false;
    });

});

jQuery(document).ready(function () {
    //Slide Gallery 이미지 샐랙터
    jQuery(".list_wrap2 ul li").click(function () {
        jQuery(this).addClass("active").siblings().removeClass();
        jQuery(".photo_img2 img").attr("src", jQuery(this).children("a").attr("href"));
        return false;
    });

});

jQuery(document).ready(function () {
    //Slide Gallery 이미지 샐랙터
    jQuery(".list_wrap3 ul li").click(function () {
        jQuery(this).addClass("active").siblings().removeClass();
        jQuery(".photo_img3 img").attr("src", jQuery(this).children("a").attr("href"));
        return false;
    });
});

jQuery(document).ready(function () {
    //Slide Gallery 이미지 샐랙터
    jQuery(".list_wrap4 ul li").click(function () {
        jQuery(this).addClass("active").siblings().removeClass();
        jQuery(".photo_img4 img").attr("src", jQuery(this).children("a").attr("href"));
        return false;
    });
});

jQuery(document).ready(function () {
    //Slide Gallery 이미지 샐랙터
    jQuery(".list_wrap5 ul li").click(function () {
        jQuery(this).addClass("active").siblings().removeClass();
        jQuery(".photo_img5 img").attr("src", jQuery(this).children("a").attr("href"));
        return false;
    });
});

jQuery(document).ready(function () {
    //Slide Gallery 이미지 샐랙터
    jQuery(".list_wrap6 ul li").click(function () {
        jQuery(this).addClass("active").siblings().removeClass();
        jQuery(".photo_img6 img").attr("src", jQuery(this).children("a").attr("href"));
        return false;
    });
});

jQuery(document).ready(function () {
    //Slide Gallery 이미지 샐랙터
    jQuery(".list_wrap7 ul li").click(function () {
        jQuery(this).addClass("active").siblings().removeClass();
        jQuery(".photo_img7 img").attr("src", jQuery(this).children("a").attr("href"));
        return false;
    });


});

jQuery(document).ready(function () {
    //Slide Gallery 이미지 샐랙터
    jQuery(".list_wrap8 ul li").click(function () {
        jQuery(this).addClass("active").siblings().removeClass();
        jQuery(".photo_img8 img").attr("src", jQuery(this).children("a").attr("href"));
        return false;
    });


});

jQuery(document).ready(function () {
    //Slide Gallery 이미지 샐랙터
    jQuery(".list_wrap9 ul li").click(function () {
        jQuery(this).addClass("active").siblings().removeClass();
        jQuery(".photo_img9 img").attr("src", jQuery(this).children("a").attr("href"));
        return false;
    });

});

jQuery(document).ready(function () {
    //Slide Gallery 이미지 샐랙터
    jQuery(".list_wrap10 ul li").click(function () {
        jQuery(this).addClass("active").siblings().removeClass();
        jQuery(".photo_img10 img").attr("src", jQuery(this).children("a").attr("href"));
        return false;
    });

    //Slide Gallery 슬라이딩 초기화
    jQuery(".list_wrap10").width("600" * parseInt(jQuery(".list_wrap10 ul").size()) + "px");
    jQuery(".list_wrap10 ul:last").prependTo(".list_wrap10");
    jQuery(".list_wrap10").css("margin-left", "-600px");

    //Silde Gallery의 prev버튼
    jQuery("button.btn_prev10").click(function () {
        jQuery(".list_wrap10").animate({
            marginLeft: "+=600px"
        }, "swing", function () {
            jQuery(".list_wrap10 ul:last").prependTo(".list_wrap10");
            jQuery(".list_wrap10").css("margin-left", "-600px");
            jQuery(".list_wrap10 ul li").removeClass();
        });
    });

    //Silde Gallery의 next버튼
    jQuery("button.btn_next10").click(function () {
        jQuery(".list_wrap10").animate({
            marginLeft: "-=600px"
        }, "swing", function () {
            jQuery(".list_wrap10 ul:first").appendTo(".list_wrap10");
            jQuery(".list_wrap10").css("margin-left", "-600px");
            jQuery(".list_wrap10 ul li").removeClass();
        });
    });
});
/*** pc_gallery ***/

/* thumbnail active */
$('.btn').on('click', function(){ 
    $(this).addClass('activated'); //eventually removeClass of some previous class
    //other stuff
});

/* popup */
