// =============================================================================
//  Properties for images
// =============================================================================
let imgData = {
  src: {
    0: 'img/clifford.jpg',
    1: 'img/IMG_20201210_131648951.jpg',
    2: 'img/IMG_20201210_131648951.jpg',
    3: 'img/COS_preview.mp4',
    4: 'img/SS_preview.mp4',
  },
  titles: {
    0: 'Post Title',
    1: 'Hello World',
    2: 'Hello World',
    3: 'Hello World',
    4: 'Hello World',
  },
  descriptions: {
    0: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
  },
  url: {
    0: 'media2.html',
    1: 'media2.html',
    2: 'media2.html',
    3: 'media2.html',
    4 : 'media2.html',
  },
}

function checkCards(imgCount, vidCount) {
  const count = imgCount + vidCount;
  let cards = [...document.getElementsByClassName("card-template")];

  if (cards.length !== count) {
    setTimeout(checkCards, 1000, imgCount, vidCount);
  } else {
    loadCards(cards);
  };
}

function loadCards(cards) {
  cards.map(function (element, index) {
    const cardData = {
      src: imgData.src[index],
      title: imgData.titles[index],
      description: imgData.descriptions[index],
      url: imgData.url[index],
    }
    const validData = (!!cardData.src || !!cardData.title || !!cardData.description || !!cardData.url)
    if (!validData) {
      alert('Warning: Missing data for image [' + index  + ']');
      return;
    }

    element.getElementsByClassName('card-img-top')[0].setAttribute('src', cardData.src);
    element.getElementsByClassName('card-title')[0].innerHTML = cardData.title;
    element.getElementsByClassName('card-text')[0].innerHTML = cardData.description;
    element.getElementsByClassName('card-link')[0].setAttribute('href', cardData.url);
    element.getElementsByClassName('card-link')[0].classList.remove('d-none');
    return element
  });
}






