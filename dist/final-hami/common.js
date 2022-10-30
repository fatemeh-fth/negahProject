!function(v){"use strict";v(window).on("load",function(){!function(){var t=v("#map");if(0<t.length){var e,i=t.attr("data-api-key");e=i?"https://maps.google.com/maps/api/js?key="+i+" &sensor=false":"https://maps.google.com/maps/api/js?sensor=false",v.getScript(e,function(e,i,s){t.each(function(){var e=v(this),i=(new google.maps.LatLng(e.attr("data-longitude"),e.attr("data-latitude")),e.attr("data-marker")),s={zoom:10,center:{lat:40.73061,lng:-73.935242},disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,scrollwheel:!1,draggable:!0,panControl:!1,zoomControl:!1,disableDefaultUI:!0,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#212326"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#464646"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#F8F8F9"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"water",elementType:"all",stylers:[{color:"#E2E3E7"},{visibility:"on"}]}]},t=new google.maps.Map(e[0],s);new google.maps.Marker({map:t,icon:{size:new google.maps.Size(59,69),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,69),url:i},position:{lat:40.73061,lng:-73.935242}});google.maps.event.addDomListener(window,"resize",function(){var e=t.getCenter();google.maps.event.trigger(t,"resize"),t.setCenter(e)})})})}}()}),jQuery(document).ready(function(){var e,i,s,t,o,r,n,l,a,d,p,c,_;objectFitImages(),v(window).scroll(function(){var e=v("header.header");1<=v(window).scrollTop()?e.addClass("header--fixed"):e.removeClass("header--fixed")}),v(window).scroll(function(){var e=v("header.header--front_3");40<=v(window).scrollTop()?e.addClass("header--sticky"):e.removeClass("header--sticky")}),function(){var i=v(".aside-dropdown");if(i.length){var e=v(".dropdown-trigger"),s=v(".aside-dropdown__close"),t=v(".aside-dropdown .main-menu__link--scroll");e.on("click",function(){i.addClass("aside-dropdown--active")}),s.on("click",function(){i.removeClass("aside-dropdown--active")}),t.on("click",function(){i.removeClass("aside-dropdown--active")}),v(document).on("click",function(e){v(e.target).closest(".dropdown-trigger, .aside-dropdown__inner").length||(i.removeClass("aside-dropdown--active"),e.stopPropagation())})}}(),(e=v(".video-trigger")).length&&e.fancybox(),v(".alert__close").on("click",function(){v(this).parent(".alert").fadeOut(300)}),v(".accordion").length&&v(".accordion .accordion__close").on("click",function(){v(this).toggleClass("accordion__close--active").parents().children(".accordion__text-block").stop().slideToggle(300)}),i=v(".jarallax"),jarallax.length&&i.jarallax({speed:.3}),(s=v(".tabs")).length&&s.responsiveTabs({startCollapsed:"false"}),(t=v(".js-counter")).length&&t.counterUp({delay:10,time:1500}),(o=v(".projects-masonry")).length&&o.isotope({itemSelector:".projects-masonry__item",percentPosition:!0}),function(){var i=v(".gallery-masonry");if(i.length){i.isotope({itemSelector:".gallery-masonry__item",percentPosition:!0});var e=v(".filter-panel__item");e.on("click",function(){var e=v(this).attr("data-filter");i.isotope({filter:e})}),e.on("click",function(){e.removeClass("filter-panel__item--active"),v(this).addClass("filter-panel__item--active")})}}(),function(){var e=v(".range-slider .range-slider__bar");if(e.length){var i=v(".range-slider__min"),s=v(".range-slider__max");e.ionRangeSlider({type:"double",min:0,max:1200,from:50,to:900,skin:"round",step:10,onChange:function(e){i.val(e.from),s.val(e.to)}})}}(),function(){if(v(".cart-item__count").length){var e=v(".cart-item__minus"),i=v(".cart-item__plus");e.on("click",function(){var e=v(this).parent().find("input"),i=parseInt(e.val())-1;return i=i<1?1:i,e.val(i),e.change(),!1}),i.on("click",function(){var e=v(this).parent().find("input");return e.val(parseInt(e.val())+1),e.change(),!1})}}(),function(){if(v(".form__count").length){var e=v(".form__minus"),i=v(".form__plus");e.on("click",function(){var e=v(this).parent().find("input"),i=parseInt(e.val())-1;return i=i<1?1:i,e.val(i),e.change(),!1}),i.on("click",function(){var e=v(this).parent().find("input");return e.val(parseInt(e.val())+1),e.change(),!1})}}(),(r=v(".form__select")).length&&r.niceSelect({}),(n=v(".shop__aside-trigger")).length&&(n.on("click",function(){v("body").find(".aside-holder").toggleClass("aside-holder--visible"),v("body").find(".shop__backdrop").toggleClass("shop__backdrop--visible")}),v(".shop__aside-close").on("click",function(){v("body").find(".aside-holder").removeClass("aside-holder--visible"),v("body").find(".shop__backdrop").removeClass("shop__backdrop--visible")}),v(".shop__backdrop").on("click",function(){v(this).removeClass("shop__backdrop--visible"),v("body").find(".aside-holder").removeClass("aside-holder--visible")})),v(".aside-menu__item--has-child a").on("click",function(){v(this).parent().children(".aside-menu__sub-list").stop().slideToggle(300)}),(l=v('a.anchor[href^="#"]')).length&&l.on("click",function(e){var i=v(this);v("html, body").stop().animate({scrollTop:v(i.attr("href")).offset().top},600),e.preventDefault()}),(a=v("a.main-menu__link--scroll")).length&&a.mPageScroll2id({highlightClass:"main-menu__link--highlighted"}),function(){var e=v(".promo-slider");if(e.length){var r=v(".promo-slider__count"),i=v(".slider__nav--promo .slider__prev"),s=v(".slider__nav--promo .slider__next");e.on("init afterChange",function(e,i,s,t){var o=(s||0)+1;r.text(o+"/"+i.slideCount)}),e.slick({fade:!0,adaptiveHeight:!0,infinite:!0,speed:1200,prevArrow:i,nextArrow:s})}}(),(d=v(".main-slider")).length&&(d.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,asNavFor:".nav-slider",fade:!0}),v(".nav-slider").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".main-slider",focusOnSelect:!0,arrows:!1})),function(){var e=v(".projects-slider");if(e.length){var i=v(".projects-slider__nav .slider__prev"),s=v(".projects-slider__nav .slider__next");e.slick({slidesToShow:3,prevArrow:i,nextArrow:s,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})}}(),function(){var e=v(".related-slider");if(e.length){var i=v(".related-slider__nav .slider__prev"),s=v(".related-slider__nav .slider__next");e.slick({slidesToShow:4,slidesToScroll:1,prevArrow:i,nextArrow:s,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]})}}(),function(){var e=v(".instagram-slider");if(e.length){var i=v(".instagram-slider__nav .slider__prev"),s=v(".instagram-slider__nav .slider__next");e.slick({prevArrow:i,nextArrow:s,slidesToShow:6,responsive:[{breakpoint:1600,settings:{slidesToShow:5}},{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}}]})}}(),p=v(".donors-slider"),c=v(".donors-slider--style-1"),_=v(".donors-slider--style-2"),p.length&&(c.slick({arrows:!1,dots:!0,slidesToShow:4,adaptiveHeight:!0,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),_.slick({rows:2,slidesPerRow:4,arrows:!1,dots:!0,adaptiveHeight:!0,responsive:[{breakpoint:992,settings:{rows:2,slidesPerRow:3}},{breakpoint:768,settings:{rows:2,slidesPerRow:2}},{breakpoint:765,settings:{rows:2,slidesPerRow:1}}]})),function(){var e=v(".causes-slider");if(e.length){var i=v(".causes-slider__nav .slider__prev"),s=v(".causes-slider__nav .slider__next");e.slick({slidesToShow:3,prevArrow:i,nextArrow:s,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})}}(),function(){var e=v(".testimonials-slider--style-1");if(e.length){var i=v(".testimonials-style-1__nav .slider__prev"),s=v(".testimonials-style-1__nav .slider__next");e.slick({prevArrow:i,nextArrow:s,adaptiveHeight:!0})}}(),function(){var e=v(".testimonials-slider--style-2");if(e.length){var i=v(".testimonials-style-2__nav .slider__prev"),s=v(".testimonials-style-2__nav .slider__next");e.slick({prevArrow:i,nextArrow:s,adaptiveHeight:!0})}}(),function(){var e=v(".testimonials-slider--style-3");if(e.length){var i=v(".testimonials-style-3__nav .slider__prev"),s=v(".testimonials-style-3__nav .slider__next");e.slick({prevArrow:i,nextArrow:s,adaptiveHeight:!0,slidesToShow:3,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]})}}(),function(){var e=v(".items-slider");if(e.length){var i=v(".items-slider__nav .slider__prev"),s=v(".items-slider__nav .slider__next");e.slick({prevArrow:i,nextArrow:s,fade:!0})}}(),function(){var e=v(".pages-slider");if(e.length){var i=v(".pages-slider__nav .slider__prev"),s=v(".pages-slider__nav .slider__next");e.slick({slidesToShow:3,prevArrow:i,nextArrow:s,adaptiveHeight:!0,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})}}()})}(jQuery);