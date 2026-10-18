# Amateka — Rwanda History Archive

A responsive history and culture website for discovering and sharing stories
about Rwanda. The archive includes destination guides, topic filters, search,
a short timeline, readable story pages, and source links.

## Getting started

Install dependencies and start the development server:

```sh
npm.cmd install
npm.cmd run dev
```

Create a production build with `npm.cmd run build`, or run the linter with
`npm.cmd run lint` (these commands work in Windows PowerShell).

## Updating stories

Stories and their references are currently held in the `stories` array in
`src/App.jsx`. Each entry includes its topic, date, summary, article text,
image description, and links for further reading. Add or edit entries there;
the archive filters and story reader use that data.

The `places` array in the same file powers the visitor destination cards.
Each destination includes suggested activities and a link to an official
tourism or site page. National park entries also list wildlife visitors may
see; sightings are not guaranteed. Photo attributions and license links are
displayed with each image.

This first version is a static site: it does not yet include a sign-in,
content-management system, or server for submissions. New stories become
available when the site is updated and redeployed.

## Sources and image credits

Story references are shown in each story reader. Check dates, quotations,
source links, and historical context with qualified sources before publishing
new material—especially for painful or contested events.

The Intore dancer and imigongo photographs are credited in the culture
gallery and archive cards. They are hosted by Wikimedia Commons and used under
the Creative Commons licenses shown beside each image. Keep those attributions
and license links if you reuse the images.
