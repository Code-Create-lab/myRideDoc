'use strict';
(function ($) {
  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {
    // ============== Header Hide Click On Body Js Start ========
    $('.header-button').on('click', function () {
      $('.body-overlay').toggleClass('show');
    });
    $('.body-overlay').on('click', function () {
      $('.header-button').trigger('click');
      $(this).removeClass('show');
    });
    // =============== Header Hide Click On Body Js End =========
    // // ========================= Header Sticky Js Start ==============
    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= 300) {
        $('.header').addClass('fixed-header');
      } else {
        $('.header').removeClass('fixed-header');
      }
    });
    // // ========================= Header Sticky Js End===================

    // //============================ Scroll To Top Icon Js Start =========
    var btn = $('.scroll-top');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });

    // ========================== Header Hide Scroll Bar Js Start =====================
    $('.navbar-toggler.header-button').on('click', function () {
      $('body').toggleClass('scroll-hide-sm');
    });
    $('.body-overlay').on('click', function () {
      $('body').removeClass('scroll-hide-sm');
    });
    // ========================== Header Hide Scroll Bar Js End =====================

    // ========================== Small Device Header Menu On Click Dropdown menu collapse Stop Js Start =====================
    $('.dropdown-item').on('click', function () {
      $(this).closest('.dropdown-menu').addClass('d-block');
    });
    // ========================== Small Device Header Menu On Click Dropdown menu collapse Stop Js End =====================



    // ========================== add active class to ul>li top Active current page Js Start =====================
    function dynamicActiveMenuClass(selector) {
      let fileName = window.location.pathname.split('/').reverse()[0];
      selector.find('li').each(function () {
        let anchor = $(this).find('a');
        if ($(anchor).attr('href') == fileName) {
          $(this).addClass('active');
        }
      });
      // if any li has active element add class
      selector.children('li').each(function () {
        if ($(this).find('.active').length) {
          $(this).addClass('active');
        }
      });
      // if no file name return
      if ('' == fileName) {
        selector.find('li').eq(0).addClass('active');
      }
    }
    if ($('ul.sidebar-menu-list').length) {
      dynamicActiveMenuClass($('ul.sidebar-menu-list'));
    }
    // ========================== add active class to ul>li top Active current page Js End =====================


    // ================== Sidebar Menu Js Start ===============
    // Sidebar Dropdown Menu Start
    $('.has-dropdown > a').click(function () {
      $('.sidebar-submenu').slideUp(200);
      if ($(this).parent().hasClass('active')) {
        $('.has-dropdown').removeClass('active');
        $(this).parent().removeClass('active');
      } else {
        $('.has-dropdown').removeClass('active');
        $(this).next('.sidebar-submenu').slideDown(200);
        $(this).parent().addClass('active');
      }
    });
    // Sidebar Dropdown Menu End
    // Sidebar Icon & Overlay js
    $('.sidebar-trigger').on('click', function () {
      $('.sidebar-menu').addClass('show');
      $('.sidebar-overlay').addClass('show');
      $('body').toggleClass('scroll-hide-sm');
    });
    $('.sidebar-menu__close, .sidebar-overlay').on('click', function () {
      $('.sidebar-menu').removeClass('show');
      $('.sidebar-overlay').removeClass('show');
      $('body').removeClass('scroll-hide-sm');
    });
    // Sidebar Icon & Overlay js
    // ===================== Sidebar Menu Js End =================

   

    
  });
  // ==========================================
  //      End Document Ready function
  // ==========================================

















  // ========================= Preloader Js Start =====================
  $(window).on('load', function () {
    $('.preloader').fadeOut();
  });
  // ========================= Preloader Js End=====================
})(jQuery);
