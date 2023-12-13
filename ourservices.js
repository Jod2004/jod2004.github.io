document.querySelectorAll('.flip-container').forEach(container => {
  container.addEventListener('mouseover', () => {
    container.querySelector('.flipper').style.transform = 'rotateY(180deg)';
  });

  container.addEventListener('mouseout', () => {
    container.querySelector('.flipper').style.transform = 'rotateY(0deg)';
  });
});
