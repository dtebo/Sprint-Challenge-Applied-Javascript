// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(title) {
    const header = document.createElement('div');
    header.classList.add('header');

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = Date.now();

    const t = document.createElement('h1');
    t.textContent = title;

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98&#176;';

    header.appendChild(dateSpan);
    header.appendChild(t);
    header.appendChild(temp);

    return header;
}


const container = document.querySelector('.header-container');

const headerElement = Header('Lambda Times');

container.appendChild(headerElement);