// shame.js
// This is a collection of hacks that should be phased out

// The bootstrap navbar was not collapsing after selecting an option, so I'm hacking it with jquery
$('.nav a').on('click', function(){
    if( $('.navbar-collapse.collapse.in').attr('aria-expanded') == 'true' ) {
        $('.navbar-toggle').click() //bootstrap 3.x
    }
});


/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
    'use strict';
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }
})();