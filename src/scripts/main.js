import * as functions from './modules/functions.js';
import Gallery from  '../libs/gallery.js';

new Gallery(document.getElementById('gallery'), {
  margin: 10,
});

functions.isWebp();