
# Cloudworks Archive #

This is an archived, read-only copy of [Cloudworks][] and its content,
"_a place to share, find and discuss learning and teaching ideas and experiences_":

 * [iet-ou.github.io/cloudworks-ac-uk][arch]

The repository contains plain, static HTML, Javascript, CSS and images.

The site was archived between 28 June and 2 July 2019, using `wget` (see [Issue: #384][] & [tools][]).

 * Original site: <https://cloudworks.ac.uk>
 * GitHub repo for the archive: [IET-OU/cloudworks-ac-uk][]
 * Original server software: [IET-OU/cloudengine][]
 * Wayback: [web.archive.org/web/*/cloudworks.ac.uk][wayback]

[![Screenshot of Cloudworks home-page][screenshot]][cloudworks]

## Tools
### Usage

```sh
brew install wget
ln -s ../cloudengine/archive bin
npm install
npm test
npm run archive
npm run clean
```


License:  [proprietary][tandc]

---
[©][tandc] 2009-2019, [The Open University][ou]. ([Institute of Educational Technology][iet])

[iet]: https://iet.open.ac.uk/ "Developed by the Institute of Educational Technology"
[ou]: https://www.open.ac.uk/

[arch]: https://iet-ou.github.io/cloudworks-ac-uk/
[tandc]: https://iet-ou.github.io/cloudworks-ac-uk/about/tandc.html#license
  "Copyright © 2009-2019 The Open University and contributors. 'Comments and additional content on the Site are covered by one of three licences/ terms detailed below …'"
[cloudworks]: https://cloudworks.ac.uk
[IET-OU/cloudworks-ac-uk]: https://github.com/IET-OU/cloudworks-ac-uk
[IET-OU/cloudengine]: https://github.com/IET-OU/cloudengine
[wayback]: https://web.archive.org/web/*/cloudworks.ac.uk
[Issue: #384]: https://github.com/IET-OU/cloudengine/issues/384
[tools]: https://github.com/IET-OU/cloudengine/tree/master/archive "Bash scripts etc."
[screenshot]: _design/screenshot-1.jpg
