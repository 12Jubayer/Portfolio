document.addEventListener('DOMContentLoaded', () => {
    const skillCircles = document.querySelectorAll('.foreground');
  
    // Set skill levels for each skill (in percentage)
    const skillLevels = {
      HTML: 90,
      CSS: 85,
      JavaScript: 75,
      React: 80,
      Node: 70
    };
  
    // Function to animate each skill circle
    skillCircles.forEach((circle, index) => {
      const skill = circle.closest('.skill-circle').querySelector('.skill-name').innerText;
      const skillLevel = skillLevels[skill];
      const offset = 377 - (377 * skillLevel / 100); // Stroke dashoffset calculation
  
      // Delay animation for each skill
      setTimeout(() => {
        circle.style.strokeDashoffset = offset;
      }, 500 * index); // Delay staggered by index
    });
  
    const contactBtn = document.querySelector('.contact-btn');
  
    contactBtn.addEventListener('click', () => {
      alert('Thanks for reaching out! Let\'s build something amazing together.');
    });
  });
  

  