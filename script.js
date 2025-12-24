// To refresh the page when the window is maximized
// let lastWidth = window.innerWidth;
// let lastHeight = window.innerHeight;

// window.addEventListener('resize', () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     // Detect if window dimensions have changed and reload the page
//     if ((width > lastWidth || height > lastHeight)) {
//         // Refresh the page
//         location.reload();
//     }

//     lastWidth = width;
//     lastHeight = height;
// });

// To refresh the page when the window is resized (only width change)
// Height changes are ignored since there was a bug and android where the focus on input fields caused height changes and the keyboard opening caused unwanted reloads and refreshes which led
// to bad user experience (as keyboard would close on refresh)

// Debounce implementation to avoid multiple reloads during resizing
let lastWidth = window.innerWidth;
let timeout;

window.addEventListener('resize', () => {
    // 1. Clear the timer every time the window moves
    clearTimeout(timeout);

    // 2. Set a new timer
    // setTemout ( { code to run } , delay = 250ms)
    timeout = setTimeout(() => {
        // Get the current width
        const currentWidth = window.innerWidth;

        // 3. Only reload if the width actually changed and movement stopped
        if (currentWidth !== lastWidth) {
            // Refresh the page
            location.reload();
        }
        // Update the lastWidth variable
        lastWidth = currentWidth;
      
    }, 250); // 250ms delay
});


// Function to display the hamburger menu when icon is clicked
function menuFunction() {
    var menu = document.getElementById("myLinks");
    // var mainContainer = document.getElementById("container");
    var mainContainer = document.getElementById("outer-container");
    var slideShowContainer = document.getElementById("slideshow-container");
    var btnOpen = document.getElementById("btnOpenMenu");
    var btnClose = document.getElementById("btnCloseMenu");
    
    // If the menu is open, close it. If it is closed, open it
    if (menu.style.display == "block" ) {
      menu.style.display = "none";
      mainContainer.style.display = "block"; //Displays the main container when the menu is closed
      btnClose.style.display = "none"; //Displays the menu icon when the menu is open
      btnOpen.style.display = "inline-block"; // Hides the close icon when the menu is open   
      
      //If element with "slideshow-container" id is not found, then show the main container
      if (slideShowContainer != null) {
        slideShowContainer.style.display = "block"; //Displays the slideshow container when the menu is closed
      }else{
        console.log("Slideshow container not found");
      }
    } 
    // If the menu is closed, open it
    else {
      menu.style.display = "block";
      mainContainer.style.display = "none"; //Hides the main container when the menu is open
      
      btnOpen.style.display = "none"; // Hides the menu icon when the menu is open
      btnClose.style.display = "inline-block"; // Shows the close icon when the menu is open
      // menu.style.position = "absolute";
      menu.style.width = "100%";
      menu.style.minHeight = "70vh";
      // menu.style.marginleft = "-10pmenu"

      if (slideShowContainer != null) {
        slideShowContainer.style.display = "none"; //Hides the slideshow container when the menu is open
      }else{
        console.log("Slideshow container not found");
      }
    }

  }

// To show the container and hide the hamburger navigation menu when the window is resized
function showContainer() {
  var navBar = document.getElementById("navBar");
  var menu = document.getElementById("myLinks");
  
  // var mainContainer = document.getElementById("container");
  var mainContainer = document.getElementById("outer-container");
  var slideShowContainer = document.getElementById("slideshow-container");
  var btnOpen = document.getElementById("btnOpenMenu");
  var btnClose = document.getElementById("btnCloseMenu");

  // Hiding the menu when the window is resized
  menu.style.display = "none";
  
  // Showing main container when the window is resized
  mainContainer.style.display = "block";
  //  This is done because the slideshow container is outside the mainCoontainer
  slideShowContainer.style.display = "block"; // Shows the slideshow container when the menu is closed. 
                                            
    
  //Showing the btnOpenMenu when the window is resized and page is in mobile view. Done by checking if navigation bar is visible or not
  if (window.getComputedStyle(navBar).display == "none") {
    btnOpen.style.display = "inline-block";
    btnClose.style.display = "none";
  } else {
    btnOpen.style.display = "none";
    btnClose.style.display = "none";
  }    
}

