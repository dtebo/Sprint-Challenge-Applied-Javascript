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
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  

  const left = document.createElement('div');
  left.classList.add('left-button');
  left.textContent = '<';

  let idx = 0;

  left.addEventListener('click', (e) => {
    if(idx !== 0){
      idx -= 1;
    }
    else{
      idx = imgs.length - 1;
    }

    rotate(idx);
  });

  carousel.appendChild(left);

  imgs.forEach((image) => {
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('carousel-img');

    carousel.appendChild(img);
  });

  const right = document.createElement('div');
  right.classList.add('right-button');
  right.textContent = '>';

  right.addEventListener('click', (e) => {
    if(idx === imgs.length - 1){
      idx = 0;
    }
    else{
      idx += 1;
    }

    rotate(idx);
  });

  setInterval((e) => {
    if(idx === imgs.length - 1){
      idx = 0;
    }
    else{
      idx += 1;
    }

    rotate(idx);
  }, 4000);

  carousel.appendChild(right);

  return carousel;
}

const imgLocations = [
  './assets/carousel/computer.jpeg',
  './assets/carousel/mountains.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
];

function rotate(idx){
  // toggle the img-open class to shut off the current image
  currentImage.classList.toggle('img-open');

  // get the next image
  currentImage = document.querySelectorAll('.carousel-img')[idx];

  // toggle the img-open class on the next image
  currentImage.classList.toggle('img-open');
}

// Parent container
const cont = document.querySelector('.carousel-container');

const crsl = Carousel(imgLocations);

cont.appendChild(crsl);

// Display the first image
let currentImage = document.querySelector('.carousel-img');
currentImage.classList.toggle('img-open');