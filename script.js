const container = document.querySelector('.container');
let isMouseDown = false;
document.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
      isMouseDown = true;
    }
  });
document.addEventListener('mouseup', () => {
    isMouseDown = false; 
});


// Function to create the grid
function createGrid(size) {
  container.innerHTML = '';
  const squareSize = 900 / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = '#3498db'; // Change color
      
    });
    container.appendChild(square);
  }
}

// Create a 16x16 grid
createGrid(16);

const resizeButton = document.getElementById('resize-grid');
resizeButton.addEventListener('click', () => {
    let size = parseInt(prompt('Enter the number of squares per side (1-100):'));
  
    // Validate user input
    if (isNaN(size) || size < 1 || size > 100) {
      alert('Please enter a number between 1 and 100.');
      return;
    }
    
    createGrid(size, size); // Create new grid with the specified size
  });