fetch('https://api-dot-di-dashboard-lids.uc.r.appspot.com/api/v1/sales')
.then(response => response.json())
.then(allTitles => {
    renderData(allTitles);
    console.log(allTitles)
});


const cardsContainer = document.querySelector('#cards-container');

function renderData(pages) {
    pages.forEach(page => {
      // create variables for all elements within the card
      const url = document.createElement('a');
      const cardColumn = document.createElement('div');
      const cardInfo = document.createElement('div');
      const title = document.createElement('h2');

      // create classes for all elements
      cardColumn.classList = 'card col';
      title.classList = 'card-title'

      // data pulled for each state
      title.innerText = page.name;
      url.href = page.url;

      url.target = '_blank'

      // used appendChild to make sure all elements are inside the cardColumn div and in cardsContiner id
      url.appendChild(cardColumn)
      cardColumn.appendChild(cardInfo);
      cardInfo.appendChild(title);
      cardsContainer.appendChild(url);
    
    });
}