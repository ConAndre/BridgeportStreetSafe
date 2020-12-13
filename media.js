// =============================================================================
//  Method for Media
// =============================================================================
mediaNameSpace = function() {
  function initMediaData() {
    return {
      src: {
        0: "img/clifford.jpg",
        1: "img/IMG_20201210_131648951.jpg",
        2: "img/IMG_20201210_131648951.jpg",
        3: "img/COS_preview.mp4",
        4: "img/SS_preview.mp4"
      },
      titles: {
        0: "Clifford",
        1: "Toy Donation",
        2: "Toy Donation 2",
        3: "City of Shooters",
        4: "StreetSafe Program"
      },
      descriptions: {
        0: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
      },
      url: {
        0: "media2.html",
        1: "media2.html",
        2: "media2.html",
        3: "media2.html",
        4: "media2.html"
      }
    }
  }
  function loadSidePanel(mediaData) {
    let sidePanel = document.getElementsByClassName("media-sidepanel-list")[0];
    let buttons = Object.values(mediaData.titles);
    buttons.forEach(title => {
      const listItem = document.createElement("li")
      let anchor = document.createElement("a")
      anchor.innerHTML = title;
      title = "#"+title.replace(/\s+/g, '-').toLowerCase();
      anchor.href = title;
      listItem.appendChild(anchor);
      sidePanel.appendChild(listItem);
    });
  }

  function checkCards(imgCount, vidCount) {
    const count = imgCount + vidCount;
    let cards = Object.assign([], document.getElementsByClassName("media-card-template"));
    if (cards.length !== count) {
      setTimeout(checkCards, 650, imgCount, vidCount);
    } else {
      // With more values, the conversion to array takes longer.
      loadCards(cards);
    };
  }
  function loadCards(cards) {
    let mediaData = initMediaData();
    cards.map(function (element, index) {
      const cardData = {
        src: mediaData.src[index],
        title: mediaData.titles[index],
        description: mediaData.descriptions[index],
        url: mediaData.url[index],
      }
      if (!!!cardData.src || !!!cardData.title || !!!cardData.description || !!!cardData.url) return alert(`Missing post information about #${index}`)
      element.getElementsByClassName("card-img-top")[0].setAttribute("src", cardData.src);
      element.getElementsByClassName("card-img-top")[0].id = cardData.title.replace(/\s+/g, '-').toLowerCase();
      element.getElementsByClassName("card-title")[0].innerHTML = cardData.title;
      element.getElementsByClassName("card-text")[0].innerHTML = cardData.description;
      element.getElementsByClassName("card-link")[0].setAttribute("href", cardData.url);
      element.getElementsByClassName("card-link")[0].classList.remove("d-none");
      return element
    });
    loadSidePanel(mediaData);
  }
  return {
    checkCards:checkCards
  }
}();





