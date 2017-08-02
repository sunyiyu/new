window.onload=function(){

  //ҳ����� ��̬�ı�header�ı�����ɫ
  setHeader();
  //����ʱ
  downTime();

  //�����ֲ�ͼ
  banner();
}

//ҳ����� ��̬�ı�header�ı�����ɫ
//��ҳ������ĸ߶� С��banner �߶�ʱ ��header��͸���ȸı䣬
//��ҳ������ĸ߶� ����banner �߶�ʱ ��header��͸���Ȳ���
function setHeader(){
  var banner=document.querySelector('.jd-banner');
  var header=document.querySelector('.header-in');

  var bannerHeight=banner.offsetHeight;
  console.log(bannerHeight);

  //��ҳ��������¼���
  //��ҳ������ĸ߶� С��banner �߶�ʱ ��header��͸���ȸı䣬
  window.onscroll=function(){
    //��ȡҳ���������������ĸ߶�
    var top=document.body.scrollTop;
    //console.log(top);
    var value=0;
    if(top<bannerHeight){
      value=top/bannerHeight;
      //��header ��͸����Ч������͸���Ȳ�����0.85;
      if(value>0.85){
        value=0.85;
      }
    }else{
      value=0.85;
    }

    header.style.background="rgba(201, 21, 35, "+value+")";
  }

}

//����ʱ
function downTime(){
  // ÿ��һ������ʱ�� ��һ����̬���µ�ҳ����
  var time=5*60*60;
  //������ҳ����ʾʱ��ķ���
  var setTime=function(){
    //������ ת��ʱ����
    var h=Math.floor(time/3600);
    var m=Math.floor(time%3600/60);
    var s=Math.floor(time%60);

    //��ȡ����ʱ������span
    var spans=document.querySelectorAll('.sk-time span');

    //Сʱ��ʮλ
    spans[0].innerHTML=Math.floor(h/10);
    //Сʱ�ĸ�λ
    spans[1].innerHTML=Math.floor(h%10);

    //���ӵ�ʮλ
    spans[3].innerHTML=Math.floor(m/10);
    //���ӵĸ�λ
    spans[4].innerHTML=Math.floor(m%10);

    //���ʮλ
    spans[6].innerHTML=Math.floor(s/10);
    //��ĸ�λ
    spans[7].innerHTML=Math.floor(s%10);
  }
  //�ȵ���һ��
  setTime();

  //���ö�ʱ��
  var timer=setInterval(function(){
    time--;
    setTime();
    if(time<=0){
      clearInterval(timer);
    }
  },1000);


}

