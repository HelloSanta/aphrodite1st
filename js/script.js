/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
	
	// Place your code here.
    
	function rotation(){
		rtTimer = setTimeout(slideRotate, 3000);
		// 當滑鼠移入時停止計時器；反之則啟動
		$('.text-button').mouseover(function () {
			clearTimeout(rtTimer);
		});
		$('.text-button').mouseout(function () {
			rtTimer = setTimeout(slideRotate, 3000);
		});

	}
	
	function slideRotate(){

		var total=$('.aphro-slideshow .view-content .views-row').size();
		var curr=$('.aphro-slideshow .view-content .views-row').filter(function() {
                  return $(this).css('display') == 'block';
               });
		indexOfPosition=curr.parent().children().index(curr);
		
		if ((indexOfPosition + 1 - total) != 0) {
			curr.hide();
			curr.next().show();
			//對應的字體要變色
		}
		else {
			curr.hide();
			$('.aphro-slideshow .view-content .views-row-1').show();
		}
		rtTimer = setTimeout(slideRotate, 3000);
	}
	
	window.onload=function(){
		rotation();
		
		
		//main-slideshow change
		$('div.views-row-1.text-button').hover(
			function () {
				$(this).css('color','#fee6e4');
				$('div.views-row-2.text-button').css('color','#fff');
				$('div.views-row-3.text-button').css('color','#fff');
				$('div.views-row-4.text-button').css('color','#fff');
				$('div.views-row-5.text-button').css('color','#fff');
				$('div.aphro-slideshow div.views-row-1').css('display','block');
				$('div.aphro-slideshow div.views-row-2').css('display','none');
				$('div.aphro-slideshow div.views-row-3').css('display','none');
				$('div.aphro-slideshow div.views-row-4').css('display','none');
				$('div.aphro-slideshow div.views-row-5').css('display','none');
			},
			function () {	
			}
		);
		$('div.views-row-2.text-button').hover(
			function () {
				$(this).css('color','#fee6e4');
				$('div.views-row-1.text-button').css('color','#fff');
				$('div.views-row-3.text-button').css('color','#fff');
				$('div.views-row-4.text-button').css('color','#fff');
				$('div.views-row-5.text-button').css('color','#fff');
				$('div.aphro-slideshow div.views-row-1').css('display','none');
				$('div.aphro-slideshow div.views-row-2').css('display','block');
				$('div.aphro-slideshow div.views-row-3').css('display','none');
				$('div.aphro-slideshow div.views-row-4').css('display','none');
				$('div.aphro-slideshow div.views-row-5').css('display','none');
			},
			function () {	
			}
		);
		$('div.views-row-3.text-button').hover(
			function () {
				$(this).css('color','#fee6e4');
				$('div.views-row-2.text-button').css('color','#fff');
				$('div.views-row-1.text-button').css('color','#fff');
				$('div.views-row-4.text-button').css('color','#fff');
				$('div.views-row-5.text-button').css('color','#fff');
				$('div.aphro-slideshow div.views-row-1').css('display','none');
				$('div.aphro-slideshow div.views-row-2').css('display','none');
				$('div.aphro-slideshow div.views-row-3').css('display','block');
				$('div.aphro-slideshow div.views-row-4').css('display','none');
				$('div.aphro-slideshow div.views-row-5').css('display','none');
			},
			function () {	
			}
		);
		$('div.views-row-4.text-button').hover(
			function () {
				$(this).css('color','#fee6e4');
				$('div.views-row-2.text-button').css('color','#fff');
				$('div.views-row-3.text-button').css('color','#fff');
				$('div.views-row-1.text-button').css('color','#fff');
				$('div.views-row-5.text-button').css('color','#fff');
				$('div.aphro-slideshow div.views-row-1').css('display','none');
				$('div.aphro-slideshow div.views-row-2').css('display','none');
				$('div.aphro-slideshow div.views-row-3').css('display','none');
				$('div.aphro-slideshow div.views-row-4').css('display','block');
				$('div.aphro-slideshow div.views-row-5').css('display','none');
			},
			function () {	
			}
		);
		$('div.views-row-5.text-button').hover(
			function () {
				$(this).css('color','#fee6e4');
				$('div.views-row-2.text-button').css('color','#fff');
				$('div.views-row-3.text-button').css('color','#fff');
				$('div.views-row-4.text-button').css('color','#fff');
				$('div.views-row-1.text-button').css('color','#fff');
				$('div.aphro-slideshow div.views-row-1').css('display','none');
				$('div.aphro-slideshow div.views-row-2').css('display','none');
				$('div.aphro-slideshow div.views-row-3').css('display','none');
				$('div.aphro-slideshow div.views-row-4').css('display','none');
				$('div.aphro-slideshow div.views-row-5').css('display','block');
			},
			function () {	
			}
		);
		
		
		
		//媒體報導區塊
		$('#newspaper div.media-block div.view-content div.media-list ul li.views-row-1').hover(
			function () {
				$('div.media-block div.view-header div.view-display-id-block_1 div.views-row-1').css('display','block');
				$('div.media-block div.view-header div.view-display-id-block_1 div.views-row-2').css('display','none');
				$('div.media-block div.view-header div.view-display-id-block_1 div.views-row-3').css('display','none');
			},
			function () {	
			}
		);
		$('#newspaper div.media-block div.view-content div.media-list ul li.views-row-2').hover(
			function () {
				$('div.media-block div.view-header div.view-display-id-block_1 div.views-row-1').css('display','none');
				$('div.media-block div.view-header div.view-display-id-block_1 div.views-row-2').css('display','block');
				$('div.media-block div.view-header div.view-display-id-block_1 div.views-row-3').css('display','none');
			},
			function () {	
			}
		);
		$('#newspaper div.media-block div.view-content div.media-list ul li.views-row-3').hover(
			function () {
				$('div.media-block div.view-header div.view-display-id-block_1 div.views-row-1').css('display','none');
				$('div.media-block div.view-header div.view-display-id-block_1 div.views-row-2').css('display','none');
				$('div.media-block div.view-header div.view-display-id-block_1 div.views-row-3').css('display','block');
			},
			function () {	
			}
		);
		
		//影音報導區塊
		$('#media-report div.video-block div.view-content div.video-list ul li.views-row-1').hover(
			function () {
				$('div.video-block div.view-header div.view-display-id-block_1 div.views-row-1').css('display','block');
				$('div.video-block div.view-header div.view-display-id-block_1 div.views-row-2').css('display','none');
				$('div.video-block div.view-header div.view-display-id-block_1 div.views-row-3').css('display','none');
			},
			function () {	
			}
		);
		$('#media-report div.video-block div.view-content div.video-list ul li.views-row-2').hover(
			function () {
				$('div.video-block div.view-header div.view-display-id-block_1 div.views-row-1').css('display','none');
				$('div.video-block div.view-header div.view-display-id-block_1 div.views-row-2').css('display','block');
				$('div.video-block div.view-header div.view-display-id-block_1 div.views-row-3').css('display','none');
			},
			function () {	
			}
		);
		$('#media-report div.video-block div.view-content div.video-list ul li.views-row-3').hover(
			function () {
				$('div.video-block div.view-header div.view-display-id-block_1 div.views-row-1').css('display','none');
				$('div.video-block div.view-header div.view-display-id-block_1 div.views-row-2').css('display','none');
				$('div.video-block div.view-header div.view-display-id-block_1 div.views-row-3').css('display','block');
			},
			function () {	
			}
		);
		
		//雅丰專欄區塊
		$('#aphro-column div.view-aphrodite-board div.view-content div.column-list ul li.views-row-1').hover(
			function () {
				$('#aphro-column div.view-aphrodite-board div.view-header div.views-row-1').css('display','block');
				$('#aphro-column div.view-aphrodite-board div.view-header div.views-row-2').css('display','none');
				$('#aphro-column div.view-aphrodite-board div.view-header div.views-row-3').css('display','none');
			},
			function () {	
			}
		);
		$('#aphro-column div.view-aphrodite-board div.view-content div.column-list ul li.views-row-2').hover(
			function () {
				$('#aphro-column div.view-aphrodite-board div.view-header div.views-row-1').css('display','none');
				$('#aphro-column div.view-aphrodite-board div.view-header div.views-row-2').css('display','block');
				$('#aphro-column div.view-aphrodite-board div.view-header div.views-row-3').css('display','none');			
			},
			function () {	
			}
		);
		$('#aphro-column div.view-aphrodite-board div.view-content div.column-list ul li.views-row-3').hover(
			function () {
				$('#aphro-column div.view-aphrodite-board div.view-header div.views-row-1').css('display','none');
				$('#aphro-column div.view-aphrodite-board div.view-header div.views-row-2').css('display','none');
				$('#aphro-column div.view-aphrodite-board div.view-header div.views-row-3').css('display','block');
			},
			function () {	
			}
		);
		$('#aphro-column2 div.view-aphrodite-board div.view-content div.column-list ul li.views-row-1').hover(
			function () {
				$('#aphro-column2 div.view-aphrodite-board div.view-header div.views-row-1').css('display','block');
				$('#aphro-column2 div.view-aphrodite-board div.view-header div.views-row-2').css('display','none');
				$('#aphro-column2 div.view-aphrodite-board div.view-header div.views-row-3').css('display','none');
			},
			function () {	
			}
		);
		$('#aphro-column2 div.view-aphrodite-board div.view-content div.column-list ul li.views-row-2').hover(
			function () {
				$('#aphro-column2 div.view-aphrodite-board div.view-header div.views-row-1').css('display','none');
				$('#aphro-column2 div.view-aphrodite-board div.view-header div.views-row-2').css('display','block');
				$('#aphro-column2 div.view-aphrodite-board div.view-header div.views-row-3').css('display','none');			
			},
			function () {	
			}
		);
		$('#aphro-column2 div.view-aphrodite-board div.view-content div.column-list ul li.views-row-3').hover(
			function () {
				$('#aphro-column2 div.view-aphrodite-board div.view-header div.views-row-1').css('display','none');
				$('#aphro-column2 div.view-aphrodite-board div.view-header div.views-row-2').css('display','none');
				$('#aphro-column2 div.view-aphrodite-board div.view-header div.views-row-3').css('display','block');
			},
			function () {	
			}
		);

		
		//mobile navigation
		$("#mobile-nav").css("height",0);
		$("#mobile-navigation").live("click", function(){
	
			var main=$("#main").css("position");
	
			if(main=="static")
			{
				$("#header").css({
					'position':'fixed',
					'top':'0px',
					'left':'0%',
					'width':"100%",
				});
				$("#main").css({
					'position':'fixed',
					'top':'100px',
					'left':'0%',
					'width':"100%",
				});
				$("#footer").css({
					'position':'fixed',
					'top':'1000px',
					'left':'280px',
					'width':"100%",
				});
				$("#mobile-nav").css("height",'auto');
				$("#mobile-nav").css("opacity",1);
				$("#main").animate({
				   'left':"250px"  
				}, { duration: 180, queue: false });
				$("#header").animate({
				   'left':"250px"  
				}, { duration: 180, queue: false });	
			}
			else
			{
				$("#main").animate({
				   'left':"0%"  
				}, { duration: 180, queue: false });
				$("#header").animate({
				   'left':"0%"  
				}, { duration: 180, queue: false });
				$("#header").css({
					'position':'static',
				});
				$("#main").css({
					'position':'static',
				});
				$("#footer").css({
					'position':'static',
					'left':'0%',
				});
				$("#mobile-nav").css("height",0);
				$("#mobile-nav").css("opacity",0);
			}		
		});
	}



})(jQuery, Drupal, this, this.document);
