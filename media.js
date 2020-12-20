// =============================================================================
//  Method for Media
// =============================================================================
mediaNameSpace = function() {
  function initMediaData() {
    return {
      srcs: {
        0: "img/COS_preview.mp4",
        1: "img/SS_preview.mp4",
        2: "https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/e35/101648864_2739023312997155_5516040083780597251_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=TACAVsh6JxcAX8toJfu&tp=1&oh=085b7b204f4ca9e6d3d6148a648065d7&oe=6007A419",
        3: "https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/e35/101455255_557347975206438_2107385966578023101_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=jxIHtA6h38sAX-G7RKp&tp=1&oh=0924ceacdc909a9975a09dbbf1266859&oe=6005D8DC",
      },
      titles: {
        0: "City of Shooters",
        1: "StreetSafe Program",
        2: "Mt. Aery Baptist Rally",
        3: "Mentees in action"
      },
      descriptions: {
        0: "City of Shooters is a short documentary film about the problem with gangs and gun violence in Bridgeport, CT. The film highlights how illegal guns are in the hands of many youth in Bridgeport and causing senseless loss of life. It chronicles the personal story of 20-year-old Eric, who describes his friend, an aspiring rapper, who fell victim to gun violence in 2017. The film shows violent footage from the streets of Bridgeport, as well as testimony of other local youth who experience life on the streets, and some who have been victims of gun violence. The need to address this critical situation is shown with interviews with Bridgeport police officers and some parents of the troubled youth. One parent describes how her son spent time in prison and expresses the futility of locking them up, instead asking that help be offered to them. One program that offers this kind of help is Street Safe Bridgeport, which is highlighted in the film. They reach out to the youth in the community to prevent younger children from getting on the wrong path to crime, as well as intervene with those already in trouble, to give them direction to a better life. The film ends on a hopeful note with inspiration for the troubled youth to rise above the violence.",
        1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        2: "StreetSafe Bridgeport & Mt. Aery Baptist Stop Killing Us Rally! 6/5/20",
        3: "StreetSafe Mentees learning the construction trade through training and hands on experience 5/27/20",
      },
      urls: {
        0: "https://vimeo.com/249623939",
        1: "https://www.dropbox.com/s/sm53x5cyubthat6/Streetsafe_edit_01.mp4?dl=0",
        2: "https://www.instagram.com/p/CBEn0vRHCQz/",
        3: "",
      },
      dates: {
        0: "7 December 2020",
        1: "7 December 2020",
        2: "5 June 2020",
        3: "4 June 2020",
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
      loadCards(cards);
    };
  }
  function loadCards(cards) {
    let mediaData = initMediaData();
    cards.map(function (element, index) {
      const cardData = {
        src: mediaData.srcs[index],
        title: mediaData.titles[index],
        description: mediaData.descriptions[index],
        url: mediaData.urls[index],
        date: mediaData.dates[index],
      }
      if (!!!cardData.src || !!!cardData.title || !!!cardData.description || (!!!cardData.url && cardData.url !== "")) return alert(`Missing post information about #${index}`)
      element.getElementsByClassName("card-img-top")[0].setAttribute("src", cardData.src);
      element.getElementsByClassName("card-img-top")[0].id = cardData.title.replace(/\s+/g, '-').toLowerCase();
      element.getElementsByClassName("card-title")[0].innerHTML = cardData.title;
      element.getElementsByClassName("card-text")[0].innerHTML = cardData.description;
      element.getElementsByClassName("card-link")[0].setAttribute("href", cardData.url);
      cardData.url && element.getElementsByClassName("card-link")[0].classList.remove("d-none");
      element.getElementsByClassName("card-footer")[0].innerHTML += cardData.date;
      return element
    });
    loadSidePanel(mediaData);
  }
  return {
    checkCards
  }
}();





