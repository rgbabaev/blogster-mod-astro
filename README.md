# Blogster

This site template based on the [Blogster bubblegum template](https://blogster-bubblegum.netlify.app).

Under the hood it uses [Astro](https://astro.build) and [Markdoc](https://markdoc.dev).

## Differences and improvements to the base Blogster template

- [x] Default font replaced with IBM Plex Sans, which supports Cyrillic characters
- [x] Added multilanguage support
  - [x] Layout fixes
  - [x] Lib functions
  - [x] Articles
  - [x] Index and about pages
  - [x] Language switcher
  - [x] RSS feed
  - [ ] Switching by browser preferences
  - [ ] Switching language redirects to the same page in another language
- [x] 404 page
- [ ] External links open in a new tab & security additions
- [x] Fontawesome replaced with SVG icons
- [x] Added tags with filtering and navigation
- [ ] Dark theme improvements:
  - [ ] 3-mode switcher (with system theme)
  - [ ] Realtime theme switching
  - [x] Logo switching (light/dark)
- [ ] Added cookies disclaimer popup
- [ ] Added built-in Google tag manager
- [ ] Comments in posts
- [ ] Link to RSS feed

## How to add a language

1. In file src/i18n.ts add a new language to the `languages` object and add a new ui translations to the `translations` object.

2. Create a subfolder in `content/<lang_id>` and place there translated files with the same structure as in the `content/en` folder.

## How do I add content?

All the content is written in markdown (.md) and grouped as `blog` or `projects` in the `content` directory. All the default markdown syntax will work. You also have a few example custom markdown elements like _YouTube embed_, _Twitter embed_, etc. You can create your own custom components too in two easy steps.

1. Add a markdoc config. Check out the markdoc config in [src/lib/markdoc/config.ts](src/lib/markdoc/config.ts) to learn how to add custom components.
2. Add a component to render your custom component. Check out the Renderer in [src/components/Renderer.astro](src/components/Renderer.astro).

## How do I make it my blog?

Easy.

- All content is static and everything is straight forward. Change whatever you need to change.
- Delete or update the content in `content/{content-group}`. `content-group` could be `blog`, `projects` or `anything`.
- (Optional) If you need more content types like _Notes_, just create a new dir in `content` and add a new frontmatter validator like [src/lib/markdoc/blog/frontmatter](src/lib/markdoc/blog/frontmatter).

## How do I deploy?

`npm run build` will generate a static website in `dist` dir.
