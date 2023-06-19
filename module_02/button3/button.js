const numButtons = 30; 
const buttonsPerRow = 5; 
const colors = ['green', 'red', 'purple', 'blue', 'black']; 


const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';


for (let i = 0; i < numButtons; i++) {
  const button = document.createElement('button');
  button.style.backgroundColor = colors[0];
  button.style.width = `calc(100% / ${buttonsPerRow})`;
  button.textContent = i + 1;
  let clickCount = 0;
  
 
  button.addEventListener('click', () => {
    clickCount++;
    if (clickCount < colors.length) {
      button.style.backgroundColor = colors[clickCount];
    } else {
      container.removeChild(button);
    }
  });
  
  container.appendChild(button);
}

document.body.appendChild(container);