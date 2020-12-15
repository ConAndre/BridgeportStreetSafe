// =============================================================================
//  Method for Media
// =============================================================================
memoriamNameSpace = function() {
  function initMemoriamData() {
    return {
      srcs: {
        0: "img/IMG_20201210_131648951.jpg",
        1: "img/IMG_20201210_131648951.jpg",
        2: "img/IMG_20201210_131648951.jpg",
        3: "img/IMG_20201210_131648951.jpg",
        4: "img/IMG_20201210_131648951.jpg",
        5: "img/IMG_20201210_131648951.jpg",
        6: "img/IMG_20201210_131648951.jpg",
        7: "img/IMG_20201210_131648951.jpg",
        8: "img/IMG_20201210_131648951.jpg",
      },
      names: {
        0: "Name Placeholder",
        1: "Name Placeholder",
        2: "Name Placeholder",
        3: "Name Placeholder",
        4: "Name Placeholder",
        5: "Name Placeholder",
        6: "Name Placeholder",
        7: "Name Placeholder",
        8: "Name Placeholder",
      },
      years: {
        0: "2000-2020",
        1: "2000-2020",
        2: "2000-2020",
        3: "2000-2020",
        4: "2000-2020",
        5: "2000-2020",
        6: "2000-2020",
        7: "2000-2020",
        8: "2000-2020",
      },
      descriptions: {
        0: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        6: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        7: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        8: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
      },
    }
  }
  function checkFigures(figCount) {
    let figures = Object.assign([], document.getElementsByClassName("memoriam-figure-template"));
    if (figures.length !== figCount) {
      setTimeout(checkFigures, 650, figCount);
    } else {
      loadFigures(figures);
    };
  }
  function loadFigures(figures) {
    let memoriamData = initMemoriamData();
    figures.map(function (element, index) {
      const figureData = {
        src: memoriamData.srcs[index],
        name: memoriamData.names[index],
        year: memoriamData.years[index],
        description: memoriamData.descriptions[index],
      }
      if (!!!figureData.src || !!!figureData.name || !!!figureData.year || !!!figureData.description) return alert(`Missing post information about #${index}`)
      element.getElementsByClassName("memoriam-figure-img")[0].setAttribute("src", figureData.src);
      element.getElementsByClassName("memoriam-figure-name")[0].innerHTML = figureData.name;
      element.getElementsByClassName("memoriam-figure-years")[0].innerHTML = figureData.year;
      element.getElementsByClassName("memoriam-figure-text")[0].innerHTML = figureData.description;
      return element
    });
  }
  return {
    checkFigures
  }
}();





