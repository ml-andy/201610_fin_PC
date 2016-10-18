'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.ready();
		this.loading = $('.loading');
		$(window).load(function () {
			this.windowLoad();
		}.bind(this));
	}

	_createClass(App, [{
		key: 'ready',
		value: function ready() {
			this.page = $('.page');

			switch (this.page.attr('class').split('page ')[1]) {
				case 'index':
					this.index = new Index();
					break;
				case 'login_member':
					this.login_member = new Login_member();
					break;
				case 'login_member_nodata':
					this.login_member_nodata = new Login_member_nodata();
					break;
				case 'login_member_nodata_confirm':
					this.login_member_nodata_confirm = new Login_member_nodata_confirm();
					break;
				case 'login_number':
					this.login_number = new Login_number();
					break;
				case 'login_number_success':
					this.login_number_success = new Login_number_success();
					break;
				case 'inquire':
					this.inquire = new Inquire();
					break;
				case 'award_list':
					this.award_list = new Award_list();
					break;
				case 'award_info':
					this.award_info = new Award_info();
					break;
				case 'about':
					this.about = new About();
					break;
			}
		}
	}, {
		key: 'windowLoad',
		value: function windowLoad() {
			this.loading.fadeOut();
		}
	}]);

	return App;
}();

$(function () {
	var app = new App();
});
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var About = function About() {
    _classCallCheck(this, About);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.about');
};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Award_info = function Award_info() {
    _classCallCheck(this, Award_info);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.award_info');
};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Award_list = function Award_list() {
    _classCallCheck(this, Award_list);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.award_list');
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderModel = function () {
    function HeaderModel() {
        _classCallCheck(this, HeaderModel);

        this.header = $('.header');
        this.menu = $('.menu');

        this.menubtn = this.header.find('.menubtn');
        this.menubtn.on('click', function () {
            if (this.menubtn.hasClass('on')) this.openmenu(false);else this.openmenu(true);
        }.bind(this));

        this.menua = this.menu.find('.menua');
        this.menua.on('click', function (e) {
            this.menuaClick($(e.currentTarget).attr('class').split('menua ')[1]);
        }.bind(this));

        this.qrcode = $('.qrcode_popup');
        this.qrcode_close = this.qrcode.find('.close');
        this.qrcode_close.on('click', function (e) {
            this.show_qrcode_popup(false);
        }.bind(this));
    }

    _createClass(HeaderModel, [{
        key: 'openmenu',
        value: function openmenu(_t) {
            if (_t) {
                this.menubtn.addClass('on');
                $('.menu').addClass('on');
            } else {
                this.menubtn.removeClass('on');
                $('.menu').removeClass('on');
            }
        }
    }, {
        key: 'menuaClick',
        value: function menuaClick(menulink) {
            switch (menulink) {
                case 'm1':
                    window.location.href = "inquire.html";
                    break;
                case 'm2':
                    window.location.href = "about.html";
                    break;
                case 'm3':
                    window.location.href = "award_info.html";
                    break;
                case 'm4':
                    window.location.href = "award_list.html";
                    break;
                case 'm5':
                    console.log('share fb');
                    break;
                case 'm6':
                    window.location.href = "login_member.html";
                    break;
                case 'm7':
                    window.location.href = "index.html";
                    break;
                case 'm8':
                    this.show_qrcode_popup(true);
                    break;
                case 'm9':
                    window.location.href = "login_number.html";
                    break;
            }
        }
    }, {
        key: 'show_qrcode_popup',
        value: function show_qrcode_popup(_t) {
            if (_t) {
                $('.qrcode_popup').fadeIn();
            } else {
                $('.qrcode_popup').fadeOut();
            }
        }
    }]);

    return HeaderModel;
}();
// module.exports = HeaderModel;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function Index() {
    _classCallCheck(this, Index);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.index');

    this.gamePlay_btn = this.page.find('.gamePlay_btn');
    this.gamePlay_btn.on('click', function () {
        this.HeaderModel.menuaClick('m8');
    }.bind(this));
    this.login_number_btn = this.page.find('.login_number_btn');
    this.login_number_btn.on('click', function () {
        this.HeaderModel.menuaClick('m9');
    }.bind(this));
};
// module.exports = Index;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inquire = function Inquire() {
    _classCallCheck(this, Inquire);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.inquire');
};
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login_member = function () {
    function Login_member() {
        _classCallCheck(this, Login_member);

        this.HeaderModel = new HeaderModel();
    }

    _createClass(Login_member, [{
        key: "bannerAni",
        value: function bannerAni() {}
    }]);

    return Login_member;
}();
// module.exports = Index;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login_member_nodata = function Login_member_nodata() {
    _classCallCheck(this, Login_member_nodata);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.login_member_nodata');
    this.checkbox = this.page.find('.checkbox');
    this.checkbox.on('click', function (e) {
        if ($(e.currentTarget).hasClass('on')) $(e.currentTarget).removeClass('on');else $(e.currentTarget).addClass('on');
    });
};
// module.exports = Index;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login_member_nodata_confirm = function Login_member_nodata_confirm() {
    _classCallCheck(this, Login_member_nodata_confirm);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.login_member_nodata_confirm');
};
// module.exports = Index;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login_number = function Login_number() {
    _classCallCheck(this, Login_number);

    this.HeaderModel = new HeaderModel();
    this.verPopup = new VerPopup($('.verPopup'));
    this.page = $('.page.login_number');
    this.submit = this.page.find('.submit');
    this.submit.on('click', function () {
        this.verPopup.showverPopup(true);
    }.bind(this));
};

