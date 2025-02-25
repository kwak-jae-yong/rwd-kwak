AOS.init({
    easing:'ease',
    
});

const fixedTopBtn = document.querySelector('.fixedTop')
const dep4List = document.querySelectorAll('ul.dep4_list')
$(function(){

    const headerBtn = $('.header_btn')
    const header = $('header')

    headerBtn.on('click', function (e) {
        e.preventDefault()
        header.toggleClass('navOpen')
    })
$(window).on('scroll', function(){
    let i =$(this).scrollTop()
    console.log(i);

    if(i>=100){  
        /*scorll할떄 i의 값이 100보다 클때 scroll 클래스를 추가하고 아닌경우 제거하는 변수*/
        header.addClass('scroll')
    }else{
        header.removeClass('scroll')
    }
})


fixedTopBtn.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})
})
gsap.to('.dep1 .tit_wrap>*', {
    opacity: 1,
    y: -30,
    duration: 1,
    stagger: .3
})




const dep6Slider = new Swiper(".dep6-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1110: {
            slidesPerView: 3,
            //   spaceBetween: 50,
        },
    },
});