$(function() {

    $('.main__slider').each(function() {
        let $item = $('.slider__item', this);
        let $prev = $('.main__slider-prev', this);
        let $next = $('.main__slider-next', this);
        let $current = $('.slider__current', this);
        let $count = $('.slider__count', this);
        let $dots = $('.main__slider-dots', this);

        $item.first().addClass('active');
        $count.text('/0' + $item.length);
        $current.text($item.filter('.active').index() + 1);


        $item.each(function() {
            $dots.append('<span></span>');
        });


        let $dot = $($dots.find('span'));
        $dot.eq($item.filter('.active').index()).addClass('active');


        $dot.click(function() {
            $item.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
            $current.text($item.filter('.active').index() + 1);
        });


        $prev.click(function() {
            let index = $item.filter('.active').index();
            if (index == 0) {
                index = $item.length;
            }
            $item.eq(index - 1).addClass('active').siblings().removeClass('active');
            $dot.eq(index - 1).addClass('active').siblings().removeClass('active');
            $current.text(index);

        });

        $next.click(function() {
            let index = $item.filter('.active').index();
            if (index == $item.length - 1) {
                index = -1;
            }
            $item.eq(index + 1).addClass('active').siblings().removeClass('active');
            $dot.eq(index + 1).addClass('active').siblings().removeClass('active');
            $current.text(index + 2);

        });



    });

    $('.popular__product__main__clock').each(function() {
        let $img = $('.popular__product__main__img img', this);
        let $switch = $('.popular__product__main__switches img', this);

        $switch.click(function() {
            $img.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        }).first().click();

    });



    /*Второй слайдер*/
    $('.deal__slider').each(function() {
        let $img = $('.deal__slider__img img', this);
        let $prev = $('.deal__slider__prev', this);
        let $next = $('.deal__slider__next', this);
        let $switch = $('.deal__slider__switch img', this);



        $prev.click(function() {
            let index = $img.filter('.active').index();
            if (index == 0) {
                index = $img.length;

            }
            $img.eq(index - 1).addClass('active').siblings().removeClass('active');
            $switch.eq(index - 1).addClass('active').siblings().removeClass('active');


            console.log($switch);
        });


        $next.click(function() {
            let index = $img.filter('.active').index();
            if (index == $img.length - 1) {
                index = -1;
            }
            $img.eq(index + 1).addClass('active').siblings().removeClass('active');
            $switch.eq(index + 1).addClass('active').siblings().removeClass('active');
        });



        $switch.click(function() {
            $img.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        }).first().click();

    });
    /*Конец*/

    /*Популярные продукты*/
    $('.popular').each(function() {
        let $tabs = $('.popular__header__btns li', this);
        let $product = $('.popular__products img', this);

        $tabs.first().addClass('active');

        $tabs.click(function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

    });
    /*Конец*/


    /*Вспылающие товары*/
    $('.open__pop').click(function() {

        $('.popup .popup__title').text($(this).data('title'));
        $('.popup .popup__text a').text($(this).data('category'));
        $('.popup .popup__text p').text($(this).data('text'));
        $('.popup .popup__text .price span').text($(this).data('price'));
        $('.popup .popup__img img').attr('src', $(this).data('img'));





        $('.popup').fadeIn();
        $('.bg__popup').fadeIn();

        $('.bg__popup,.close').click(function() {
            $('.popup').fadeOut();
            $('.bg__popup').fadeOut();
        });


    });
    /*Конец*/
});







/*burger-menu*/
function openNav() {
    document.getElementById('overlay').style.height = '100%';

}

function closeNav() {
    document.getElementById('overlay').style.height = '0%';
}
/*End menu*/



/*Scroll menu*/

$(function() {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        console.log(elementOffset);

        $("html,body").animate({
            scrollTop: elementOffset

        });
        closeNav();


    });

});

$(function() {

    $(window).scroll(function(event) {

        if ($(this).scrollTop() != 0) {
            $('#scroolTop').fadeIn();


        } else {
            $('#scroolTop').fadeOut();
        }

    });

    $('#scroolTop').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);

    });

});



/*End scroll*/