var VerPopup = function () {
    function VerPopup(dom) {
        _classCallCheck(this, VerPopup);

        this.verPopup = dom;
        this.main = this.verPopup.find('.main');
        this.bottle1 = this.verPopup.find('.bottle1');
        this.bottle2 = this.verPopup.find('.bottle2');
        this.drag_left = 0;
        this.og_left = this.bottle1.offset().left;
        this.og_right = this.bottle2.offset().left;
        this.bottle1W = this.bottle1.width();
        this.bottle2W = this.bottle2.width();

        this.bottle1.on('mousedown', function () {
            this.og_left = this.bottle1.offset().left;
            this.og_right = this.bottle2.offset().left;
            this.goal = this.og_right - this.og_left + this.bottle2W / 2 - this.bottle1W / 2;
            console.log(this.og_left);
            this.bottle1.bind('mousemove', this.bottle1touchmove.bind(this));
        }.bind(this));

        this.main.on('mouseup', function () {
            this.bottle1.unbind('mousemove', this.bottle1touchmove.bind(this));
            this.bottle1.attr('style', '');
        }.bind(this));
    }

    _createClass(VerPopup, [{
        key: 'bottle1touchmove',
        value: function bottle1touchmove(e) {
            // e = e.originalEvent.touches[0];
            this.drag_left = e.pageX - this.og_left - this.bottle1W / 2;
            if (this.drag_left < 0) this.drag_left = 0;else if (this.drag_left >= this.goal) {
                this.showverPopup(false);
                this.bottle1.unbind('mousemove', this.bottle1touchmove.bind(this));
                return;
            }

            this.bottle1.css('margin-left', this.drag_left);
        }
    }, {
        key: 'showverPopup',
        value: function showverPopup(_t) {
            if (_t) this.verPopup.fadeIn();else {
                this.verPopup.fadeOut();
                window.location.href = "login_number_success.html";
            }
        }
    }]);

    return VerPopup;
}();
// module.exports = Index;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login_number_success = function Login_number_success() {
    _classCallCheck(this, Login_number_success);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.login_number_success');
    this.more = this.page.find('.more');
    this.back = this.page.find('.back');
    this.sharefb = this.page.find('.sharefb');

    this.more.on('click', function () {
        this.HeaderModel.menuaClick('m9');
    }.bind(this));
    this.back.on('click', function () {
        this.HeaderModel.menuaClick('m7');
    }.bind(this));
    this.sharefb.on('click', function () {
        this.HeaderModel.menuaClick('m5');
    }.bind(this));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1vZHVsZXMvQWJvdXQuanMiLCJtb2R1bGVzL0F3YXJkX2luZm8uanMiLCJtb2R1bGVzL2F3YXJkX2xpc3QuanMiLCJtb2R1bGVzL0hlYWRlck1vZGVsLmpzIiwibW9kdWxlcy9JbmRleC5qcyIsIm1vZHVsZXMvSW5xdWlyZS5qcyIsIm1vZHVsZXMvTG9naW5fbWVtYmVyLmpzIiwibW9kdWxlcy9Mb2dpbl9tZW1iZXJfbm9kYXRhLmpzIiwibW9kdWxlcy9Mb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0uanMiLCJtb2R1bGVzL0xvZ2luX251bWJlci5qcyIsIm1vZHVsZXMvTG9naW5fbnVtYmVyX3N1Y2Nlc3MuanMiXSwibmFtZXMiOlsiQXBwIiwicmVhZHkiLCJsb2FkaW5nIiwiJCIsIndpbmRvdyIsImxvYWQiLCJ3aW5kb3dMb2FkIiwiYmluZCIsInBhZ2UiLCJhdHRyIiwic3BsaXQiLCJpbmRleCIsIkluZGV4IiwibG9naW5fbWVtYmVyIiwiTG9naW5fbWVtYmVyIiwibG9naW5fbWVtYmVyX25vZGF0YSIsIkxvZ2luX21lbWJlcl9ub2RhdGEiLCJsb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0iLCJMb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0iLCJsb2dpbl9udW1iZXIiLCJMb2dpbl9udW1iZXIiLCJsb2dpbl9udW1iZXJfc3VjY2VzcyIsIkxvZ2luX251bWJlcl9zdWNjZXNzIiwiaW5xdWlyZSIsIklucXVpcmUiLCJhd2FyZF9saXN0IiwiQXdhcmRfbGlzdCIsImF3YXJkX2luZm8iLCJBd2FyZF9pbmZvIiwiYWJvdXQiLCJBYm91dCIsImZhZGVPdXQiLCJhcHAiLCJIZWFkZXJNb2RlbCIsImhlYWRlciIsIm1lbnUiLCJtZW51YnRuIiwiZmluZCIsIm9uIiwiaGFzQ2xhc3MiLCJvcGVubWVudSIsIm1lbnVhIiwiZSIsIm1lbnVhQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwicXJjb2RlIiwicXJjb2RlX2Nsb3NlIiwic2hvd19xcmNvZGVfcG9wdXAiLCJfdCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJtZW51bGluayIsImxvY2F0aW9uIiwiaHJlZiIsImNvbnNvbGUiLCJsb2ciLCJmYWRlSW4iLCJnYW1lUGxheV9idG4iLCJsb2dpbl9udW1iZXJfYnRuIiwiY2hlY2tib3giLCJ2ZXJQb3B1cCIsIlZlclBvcHVwIiwic3VibWl0Iiwic2hvd3ZlclBvcHVwIiwiZG9tIiwibWFpbiIsImJvdHRsZTEiLCJib3R0bGUyIiwiZHJhZ19sZWZ0Iiwib2dfbGVmdCIsIm9mZnNldCIsImxlZnQiLCJvZ19yaWdodCIsImJvdHRsZTFXIiwid2lkdGgiLCJib3R0bGUyVyIsImdvYWwiLCJib3R0bGUxdG91Y2htb3ZlIiwidW5iaW5kIiwicGFnZVgiLCJjc3MiLCJtb3JlIiwiYmFjayIsInNoYXJlZmIiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQTtBQUNMLGdCQUFjO0FBQUE7O0FBQ2IsT0FBS0MsS0FBTDtBQUNBLE9BQUtDLE9BQUwsR0FBZUMsRUFBRSxVQUFGLENBQWY7QUFDQUEsSUFBRUMsTUFBRixFQUFVQyxJQUFWLENBQWUsWUFBVTtBQUN4QixRQUFLQyxVQUFMO0FBQ0EsR0FGYyxDQUViQyxJQUZhLENBRVIsSUFGUSxDQUFmO0FBR0E7Ozs7MEJBQ087QUFDUCxRQUFLQyxJQUFMLEdBQVlMLEVBQUUsT0FBRixDQUFaOztBQUVBLFdBQVEsS0FBS0ssSUFBTCxDQUFVQyxJQUFWLENBQWUsT0FBZixFQUF3QkMsS0FBeEIsQ0FBOEIsT0FBOUIsRUFBdUMsQ0FBdkMsQ0FBUjtBQUNDLFNBQUssT0FBTDtBQUNDLFVBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQTtBQUNELFNBQUssY0FBTDtBQUNDLFVBQUtDLFlBQUwsR0FBb0IsSUFBSUMsWUFBSixFQUFwQjtBQUNBO0FBQ0QsU0FBSyxxQkFBTDtBQUNDLFVBQUtDLG1CQUFMLEdBQTJCLElBQUlDLG1CQUFKLEVBQTNCO0FBQ0E7QUFDRCxTQUFLLDZCQUFMO0FBQ0MsVUFBS0MsMkJB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Q0FBVTZCLElBQVYsQ0FBZSxPQUFmLENBQVo7QUFDQSxTQUFLOEMsT0FBTCxHQUFlLEtBQUszRSxJQUFMLENBQVU2QixJQUFWLENBQWUsVUFBZixDQUFmOztBQUVBLFNBQUs0QyxJQUFMLENBQVUzQyxFQUFWLENBQWEsT0FBYixFQUFxQixZQUFVO0FBQzNCLGFBQUtMLFdBQUwsQ0FBaUJVLFVBQWpCLENBQTRCLElBQTVCO0FBQ0gsS0FGb0IsQ0FFbkJwQyxJQUZtQixDQUVkLElBRmMsQ0FBckI7QUFHQSxTQUFLMkUsSUFBTCxDQUFVNUMsRUFBVixDQUFhLE9BQWIsRUFBcUIsWUFBVTtBQUMzQixhQUFLTCxXQUFMLENBQWlCVSxVQUFqQixDQUE0QixJQUE1QjtBQUNILEtBRm9CLENBRW5CcEMsSUFGbUIsQ0FFZCxJQUZjLENBQXJCO0FBR0EsU0FBSzRFLE9BQUwsQ0FBYTdDLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBd0IsWUFBVTtBQUM5QixhQUFLTCxXQUFMLENBQWlCVSxVQUFqQixDQUE0QixJQUE1QjtBQUNILEtBRnVCLENBRXRCcEMsSUFGc0IsQ0FFakIsSUFGaUIsQ0FBeEI7QUFHSCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5yZWFkeSgpO1xyXG5cdFx0dGhpcy5sb2FkaW5nID0gJCgnLmxvYWRpbmcnKTtcclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMud2luZG93TG9hZCgpO1xyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblx0cmVhZHkoKSB7XHJcblx0XHR0aGlzLnBhZ2UgPSAkKCcucGFnZScpO1xyXG5cclxuXHRcdHN3aXRjaCAodGhpcy5wYWdlLmF0dHIoJ2NsYXNzJykuc3BsaXQoJ3BhZ2UgJylbMV0pIHtcclxuXHRcdFx0Y2FzZSAnaW5kZXgnOlxyXG5cdFx0XHRcdHRoaXMuaW5kZXggPSBuZXcgSW5kZXgoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbG9naW5fbWVtYmVyJzpcclxuXHRcdFx0XHR0aGlzLmxvZ2luX21lbWJlciA9IG5ldyBMb2dpbl9tZW1iZXIoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbG9naW5fbWVtYmVyX25vZGF0YSc6XHJcblx0XHRcdFx0dGhpcy5sb2dpbl9tZW1iZXJfbm9kYXRhID0gbmV3IExvZ2luX21lbWJlcl9ub2RhdGEoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtJzpcclxuXHRcdFx0XHR0aGlzLmxvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybSA9IG5ldyBMb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0oKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbG9naW5fbnVtYmVyJzpcclxuXHRcdFx0XHR0aGlzLmxvZ2luX251bWJlciA9IG5ldyBMb2dpbl9udW1iZXIoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbG9naW5fbnVtYmVyX3N1Y2Nlc3MnOlxyXG5cdFx0XHRcdHRoaXMubG9naW5fbnVtYmVyX3N1Y2Nlc3MgPSBuZXcgTG9naW5fbnVtYmVyX3N1Y2Nlc3MoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnaW5xdWlyZSc6XHJcblx0XHRcdFx0dGhpcy5pbnF1aXJlID0gbmV3IElucXVpcmUoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnYXdhcmRfbGlzdCc6XHJcblx0XHRcdFx0dGhpcy5hd2FyZF9saXN0ID0gbmV3IEF3YXJkX2xpc3QoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnYXdhcmRfaW5mbyc6XHJcblx0XHRcdFx0dGhpcy5hd2FyZF9pbmZvID0gbmV3IEF3YXJkX2luZm8oKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnYWJvdXQnOlxyXG5cdFx0XHRcdHRoaXMuYWJvdXQgPSBuZXcgQWJvdXQoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblx0d2luZG93TG9hZCgpe1xyXG5cdFx0dGhpcy5sb2FkaW5nLmZhZGVPdXQoKTtcclxuXHR9XHJcbn1cclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcblx0dmFyIGFwcCA9IG5ldyBBcHAoKTtcclxufSk7XHJcblxyXG4iLCJjbGFzcyBBYm91dCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkhlYWRlck1vZGVsID0gbmV3IEhlYWRlck1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gJCgnLnBhZ2UuYWJvdXQnKTtcclxuICAgIH1cclxufSIsImNsYXNzIEF3YXJkX2luZm8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmF3YXJkX2luZm8nKTtcclxuICAgIH1cclxufSIsImNsYXNzIEF3YXJkX2xpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmF3YXJkX2xpc3QnKTtcclxuICAgIH1cclxufSIsImNsYXNzIEhlYWRlck1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gJCgnLmhlYWRlcicpO1xyXG4gICAgICAgIHRoaXMubWVudSA9ICQoJy5tZW51Jyk7XHJcblxyXG4gICAgICAgIHRoaXMubWVudWJ0biA9IHRoaXMuaGVhZGVyLmZpbmQoJy5tZW51YnRuJyk7XHJcbiAgICAgICAgdGhpcy5tZW51YnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYodGhpcy5tZW51YnRuLmhhc0NsYXNzKCdvbicpKSB0aGlzLm9wZW5tZW51KGZhbHNlKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLm9wZW5tZW51KHRydWUpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMubWVudWEgPSB0aGlzLm1lbnUuZmluZCgnLm1lbnVhJyk7XHJcbiAgICAgICAgdGhpcy5tZW51YS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVhQ2xpY2soJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJ21lbnVhICcpWzFdKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLnFyY29kZSA9ICQoJy5xcmNvZGVfcG9wdXAnKTtcclxuICAgICAgICB0aGlzLnFyY29kZV9jbG9zZSA9IHRoaXMucXJjb2RlLmZpbmQoJy5jbG9zZScpO1xyXG4gICAgICAgIHRoaXMucXJjb2RlX2Nsb3NlLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd19xcmNvZGVfcG9wdXAoZmFsc2UpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBvcGVubWVudShfdCkge1xyXG4gICAgICAgIGlmKF90KXtcclxuICAgICAgICAgICAgdGhpcy5tZW51YnRuLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkKCcubWVudScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVidG4ucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICQoJy5tZW51JykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWVudWFDbGljayhtZW51bGluayl7XHJcbiAgICAgICAgc3dpdGNoIChtZW51bGluaykge1xyXG4gICAgICAgICAgICBjYXNlICdtMSc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImlucXVpcmUuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ20yJzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiYWJvdXQuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ20zJzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiYXdhcmRfaW5mby5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTQnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJhd2FyZF9saXN0Lmh0bWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtNSc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hhcmUgZmInKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtNic6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImxvZ2luX21lbWJlci5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTcnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJpbmRleC5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTgnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X3FyY29kZV9wb3B1cCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtOSc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImxvZ2luX251bWJlci5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93X3FyY29kZV9wb3B1cChfdCl7XHJcbiAgICAgICAgaWYoX3Qpe1xyXG4gICAgICAgICAgICAkKCcucXJjb2RlX3BvcHVwJykuZmFkZUluKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5xcmNvZGVfcG9wdXAnKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gSGVhZGVyTW9kZWw7IiwiY2xhc3MgSW5kZXgge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmluZGV4Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheV9idG4gPSB0aGlzLnBhZ2UuZmluZCgnLmdhbWVQbGF5X2J0bicpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXlfYnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5IZWFkZXJNb2RlbC5tZW51YUNsaWNrKCdtOCcpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5sb2dpbl9udW1iZXJfYnRuID0gdGhpcy5wYWdlLmZpbmQoJy5sb2dpbl9udW1iZXJfYnRuJyk7XHJcbiAgICAgICAgdGhpcy5sb2dpbl9udW1iZXJfYnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5IZWFkZXJNb2RlbC5tZW51YUNsaWNrKCdtOScpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiLCJjbGFzcyBJbnF1aXJlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5pbnF1aXJlJyk7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBMb2dpbl9tZW1iZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYmFubmVyQW5pKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiLCJjbGFzcyBMb2dpbl9tZW1iZXJfbm9kYXRhIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5sb2dpbl9tZW1iZXJfbm9kYXRhJyk7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IHRoaXMucGFnZS5maW5kKCcuY2hlY2tib3gnKTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Lm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKCQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnb24nKSkgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICBlbHNlICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEluZGV4OyIsImNsYXNzIExvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkhlYWRlck1vZGVsID0gbmV3IEhlYWRlck1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gJCgnLnBhZ2UubG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtJyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiLCJjbGFzcyBMb2dpbl9udW1iZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMudmVyUG9wdXAgPSBuZXcgVmVyUG9wdXAoJCgnLnZlclBvcHVwJykpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmxvZ2luX251bWJlcicpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5wYWdlLmZpbmQoJy5zdWJtaXQnKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdC5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMudmVyUG9wdXAuc2hvd3ZlclBvcHVwKHRydWUpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgVmVyUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IoZG9tKSB7XHJcbiAgICAgICAgdGhpcy52ZXJQb3B1cCA9IGRvbTtcclxuICAgICAgICB0aGlzLm1haW4gPSB0aGlzLnZlclBvcHVwLmZpbmQoJy5tYWluJyk7XHJcbiAgICAgICAgdGhpcy5ib3R0bGUxID0gdGhpcy52ZXJQb3B1cC5maW5kKCcuYm90dGxlMScpO1xyXG4gICAgICAgIHRoaXMuYm90dGxlMiA9IHRoaXMudmVyUG9wdXAuZmluZCgnLmJvdHRsZTInKTtcclxuICAgICAgICB0aGlzLmRyYWdfbGVmdCA9IDA7XHJcbiAgICAgICAgdGhpcy5vZ19sZWZ0ID0gdGhpcy5ib3R0bGUxLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgdGhpcy5vZ19yaWdodCA9IHRoaXMuYm90dGxlMi5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIHRoaXMuYm90dGxlMVcgPSB0aGlzLmJvdHRsZTEud2lkdGgoKTtcclxuICAgICAgICB0aGlzLmJvdHRsZTJXID0gdGhpcy5ib3R0bGUyLndpZHRoKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ib3R0bGUxLm9uKCdtb3VzZWRvd24nLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMub2dfbGVmdCA9IHRoaXMuYm90dGxlMS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICB0aGlzLm9nX3JpZ2h0ID0gdGhpcy5ib3R0bGUyLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ29hbCA9IHRoaXMub2dfcmlnaHQgLSB0aGlzLm9nX2xlZnQgKyB0aGlzLmJvdHRsZTJXLzIgLSB0aGlzLmJvdHRsZTFXLzI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2dfbGVmdCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dGxlMS5iaW5kKCdtb3VzZW1vdmUnLCB0aGlzLmJvdHRsZTF0b3VjaG1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1haW4ub24oJ21vdXNldXAnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dGxlMS51bmJpbmQoJ21vdXNlbW92ZScsIHRoaXMuYm90dGxlMXRvdWNobW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5ib3R0bGUxLmF0dHIoJ3N0eWxlJywnJyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIGJvdHRsZTF0b3VjaG1vdmUoZSl7XHJcbiAgICAgICAgLy8gZSA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xyXG4gICAgICAgIHRoaXMuZHJhZ19sZWZ0ID0gZS5wYWdlWCAtIHRoaXMub2dfbGVmdCAtIHRoaXMuYm90dGxlMVcgLyAyO1xyXG4gICAgICAgIGlmKHRoaXMuZHJhZ19sZWZ0PDApIHRoaXMuZHJhZ19sZWZ0PTA7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmRyYWdfbGVmdCA+PSB0aGlzLmdvYWwpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3d2ZXJQb3B1cChmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dGxlMS51bmJpbmQoJ21vdXNlbW92ZScsIHRoaXMuYm90dGxlMXRvdWNobW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ib3R0bGUxLmNzcygnbWFyZ2luLWxlZnQnLHRoaXMuZHJhZ19sZWZ0KTtcclxuICAgIH1cclxuICAgIHNob3d2ZXJQb3B1cChfdCl7XHJcbiAgICAgICAgaWYoX3QpIHRoaXMudmVyUG9wdXAuZmFkZUluKCk7XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgIHRoaXMudmVyUG9wdXAuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJsb2dpbl9udW1iZXJfc3VjY2Vzcy5odG1sXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7IiwiY2xhc3MgTG9naW5fbnVtYmVyX3N1Y2Nlc3Mge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmxvZ2luX251bWJlcl9zdWNjZXNzJyk7XHJcbiAgICAgICAgdGhpcy5tb3JlID0gdGhpcy5wYWdlLmZpbmQoJy5tb3JlJyk7XHJcbiAgICAgICAgdGhpcy5iYWNrID0gdGhpcy5wYWdlLmZpbmQoJy5iYWNrJyk7XHJcbiAgICAgICAgdGhpcy5zaGFyZWZiID0gdGhpcy5wYWdlLmZpbmQoJy5zaGFyZWZiJyk7XHJcblxyXG4gICAgICAgIHRoaXMubW9yZS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuSGVhZGVyTW9kZWwubWVudWFDbGljaygnbTknKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuYmFjay5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuSGVhZGVyTW9kZWwubWVudWFDbGljaygnbTcnKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc2hhcmVmYi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuSGVhZGVyTW9kZWwubWVudWFDbGljaygnbTUnKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59Il19
