/*!
  CloudEngine | ©The Open University | License: GPL-2.0.
*/

// Show hide

window.jQuery(function ($) {
   'use strict';

   var console = window.console;

   // do stuff when DOM is ready
   // use this to reset a single form

   $("div.collapsed").addClass("hidden");
   $("span.more").addClass("show");

   $(".show").click(function() {
     $("div.collapsed").slideToggle('fast');
     $('span.more').toggle();
     return false;
   });

   //visibility of usernames and email addresses for admins on user list page
   $("table#userlist .user-info").parents('tr').hover(
      function() {
        $(this).find('.user-info').css({'visibility' : 'visible'});
      },
      function() {
        $(this).find('.user-info').css({'visibility' : 'hidden'});
      }
    );

   //visibility of usernames and email addresses for admins on user list page
   $("table#userlist a").focus(
      function() {
        $(this).siblings('.user-info').css({'visibility' : 'visible'});
      }
    );
   $("table#userlist a").blur(
      function() {
        $(this).siblings('.user-info').css({'visibility' : 'hidden'});
      }
    );

    $("input[type=search]").attr('results', '5');

    // var rtt = $('script[ data-rtt ]').data('rtt');
    // console.log(rot13(rtt));

    /* function rot13(s) {
      return s.replace(/[a-zA-Z]/g, function(c){ return String.fromCharCode((c<="Z"?90:122) >= (c=c.charCodeAt(0)+13) ? c : c-26); });
    } */

    /* Site readonly.
    */
    var $BLOCK_REGIS = $('body.block-registration');
    var $BLOCK_LOGIN = $('body.block-login');

    $BLOCK_REGIS.find('#register_form').find(':input').attr({ disabled: 'disabled', title: 'Registration disabled' });
    $BLOCK_LOGIN.find('#login-form').find(':input').attr({ disabled: 'disabled', title: 'User login disabled' });

    $BLOCK_REGIS.find('a[ href *= "auth/reg" ]').on('click', function (ev) {
      ev.preventDefault();
      console.warn('Registration blocked: auth click');
    })
    .addClass('disabled').attr({ title: 'Registration disabled' });

    $('#form-lang').find('select, button')
      .attr({ disabled: 'disabled', title: 'Language switcher disabled' })

    $('.headline, #region2, .add-link')
      .find('a[ href *= add ], a[ href *= favourite ], a[ href *= follow ]')
      .on('click', ev => {
        ev.preventDefault();
        console.warn('"Add" link/button blocked:', 'click')
      })
      .addClass('disabled').attr({ title: 'Add action disabled' });

    $('#post-comment').parent().find('a[ href *= auth ], a[ href *= register ]')
      .on('click', ev => {
        ev.preventDefault();
        console.warn('Comment-footer login/registration blocked:', 'click');
      })
      .addClass('disabled').attr({});
});
