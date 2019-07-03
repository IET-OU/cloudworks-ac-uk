/*!
  Cloudworks archive | Fix links, etc. | NDF, 02-July-2019.
*/

window.jQuery(($) => {

  const LOC = window.location;

  if (/\/\/cloudworks.ac.uk/.test(LOC.href)) {
    console.warn('Live / non-archive site')
  }

  const HOST = '/'; // LOC.protocol + '//' + LOC.hostname + LOC.pathname.replace(/\/(cloud(scape)?|tag|user|search)\/.+/, '/').replace('index.html', '');

  $('a[ href *= "cloudworks.ac" ]').each((n, el) => {
    $(el).attr('data-orig-href', $(el).attr('href'))
    $(el).attr('href', $(el).attr('href').replace('https://cloudworks.ac.uk/', HOST))

    // Cloud/v.., cloudscape/v.., tag/t.., user/view/1234.
    $(el).attr('href', $(el).attr('href').replace(/([^/])$/, '$1.html'))

    // $(el).attr('href', $(el).attr('href').replace(/(\/view\/.+)/, '$1.html'))

    // Cloud, cloudscape, user/user_list/B.
    // $(el).attr('href', $(el).attr('href').replace(/([a-z]_list\/[A-Z])/, '$1.html'))
  })

  // Search and login form etc.
  $('form[ action *= "cloudworks.ac" ]').each((n, el) => {
    $(el).attr('action', $(el).attr('action').replace('https://cloudworks.ac.uk/', HOST))

    console.warn('Form:', el)
  });

  console.warn('archive-fix.js')
})
