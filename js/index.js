/**
 * Created by Administrator on 2017/7/16.
 */
new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    initialSlide:2,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    /*当切换结束后，给当前展示的区域添加对应的ID，由此实现对应的动画效果*/
    onSlideChangeEnd:function(swiper) {

        var slideAry = swiper.slides,
        curIn = swiper.activeIndex,//当前展示块的索引
            total = slideAry.length;//获取当前一共有多少个活动块（包含loopM模式和前后多加的两个）
        var targetId = 'page';
        switch (curIn) {
            case 0:
                targetId += total - 2;
                break;
            case total-1:
                targetId +=1;
                break;
            default:
                targetId +=curIn;
        }
        //
        [].forEach.call(slideAry,function(item,index){
            if (curIn === index){
                item.id=targetId;
                return;
            }
            item.id=null;
        })
    }
});
~function () {
    var desW = 320,
    winW = document.documentElement.clientWidth,
        ratio =  winW /desW,
        oMain = document.querySelector('.main');
    document.documentElement.style.fontSize = ratio * 100 + 'px';
    if (winW > (desW*2)){
        oMain.style.margin = '0 auto';
        oMain.style.width = (desW*2) + 'px';
        document.documentElement.style.fontSize =  '200px';
        return;
    }
    /*var desW = 640,
        winW = document.documentElement.clientWidth,
        ratio =  winW /desW,
        oMain = document.querySelector('.main');

    if (winW > desW){
        oMain.style.margin = '0 auto';
        oMain.style.width = desW+ 'px';

        return;
    }
    document.documentElement.style.fontSize = ratio * 200 + 'px';*/
}();