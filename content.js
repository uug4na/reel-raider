// Hide Reels button
function hideReelsButton() {
  const reelsButton = document.querySelector('a[href="/reels/"]') ||
                      document.querySelector('svg[aria-label="Reels"]')?.parentElement?.parentElement;
  if (reelsButton) {
    reelsButton.style.display = 'none';
  }
}

hideReelsButton();
const observer = new MutationObserver(hideReelsButton);
observer.observe(document.body, { childList: true, subtree: true });

function isWatchingReels() {
  const url = window.location.href;
  if (url.includes('/reels/') || url.includes('/reel/')) {
    return true;
  }
  const videoElement = document.querySelector('video');
  const reelsContainer = document.querySelector('div[class*="_ac reel"]');
  return videoElement && reelsContainer;
}


let lastAlert = 0;
function checkReels() {
  const now = Date.now();
  if (isWatchingReels() && now - lastAlert > 5000) {
    alert('Bro, do something better!');
    lastAlert = now;
  }
}

setInterval(checkReels, 1000);
