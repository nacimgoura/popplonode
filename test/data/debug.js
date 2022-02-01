const poppler = require('../../index.js');
poppler.load('test/data/warning.pdf');
poppler.debug = true;
poppler.getTextFromPage(1, (error, content) => {
  if (error) console.log(error);
});
