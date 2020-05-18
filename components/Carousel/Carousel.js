/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function Carousel(imgs){
  let current_index = 0;

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  let current_img = imgs[current_index];

  const img_element = document.createElement('img');
  
  const left = document.createElement('div');
  left.classList.add('left-button');
  left.textContent = '<';

  left.addEventListener('click', (e) => {
    if(current_index !== 0){
      current_index -= 1;
    }
    else {
      current_index = imgs.length - 1;
    }

    current_img = imgs[current_index];
  });

  carousel.appendChild(left);

  img_element.src = current_img;

  // Append the current image
  carousel.appendChild(img_element);

  const right = document.createElement('div');
  right.classList.add('right-button');
  right.textContent = '>';

  right.addEventListener('click', (e) => {
    console.log('You went forward!');
  });

  carousel.appendChild(right);

  return carousel;
}

// List of images
const imgLocations = [
  './assets/carousel/computer.jpeg',
  './assets/carousel/mountains.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
];

// Parent container
const cont = document.querySelector('.carousel-container');

const crsl = Carousel(imgLocations);

cont.appendChild(crsl);