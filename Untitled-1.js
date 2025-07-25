const modeToggle = document.getElementById('mode');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');

  const sunIcon = modeToggle.querySelector('.fa-sun');
  const moonIcon = modeToggle.querySelector('.fa-moon');
  
  sunIcon.style.display = sunIcon.style.display === 'none' ? 'inline-block' : 'none';
  moonIcon.style.display = moonIcon.style.display === 'none' ? 'inline-block' : 'none';
  
  const isDarkMode = document.body.classList.contains('darkmode');
  modeToggle.setAttribute('aria-label', isDarkMode ? 'lightmode' : 'darkmode');
  localStorage.setItem('darkMode', isDarkMode);
});


