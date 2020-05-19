// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function Card(article){
    const card_container = document.createElement('div');
    card_container.classList.add('card');

    const article_headline = document.createElement('div');
    article_headline.classList.add('headline');
    article_headline.textContent = article.headline;

    const article_author = document.createElement('div');
    article_author.classList.add('author');

    const author_img_container = document.createElement('div');
    author_img_container.classList.add('img-container');

    const author_img = document.createElement('img');
    author_img.src = article.authorPhoto;

    const author_name = document.createElement('span');
    author_name.textContent = article.authorName;

    card_container.appendChild(article_headline);

    author_img_container.appendChild(author_img);
    article_author.appendChild(author_img_container);
    article_author.appendChild(author_name);

    card_container.appendChild(article_author);

    return card_container;
}

// Parent container
const cards_container = document.querySelector('.cards-container');

const article_url = 'https://lambda-times-backend.herokuapp.com/articles';

// Request the articles
axios.get(article_url)
    .then((articles) => {
        // console.log(articles);

        // Loop through each category
        for(key in articles.data.articles){
            let category_container = document.createElement('div');
            category_container.classList.add('category-container');

            let category_header = document.createElement('h2');
            category_header.textContent = key;

            category_container.appendChild(category_header);
            cards_container.appendChild(category_container);
            
            // Loop through all of the articles for the category
            articles.data.articles[key].forEach((article) => {
                const c = Card(article);

                category_container.appendChild(c);
            });
        }
    });