// Function to display the hamburger menu when icon is clicked and to close it when clicked outside the menu or on the close icon
function showDropdown(dropDownId) {
  // Test message to check if the function is called
  console.log("showDropdown function called");

  // Get the dropdown element
  var dropDown = document.getElementById(dropDownId);

  // If the dropdown is open, close it. If it is closed, open it
  // Show is a class that is used to show the dropdown (in css)
  // If the dropdown has the class show, remove it. If it doesn't have the class show, add it
  if (dropDown.classList.contains("show")) {
    dropDown.classList.remove("show");
  } else {
    dropDown.classList.add("show");
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropDowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i=0; i < dropDowns.length; i++){
      var openDropDown = dropDowns[i];
      if (openDropDown.classList.contains('show')) {
        openDropDown.classList.remove('show');
      }
    } 
  }
}

// Function to change contact forms
function changeForm(openForm,closeForm){
  document.getElementById(openForm).style.display = "flex";
  document.getElementById(closeForm).style.display = "none";
  //Adding and removing show from the buttons to show which one is opened

  if (openForm == "contact-form") {
    document.getElementById("btnContact").classList.add("show");
    document.getElementById("btnPrayer").classList.remove("show");
  }
  else {
    document.getElementById("btnPrayer").classList.add("show");
    document.getElementById("btnContact").classList.remove("show");
  }
}


//JS used for lightbox
// Open the Modal
var currentEvent = "";
// Used to have a reference for the slide number (slide 1 initially)
var slideIndex = 1;
var slideLength = 0;

function openModal(eventClass) {
  // console.log("openModal function called");
  document.getElementById("myModal").style.display = "flex";

  // Assigning a global variable to the current event
  currentEvent = eventClass;

  // Hiding all dots (row images) initially
  var dots = document.getElementsByClassName("demo");
  // console.log("Hiding all dots initially");
  for (i = 0; i < dots.length; i++) {
    dots[i].style.display = "none";
  }
  //Showing the dots (row images) for the current event
  var eventDots = document.getElementsByClassName("demo "+eventClass);
  // console.log("Showing the dots for the current event");
  for (i = 0; i < eventDots.length; i++) {
    eventDots[i].style.display = "block";
  }

  // Hiding all slides initially
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  showSlides(slideIndex,eventClass);
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  //Clearing the slide index and variables
  // slideIndex = 1;
  // eventClass = "";
  // console.log("Close modal function called");
}

function plusSlides(n) {
  // If prev, decrement the slide number. If next, increment the slide number
  // Value checking is done in showSlides function (limit testing)
  if (n == -1) {
    slideIndex = slideIndex - 1;
    showSlides(slideIndex,currentEvent);
  } else {
    slideIndex = slideIndex + 1; 
    showSlides(slideIndex,currentEvent)
  } 
}

// Thumbnail image controls
function currentSlide(slideIndex,eventClass) {
  showSlides(slideIndex,eventClass);
}

