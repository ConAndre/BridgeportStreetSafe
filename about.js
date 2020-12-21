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
        0: "Ebony has 25 years with Regional Youth Adult Social Action Partnership, State Certified in Domestic Violence and Sexual Assault, Bachelor's degree in Psychology, Certification in Mental Health First Aid, and Certification in QPR: Suicide Prevention.",
        1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
        2: "Harry is an author of a Children's Book, Security Guard at Curiale Elementary School, Manager of the 1st Urban Rugby Team in Bridgeport, CT, and Recent recipient of a staff recognition award by the Supepintendent of schools.",
        3: "Aquill is a community activist, community liaison for the states attorney office, program manager at Hang Time, is a youth mentor, and Sociology Major at Southern Connecticut University.",
        4: "Arthur is a community activist, entrepreneur, personal caregiver, and youth mentor. Arthur is a community activist, entrepreneur, personal caregiver, and youth mentor.",
        5: "Anthony is a community activist, NAACP Member, Halfway House Counselor, and youth mentor.",
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





