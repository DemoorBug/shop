if (process.env.NODE_ENV !== 'production') {
  require('./index.html');
}
/*normalize.css*/
import "~node/normalize.css/normalize.css";
/*重置样式*/
import "~node/minireset.css/minireset.css";
/*字体*/
import '@/css/font/iconfont.css'
/*公共样式*/
import "@/css/common.less";

// import '~node/slick-carousel/slick/slick.css';
// import '~node/slick-carousel/slick/slick-theme.css';

//////////////
// main.css //
//////////////

import "./main.less";

// import '~node/jquery/dist/jquery.js';

// import '~node/slick-carousel/slick/slick.min.js';

import './js/slider.me.js'

$(function() {
  var bannerSlider = new Slider($('.slider_tabs'), {
    time: 5000,
    delay: 400,
    event: 'hover',
    auto: true,
    mode: 'fade',
    controller: $('.slider-Dots'),
    activeControllerCls: 'active'
  });
})

// $('.single-item').slick({
//   accessibility: false,
//   autoplay: true,
//   arrows: false,
//   dots: true,
//   appendDots: $('.slider-Dots'),
//   fade: true,
//   cssEase: 'linear',
//   speed: 500,
// });

// $(function(){

    // $('.single-item').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    //   let bg_color = $(".img").eq(nextSlide).data('img');
    //   $('.slider-banner').css({
    //     'background' : bg_color
    //   })
    // });

// })
