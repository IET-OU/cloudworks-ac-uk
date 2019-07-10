/*!
  Cloudworks Archive | Scripts & styles loader | © 2019 The Open University (IET).
*/

/*eslint no-unused-vars: ["warn", { "x__argsIgnorePattern": "reject" }]*/

((WIN, DOC, LOC, where, fnName) => {
  'use strict';

  WIN[ fnName ] = __addJsOrCss;

  const HOST = LOC.hostname === 'iet-ou.github.io' ? '/cloudworks-ac-uk/' : '/';
  const DELAY_MS = LOC.pathname.match('/search/') ? 3000 : 200; // Milliseconds.

  insertLoadingElem()

  __addJsOrCss('_design/archive-fix.css');

  WIN.setTimeout(() => {
    __addJsOrCss('_design/styles_1_1.css').then(() => jqHideLoadingElem())
    __addJsOrCss('themes/cloudworks/styles.css');
    __addJsOrCss('_scripts/custom.js');
    __addJsOrCss('_scripts/archive-fix.js')
  }, DELAY_MS)

  // ----------------------------------------------------------------

  function __addJsOrCss (path) {
    const URL = HOST + path;
    const IS_JS = /\.js$/.test(path)
    const elem = IS_JS ? 'script' : 'link';

    let $sc = DOC.createElement(elem)

    DOC[ where ].appendChild($sc)

    return new Promise(function (resolve, reject) {
      $sc.src = IS_JS ? URL : null;
      // $sc.defer = IS_JS ? 'defer' : null;
      $sc.href = IS_JS ? null : URL;
      $sc.rel = IS_JS ? null : 'stylesheet';

      $sc.onload = ev => resolve(ev)
    });
  }

  function insertLoadingElem () {
    const $BODY = DOC.querySelector('body')

    let $loadingEl = DOC.createElement('div')
    $loadingEl.className = 'archive-loading';
    $loadingEl.innerText = 'Loading …';

    $BODY.insertBefore($loadingEl, DOC.querySelector('#site-header'))
  }

  function jqHideLoadingElem() {
    WIN.setTimeout(() => {
      const $ = WIN.jQuery;

      $('body').addClass('archive-loaded')

      $('.archive-loading').hide('slow')
    }, 750);
  }

  console.debug(WIN[ fnName ], DOC[ where ])

  //.
})(window, window.document, window.location, 'head', 'cwa')