// Function to show the slides (based on slide number and event class)
function showSlides(n, eventClass) {
  console.log("showSlides function called");
  // Assigning a global variable to the current event
  currentEvent = eventClass;

  var i; // Loop variable
  var slides = document.getElementsByClassName("myModal "+eventClass); // All the slides with the specified class name, variable is a collection of all the slides
  var dots = document.getElementsByClassName("demo "+eventClass); // All the dots (row images) collection. Corresponding to the slides (event)
  
  var captionText = document.getElementById("caption"); // The caption text

  // If the slide number is greater than the total number of slides, set the slide number to 1
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";
    slides[i].style.display = "flex";
  }

  // Showing slides for current event
  // eventSlides is a collection of all the slides for the current event
  var eventSlides = document.getElementsByClassName("mySlides "+eventClass);

  //Assinging the global variable to the slide length (used for next and prev buttons)
  slideLength = eventSlides.length;
  
  // Set the slide number to the current slide number (based on parameter)
  slideIndex = n;

  // If the slide number is greater than the total number of slides, set the slide number to 1
  if (n > eventSlides.length) {slideIndex = 1}
  // If the slide number is less than 1, set the slide number to the total number of slides
  if (n < 1) {slideIndex = eventSlides.length}


  // Hiding all slides initially (so that only the current slide is displayed when row image is clicked)
  for (i = 0; i < eventSlides.length; i++) {
    eventSlides[i].style.display = "none";
  }
  // Displaying the current slide (based on event)
  eventSlides[slideIndex-1].style.display = "flex"; 

  // Removing active class from all dots (row images)
  for (i = 0; i < dots.length; i++) {
    // console.log("Removing active class from all dots");
    dots[i].className = dots[i].className.replace(" active", "");
  }  
  // Adding active class to the current row image (dot)
  dots[slideIndex-1].className += " active";
  // var eventDots = document.querySelectorAll(".demo"+eventClass);
  // eventDots[slideIndex-1].className += " active";
  // dots[slideIndex-1].className += " active";

  // Update the caption text
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//Function to show the slides in the verse section
//Ensuring that verseSlides is defined when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOM fully loaded and parsed");
  let verseSlides = document.getElementsByClassName("verseSlides"); // Used for bible verse slideshow
  let patronSlides = document.getElementsByClassName("patronSaint"); //Used for patron saint divs

  // Function to show the slides in the verse section
  let verseSlideIndex = 0;
  showSlidesVerse(); 

  // Function to show the patron saints
  let patronSlideIndex = 0;
  showPatronSaints(); 

  // Function to show the slides in the verse section (based on slide number with delay)
  function showSlidesVerse() {
    console.log("showSlidesVerse function called");
  
    let i; // Loop variable
    // if (verseSlides.length == 1) {
    //   console.log("No verse slides found");
    // }
  
    // let dots = document.getElementsByClassName("dot");
    // Hiding all slides initially
    for (i = 0; i < verseSlides.length; i++) {
      verseSlides[i].style.display = "none";
    }
    //Incrementing the slide index
    verseSlideIndex++;
    // If the slide index is greater than the total number of slides, set the slide index to 1 (resetting the slide index)
    if (verseSlideIndex > verseSlides.length) {
      verseSlideIndex = 1
    }
  
    //Displaying the current slide
    verseSlides[verseSlideIndex-1].style.display = "block";
    // dots[verseSlideIndex-1].className += " active";
    
    setTimeout(showSlidesVerse, 8000); // Change image every 2 seconds
  }


  // Function to show patronSaints 
  function showPatronSaints(){  
    let j; 

    // Hiding all slides initially
    for (j = 0; j < patronSlides.length; j++) {
      patronSlides[j].style.display = "none";
      console.log("Hidden")
    }
    //Incrementing the slide index
    patronSlideIndex++;
    // If the slide index is greater than the total number of slides, set the slide index to 1 (resetting the slide index)
    if (patronSlideIndex > patronSlides.length) {
      patronSlideIndex = 1
    }
    //Displaying the current slide
    patronSlides[patronSlideIndex-1].style.display = "flex";
    setTimeout(showPatronSaints, 8000); // Change image every 2 seconds. This continously runs
  }

});


// Function to show the info of the news/event in the home page
function showEventInfo(eventInfo) {
  // console.log("showInfo function called");
  console.log(eventInfo);
  var eventInfo = document.getElementById(eventInfo);
  if (eventInfo.classList.contains("show")) {
    eventInfo.classList.remove("show");
  } else {
    eventInfo.classList.add("show");
  }
}

// Function to show the info of the news/event in the home page
function showDownloadsInfo(downloadsInfo) {
  // console.log("showInfo function called");
  console.log(downloadsInfo);
  var downloadsInfo = document.getElementById(downloadsInfo);
  if (downloadsInfo.classList.contains("show")) {
    downloadsInfo.classList.remove("show");
  } else {
    downloadsInfo.classList.add("show");
  }
}






