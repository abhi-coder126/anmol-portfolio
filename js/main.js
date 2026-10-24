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

    // Work videos hosted on Google Drive — thumbnail shown in gallery, Drive player opens on click.
    var workVideos = [
        { id: '1WC7bhobWfIYTPoB80jfwUnNTCw3RB58p', label: 'Agrwal Properties',              landscape: false },
        { id: '1zP90Kuj2PN8BrsbILd-QvzLG9v03onyX', label: 'Gold Medal SCUKR',               landscape: true  },
        { id: '1nRCRXAR7ScyO4_8zJa1xHvw3SzXXPjZh', label: 'Insurance — Shi Advisor',        landscape: true  },
        { id: '1c7gNZ2LAqvIGt9qdM0aj-VTHsz39y8rg', label: 'Next Hope Health Camp',          landscape: true  },
        { id: '1DhxBkhZSyDZFBXA-DXB0ZFqPqksiuS3P', label: 'Orange Naughty Rituals',         landscape: false },
        { id: '1sQzi5Irdspiumts0qY5_VOMaesv5aBcZ',  label: 'RED KHAWAISH',                   landscape: false },
        { id: '1ZucWHdyRDlUCHKO-ydIaSvz-HNj6fPWm', label: 'Short Marketing Film',           landscape: true  },
        { id: '1tsyWZgGSu5FwLj7oG9jOyJ2BYLvcFNBJ', label: 'Tredixo GS Edit',               landscape: true  },
        { id: '1CZxpqZwnrKT1sCPSbg3m4vV7-CD0pcF3', label: 'Tredixo Trading Guide',          landscape: true  },
        { id: '1LK0WDwBhLNY3rTYMoBRgEs14zJwzTiwh', label: 'Tulip FS Episode 1',             landscape: true  }
    ];

    function driveThumb(id) { return 'https://drive.google.com/thumbnail?id=' + id + '&sz=w800'; }
    function driveEmbed(id) { return 'https://drive.google.com/file/d/' + id + '/preview'; }

    if ($('.work__gallery').length && workVideos.length) {
        var gallery = $('.work__gallery');
        gallery.find('.grid-sizer').remove();
        workVideos.forEach(function (v, index) {
            var card = $('<button type="button" class="work__item video-work-item' + (v.landscape ? ' is-landscape' : ' is-reel') + '" aria-label="Open ' + v.label + '"><img src="' + driveThumb(v.id) + '" alt="' + v.label + '" loading="lazy"><span class="work-card-ui"><small>Project ' + String(index + 1).padStart(2, '0') + '</small><i class="fa fa-play"></i></span></button>');
            gallery.append(card);
        });

        gallery.removeClass('work-scroller').addClass('work-scroller work-3d-carousel');
        var carouselCards = gallery.find('.video-work-item');
        var activeCarouselIndex = 0;

        function renderWorkCarousel() {
            var total = carouselCards.length;
            var center = Math.floor(total / 2);
            var isMobile = window.innerWidth < 768;
            var spacing = isMobile ? Math.round(window.innerWidth * 0.52) : 240;
            var maxVisible = isMobile ? 1 : 2;
            // Use gallery's actual pixel center so cards always sit in the middle
            carouselCards.each(function (cardIndex) {
                var offset = (cardIndex - activeCarouselIndex + total) % total;
                if (offset > center) offset -= total;
                var visible = Math.abs(offset) <= maxVisible;
                var scale = offset === 0 ? 1 : (Math.abs(offset) === 1 ? (isMobile ? .72 : .84) : .68);
                var cardW = $(this).outerWidth() || (isMobile ? 245 : 340);
                // Anchor every card to the gallery's 50% point. This keeps the
                // active card centered even when the gallery has a max-width.
                var x = offset * spacing;
                var tz = -Math.abs(offset) * (isMobile ? 60 : 120);
                var ry = offset * -20;
                var brightness = offset === 0 ? 1 : (Math.abs(offset) === 1 ? (isMobile ? 0.45 : 0.65) : 0.4);
                $(this).css({
                    transform: 'translateX(' + x + 'px) translateZ(' + tz + 'px) rotateY(' + ry + 'deg) scale(' + scale + ')',
                    opacity: visible ? 1 : 0,
                    zIndex: 20 - Math.abs(offset),
                    pointerEvents: visible ? 'auto' : 'none',
                    filter: 'brightness(' + brightness + ')',
                    left: '50vw',
                    marginLeft: (-cardW / 2) + 'px'
                }).toggleClass('is-active', offset === 0);
            });
        }
        $(window).on('resize', renderWorkCarousel);

        var modal = $('<div class="work-video-modal" aria-hidden="true"><div class="work-video-modal__backdrop"></div><div class="work-video-modal__panel" role="dialog" aria-modal="true" aria-label="Project video"><button type="button" class="work-video-modal__close" aria-label="Close video"><i class="fa fa-times"></i></button><iframe allowfullscreen allow="autoplay"></iframe><div class="work-video-modal__meta"><span>Now playing</span><b>Project video</b><span class="modal-next-hint"></span></div><div class="modal-nav-btns"><button class="modal-prev-btn" aria-label="Previous"><i class="fa fa-chevron-left"></i></button><button class="modal-next-btn" aria-label="Next"><i class="fa fa-chevron-right"></i></button></div></div></div>');
        $('body').append(modal);
        var modalIframe = modal.find('iframe')[0];
        var currentModalIndex = 0;

        function openWorkVideo(index) {
            currentModalIndex = index;
            modalIframe.src = driveEmbed(workVideos[index].id);
            modal.attr('aria-hidden', 'false').addClass('is-open');
            $('body').addClass('video-modal-open');
            modal.find('.work-video-modal__meta b').text(workVideos[index].label + ' — ' + String(index + 1).padStart(2, '0') + ' / ' + workVideos.length);
            var nextIdx = (index + 1) % workVideos.length;
            modal.find('.modal-next-hint').text('Next: ' + workVideos[nextIdx].label);
            activeCarouselIndex = index;
            renderWorkCarousel();
            modal.find('.work-video-modal__close').trigger('focus');
        }

        function closeWorkVideo() {
            modal.removeClass('is-open').attr('aria-hidden', 'true');
            modalIframe.src = '';
            $('body').removeClass('video-modal-open');
        }

        carouselCards.each(function (cardIndex) {
            $(this).on('click', function () {
                if ($(this).hasClass('is-active')) {
                    openWorkVideo(cardIndex);
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

        gallery[0].addEventListener('wheel', function (e) {
            var absX = Math.abs(e.deltaX), absY = Math.abs(e.deltaY);
            if (absX < 8 && absY > absX) return;
            e.preventDefault();
            clearInterval(carouselTimer);
            activeCarouselIndex = (activeCarouselIndex + (e.deltaX > 0 || e.deltaY > 0 ? 1 : -1) + carouselCards.length) % carouselCards.length;
            renderWorkCarousel();
            carouselTimer = setInterval(function () { activeCarouselIndex = (activeCarouselIndex + 1) % carouselCards.length; renderWorkCarousel(); }, 4200);
        }, { passive: false });

        var touchStartX = 0, touchStartY = 0, swipeLocked = false;
        gallery[0].addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY; swipeLocked = false; }, { passive: true });
        gallery[0].addEventListener('touchmove', function (e) {
            var dx = e.touches[0].clientX - touchStartX, dy = e.touches[0].clientY - touchStartY;
            if (!swipeLocked) {
                if (Math.abs(dy) > Math.abs(dx) + 6) { swipeLocked = true; return; }
                if (Math.abs(dx) > 12) { swipeLocked = true; e.preventDefault(); }
            } else if (Math.abs(dy) > Math.abs(dx)) { return; } else { e.preventDefault(); }
        }, { passive: false });
        gallery[0].addEventListener('touchend', function (e) {
            var dx = e.changedTouches[0].clientX - touchStartX, dy = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
                clearInterval(carouselTimer);
                activeCarouselIndex = (activeCarouselIndex + (dx < 0 ? 1 : -1) + carouselCards.length) % carouselCards.length;
                renderWorkCarousel();
                carouselTimer = setInterval(function () { activeCarouselIndex = (activeCarouselIndex + 1) % carouselCards.length; renderWorkCarousel(); }, 4200);
            }
        }, { passive: true });

        gallery.on('mouseenter', function () { clearInterval(carouselTimer); }).on('mouseleave', function () { carouselTimer = setInterval(function () { activeCarouselIndex = (activeCarouselIndex + 1) % carouselCards.length; renderWorkCarousel(); }, 4200); });

        modal.on('click', '.work-video-modal__close, .work-video-modal__backdrop', closeWorkVideo);
        modal.on('click', '.modal-next-btn', function () { openWorkVideo((currentModalIndex + 1) % workVideos.length); });
        modal.on('click', '.modal-prev-btn', function () { openWorkVideo((currentModalIndex - 1 + workVideos.length) % workVideos.length); });
        $(document).on('keydown.workVideoModal', function (e) {
            if (!modal.hasClass('is-open')) return;
            if (e.key === 'Escape') closeWorkVideo();
            if (e.key === 'ArrowRight') openWorkVideo((currentModalIndex + 1) % workVideos.length);
            if (e.key === 'ArrowLeft') openWorkVideo((currentModalIndex - 1 + workVideos.length) % workVideos.length);
        });
    }

    // Portfolio page — Drive thumbnails with click-to-embed.
    if ($('.portfolio__item__video').length && workVideos.length) {
        $('.portfolio__item__video').each(function (index) {
            var v = workVideos[index % workVideos.length];
            var box = $(this);
            box.css('background-image', 'url(' + driveThumb(v.id) + ')').addClass('portfolio-video-box');
            box.on('click', function () { window.open('https://drive.google.com/file/d/' + v.id + '/view', '_blank'); });
        });
    }

    if ($('.portfolio__gallery').length && workVideos.length) {
        var portfolioGallery = $('.portfolio__gallery');
        portfolioGallery.removeClass('row portfolio__gallery').addClass('work__gallery portfolio-work-gallery').empty().append('<div class="grid-sizer"></div>');
        workVideos.forEach(function (v, index) {
            var card = $('<div class="work__item video-work-item' + (v.landscape ? ' is-landscape' : ' is-reel') + '"><img src="' + driveThumb(v.id) + '" alt="' + v.label + '" loading="lazy"><span class="work-card-ui"><small>' + v.label + '</small><i class="fa fa-play"></i></span></div>');
            portfolioGallery.append(card);
            card.on('click', function () { window.open('https://drive.google.com/file/d/' + v.id + '/view', '_blank'); });
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
