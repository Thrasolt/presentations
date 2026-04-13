import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css'
import './overrides.css'
import Reveal from 'reveal.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import Notes from 'reveal.js/plugin/notes/notes.esm.js'

Reveal.initialize({
  width: 960,
  height: 700,
  margin: 0.04,
  hash: true,
  transition: 'fade',
  transitionSpeed: 'fast',
  plugins: [Highlight, Notes],
})
