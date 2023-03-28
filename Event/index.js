let movies = [
  {
    name: "Abacus Society",
    des: "The purpose of the society is educational directed towards the advancement of the theory and practice of the computer science & IT. The idea is spread knowledge and provide opportunities to as many interested as possible. The objective of this society is convening conferences, workshops; campaigns and training program for the students as well for the general public in order to impart Information Technology awareness. There are a number of clubs and Professional chapters running under the departmental society ABACUS.",
    image: "images/slider 2.png",
  },
  {
    name: "E-Cell",
    des: "E-Cell GLAU elaborated as Entrepreneurship cell is a non-profit, strategically innovated, value driven organization with prime focus on impacting young minds and is run by entrepreneurs in making.E-Cell aims at developing entrepreneurial spirit among students and shares a vision to foster innovation and budding ideas in youths.",
    image: "images/slider 1.png",
  },
  {
    name: "Literario",
    des: "‘Literario’ brings in activities and challenges such as Director’s cut, Instantania, Debates, Discussion Fiesta, Declamation, Quizzes, etc., that brush up the literary skills of an individual from the grass-root level. ‘Literario’ also works upon inviting various renowned guest speakers from different fields who share inspirational stories, experiences and talks",
    image: "images/slider 3.png",
  },
  {
    name: "NATRAJ",
    des: "NATRAJ is the official Dance Club of GLA University, Mathura. Dance, the art of precise, expressive, and graceful purposefully selected sequences of human movement, is performed according to musical accompaniment. It’s an art, a way to express oneself, a way to exercise, and a way to get feelings out. Dancing developed as a natural expression of united emotion and action.",
    image: "images/slider 4.png",
  },
  {
    name: "DATUM",
    des: "It is the only Data Science club in GLAU. Here, we educate members on what exactly Machine Learning is and possibilities for its growth in the future. DATUM emphasises developing the interests of members in ML. The club aims at making members familiar with ML frameworks' best practices. The club's prime objective is that the members should understand the ML algorithms and its real-world uses.",
    image: "images/slider 5.png",
  },
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
