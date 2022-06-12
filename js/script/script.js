/*-- Subbafoundation.com Jquery Scripts --*/

$(document).ready(function() {
    $('body').click(function(event) {
        if (!$(event.target).closest('#navbarCollapse').length && !$(event.target).closest('#navToggler').length) {
            $('#navbarCollapse').removeClass('show');
            $('#navToggler').removeClass('toggle');
        }
        if (!$(event.target).closest('.search-form-wrap').length && !$(event.target).closest('.search-btn').length) {
            $('.search-form-wrap').removeClass('show');
            $('.search-btn i').removeClass('fa-times');
        }
    });
    $('.search-btn').on('click', function() {
        $('.search-form-wrap').toggleClass('show');
        $('.search-btn i').toggleClass('fa-times');
    })
    $('#navToggler').on('click', function() {
        $('#navbarCollapse').toggleClass('show');
        $(this).toggleClass('toggle');
    })
    $('body').on('click', '.dropdown-icon', function() {
        $(this).toggleClass('fa-minus');
        $(this).next('.dropdown-menu').slideToggle();
    })
})
$('body').on('click','.aboutBtnMore', function(){
    $('#aboutContent').addClass('show');
    $(this).addClass('btnLess')
    $(this).html("Read Less");
})
$('body').on('click','.btnLess', function(){
    $('#aboutContent').removeClass('show');
    $(this).removeClass('btnLess')
    $(this).html("Read More");
})

$(document).keyup(function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
    $('.search-form-wrap').removeClass('show');
    $('.search-btn i').removeClass('fa-times');
   }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('#site-header').addClass("header-shrink");
    } else {
        $('#site-header').removeClass("header-shrink");
    }
});
$('.sidebar-links > ul > li > a').on('click', function(){
    $(this).next().slideToggle();
})

Fancybox.bind(".gallery-wrapper [data-fancybox='gallery']", {
    
});

$('.service-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoHeight:true,
    autoplay: true,
    smartSpeed: 2000,
    items: 2
})

$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoHeight:true,
    autoplay: true,
    smartSpeed: 2000,
    items: 1
})


$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

// match height js
$('.event-post .entry-container').matchHeight();

$('.post .entry-container').matchHeight();

$('.event-info').matchHeight();

// image upoad jquery
var readURL = function (input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#upArea img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#inputFile").on('change', function () {
    readURL(this);
});
$("#btnUpload").on('click', function () {
    $("#inputFile").click();
});

// click heilight script

$('#entryContainer ul li > a').on('click', function(){
    $('#entryContainer li').removeClass('heilight');
    $(this).parent().toggleClass('heilight');
})


    