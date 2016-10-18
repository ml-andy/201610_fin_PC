class HeaderModel {
    constructor() {
        this.header = $('.header');
        this.menu = $('.menu');

        this.menubtn = this.header.find('.menubtn');
        this.menubtn.on('click',function(){
            if(this.menubtn.hasClass('on')) this.openmenu(false);
            else this.openmenu(true);
        }.bind(this));

        this.menua = this.menu.find('.menua');
        this.menua.on('click',function(e){
            this.menuaClick($(e.currentTarget).attr('class').split('menua ')[1]);
        }.bind(this));

        this.qrcode = $('.qrcode_popup');
        this.qrcode_close = this.qrcode.find('.close');
        this.qrcode_close.on('click',function(e){
            this.show_qrcode_popup(false);
        }.bind(this));
    }
    openmenu(_t) {
        if(_t){
            this.menubtn.addClass('on');
            $('.menu').addClass('on');
        }else{
            this.menubtn.removeClass('on');
            $('.menu').removeClass('on');
        }
    }
    menuaClick(menulink){
        switch (menulink) {
            case 'm1':
                window.location.href="inquire.html";
                break;
            case 'm2':
                window.location.href="about.html";
                break;
            case 'm3':
                window.location.href="award_info.html";
                break;
            case 'm4':
                window.location.href="award_list.html";
                break;
            case 'm5':
                console.log('share fb');
                break;
            case 'm6':
                window.location.href="login_member.html";
                break;
            case 'm7':
                window.location.href="index.html";
                break;
            case 'm8':
                this.show_qrcode_popup(true);
                break;
            case 'm9':
                window.location.href="login_number.html";
                break;
        }
    }
    show_qrcode_popup(_t){
        if(_t){
            $('.qrcode_popup').fadeIn();
        }else{
            $('.qrcode_popup').fadeOut();
        }
    }
}
// module.exports = HeaderModel;