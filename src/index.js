require('./style/_reset.css');
require('./style/_style.css');

// control loading spinner
const spinnerWrapper = document.querySelector('.loading-spinner-wrapper');
spinnerWrapper.style.display = 'block';

const iframe = document.createElement('iframe');
iframe.classList.add('airtable');
iframe.style.display = 'none';
iframe.src =
  'https://airtable.com/embed/shrgZSDljNoy4iDzt?backgroundColor=cyanLight&viewControls=on';

// this function will called when the iframe loaded
iframe.onload = function () {
  spinnerWrapper.style.display = 'none';
  iframe.style.display = 'block';
};
// set the src last.
// iframe.src =
//   'https://airtable.com/embed/shrgZSDljNoy4iDzt?backgroundColor=cyanLight&viewControls=on';

// add it to the page.
const airtableWrapper = document.querySelector('.airtable-wrapper');
airtableWrapper.appendChild(iframe);
