const images = [
  "landmark_busan (0).jpg",
  "landmark_busan (1).jpg",
  "landmark_busan (2).jpg",
  "landmark_busan (3).jpg",
  "landmark_busan (4).jpg",
  "landmark_busan (5).jpg",
  "landmark_busan (6).jpg",
  "landmark_busan (7).jpg",
  "landmark_busan (8).jpg",
  "landmark_busan (9).jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

const IMAGE_WIDTH = window.screen.availWidth;
const IMADGE_HEIGHT = window.screen.availHeight - 107;

bgImage.setEle;
bgImage.src = `img/${chosenImage}`;
bgImage.width = IMAGE_WIDTH;
bgImage.height = IMADGE_HEIGHT;

document.body.appendChild(bgImage);
