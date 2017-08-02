window.onload=function(){

  //页面滚动 动态改变header的背景颜色
  setHeader();
  //倒计时
  downTime();

  //触屏轮播图
  banner();
}

//页面滚动 动态改变header的背景颜色
//当页面滚动的高度 小于banner 高度时 ，header的透明度改变，
//当页面滚动的高度 大于banner 高度时 ，header的透明度不变
function setHeader(){
  var banner=document.querySelector('.jd-banner');
  var header=document.querySelector('.header-in');

  var bannerHeight=banner.offsetHeight;
  console.log(bannerHeight);

  //绑定页面滚动的事件，
  //当页面滚动的高度 小于banner 高度时 ，header的透明度改变，
  window.onscroll=function(){
    //获取页面滚出浏览器顶部的高度
    var top=document.body.scrollTop;
    //console.log(top);
    var value=0;
    if(top<bannerHeight){
      value=top/bannerHeight;
      //让header 有透明的效果，让透明度不超过0.85;
      if(value>0.85){
        value=0.85;
      }
    }else{
      value=0.85;
    }

    header.style.background="rgba(201, 21, 35, "+value+")";
  }

}

//倒计时
function downTime(){
  // 每隔一秒钟让时间 减一，动态更新到页面上
  var time=5*60*60;
  //定义在页面显示时间的方法
  var setTime=function(){
    //把秒数 转成时分秒
    var h=Math.floor(time/3600);
    var m=Math.floor(time%3600/60);
    var s=Math.floor(time%60);

    //获取倒计时的所有span
    var spans=document.querySelectorAll('.sk-time span');

    //小时的十位
    spans[0].innerHTML=Math.floor(h/10);
    //小时的个位
    spans[1].innerHTML=Math.floor(h%10);

    //分钟的十位
    spans[3].innerHTML=Math.floor(m/10);
    //分钟的个位
    spans[4].innerHTML=Math.floor(m%10);

    //秒的十位
    spans[6].innerHTML=Math.floor(s/10);
    //秒的个位
    spans[7].innerHTML=Math.floor(s%10);
  }
  //先调用一次
  setTime();

  //调用定时器
  var timer=setInterval(function(){
    time--;
    setTime();
    if(time<=0){
      clearInterval(timer);
    }
  },1000);


}

