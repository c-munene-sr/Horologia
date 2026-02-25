$(window).on('scroll', function() {
    requestAnimationFrame(parallaxScroll);
});

function parallaxScroll() {
    const scrolled = $(window).scrollTop();
    
    $('.layer-1').css('transform', `translateY(${scrolled * -0.15}px)`);
    $('.layer-2').css('transform', `translateY(${scrolled * -0.25}px)`);
    $('.layer-3').css('transform', `translateY(${scrolled * -0.38}px)`);
    $('.layer-4').css('transform', `translateY(${scrolled * -0.52}px)`);
    $('.layer-5').css('transform', `translateY(${scrolled * -0.68}px)`);
    $('.layer-6').css('transform', `translateY(${scrolled * -0.80}px)`);
    $('.layer-7').css('transform', `translateY(${scrolled * -0.90}px)`);
    $('.layer-8').css('transform', `translateY(${scrolled * -1.02}px)`);
    $('.layer-9').css('transform', `translateY(${scrolled * -1.12}px)`);
    
    $('.gear-1').css('transform', `translateY(${280 - scrolled * 0.48}px)`);
}