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
