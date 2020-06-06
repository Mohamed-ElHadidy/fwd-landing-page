/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const sections = document.getElementsByTagName('section');
const ul = document.getElementById('navbar__list');

console.log(sections);
console.dir(ul);
// get our sections pageYOffset values here
const sectionsOffsetTopVAL = [];
let activeSection;
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
const buildNav = () => {
    for (let section of sections) {

        let li = section.attributes['data-nav'].nodeValue;
        console.log(li);

        ul.innerHTML += `<li><a href="">${li}</a></li>`;
        // get our sections pageYOffset values 
        sectionsOffsetTopVAL.push(section.offsetTop);
    }
}

buildNav();


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// track the window YOffset to detect the active section 

window.addEventListener('scroll', (e) => {

    // check if we reached the first section 
    if (sectionsOffsetTopVAL && window.pageYOffset >= sectionsOffsetTopVAL[0]) {

        console.dir(window.pageYOffset);
        // loop through just our sections pageYOffset values to detect the active section
        sectionsOffsetTopVAL.map((value, index) => {
            if (value <= window.pageYOffset) {
                console.dir(e.target);
                console.dir(sections[index]);
                // define our active section to add our active class to it
                activeSection = sections[index];
            }
        })

        // check if our active class is already in it's classList
        if (activeSection.classList.contains("your-active-class")) {
            return
        } else {
            // remove our active class from all sections 
            for (let section of sections) {
                section.classList.remove("your-active-class")
            }
            // add our active class to only our active section
            activeSection.classList.add("your-active-class") 
        }
            console.dir(activeSection);

    }
})



// Build menu 

// Scroll to section on link click
ul.addEventListener('click', (e) => {
    // prevent a(href) default behaviour
    e.preventDefault();
    console.dir(e.target.nodeName)
    if (e.target.nodeName == 'A') {
        for (let section of sections) {
            if (e.target.outerText == section.attributes['data-nav'].nodeValue) {
                window.scrollTo({
                    top: section.offsetTop,
                    left: section.offsetLeft,
                    behavior: 'smooth'
                })
            }
        }
    }
})

// Set sections as active