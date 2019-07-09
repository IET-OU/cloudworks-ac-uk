/*!
  Cloudworks Archive | fix links, etc. | © 2019 The Open University (IET).
*/

window.jQuery(($) => {

  const LOC = window.location;
  const ORIG = 'https://cloudworks.ac.uk/';
  const ARCH = 'https://github.com/IET-OU/cloudworks-ac-uk';
  const $REPO = $('a[ href = "https://github.com/IET-OU/cloudengine" ]')
  const $MSG = $('.readonly-message')
  const $DESC = $('meta[ name = description ]')
  const ICON = '<link rel="shortcut icon" href="{u}themes/cloudworks/favicon.ico">';

  if (LOC.hostname === 'cloudworks.ac.uk') {
    return console.warn('Live / non-archive site')
  }

  const HOST = LOC.hostname === 'iet-ou.github.io' ? '/cloudworks-ac-uk/' : '/';

  $('a[ href *= "cloudworks.ac" ]').each((n, el) => {
    $(el).attr('data-orig-href', $(el).attr('href'))
    $(el).attr('href', $(el).attr('href').replace(ORIG, HOST))

    // Cloud/v.., cloudscape/v.., tag/t.., user/view/1234.
    $(el).attr('href', $(el).attr('href').replace(/([^/])(#|$)/, '$1.html$2'))

    // $(el).attr('href', $(el).attr('href').replace(/(\/view\/.+)/, '$1.html'))

    // Cloud, cloudscape, user/user_list/B.
    // $(el).attr('href', $(el).attr('href').replace(/([a-z]_list\/[A-Z])/, '$1.html'))
  })

  $('img[ src *= "cloudworks.ac" ]').each((n, el) => {
    $(el).attr('data-orig-src', $(el).attr('src'))
    $(el).attr('src', $(el).attr('src').replace(ORIG, HOST))
  })

  $('img, input[ type = image ]').filter('[ src *= _design], [ src *= themes ]').each((n, el) => {
    console.debug('Image ..', el);

    $(el).attr('src', $(el).attr('src').replace(/^\//, HOST))
  })

  // Search and login form etc.
  $('form[ action *= "cloudworks.ac" ]').each((n, el) => {
    $(el).attr('action', $(el).attr('action').replace(ORIG, HOST))

    console.debug('Form:', el)
  });

  $('title').text($('title').text() + ' (archive)')

  $('head').append(ICON.replace('{u}', HOST))

  $DESC.attr('content', '[Archive] ' + $DESC.attr('content'))

  $REPO.attr({ href: ARCH, id: 'repo', title: 'Archive on GitHub' }).text('[ archive ]')

  $MSG.html('This is a readonly, static archive of Cloudworks. <small>(28 June 2019)</small>')

  console.warn('# Cloudworks Archive #', '\n\n', '  > original site:', ORIG, '\n\n', '  © The Open University (IET).')
})
