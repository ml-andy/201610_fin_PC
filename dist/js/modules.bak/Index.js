class Index {
    constructor() {
        this.HeaderModel = new HeaderModel();
        this.page = $('.page.index');
        
        this.gamePlay_btn = this.page.find('.gamePlay_btn');
        this.gamePlay_btn.on('click',function(){
            this.HeaderModel.menuaClick('m8');
        }.bind(this));
        this.login_number_btn = this.page.find('.login_number_btn');
        this.login_number_btn.on('click',function(){
            this.HeaderModel.menuaClick('m9');
        }.bind(this));
    }
}
// module.exports = Index;