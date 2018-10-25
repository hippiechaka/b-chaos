$(document).ready(function() {

//$('#mapTrigger').click();
/* ScrollNavigation  */

  $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, 'easeInOutExpo');
            return false;
          }
        }
      });
    });

/* Slide OWL */

$("#slide-bchaos").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        nav:true,
        navigation: true,
        controls:true,
        autoplay : true,
        pagination: true,
        stopOnHover: true,
        //lazyLoad: true,
        //addClassActive: true,
        loop:true,
        navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"]
        // afterAction: afterAction,
        // onResized: matchHeight1
  });

/* Parallax */

  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  new ScrollMagic.Scene({triggerElement: ".parallaxParent"})
    .setTween(".parallaxParent > div.bg-parallax", {y: "80%", ease: Linear.easeNone})
    // .addIndicators()
    .addTo(controller);

  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  new ScrollMagic.Scene({triggerElement: ".parallaxParent2"})
    .setTween(".parallaxParent2 > div.bg-parallax2", {y: "80%", ease: Linear.easeNone})
    // .addIndicators()
    .addTo(controller);

/* Galería */

  if ($("#grid-gallery").length>0){
      new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
      $("#grid-gallery").lightGallery({selector:'.imglg',download:false,thumbnail:false,appendSubHtmlTo:''}); 
  }
  if ($("#grid-gallery2").length>0){
      new CBPGridGallery( document.getElementById( 'grid-gallery2' ) );
      $("#grid-gallery2").lightGallery({selector:'.img-lg',download:false,thumbnail:false,appendSubHtmlTo:''}); 
  }



$("#tourGrid").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      nav: true,
      controls: true,
      items : 5,
      itemsMobile : true,
      loop:true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:true
          },
          1000:{
              items:4,
              nav:true,
              loop:true
          }
      },
      navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"]
 
  });

/* Menu hamburguesa */

  (function() {
    
    var Menu = (function() {
      var burger = document.querySelector('.burger');
      var menu = document.querySelector('.menu');
      var menuList = document.querySelector('.menu__list');
      var brand = document.querySelector('.menu__brand');
      var menuItems = document.querySelectorAll('.menu__item');
      var active = false;
      var toggleMenu = function() {
        if (!active) {
          menu.classList.add('menu--active');
          menuList.classList.add('menu__list--active');
          brand.classList.add('menu__brand--active');
          burger.classList.add('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.add('menu__item--active');
          }
          active = true;
        } else {
          menu.classList.remove('menu--active');
          menuList.classList.remove('menu__list--active');
          brand.classList.remove('menu__brand--active');
          burger.classList.remove('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.remove('menu__item--active');
          }
          active = false;
        }
      };
      var bindActions = function() {
        burger.addEventListener('click', toggleMenu, false);
      };
      var init = function() {
        bindActions();
      };
      return {
        init: init
      };
    }());
    Menu.init();
    
  }());

});




/*
  $("#etc").click(function(){
      $(".content").css("display", "none");
      $(".main-procesoBTN").removeClass("current");
      $("#progenitoras-cont").fadeToggle();
      $(this).addClass("current");
      return false;
  });*/