/*
	Alpha by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

    skel.init({
        reset: 'full',
        breakpoints: {
            global: { range: '*', href: '/css/style/style', containers: '60em', grid: { gutters: ['2em', 0] } },
            wide: { range: '-1680', href: '/css/style/style-wide' },
            normal: { range: '-1280', href: '/css/style/style-normal', viewport: { scalable: false } },
            narrow: { range: '-980', href: '/css/style/style-narrow', containers: '90%' },
            narrower: { range: '-840', href: '/css/style/style-narrower', containers: '90%!' },
            mobile: { range: '-736', href: '/css/style/style-mobile', containers: '100%!' },
            mobilep: { range: '-480', href: '/css/style/style-mobilep' }
        },
        plugins: {
            layers: {

                // Config.
                config: {
                    mode: function () { return (skel.vars.isMobile ? 'transform' : 'position'); }
                },

                // Navigation Panel.
                navPanel: {
                    animation: 'pushX',
                    breakpoints: 'narrower',
                    clickToHide: true,
                    height: '100%',
                    hidden: true,
                    html: '<div data-action="navList" data-args="nav"></div>',
                    orientation: 'vertical',
                    position: 'top-left',
                    side: 'left',
                    width: 250,
                    speed: 50
                },

                // Navigation Button.
                navButton: {
                    breakpoints: 'narrower',
                    height: '4em',
                    html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
                    position: 'top-left',
                    side: 'top',
                    width: '6em'
                }

            }
        }
    });


    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $banner = $('#banner');

    // Forms (IE<10).
    var $form = $('form');
    if ($form.length > 0) {

        $form.find('.form-button-submit')
            .on('click', function () {
                $(this).parents('form').submit();
                return false;
            });

        if (skel.vars.IEVersion < 10) {
            $.fn.n33_formerize = function () { var _fakes = new Array(), _form = $(this); _form.find('input[type=text],textarea').each(function () { var e = $(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function () { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function () { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function () { var e = $(this); var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function (event) { event.preventDefault(); var e = $(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function (event) { event.preventDefault(); var x = $(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function (event) { event.preventDefault(); x.val(''); }); }); _form.submit(function () { $(this).find('input[type=text],input[type=password],textarea').each(function (event) { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function (event) { event.preventDefault(); $(this).find('select').val($('option:first').val()); $(this).find('input,textarea').each(function () { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function () { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
            $form.n33_formerize();
        }

    }

    // Dropdowns.
    $('#nav > ul').dropotron({
        alignment: 'right'
    });

    // Header.
    // If the header is using "alt" styling and #banner is present, use scrollwatch
    // to revert it back to normal styling once the user scrolls past the banner.
    // Note: This is disabled on mobile devices.
    if (!skel.vars.isMobile
    && $header.hasClass('alt')
    && $banner.length > 0) {

        $window.on('load', function () {

            //$banner.scrollwatch({
            //	delay:		0,
            //	range:		0,
            //	anchor:		'top',
            //	on:			function() { $header.addClass('alt'); },
            //	off:		function() { $header.removeClass('alt'); }
            //});

        });

    }



    $('.responsive').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

    });

    $('.responsive').slick({
        //dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

})(jQuery);