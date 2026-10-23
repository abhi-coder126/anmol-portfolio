/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    // Keep the template navigation pointing to the real portfolio pages.
    $('.header__nav__menu a').each(function () {
        var label = $.trim($(this).text()).toLowerCase();
        var pages = { about: 'about.html', portfolio: 'portfolio.html', services: 'services.html', contact: 'contact.html', home: 'index.html' };
        if (pages[label] && ($(this).attr('href') || '').charAt(0) !== '#') $(this).attr('href', pages[label]);
    });

    // Remove the template's old placeholder testimonial block from the About page.
    if (window.location.pathname.toLowerCase().indexOf('about.html') !== -1) {
        $('.testimonial').remove();
    }
    if (window.location.pathname.toLowerCase().indexOf('portfolio.html') !== -1) {
        $('.pagination__option').remove();
    }

    // Client testimonials for the portfolio homepage.
    if ($('.callto').length && !$('.client-testimonials').length) {
        var testimonials = [
            ['Nexthop Ecorner', 'Anmol understood our vision immediately and delivered edits that made our brand look sharper and more professional.'],
            ['Veer Estate Infra', 'The property videos captured the space beautifully. The pacing, music and visuals were exactly what we needed.'],
            ['NB Realtors', 'Anmol is creative, responsive and detail-focused. Our real estate content now gets much better attention online.'],
            ['Naughty Rituals', 'The final videos felt premium, modern and completely aligned with our brand personality.'],
            ['Peppyforyou', 'From the first brief to the final export, the process was smooth and the edits were full of energy.'],
            ['Tulip Finance', 'Complex financial ideas were turned into clear, engaging visuals. Anmol made every frame purposeful.'],
            ['Thrillerrr', 'The motion graphics and transitions gave our content the exact excitement and impact we were looking for.'],
            ['Priya', 'Anmol has a great eye for storytelling. The final edit felt polished, emotional and easy to connect with.'],
            ['Abhishek Singh', 'Professional work, quick communication and excellent attention to detail. Highly recommended.'],
            ['Ishan Srivastava', 'Anmol consistently brings fresh ideas to the table and turns raw footage into content people want to watch.']
        ];
        var clientInstagram = {
            'Nexthop Ecorner': 'https://www.instagram.com/nexthop_ecorner?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==',
            'Veer Estate Infra': 'https://www.instagram.com/veerestateinfra?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw==',
            'NB Realtors': 'https://www.instagram.com/nbre.altors?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==',
            'Naughty Rituals': 'https://www.instagram.com/naughtyrituals.in?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==',
            'Peppyforyou': 'https://www.instagram.com/peppyforall?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==',
            'Tulip Finance': 'https://www.instagram.com/tulipfinancialservicesltd?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==',
            'Thrillerrr': 'https://www.instagram.com/thrillerrr.in?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw=='
        };
        var cards = testimonials.map(function (item) {
            return '<article class="client-testimonial"><div class="testimonial__quote">“</div><p>' + item[1] + '</p><div class="testimonial__client"><span>' + item[0].charAt(0) + '</span><strong>' + item[0] + '</strong></div></article>';
        }).join('');
        Object.keys(clientInstagram).forEach(function (name) {
            var linkedName = '<a href="' + clientInstagram[name] + '" target="_blank" rel="noopener" aria-label="Visit ' + name + ' on Instagram">' + name + ' <i class="fa fa-instagram"></i></a>';
            cards = cards.replace('<strong>' + name + '</strong>', '<strong>' + linkedName + '</strong>');
        });
        $('<section class="client-testimonials"><div class="container"><div class="section-title center-title"><span>Client feedback</span><h2>Words from the people I work with</h2></div><div class="client-testimonials__grid owl-carousel">' + cards + '</div></div></section>').insertBefore('.callto');
        $('.client-testimonials__grid').owlCarousel({ loop: true, autoplay: true, autoplayTimeout: 3200, autoplayHoverPause: true, smartSpeed: 900, dots: true, nav: false, margin: 18, responsive: { 0: { items: 1 }, 768: { items: 2 }, 1100: { items: 3 } } });
    }

    // Load the user's real work videos and classify landscape/reel format automatically.
    var workVideos = [
        'agrwal properties 3rd shoot video .mp4', 'Gold Medal SCUKR .mp4',
        'insurance lena asan hai Shi aadvisor Milna Mushkil .mp4', 'Next hope health checkup camp .mov',
        'Orange Naoughty Rituals .mov', 'RED KHAWAISH.mov', 'short marketing film.mov',
        'Tredixo GS  EDIT .mp4', 'Tredixo Trading Guide .mov', 'Tulip FS Episode 1.mp4'
    ];
    if ($('.work__gallery').length && workVideos.length) {
        var gallery = $('.work__gallery');
        gallery.find('.grid-sizer').remove().addClass('work-scroller');
        workVideos.forEach(function (file, index) {
            var src = 'work/' + encodeURIComponent(file).replace(/%2F/g, '/');
            var forceLandscape = file === 'short marketing film.mov' || file === 'Next hope healthcheckup camp .mov' || file === 'Next hope health checkup camp .mov';
            var card = $('<button type="button" class="work__item video-work-item' + (forceLandscape ? ' is-landscape forced-landscape' : '') + '" aria-label="Open project video ' + (index + 1) + '"><video muted autoplay loop playsinline preload="metadata"><source src="' + src + '"></video><span class="work-card-ui"><small>Project ' + String(index + 1).padStart(2, '0') + '</small><i class="fa fa-expand"></i></span></button>');
            gallery.append(card);
            var video = card.find('video')[0];
            video.src = src;
            video.load();
            video.addEventListener('loadedmetadata', function () {
                var detectedLandscape = video.videoWidth >= video.videoHeight;
                card.toggleClass('is-landscape', forceLandscape || detectedLandscape).toggleClass('is-reel', !forceLandscape && video.videoHeight > video.videoWidth);
            });
            video.addEventListener('error', function () { card.addClass('video-load-error').find('.work-card-ui small').text('Video unavailable'); });
            var startMutedLoop = function () { video.muted = true; var started = video.play(); if (started) started.catch(function () {}); };
            card.on('mouseenter focus', startMutedLoop);
            startMutedLoop();
        });

        // Turn the work reel into a visible 3D rotating carousel.
        gallery.removeClass('work-scroller').addClass('work-scroller work-3d-carousel');
        var carouselCards = gallery.find('.video-work-item');
        var activeCarouselIndex = 0;
        var cardSrcs = [];
        carouselCards.each(function (i) { cardSrcs[i] = $(this).find('video')[0].src; });

        function renderWorkCarousel() {
            var total = carouselCards.length;
            var center = Math.floor(total / 2);
            var isMobile = window.innerWidth < 768;
            var spacing = isMobile ? Math.round(window.innerWidth * 0.52) : 240;
            var maxVisible = isMobile ? 1 : 2;
            carouselCards.each(function (cardIndex) {
                var offset = (cardIndex - activeCarouselIndex + total) % total;
                if (offset > center) offset -= total;
                var visible = Math.abs(offset) <= maxVisible;
                var scale = offset === 0 ? 1 : (Math.abs(offset) === 1 ? (isMobile ? .72 : .84) : .68);
                var x = offset * spacing;
                var tz = -Math.abs(offset) * (isMobile ? 60 : 120);
                var ry = offset * -20;
                var brightness = offset === 0 ? 1 : (Math.abs(offset) === 1 ? (isMobile ? 0.45 : 0.65) : 0.4);
                $(this).css({
                    transform: 'translateX(calc(-50% + ' + x + 'px)) translateZ(' + tz + 'px) rotateY(' + ry + 'deg) scale(' + scale + ')',
                    opacity: visible ? 1 : 0,
                    zIndex: 20 - Math.abs(offset),
                    pointerEvents: visible ? 'auto' : 'none',
                    filter: 'brightness(' + brightness + ')'
                }).toggleClass('is-active', offset === 0);
            });
        }
        $(window).on('resize', function () { renderWorkCarousel(); });

        // Click: side card → move to center; center card → open modal
        carouselCards.each(function (cardIndex) {
            $(this).on('click', function () {
                if ($(this).hasClass('is-active')) {
                    openWorkVideo(cardSrcs[cardIndex], cardIndex);
                } else {
                    activeCarouselIndex = cardIndex;
                    clearInterval(carouselTimer);
                    renderWorkCarousel();
                    carouselTimer = setInterval(function () { activeCarouselIndex = (activeCarouselIndex + 1) % carouselCards.length; renderWorkCarousel(); }, 4200);
                }
            });
        });

        renderWorkCarousel();
        var carouselTimer = setInterval(function () { activeCarouselIndex = (activeCarouselIndex + 1) % carouselCards.length; renderWorkCarousel(); }, 4200);

        // Desktop: wheel to navigate (horizontal scroll only, don't block vertical page scroll)
        gallery[0].addEventListener('wheel', function (e) {
            var absX = Math.abs(e.deltaX), absY = Math.abs(e.deltaY);
            if (absX < 8 && absY > absX) return; // vertical scroll — let page scroll
            e.preventDefault();
            clearInterval(carouselTimer);
            activeCarouselIndex = (activeCarouselIndex + (e.deltaX > 0 || e.deltaY > 0 ? 1 : -1) + carouselCards.length) % carouselCards.length;
            renderWorkCarousel();
            carouselTimer = setInterval(function () { activeCarouselIndex = (activeCarouselIndex + 1) % carouselCards.length; renderWorkCarousel(); }, 4200);
        }, { passive: false });

        // Mobile: touch swipe left/right to navigate
        var touchStartX = 0, touchStartY = 0, swipeLocked = false;
        gallery[0].addEventListener('touchstart', function (e) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            swipeLocked = false;
        }, { passive: true });
        gallery[0].addEventListener('touchmove', function (e) {
            var dx = e.touches[0].clientX - touchStartX;
            var dy = e.touches[0].clientY - touchStartY;
            if (!swipeLocked) {
                if (Math.abs(dy) > Math.abs(dx) + 6) { swipeLocked = true; return; } // vertical — let page scroll
                if (Math.abs(dx) > 12) { swipeLocked = true; e.preventDefault(); }
            } else if (Math.abs(dy) > Math.abs(dx)) { return; } else { e.preventDefault(); }
        }, { passive: false });
        gallery[0].addEventListener('touchend', function (e) {
            var dx = e.changedTouches[0].clientX - touchStartX;
            var dy = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
                clearInterval(carouselTimer);
                activeCarouselIndex = (activeCarouselIndex + (dx < 0 ? 1 : -1) + carouselCards.length) % carouselCards.length;
                renderWorkCarousel();
                carouselTimer = setInterval(function () { activeCarouselIndex = (activeCarouselIndex + 1) % carouselCards.length; renderWorkCarousel(); }, 4200);
            }
        }, { passive: true });

        gallery.on('mouseenter', function () { clearInterval(carouselTimer); }).on('mouseleave', function () { carouselTimer = setInterval(function () { activeCarouselIndex = (activeCarouselIndex + 1) % carouselCards.length; renderWorkCarousel(); }, 4200); });

        var modal = $('<div class="work-video-modal" aria-hidden="true"><div class="work-video-modal__backdrop"></div><div class="work-video-modal__panel" role="dialog" aria-modal="true" aria-label="Project video"><button type="button" class="work-video-modal__close" aria-label="Close video"><i class="fa fa-times"></i></button><video controls playsinline></video><div class="work-video-modal__meta"><span>Now playing</span><b>Project video</b><span class="modal-next-hint"></span></div><div class="modal-nav-btns"><button class="modal-prev-btn" aria-label="Previous"><i class="fa fa-chevron-left"></i></button><button class="modal-next-btn" aria-label="Next"><i class="fa fa-chevron-right"></i></button></div></div></div>');
        $('body').append(modal);
        var modalVideo = modal.find('video')[0];
        var currentModalIndex = 0;

        function openWorkVideo(src, index) {
            currentModalIndex = index;
            modalVideo.src = src;
            modalVideo.muted = false;
            modal.attr('aria-hidden', 'false').addClass('is-open');
            $('body').addClass('video-modal-open');
            modal.find('.work-video-modal__meta b').text('Project ' + String(index + 1).padStart(2, '0') + ' / ' + cardSrcs.length);
            var nextIdx = (index + 1) % cardSrcs.length;
            modal.find('.modal-next-hint').text('Next: Project ' + String(nextIdx + 1).padStart(2, '0'));
            // update carousel center
            activeCarouselIndex = index;
            renderWorkCarousel();
            var playing = modalVideo.play();
            if (playing) playing.catch(function () { modalVideo.muted = true; modalVideo.play(); });
            modal.find('.work-video-modal__close').trigger('focus');
        }

        // Auto-advance to next video when current ends
        modalVideo.addEventListener('ended', function () {
            var nextIdx = (currentModalIndex + 1) % cardSrcs.length;
            openWorkVideo(cardSrcs[nextIdx], nextIdx);
        });

        function closeWorkVideo() {
            modal.removeClass('is-open').attr('aria-hidden', 'true');
            modalVideo.pause();
            modalVideo.removeAttribute('src');
            modalVideo.load();
            $('body').removeClass('video-modal-open');
        }
        modal.on('click', '.work-video-modal__close, .work-video-modal__backdrop', closeWorkVideo);
        modal.on('click', '.modal-next-btn', function () {
            var nextIdx = (currentModalIndex + 1) % cardSrcs.length;
            openWorkVideo(cardSrcs[nextIdx], nextIdx);
        });
        modal.on('click', '.modal-prev-btn', function () {
            var prevIdx = (currentModalIndex - 1 + cardSrcs.length) % cardSrcs.length;
            openWorkVideo(cardSrcs[prevIdx], prevIdx);
        });
        $(document).on('keydown.workVideoModal', function (event) {
            if (!modal.hasClass('is-open')) return;
            if (event.key === 'Escape') closeWorkVideo();
            if (event.key === 'ArrowRight') { var n = (currentModalIndex + 1) % cardSrcs.length; openWorkVideo(cardSrcs[n], n); }
            if (event.key === 'ArrowLeft') { var p = (currentModalIndex - 1 + cardSrcs.length) % cardSrcs.length; openWorkVideo(cardSrcs[p], p); }
        });
    }

    // Reuse the same real videos inside the dedicated Portfolio page.
    if ($('.portfolio__item__video').length && workVideos.length) {
        $('.portfolio__item__video').each(function (index) {
            var file = workVideos[index % workVideos.length];
            var src = 'work/' + encodeURIComponent(file).replace(/%2F/g, '/');
            var box = $(this);
            box.css('background-image', 'none').removeAttr('data-setbg').addClass('portfolio-video-box');
            box.find('video').remove();
            box.prepend('<video muted loop playsinline preload="metadata"><source src="' + src + '"></video>');
            var video = box.find('video')[0];
            box.on('mouseenter', function () { video.muted = false; var started = video.play(); if (started) started.catch(function () { video.muted = true; }); });
            box.on('mouseleave', function () { video.pause(); video.currentTime = 0; });
        });
    }

    // Make the Portfolio page use the exact same video gallery UI as Home.
    if ($('.portfolio__gallery').length && workVideos.length) {
        var portfolioGallery = $('.portfolio__gallery');
        portfolioGallery.removeClass('row portfolio__gallery').addClass('work__gallery portfolio-work-gallery').empty().append('<div class="grid-sizer"></div>');
        workVideos.forEach(function (file, index) {
            var src = 'work/' + encodeURIComponent(file).replace(/%2F/g, '/');
            var forceLandscape = file === 'short marketing film.mov' || file === 'Next hope health checkup camp .mov';
            var card = $('<div class="work__item video-work-item' + (forceLandscape ? ' is-landscape forced-landscape' : '') + '"><video loop playsinline preload="metadata"><source src="' + src + '"></video></div>');
            portfolioGallery.append(card);
            var video = card.find('video')[0];
            video.addEventListener('loadedmetadata', function () {
                var landscape = video.videoWidth >= video.videoHeight;
                card.toggleClass('is-landscape', forceLandscape || landscape).toggleClass('is-reel', !forceLandscape && !landscape);
            });
            card.on('mouseenter', function () { video.muted = false; var started = video.play(); if (started) started.catch(function () { video.muted = true; }); }).on('mouseleave', function () { video.pause(); video.currentTime = 0; });
        });
        portfolioGallery.masonry({ itemSelector: '.work__item', columnWidth: '.grid-sizer', gutter: 10 });
        $('.portfolio__filter').remove();
    }

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        // The Fluxer intro is a first-visit experience: don't replay it on every refresh/navigation.
        var introSeen = sessionStorage.getItem('fluxerIntroSeen');
        if (introSeen) {
            $('#preloder').remove();
        } else {
            sessionStorage.setItem('fluxerIntroSeen', '1');
            $('#preloder').delay(1650).fadeOut(650, function () { $(this).remove(); });
        }
        $(".loader").fadeOut();

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary — skip if already converted to 3D carousel
    if ($('.work__gallery').length && !$('.work__gallery').hasClass('work-3d-carousel')) {
        $('.work__gallery').masonry({
            itemSelector: '.work__item',
            columnWidth: '.grid-sizer',
            gutter: 10
        });
    }

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true,
        label: ''
    });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);
