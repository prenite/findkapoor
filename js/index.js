$(document).ready(function () {

    //메인이미지 슬라이드
    var current = 0;
    var setIntervalId;

    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 3) {
                n = 0;
            }

            move(n);
        }, 3000)
    }

    function move(i) {
        if (i == current) return;

        var currentEl = $('#main_img li').eq(current);

        var nextEl = $('#main_img li').eq(i);

        currentEl.css({ left: '0%' }).animate({ left: '-100%' });
        nextEl.css({ left: '100%' }).animate({ left: '0%' });
        current = i;
    }


    //마우스올리면 헤더 영역 내려옴

    $('#header').mouseenter(function () {
        $(this).addclass('on');
    })

    $('#header').mouseleave(function () {
        $(this).removeclass('on');
    })



    //마우스올리면 메뉴글자에 색깔

    $('#nav a').mouseover(function () {
        $(this).css({ color: '#ccc' })
    })
    $('#nav a').mouseleave(function () {
        $(this).css({ color: 'black' })
    })


    $('.info a').mouseover(function () {
        $(this).css({ color: '#ccc' })
    })
    $('.info a').mouseleave(function () {
        $(this).css({ color: 'black' })
    })


    $('#header .mn_area h3').mouseover(function () {
        $(this).css({ color: '#ccc' })
    })
    $('#header .mn_area h3').mouseleave(function () {
        $(this).css({ color: 'black' })
    })


    $('#header .mn_area p a').mouseover(function () {
        $(this).css({ color: '#ccc' })
    })
    $('#header .mn_area p a').mouseleave(function () {
        $(this).css({ color: 'black' })
    })



    //메뉴 영역 풀다운

    $('.mn_area').hide();
    let key = true;
    console.log(key);

    $('#nav li a').mouseenter(function () {
        if (key == true) {
            key = false;
            $('.mn_area').show().css({ height: 0 }).animate({ height: '200px' });
        }
    });
    $('.mn_area').mouseleave(function () {
        key = true;
        $(this).css({ height: '200px' }).animate({ height: 0 })
    });





})