const titles = gsap.utils.toArray(".hero-text p");
const quote = gsap.utils.toArray(".quote-text .quote");
const tl = gsap.timeline();

titles.forEach((title, index) => {
  const splitTitle = new SplitTextJS(title);

  if (index !== titles.length - 1) {
    tl.from(
      splitTitle.chars,
      {
        opacity: 0,
        y: 80,
        rotationX: -90,
        stagger: 0.02,
      },
      "<"
    ).to(
      splitTitle.chars,
      {
        opacity: 0,
        y: -80,
        rotationX: 90,
        stagger: 0.02,
      },
      "<1"
    );
  }
});

const lastItem = titles[titles.length - 1];
const lastSplitTitle = new SplitTextJS(lastItem);

tl.from(
  lastSplitTitle.chars,
  {
    opacity: 0,
    y: 80,
    rotationX: -90,
    stagger: 0.02,
  },
  "<"
);

const quoteSplit = new SplitTextJS(quote[0]);
const quoteTl = gsap.timeline();

quoteTl.from(quoteSplit.chars, {
  opacity: 0,
  y: 60,
  rotationX: 0,
  stagger: 0.003,
});

tl.add(quoteTl, ">");

document.querySelectorAll(".project").forEach((project) => {
  let currentIndex = 0;
  const images = Array.from(project.querySelectorAll(".slideshow img"));
  let intervalId;

  function showImage(index) {
    images.forEach((image, i) => {
      image.style.display = i === index ? "block" : "none";
    });
  }

  function startSlideshow() {
    intervalId = setInterval(function () {
      showImage(currentIndex);
      currentIndex = (currentIndex + 1) % images.length;
    }, 925);
  }

  function stopSlideshow() {
    clearInterval(intervalId);
  }

  project.addEventListener("mouseenter", startSlideshow);

  project.addEventListener("mouseleave", stopSlideshow);

  showImage(currentIndex);
});
