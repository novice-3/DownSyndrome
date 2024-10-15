
const carousel = document.querySelector('.carousel-inner');

const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;

function moveCarousel(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  
  currentIndex += direction;

  // Loop around if needed
  if (currentIndex < 0) {
      currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
      currentIndex = 0;
  }

  const offset = currentIndex * -100; // Move by 100% of the container width
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}



document.addEventListener('DOMContentLoaded', () => {
  // Hover effect for the boxes
  const boxes = document.querySelectorAll('.corner-box');
  
  boxes.forEach(box => {
      box.addEventListener('mouseover', () => {
          // Enlarge the hovered box
          box.style.transform = 'scale(1.5)';
          box.style.zIndex = '10'; // Bring the hovered box above the others
          box.style.opacity = '1'; // Full opacity for the hovered box

          // Scale down and reduce opacity of the other boxes
          boxes.forEach(otherBox => {
              if (otherBox !== box) {
                  otherBox.style.transform = 'scale(0.7)';
                  otherBox.style.opacity = '0.5'; // Semi-transparent for other boxes
              }
          });
      });

      box.addEventListener('mouseout', () => {
          // Reset the size and opacity of the hovered box
          box.style.transform = 'scale(1)';
          box.style.zIndex = '1'; // Reset z-index
          box.style.opacity = '0.8'; // Default opacity

          // Reset the size and opacity of the other boxes
          boxes.forEach(otherBox => {
              if (otherBox !== box) {
                  otherBox.style.transform = 'scale(1)';
                  otherBox.style.opacity = '0.8'; // Default opacity
              }
          });
      });
  });
});

/* html Singup form JS file */
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});