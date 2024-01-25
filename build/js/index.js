document.addEventListener("DOMContentLoaded", function () {

  //вычисляем ширину экрана
  const windowWidth = window.screen.width;
  //console.log("ширина окна " + windowWidth);
  
  // вычисление переменных ширины контейнера и экрана, передача их в css
  const container = document.querySelector('.container');
  const wrapper = document.querySelector('.wrapper');
  if (container && wrapper) {
    const containerWidth = container.offsetWidth;
    const wrapperWidth = wrapper.offsetWidth;
    document.documentElement.style.setProperty('--js-container-width', containerWidth + "px");
    document.documentElement.style.setProperty('--js-wrapper-width', wrapperWidth + "px");
    //console.log("Шириина .container: " + containerWidth + " пикселей");
    //console.log("Шириина .wrapper: " + wrapperWidth + " пикселей");
  }

  // вычисление высоты фото в Мероприятиях, передача ее в css 
  const imgEvent = document.querySelector('.number-slider__item');
  if (imgEvent) {
    const imgEventHeight = imgEvent.offsetHeight;
    document.documentElement.style.setProperty('--js-img-event-height', imgEventHeight + "px");
    //console.log("Высота картинки " + imgEventHeight + " пикселей");
  }
});


jQuery(document).ready(function () {
  
  //плавный скролл страниц
  
    
  //навешиваем модификатор на плавающий хедер
  let pageStartTop =$(window).scrollTop();
  if(pageStartTop > 0 ) {
    $(".header").addClass("active");
  }
  
  // Header fixed animated
  $(window).on("scroll", function () {
    let scrolled = $(this).scrollTop();
    console.log("виндовс топ " + scrolled);
    if( scrolled > 50 ) {
      $(".header").addClass("active");
    }
    if( scrolled <= 50 ) {
      $(".header").removeClass("active");
    }
    
    // растяжка видео на главной
    if( scrolled > 400 &&  scrolled < 1000) {
      $("#mainBanner").addClass("active");
    }
    // растяжка баннера на странице Сегмент
    if( scrolled > 400 &&  scrolled < 1000) {
      $(".main-banner_segment").addClass("active");
    }
    
  });
  
  
  // мобильное меню
  $('.menu-humb').on('click', function () {
    if ($(this).hasClass("active")) {
      $('.menu-dropdown__bg').hide();
    } else {
      $('.menu-dropdown__bg').show();
    }
    $(this).toggleClass('active');
    $('.menu-mob').toggleClass('active');
    $('.header__wrap').toggleClass('menu_active');
  });

  
  
  // главное меню Услуги
  $('#menu-services').on('click', function () {
    $('.menu-dropdown__bg').show();
    $(".menu-dropdown").show();
    $('.menu-dropdown__block').addClass("animate__animated");
  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest("#menu-services, .menu-dropdown__inner, .menu-humb, .menu-mob__inner").length) {
      $(".menu-dropdown").hide();
      $('.menu-dropdown__bg').hide();
      $('.menu-mob').removeClass("active");
      $('.menu-humb').removeClass("active");
    }
    e.stopPropagation();
  });


  // плавный скролл
  $("a.scroll-to").on("click", function(e){
    e.preventDefault();
    let anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 130
    }, 500);
  });

  // слайдер Клиенты
  const swiperClients = new Swiper(".clients-slider", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    loop: true,
    freeMode: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });

  // слайдер Зачем бизнесу brandformance-маркетинг
  const swiperMotives = new Swiper(".motives-slider", {
    slidesPerView: "auto",
    loop: true,
    freeMode: true,
    speed: 6000,
    slidesPerGroup: 1,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }
  });

  // слайдер Наши ценности
  const swiperWorth = new Swiper(".worth-slider", {
    slidesPerView: "auto",
    loop: true,
    freeMode: true,
    speed: 10000,
    freeModeMomentum: false,
    disableOnInteraction: false,
    noSwiping: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    }
  });


  // слайдер с нумерацией слайдов
  const swiperNumber = new Swiper(".number-slider", {
    spaceBetween: 16,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      768: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
          },
          formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
          },
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>'
              +
              ' <span class="swiper-scrollbar"> </span> '
              +
              '<span class="' + totalClass + '"></span>';
          }
        },
      },
      // when window width is >= 991px
      991: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
          },
          formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
          },
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>'
              +
              ' <span class="swiper-scrollbar"> </span> '
              +
              '<span class="' + totalClass + '"></span>';
          }
        },
      }
    }
  });

  // слайдер категорий на странице Кейсы
  const swiperProjectsCategories = new Swiper(".projects-categories-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
      }
    }
  });

  // слайдер Растим экспертизу в digital
  const swiperSert = new Swiper(".digital-big__slider", {
    grabCursor: true,
    effect: "creative",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      reverseDirection: true
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -400],
      },
      next: {
        translate: [0, 0, -400],
      },
    },
  });

  // аккордеон
  $('._js-accord-title, .directions-item__btn, .work-directions__btn').on('click', function () {
    let parents = $(this).closest('._js-accord-wrap');
    let targetBlock = parents.find('._js-accord-block');
    // Свернуть все соседние _js-accord-block
    parents.siblings().find('._js-accord-block').slideUp(500);
    // Свернуть/развернуть текущий _js-accord-block
    targetBlock.slideToggle(500);
    parents.siblings().removeClass('active');
    parents.toggleClass('active');
  });

  // табы
  $('._js-tabs-title').on('click', function () {
    let tabAttr = $(this).attr('data-tab'),
      tabInfo = $('._js-tabs-info[data-tab= \'' + tabAttr + '\']');
    $(this).addClass('active').siblings().removeClass('active');
    tabInfo.addClass('active').siblings().removeClass('active');
  });

  // mask phone
  $(function () {
    $(".input-phone").mask("+7 (999) 999 - 99 - 99");
  });
  

  // переключатель тегов в Кейсах
  $('._js-tag').on('click', function () {
     let countTagsActive = $(this).siblings('.active').length;
     if ($(this).hasClass("tag-all")) {
       $(this).addClass('active');
       $(this).siblings('._js-tag').removeClass('active');
     } else {
       $(this).siblings('.tag-all').removeClass('active');
       $(this).toggleClass('active');
       if(countTagsActive == 0){
         $(this).siblings('.tag-all').addClass('active');
       }
     }
  });

  // галерея Отзывы
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] 
    },
    image: {
      tError: '<a href="%url%">Отзыв #%curr%</a> временно недоступен.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small></small>';
      }
    },
    zoom: {
      enabled: true,
      duration: 500 
    },
    removalDelay: 500,
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      change: function() {
        if (this.isOpen) {
          this.wrap.addClass('mfp-open');
        }
      }
    },
    // retina: {
    //   ratio: 2 // can also be function that should retun this number
    // }
  });

  
  // свайпы в галерее отзывов
  $('.reviews-previews__item').on('click', function () {
    handleTouchStart = function(e) {
      xDown = e.touches[0].clientX;
      yDown = e.touches[0].clientY;
    };
    handleTouchMove = function(e) {
      if (!xDown || !yDown) {
        return;
      }
      let xUp = e.touches[0].clientX;
      //console.log(xUp);
      let yUp = e.touches[0].clientY;
      //console.log(yUp);
      let xDiff = xDown - xUp;
      console.log(xDiff);
      let yDiff = yDown - yUp;
      console.log(yDiff);
      if (Math.abs(xDiff) + Math.abs(yDiff) > 15)
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            $('.mfp-arrow-right').click();
            console.log('лево');
          } else {
            $('.mfp-arrow-left').click();
            console.log('право');
          }
        } else {
          if (yDiff > 0)
            $('.mfp-close').click();
          else
            $('.mfp-close').click();
        }
      xDown = null;
      yDown = null;
    };
    let xDown = null;
    let yDown = null;
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
  });

  //инициализируем плагин для запуска анимации
  const wow = new WOW({
    boxClass: 'wow', /* класс, который необходим для работы wow.js */
    animateClass: 'animate__animated', /* класс, который будет автоматически добавляться анимируемым элементам при прокрутке страницы */
    offset: 50, /* по-умолчанию установлено значение 0, то есть как только при прокрутке страницы, элемент достигает низа окна браузера проигрываться анимация, в данном случае анимация начнется на 30px выше от низа окна браузера */
    mobile: true, /* если true, то на мобильных тоже будет анимация, если false, то на мобильных анимация отключается */
    live: true /* если true, то анимация будет работать даже на динамически добавляемых элементах, если false, то только на тех элементах, которые были на странице при ее загрузке */
  });
  wow.init(); /* Инициализация плагина с установленными выше свойствами */


  //динамическое формирование модалки для воронки
  $('.funnels-title__more').on('click', function () {
    const modal = $("#modalMoreInfo");
    const modalTitle = $(this).siblings('.funnels-title__name').html();
    const modalContent = $(this).siblings('.funnels-modal__content').html();
    modal.find("#modalMoreInfoTitle").html(modalTitle);
    modal.find("#modalMoreInfoList").html(modalContent);
  });

  
  // обработка инпутов
  // $(".input").on('focus', function () {
  //   $(this).closest(".input__wrap").addClass('active');
  // });
  //
  // $(".input").on('blur', function () {
  //   $(this).closest(".input__wrap").removeClass('active');
  //  
  // });
  

});






