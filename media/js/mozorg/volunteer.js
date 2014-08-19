/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

;(function($) {
    'use strict';

    $('#inquiry-form :checkbox:checked').parents('label').addClass('selected');

    $('#inquiry-form :checkbox').on('change', function() {
        if ($(this).is(':checked')) {
            $(this).parents('label').addClass('selected');
        } else {
            $(this).parents('label').removeClass('selected');
        }
    });

    // Disable placeholder links
    $('a[href="#"]').on('click', function(e) {
        return false;
    });


    $('a.video-play').attr('role', 'button').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        Mozilla.Modal.createModal(this, $this.next(), {
          title: $this.attr('data-title'),
          onCreate: function() {
            play_video();
          }
        });
    });

    var play_video = function() {
        // give the modal a chance to open before playing
        setTimeout(function() {
            $('#modal video:first')[0].play();
        }, 400);
    };

    $('.more-toggle a').on('click', function() {
       $('.story-more').slideToggle('fast', function() {
            if ($('.story-more').is(':visible')) {
                $('.more-toggle a').addClass('open').text('Less');
            } else {
                $('.more-toggle a').removeClass('open').text('More');
            }
       });
    });

})(window.jQuery);
