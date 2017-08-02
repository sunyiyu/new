$(function(){
    function Lottery(opts){
        this.init(opts);
    }
    Lottery.prototype = {
        index:0,//当前步数
        endIndex:0,//最终获奖数
        total:0,//总步数
        last:0,//剩余步数
        quanshu:2,//圈数
        speed:140,//移动速度越大速度越慢
        isAnimate:false,//是否在抽奖
        init:function(opts){
            var _this = this;
            _this.lottery = opts.$target;
            _this.$start = _this.lottery.find('.J-start-btn');
            _this.$td = _this.lottery.find('.J-lottery-unit');

            _this.endIndex = opts.endIndex || _this.endIndex;//如果初始值没有，就执行后面的值
            _this.quanshu = typeof opts.quanshu !='undefined'? opts.quanshu : _this.quanshu;
            _this.bindEvents()
        },
        bindEvents:function(){
            var _this = this;
            _this.$start.click(function(){
                _this.move();
            })
        },
        setGift:function(endIndex){
            var _this = this;
            _this.endIndex = endIndex;
        },
        move:function(){
            var _this = this;
            if(_this.isAnimate){
                return;
            }
            _this.isAnimate = true;
            _this.speed = 140;
            var lastIndex = 0;//上次欠的步数
            if(_this.index !=0 ){//如果上次没欠，就是0
                lastIndex = _this.$td.length - _this.index;
            }
            _this.total =(_this.$td.length* _this.quanshu +1 ) + _this.endIndex + lastIndex;

            _this.last = _this.total;
            setTimeout($.proxy(_this.goOne,_this), _this.speed);
        },
        goOne:function(){
            var _this = this;
            $('.lottery-unit').removeClass('active');
            $('.lottery-unit-' + _this.index).addClass('active');
            console.log(_this.speed);
            _this.index++;
            if(_this.index > _this.$td.length - 1) {
                _this.index = 0;
            }
            _this.last--;
            if(_this.total - _this.last < _this.$td.length){
                _this.speed -=10;
            }


            if(_this.last< _this.$td.length){
                _this.speed += 20;
            }
            if(_this.last != 0) {
                setTimeout($.proxy(_this.goOne, _this), _this.speed);//$.proxy，代理_this
            }else {
                _this.isAnimate = false;
            }
        }
    };
    var lottery = new Lottery({
        $target:$('#lottery'),
        endIndex:5,
        quanshu:5,
    });
    window.lottery = lottery;
});