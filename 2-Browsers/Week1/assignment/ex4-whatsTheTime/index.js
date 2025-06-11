/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function bodyClear(tag) {
  const existingContent = document.querySelector(tag);
  if (existingContent) {
    existingContent.remove();
  }
}

function currentTimeRender(time) {
  bodyClear('h1');
  bodyClear('p');

  // Adding new content
  const header = document.createElement('h1');
  header.textContent = 'The current time';
  document.body.appendChild(header);

  const timeParagraph = document.createElement('p');
  timeParagraph.textContent = time;
  document.body.appendChild(timeParagraph);
}

function main() {
  setInterval(() => {
    console.log(addCurrentTime());
    currentTimeRender(addCurrentTime());
  }, 1000);
}

window.addEventListener('load', main);
