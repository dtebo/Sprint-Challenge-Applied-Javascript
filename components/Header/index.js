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

    // Get the current date and format it
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const current_date = new Date();
    const formatted_date = `${months[current_date.getMonth()]} ${current_date.getDate()}, ${current_date.getFullYear()}`;
    dateSpan.textContent = formatted_date;

    const t = document.createElement('h1');
    t.textContent = title;

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98\u00B0';

    header.appendChild(dateSpan);
    header.appendChild(t);
    header.appendChild(temp);

    return header;
}


const container = document.querySelector('.header-container');

const headerElement = Header('Lambda Times');

container.appendChild(headerElement);