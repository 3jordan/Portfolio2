const titles = gsap.utils.toArray('.hero-text p');
const quote = gsap.utils.toArray('.quote-text .quote'); // Updated quote selector
const tl = gsap.timeline();

titles.forEach((title, index) => {
    const splitTitle = new SplitTextJS(title);

    if (index !== titles.length - 1) {
        tl.from(splitTitle.chars, {
            opacity: 0,
            y: 80,
            rotationX: -90,
            stagger: 0.02,
        }, "<")
        .to(splitTitle.chars, {
            opacity: 0,
            y: -80,
            rotationX: 90,
            stagger: 0.02,
        }, "<1");
    }
});

// Animation for the last item (staying in place)
const lastItem = titles[titles.length - 1];
const lastSplitTitle = new SplitTextJS(lastItem);

tl.from(lastSplitTitle.chars, {
    opacity: 0,
    y: 80,
    rotationX: -90,
    stagger: 0.02,
}, "<");

// Animation for the quote
const quoteSplit = new SplitTextJS(quote[0]); // Assuming there's only one quote element
const quoteTl = gsap.timeline(); // Create a separate timeline for the quote animation

quoteTl.from(quoteSplit.chars, {
    opacity: 0,
    y: 60, // Adjust the vertical position as needed
    rotationX: 0, // No rotation for the quote
    stagger: 0.02,
});

// Add the quote animation timeline to the main timeline
tl.add(quoteTl, ">"); // Use ">" to start the quote animation after the hero title animations
