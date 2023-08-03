fetch('https://api-dot-di-dashboard-lids.uc.r.appspot.com/api/v1/home')
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

      if (url.href == 'https://hatworld-my.sharepoint.com/') {
        url.target = '_blank';
      }
      if (url.href == 'https://hwprod.operations.dynamics.com/?cmp=200&mi=InventTransferOrder') {
        url.target = '_blank';
      }

      // used appendChild to make sure all elements are inside the cardColumn div and in cardsContiner id
      url.appendChild(cardColumn)
      cardColumn.appendChild(cardInfo);
      cardInfo.appendChild(title);
      // cardInfo.appendChild(url);
      cardsContainer.appendChild(url);
    
    });
}