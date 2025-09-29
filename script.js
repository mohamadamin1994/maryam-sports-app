function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  clock.textContent = now.toLocaleTimeString('fa-IR');
}
setInterval(updateClock, 1000);
updateClock();

function enterApp() {
  document.querySelector('.welcome-screen').style.display = 'none';
  document.querySelector('.main-app').style.display = 'block';
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}