//轮播图
/*
*  需求：
* 1、定时器 切换轮播图
* 2、无缝效果（边界检测）
* 3、角标切换
* 4、触屏切换轮播图
* */
function banner(){
  //获取需要的标签
  var banner=document.querySelector('.jd-banner');
  var ul=banner.querySelector('ul');
  var points=banner.querySelectorAll('.points li');  //所有的角标
  var W=banner.offsetWidth;  //全屏的宽度
  //记录当前显示的图片的索引
  var index=1;
  //--------------------------封装复用的方法--------------------
  //设置ul的位移
  var setTranslateX=function(left){
    ul.style.transform='translateX('+left+'px)';
    ul.style.webkitTransform='translateX('+left+'px)'; //兼容webkit内核
  }
  //添加ul的过渡
  var addTransition=function(){
    ul.style.transition="all 0.3s";
    ul.style.webkitTransition="all 0.3s";
  }

  //删除过渡效果
  var removeTransition=function(){
    ul.style.transition="none";
    ul.style.webkitTransition="none";
  }

  //1、----------------------定时器 切换轮播图--------------------

  var timer=setInterval(function(){
    index++;
    //ul要向左移动的距离
    var x=-index*W;
    //添加ul的过渡效果
    addTransition();
    //设置ul的位移
    setTranslateX(x);
  },4000);


  //2--------------------无缝效果（边界检测）------------------

  //ul.addEventListener('transitionEnd',function(){
  //  if(index>=9){
  //    index=1;
  //    //让ul快速跳转到第一张
  //    var x=-index*W;
  //    //跳转之前需要删除过渡
  //    removeTransition();
  //    //设置ul的位移
  //    setTranslateX(x);
  //  }
  //
  //  if(index<=0){
  //    index=8;
  //    //让ul快速跳转到第8张图片
  //    var x=-index*W;
  //    //跳转之前需要删除过渡
  //    removeTransition();
  //    //设置ul的位移
  //    setTranslateX(x);
  //
  //  }
  //});
  ////兼容处理
  //ul.addEventListener('webkitTransitionEnd',function(){
  //  if(index>=9){
  //    index=1;
  //    //让ul快速跳转到第一张
  //    var x=-index*W;
  //    //跳转之前需要删除过渡
  //    removeTransition();
  //    //设置ul的位移
  //    setTranslateX(x);
  //  }
  //
  //  if(index<=0){
  //    index=8;
  //    //让ul快速跳转到第8张图片
  //    var x=-index*W;
  //    //跳转之前需要删除过渡
  //    removeTransition();
  //    //设置ul的位移
  //    setTranslateX(x);
  //  }
  //
  //});
  //
  //调用

  //调用setTransitionEnd 方法 给ul绑定两个过渡结束的事件
  setTransitionEnd(ul,function(){
    if(index>=9){
      index=1;
      //让ul快速跳转到第一张
      var x=-index*W;
      //跳转之前需要删除过渡
      removeTransition();
      //设置ul的位移
      setTranslateX(x);
    }

    if(index<=0){
      index=8;
      //让ul快速跳转到第8张图片
      var x=-index*W;
      //跳转之前需要删除过渡
      removeTransition();
      //设置ul的位移
      setTranslateX(x);
    }

    // 控制角标 index-1  第一张的对应的原点索引为0
    setPoints(index-1);
  })


  //3-封装一个方法用来绑定过渡结束的是事件，为了解决 兼容写法是代码冗余问题

  /*
  *  obj:要绑定过渡结束事件的标签
  *  callback: 当过渡事件结束后，要执行的回调函数
  * */
  function setTransitionEnd(obj,callback){
     obj.addEventListener('transitoinEnd',callback);
     obj.addEventListener('webkitTransitionEnd',callback); //兼容的写法
  }


  //3----------------------------角标控制---------------------
  function setPoints(index){
    //排他
    for(var i=0;i<points.length;i++){
      points[i].classList.remove('current');
    }

    points[index].classList.add('current'); //给当前的li添加类名
  }


  //4、--------------------------触屏切换轮播图---------------------
  /*
  *   1、记录触屏的数据
  *   2、触屏移动时 ul跟随移动
  *   3、触屏结束时
  *       3.1  如果滑动距离大于W/3 切换图片  否则 吸附回去
  *            3.1.1 　上一张　　向右滑动　　distanceX>0;
  *            3.1.2　下一张     向左滑动   distanceX<0;
  * */

  // 定义变量记录需要的数据
  var startX=0;
  var moveX=0;
  var distanceX=0;

  banner.addEventListener('touchstart',function(e){
    clearInterval(timer);  //停止定时器
    startX= e.targetTouches[0].clientX; //记录触屏的其实位置
  })

  //触屏移动时 ul跟随移动
  banner.addEventListener('touchmove',function(e){
    moveX= e.targetTouches[0].clientX; //记录移动的数据
    distanceX=moveX-startX; //计算距离差

    //触屏移动时 ul跟随移动
    //鼠标跟随的位置=-index*W+ distanceX;
    var x=-index*W+distanceX;
    //删除过渡效果
    removeTransition();
    //让ul移动
    setTranslateX(x);
  })

  banner.addEventListener('touchend',function(){
      //如何切换图片
      //触屏结束时
      //*       3.1  如果滑动距离大于W/3 切换图片  否则 吸附回去
      //*            3.1.1 　上一张　　向右滑动　　distanceX>0;
      //*            3.1.2　下一张     向左滑动   distanceX<0;

    if(Math.abs(distanceX)>W/3){  //要切换图片
        if(distanceX>0){
          //向右滑动 上一张
          index--;
        }
        if(distanceX<0){
           //向左滑动  下一张
           index++;
        }
    }else{
       //吸附回去
    }
    //让ul 再次位移
    var x=-index*W;
    //添加过渡效果
    addTransition();
    //ul位移
    setTranslateX(x);


    //触屏结束后 在开启定时器
    timer=setInterval(function(){
      index++;
      //ul要向左移动的距离
      var x=-index*W;
      //添加ul的过渡效果
      addTransition();
      //设置ul的位移
      setTranslateX(x);
    },4000);

    //数据重置
    startX=0;
    moveX=0;
    distanceX=0;
  });




}
