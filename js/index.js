//->动态计算REM的换算比例
~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);
~function (){ // 让每个页面自动切换,使用swiper内置属性
    var swp = new Swiper('.swiper-container',{
        loop:true,
        direction:'vertical',
            effect : 'cube',
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 100,
                shadowScale: 0.6
            },
        onSlidePrevEnd: function (swiper) {
            var a = swiper.slides;
            var index = swiper.activeIndex;
            for (var i = 0; i < a.length; i++) {
                a[i].id = null;
            }
            swiper.slides[index].id = swiper.slides[index].getAttribute("trueId");
        },
        onSlideNextEnd: function (swiper) {
            var a = swiper.slides;
            var index = swiper.activeIndex;
            for (var i = 0; i < a.length; i++) {
                a[i].id = null;
            }
            swiper.slides[index].id = swiper.slides[index].getAttribute("trueId");
        }
    })
}();

//->音频的自动播放
~function () {
    var audioBox = document.querySelector(".audio"),
        myAudio = audioBox.getElementsByTagName("audio")[0];

    //->延时播放音频文件,先让其他的内容加载
    window.setTimeout(function () {
        myAudio.play();
        myAudio.addEventListener("canplay", function () {
            //->当音频可以播放的时候触发这个事件
            audioBox.style.display = "block";
            audioBox.className += " audioMove";
        }, false);
    }, 1000);

    //->点击音乐图标,实现音频的暂停或者播放
    audioBox.addEventListener("click", function () {
        if (myAudio.paused) {//->当前是暂停的,我让其播放
            myAudio.play();
            audioBox.className = "audio audioMove";
            return;
        }
        myAudio.pause();
        audioBox.className = "audio";
    }, false);
}();










