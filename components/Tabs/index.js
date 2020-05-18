// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const topicsContainer = document.querySelector('.topics');

const url = 'https://lambda-times-backend.herokuapp.com/topics';

// Make the api request to get the topics
axios.get(url)
    .then((topics) => {
        // This code is for testing purposes. It is used to view the data returned from the api
        console.log(topics.data.topics);

        topics.data.topics.forEach((topic) => {
            let tab = document.createElement('div');
            tab.classList.add('tab');
            tab.textContent = topic;

            topicsContainer.appendChild(tab);
        });
    });