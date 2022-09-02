/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


(function() {
  // Add custom code below this line


  




  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
})();


var bannerHeight = 0;
        var scrollVal = 0
        var footerTop = 0
        var perCol = 0
        var myOffset = 0
        var colHeight = 0;
        var initialMarginTop = 0
        var currentMarginTop = 0;
        var footerTop =0
        $(document).ready(function(){
             footerTop = $('footer').offset().top - $('footer').height();
            bannerHeight = $('.banner').height();
            colHeight = $('.col-2').height();
            initialMarginTop = ($('.col-2').height() - $('.col-2 .col-box').first().height())*-1 ;
            perCol = $('.col-2').children.length;
            myOffset = perCol -1;
            $('.col-2').css('margin-top',initialMarginTop + 'px')


        });
        $(window).scroll(function(){
            if($(window).scrollTop()>bannerHeight && $(window).scrollTop()<footerTop){
                scrollVal = $(window).scrollTop() - bannerHeight;
                $(":root").css('--scroll-val',scrollVal+'px')
            }
            else if($(window).scrollTop()<bannerHeight){
                scrollVal = 0;
                $(":root").css('--scroll-val',scrollVal+'px');
            }
            else if($(window).scrollTop()>footerTop){
                scrollVal = initialMarginTop;
                $(":root").css('--scroll-val',scrollVal+'px');
            }
        });
