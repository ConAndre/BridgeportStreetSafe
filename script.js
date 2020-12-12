// =============================================================================
//  Properties for images
// =============================================================================
let mediaContentImg = {
  src: {
    0: 'img/IMG_20201210_131648951.jpg',
    1: 'img/IMG_20201210_131648951.jpg',
    2: 'img/IMG_20201210_131648951.jpg',
  },
  titles: {
    0: 'Post Title',
    1: 'Hello World',
    2: 'Hello World',
  },
  descriptions: {
    0: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
  },
  url: {
    0: 'media2.html',
    1: 'media2.html',
    2: 'media2.html',
  },
}
// =============================================================================
//  Properties for videos
// =============================================================================
let mediaContentVid = {
  src: {
    0: 'img/COS_preview.mp4',
    1: 'img/SS_preview.mp4',
    2: 'img/SS_preview.mp4',
  },
  titles: {
    0: 'City of Shooters',
    1: 'StreetSafe Intro',
    2: 'Hello World',
  },
  descriptions: {
    0: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
  },
  url: {
    0: 'https://vimeo.com/249623939',
    1: 'https://www.dropbox.com/s/sm53x5cyubthat6/Streetsafe_edit_01.mp4?dl=0',
    2: 'https://www.dropbox.com/s/sm53x5cyubthat6/Streetsafe_edit_01.mp4?dl=0',
  },
}

let imagebox = [...document.getElementsByClassName("image-box")];

imagebox.map(function (imgDiv, index) {
  const cardMedia = document.createElement("div");
  cardMedia.className = 'card mb-4 card-media';

  const cardImg = document.createElement("img");
  Object.assign(cardImg, {className: 'card-img-top', src: mediaContentImg.src[index],})

  const cardBody = document.createElement("div");
  cardBody.className = 'card-body';

  const cardTitle = document.createElement("h2");
  Object.assign(cardTitle, {className: 'card-title', innerHTML: mediaContentImg.titles[index],})

  const cardText = document.createElement("p");
  Object.assign(cardText, {className: 'card-text', innerHTML: mediaContentImg.descriptions[index],})

  const cardButton = document.createElement("a");
  Object.assign(cardButton, {href: mediaContentImg.url[index], className: 'btn btn-primary', innerHTML: 'Read More &rarr;',})

  cardMedia.append(cardImg, cardBody);
  cardBody.append(cardTitle, cardText, cardButton);
  imgDiv.append(cardMedia);

  return imgDiv
});

let videobox = [...document.getElementsByClassName("video-box")];

videobox.map(function (vidDiv, index) {
  const cardMedia = document.createElement("div");
  cardMedia.className = 'card mb-4 card-media';

  const cardVid = document.createElement("video");
  Object.assign(cardVid, {
    className: 'card-vid-top',
    controls: true,
    playsinline: 'playsinline',
    muted: 'muted',
    loop: 'loop',
  })

  const cardSrc = document.createElement("source")
  Object.assign(cardSrc, {
    innerHTML: "Your browser does not support the video tag.",
    src: mediaContentVid.src[index],
    type: 'video/mp4',
    alt: 'video',
  })

  const cardBody = document.createElement("div");
  cardBody.className = 'card-body';

  const cardTitle = document.createElement("h2");
  Object.assign(cardTitle, {className: 'card-title', innerHTML: mediaContentVid.titles[index],})

  const cardText = document.createElement("p");
  Object.assign(cardText, {className: 'card-text', innerHTML: mediaContentVid.descriptions[index],})

  const cardButton = document.createElement("a");
  Object.assign(cardButton, {
    className: 'btn btn-primary',
    innerHTML: 'Watch Video &rarr;',
    href: mediaContentVid.url[index],
    target: '_blank',
  });

  cardVid.append(cardSrc);
  cardMedia.append(cardVid, cardBody);
  cardBody.append(cardTitle, cardText, cardButton);
  vidDiv.append(cardMedia);

  return vidDiv
});






