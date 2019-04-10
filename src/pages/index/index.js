if (process.env.NODE_ENV !== 'production') {
  require('./index.html');
}

// 下拉菜单需要用到的模块
import "@/js/transition.js"
import "@/js/animate.js"
import "@/js/dropdown.js"
// -----------------------
// 搜索组件
import "@/js/search.js"
// -----------------------
// 轮播组件
import "@/js/move.js"
import "@/js/slider.js"

// -----------------------

$(function () {
// 搜索框调用------------------
let html = '',
    htmlload = $('.search-layer').html();
  $('.search').search({
    autocomplete: true,
  })
  .on('successEvent', function (e, data, $layer) {
    html = createHeaderLyaer(data, $layer)
  //判断是否输入值为空，空则显示默认下拉框，也就是最近搜索下拉框，可以把这些内容存到cookie，或者塞申里面，就可以得到一个用户搜索过的列表
  if (html) {
    $layer.html(html)
    $(this).search('showLayer', $layer)
  } else {
    $layer.html('')
    $(this).search('hideLayer', $layer)
  }
}).on('click', 'li', function() {
  $('.search').search('setInput', $(this).html())
  $('.search').search('submit')
}).on('errEvent', function (e, $layer) {
  $layer.html(htmlload)
})
function createHeaderLyaer(data, $layer) {
  //成功回调
  var html = '',
      dataNum = data.result.length,
      numMax = 9; //自定义显示条目
  if (dataNum === 0) { //没有数据就直接退出
    return ''
  }

  for (var i = 0; i < dataNum; i++) { //循环遍历数据
    if (numMax <= i) { //自定义显示条目
      break
    }
    html += '<li class="search-layer-item text-ellipsis">'+data.result[i][0]+'</li>'
  }
  return html
}

// ------------------

  //导航下拉
  $('.menu').dropdown({
    animate: 'fade'
  })
  //focus菜单
  $('.category-ls').dropdown({
    animate: 'fade'
  })
  //轮播
  $('#focus-slider').slider({
    animate: 'fade',
    animation: 'fade'
  })
})


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
