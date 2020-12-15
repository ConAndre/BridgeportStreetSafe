// =============================================================================
//  Method for About
// =============================================================================
aboutNameSpace = function() {
  function initAboutData() {
    return {
      srcs: {
        0: "img/ebony.jpg",
        1: "img/loading.svg",
        2: "img/harry.jpg",
        3: "img/aquill.jpg",
        4: "img/arthur.jpg",
        5: "img/anthony.jpg",
      },
      names: {
        0: "Ebony Epps",
        1: "Edward Calderon",
        2: "Harry Bell",
        3: "Aquil Crooks",
        4: "Arthur Preston",
        5: "Anthony Marshall",
      },
      titles: {
        0: "Program Director",
        1: "Supervisor",
        2: "Outreach Worker",
        3: "Outreach Worker",
        4: "Outreach Worker",
        5: "Outreach Worker",
      },
      descriptions: {
        0: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
      },
    }
  }
  function checkFigures(figCount) {
    let figures = Object.assign([], document.getElementsByClassName("about-figure-template"));
    if (figures.length !== figCount) {
      setTimeout(checkFigures, 650, figCount);
    } else {
      loadFigures(figures);
    };
  }
  function loadFigures(figures) {
    let aboutData = initAboutData();
    figures.map(function (element, index) {
      const figureData = {
        src: aboutData.srcs[index],
        name: aboutData.names[index],
        title: aboutData.titles[index],
        description: aboutData.descriptions[index],
      }
      if (!!!figureData.src || !!!figureData.name || !!!figureData.title || !!!figureData.description) return alert(`Missing post information about #${index}`)
      element.getElementsByClassName("about-figure-img")[0].setAttribute("src", figureData.src);
      element.getElementsByClassName("about-figure-name")[0].innerHTML = figureData.name;
      element.getElementsByClassName("about-figure-title")[0].innerHTML = figureData.title;
      element.getElementsByClassName("about-figure-text")[0].innerHTML = figureData.description;
      return element
    });
  }
  return {
    checkFigures
  }
}();





