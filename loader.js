/*!
  Cloudworks Archive | JS & CSS loader | © 2019 The Open University (IET).
*/

/*eslint no-unused-vars: ["warn", { "x__argsIgnorePattern": "reject" }]*/

((WIN, DOC, LOC, where, fnName) => {
  WIN[ fnName ] = __addJsOrCss;

  const HOST = LOC.hostname === 'iet-ou.github.io' ? '/cloudworks-ac-uk/' : '/';

  __addJsOrCss('_design/styles_1_1.css');
  __addJsOrCss('themes/cloudworks/styles.css');
  __addJsOrCss('_scripts/custom.js');
  __addJsOrCss('_scripts/archive-fix.js')

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

  console.debug(WIN[ fnName ], DOC[ where ])

  //.
})(window, window.document, window.location, 'head', 'cwa')
