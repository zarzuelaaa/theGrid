jQuery(window).scroll(function(){
    var fromTopPx = 200; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        jQuery('nav').addClass('scrolled');
    }else{
        jQuery('nav').removeClass('scrolled');
    }
});
