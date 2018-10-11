$(function(){
   $('[modal]').click(function(){
        var t = $(this),
            i = t.attr('id'),
            b = $('.wrap-modal'),
            h = t.hasClass('close');

        if(h){
            var id = t.attr('modal'),
                obj = $('#'+id);
                b.fadeOut();
                obj.fadeOut();
        }else{
            var id = t.attr('modal'),
                        obj = $('#'+id);
                        b.fadeIn().css({'display':'flex'});
                        obj.fadeIn();

        }
    })


    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
    $('.mob-touch').click(function(){
	  	if ($('ul.nav-menu').css('display') == 'none'){
	    	$('ul.nav-menu').slideDown('slow');
	  	}else{
	    $('ul.nav-menu').slideUp('slow');
  }
})
})
