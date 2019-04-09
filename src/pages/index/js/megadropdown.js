// 菜单
import needDelay from './functions.js'
;
(function($) {

  var Mega = function(sub) {
    var _this = this
    this.sub = sub;

    this.activeRow = null;
    this.activeMenu = null;
    var timer = null;

    var mouseInSub = false;
    this.sub
      .on('mouseenter', function(e) {
        mouseInSub = true
      })
      .on('mouseleave', function(e) {
        mouseInSub = false
      })

    var mouseTrack = [];
    var moveHanlder = function(e) {
      mouseTrack.push({
        x: e.pageX,
        y: e.pageY
      })
      if (mouseTrack.length > 3) {
        mouseTrack.shift()
      }
    }

    $('#test')
      .on('mouseenter', function(e) {
        _this.sub.removeClass('hide')
        //向量
        $(document).on('mousemove', moveHanlder)
      })
      .on('mouseleave', function(e) {
        _this.sub.addClass('hide');
        if (_this.activeRow) {
          _this.activeRow.removeClass('active');
          _this.activeRow = null
        }
        if (_this.activeMenu) {
          _this.activeMenu.addClass('hide');
          _this.activeMenu = null;
        }
        $(document).off('mousemove', moveHanlder)
      })
      .on('mouseenter', 'li', function(e) {
        if (!_this.activeRow) {
          _this.removeAll(e.target)
          return
        }

        if (timer) {
          clearTimeout(timer)
        }
        var currMousePos=mouseTrack[mouseTrack.length-1];
        var leftCorner=mouseTrack[mouseTrack.length-2];
        var delay = needDelay(sub, leftCorner, currMousePos)
        if (delay) {
          timer = setTimeout(function() {
            if (mouseInSub) {
              return
            }
            _this.activeRow.removeClass('active')
            _this.activeMenu.addClass('hide')

            _this.removeAll(e.target)
            timer = null;
          }, 300)
        } else {
          var prevActiveRow = _this.activeRow
          var prevActiveMenu = _this.activeMenu

          _this.activeRow = $(e.target)
          _this.activeMenu = $('#' + _this.activeRow.data('id'))
          prevActiveRow.removeClass('active')
          prevActiveMenu.addClass('hide')

          _this.activeRow.addClass('active')
          _this.activeMenu.removeClass('hide')
        }

        // activeRow = $(e.target)
        // activeRow.addClass('active')
        // activeMenu = $('#' + activeRow.data('id'));
        // activeMenu.removeClass('hide')
      })
  };

  Mega.prototype = {
    //控制菜单的显示与隐藏
    removeAll: function(target) {
      this.activeRow = $(target)
      this.activeRow.addClass('active')
      this.activeMenu = $('#' + this.activeRow.data('id'));
      this.activeMenu.removeClass('hide')
    },
    //向量

  };

  window.Mega = Mega


})(jQuery);



// html结构
// <div class="test">
//   <ul>
//     <li data-id="a">
//       <i></i>
//       <a href="#"></a>/
//       <a href="#"></a>
//     </li>
//     <li data-id="b">
//       <i></i>
//       <a href="#"></a>/
//       <a href="#"></a>
//     </li>
//   </ul>
//   <div class="nav-com hide">
//     <div class="nav-list hide" id="a">
//
//     </div>
//     <div class="nav-list hide" id="b">
//
//     </div>
//   </div>
// </div>
