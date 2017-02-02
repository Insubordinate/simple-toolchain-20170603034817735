// JavaScript Document
(function($) {
	"use strict";
	/*	Animate.css Trigger */	
	$('.jw-animate').each(function() {
        var $curr = $(this);
        var $currOffset = $curr.attr('data-gen-offset');
        if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
            $currOffset = 'bottom-in-view';
        }
        if ($currOffset === 'none') {
            $curr.trigger('jw-animate');
        } else {
            $curr.waypoint(function() {
                $curr.trigger('jw-animate');
            }, {triggerOnce: true, offset: $currOffset});
        }
    });  
	   // ewebcraft Animate General - Bind
    $('.jw-animate-gen').each(function() {
        var $curr = $(this);
        $curr.bind('jw-animate', function() {
            $curr.css('opacity', '');
            $curr.addClass('animated ' + $curr.data('gen'));
        });
    });
    // ewebcraft Animate General
    $('.jw-animate-gen').each(function() {
        var $curr = $(this);
        var $currOffset = $curr.attr('data-gen-offset');
        if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
            $currOffset = 'bottom-in-view';
        }
        $curr.waypoint(function() {
            $curr.trigger('jw-animate');
        }, {triggerOnce: true, offset: $currOffset});
		
		
    });
	
	/* Affix Handler */
	$('#header').affix({
		offset: {
		top:0,
		bottom: function () {
				return (this.bottom = $('#footer').outerHeight(true))
			}
		}
	})
	
	
	/* Main Menu Handler */	
	var $dropdown = $(".dropdown");

		$dropdown.each(function () {
			var $this = $(this);

			var $dropmenu = $this.find(".dropdown-menu");
			$dropmenu.css("height", $dropmenu.outerHeight());
			$this.addClass("drop-collapsed");
		});
							  
													 
		 // dropdown menu hover intent
		var hovsettings = {
				timeout:0,
			interval: 0,
			over: showMenu,
			out: hideMenu
		};
																										  
	$(".dropdown").hoverIntent(hovsettings);
	
	/** Animated Self Page Link Handler*/
	$("a[href^='#']").click(function(){
	   var target=$(this).attr("href");
	   var tar=target.split("#");
	   var targetSection=tar[1];
	   if (!targetSection || targetSection == '') {
			return;
		}else
		{
			targetSection = '#' + targetSection;
			if($(targetSection).length > 0)
			{
				var targetOffset = Math.floor($(targetSection).offset().top );
				var targetOffset1 = targetOffset - 65;
				//scroll			 
				$('html,body').animate({scrollTop: targetOffset1}, 1200, function() {
					
					$(window).scroll();
					
				});
			}
			return false;
		}
	})
  	
	
	
	/* Window Loaded Handler*/
	$(window).load(function(){
		$('body').addClass('loaded');
		$('#loader-wrapper .load_title').remove();
		$('.progressBar').waypoint(function() {
           progressBar($(this).attr("data-animate-offset"), $('#progressBar'));
        }, {triggerOnce: true, offset: 'bottom-in-view'});
	});		
   })(jQuery);