//�ֲ�ͼ
/*
*  ����
* 1����ʱ�� �л��ֲ�ͼ
* 2���޷�Ч�����߽��⣩
* 3���Ǳ��л�
* 4�������л��ֲ�ͼ
* */
function banner(){
  //��ȡ��Ҫ�ı�ǩ
  var banner=document.querySelector('.jd-banner');
  var ul=banner.querySelector('ul');
  var points=banner.querySelectorAll('.points li');  //���еĽǱ�
  var W=banner.offsetWidth;  //ȫ���Ŀ��
  //��¼��ǰ��ʾ��ͼƬ������
  var index=1;
  //--------------------------��װ���õķ���--------------------
  //����ul��λ��
  var setTranslateX=function(left){
    ul.style.transform='translateX('+left+'px)';
    ul.style.webkitTransform='translateX('+left+'px)'; //����webkit�ں�
  }
  //���ul�Ĺ���
  var addTransition=function(){
    ul.style.transition="all 0.3s";
    ul.style.webkitTransition="all 0.3s";
  }

  //ɾ������Ч��
  var removeTransition=function(){
    ul.style.transition="none";
    ul.style.webkitTransition="none";
  }

  //1��----------------------��ʱ�� �л��ֲ�ͼ--------------------

  var timer=setInterval(function(){
    index++;
    //ulҪ�����ƶ��ľ���
    var x=-index*W;
    //���ul�Ĺ���Ч��
    addTransition();
    //����ul��λ��
    setTranslateX(x);
  },4000);


  //2--------------------�޷�Ч�����߽��⣩------------------

  //ul.addEventListener('transitionEnd',function(){
  //  if(index>=9){
  //    index=1;
  //    //��ul������ת����һ��
  //    var x=-index*W;
  //    //��ת֮ǰ��Ҫɾ������
  //    removeTransition();
  //    //����ul��λ��
  //    setTranslateX(x);
  //  }
  //
  //  if(index<=0){
  //    index=8;
  //    //��ul������ת����8��ͼƬ
  //    var x=-index*W;
  //    //��ת֮ǰ��Ҫɾ������
  //    removeTransition();
  //    //����ul��λ��
  //    setTranslateX(x);
  //
  //  }
  //});
  ////���ݴ���
  //ul.addEventListener('webkitTransitionEnd',function(){
  //  if(index>=9){
  //    index=1;
  //    //��ul������ת����һ��
  //    var x=-index*W;
  //    //��ת֮ǰ��Ҫɾ������
  //    removeTransition();
  //    //����ul��λ��
  //    setTranslateX(x);
  //  }
  //
  //  if(index<=0){
  //    index=8;
  //    //��ul������ת����8��ͼƬ
  //    var x=-index*W;
  //    //��ת֮ǰ��Ҫɾ������
  //    removeTransition();
  //    //����ul��λ��
  //    setTranslateX(x);
  //  }
  //
  //});
  //
  //����

  //����setTransitionEnd ���� ��ul���������ɽ������¼�
  setTransitionEnd(ul,function(){
    if(index>=9){
      index=1;
      //��ul������ת����һ��
      var x=-index*W;
      //��ת֮ǰ��Ҫɾ������
      removeTransition();
      //����ul��λ��
      setTranslateX(x);
    }

    if(index<=0){
      index=8;
      //��ul������ת����8��ͼƬ
      var x=-index*W;
      //��ת֮ǰ��Ҫɾ������
      removeTransition();
      //����ul��λ��
      setTranslateX(x);
    }

    // ���ƽǱ� index-1  ��һ�ŵĶ�Ӧ��ԭ������Ϊ0
    setPoints(index-1);
  })


  //3-��װһ�����������󶨹��ɽ��������¼���Ϊ�˽�� ����д���Ǵ�����������

  /*
  *  obj:Ҫ�󶨹��ɽ����¼��ı�ǩ
  *  callback: �������¼�������Ҫִ�еĻص�����
  * */
  function setTransitionEnd(obj,callback){
     obj.addEventListener('transitoinEnd',callback);
     obj.addEventListener('webkitTransitionEnd',callback); //���ݵ�д��
  }


  //3----------------------------�Ǳ����---------------------
  function setPoints(index){
    //����
    for(var i=0;i<points.length;i++){
      points[i].classList.remove('current');
    }

    points[index].classList.add('current'); //����ǰ��li�������
  }


  //4��--------------------------�����л��ֲ�ͼ---------------------
  /*
  *   1����¼����������
  *   2�������ƶ�ʱ ul�����ƶ�
  *   3����������ʱ
  *       3.1  ��������������W/3 �л�ͼƬ  ���� ������ȥ
  *            3.1.1 ����һ�š������һ�������distanceX>0;
  *            3.1.2����һ��     ���󻬶�   distanceX<0;
  * */

  // ���������¼��Ҫ������
  var startX=0;
  var moveX=0;
  var distanceX=0;

  banner.addEventListener('touchstart',function(e){
    clearInterval(timer);  //ֹͣ��ʱ��
    startX= e.targetTouches[0].clientX; //��¼��������ʵλ��
  })

  //�����ƶ�ʱ ul�����ƶ�
  banner.addEventListener('touchmove',function(e){
    moveX= e.targetTouches[0].clientX; //��¼�ƶ�������
    distanceX=moveX-startX; //��������

    //�����ƶ�ʱ ul�����ƶ�
    //�������λ��=-index*W+ distanceX;
    var x=-index*W+distanceX;
    //ɾ������Ч��
    removeTransition();
    //��ul�ƶ�
    setTranslateX(x);
  })

  banner.addEventListener('touchend',function(){
      //����л�ͼƬ
      //��������ʱ
      //*       3.1  ��������������W/3 �л�ͼƬ  ���� ������ȥ
      //*            3.1.1 ����һ�š������һ�������distanceX>0;
      //*            3.1.2����һ��     ���󻬶�   distanceX<0;

    if(Math.abs(distanceX)>W/3){  //Ҫ�л�ͼƬ
        if(distanceX>0){
          //���һ��� ��һ��
          index--;
        }
        if(distanceX<0){
           //���󻬶�  ��һ��
           index++;
        }
    }else{
       //������ȥ
    }
    //��ul �ٴ�λ��
    var x=-index*W;
    //��ӹ���Ч��
    addTransition();
    //ulλ��
    setTranslateX(x);


    //���������� �ڿ�����ʱ��
    timer=setInterval(function(){
      index++;
      //ulҪ�����ƶ��ľ���
      var x=-index*W;
      //���ul�Ĺ���Ч��
      addTransition();
      //����ul��λ��
      setTranslateX(x);
    },4000);

    //��������
    startX=0;
    moveX=0;
    distanceX=0;
  });




}
