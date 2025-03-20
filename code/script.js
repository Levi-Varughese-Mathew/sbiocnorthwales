// Function to display the hamburger menu when icon is clicked
function menuFunction() {
    var menu = document.getElementById("myLinks");
    var mainContainer = document.getElementById("container");
    var btnOpen = document.getElementById("btnOpenMenu");
    var btnClose = document.getElementById("btnCloseMenu");
    
    // If the menu is open, close it. If it is closed, open it
    if (menu.style.display == "block" ) {
      menu.style.display = "none";
      mainContainer.style.display = "block";
      btnClose.style.display = "none"; //Displays the menu icon when the menu is open
      btnOpen.style.display = "inline-block"; // Hides the close icon when the menu is open
      
      
    } 
    // If the menu is closed, open it
    else {
      menu.style.display = "block";
      mainContainer.style.display = "none";
      btnOpen.style.display = "none"; // Hides the menu icon when the menu is open
      btnClose.style.display = "inline-block"; // Shows the close icon when the menu is open
      // menu.style.position = "absolute";
      menu.style.width = "100%";
      menu.style.height = "70vh";
      // menu.style.marginleft = "-10pmenu"
    }

  }

// To show the container and hide the hamburger navigation menu when the window is resized
  function showContainer() {
    var navBar = document.getElementById("navBar");
    var menu = document.getElementById("myLinks");
    var mainContainer = document.getElementById("container");

    var btnOpen = document.getElementById("btnOpenMenu");
    var btnClose = document.getElementById("btnCloseMenu");

    // Hiding the menu when the window is resized
    menu.style.display = "none";
    
    // Showing main container when the window is resized
    mainContainer.style.display = "block";
    
    //Showing the btnOpenMenu when the window is resized and page is in mobile view. Done by checking if navigation bar is visible or not
    if (window.getComputedStyle(navBar).display == "none") {
      // console.log("Navbar is hidden");
      btnOpen.style.display = "inline-block";
      btnClose.style.display = "none";
    } else {
      // console.log("Navbar is visible");
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

// Function to change images in the horizontal row
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide() {
  slides[currentIndex].classList.remove("active"); // Hide current image
  currentIndex = (currentIndex + 1) % slides.length; // Move to next image
  slides[currentIndex].classList.add("active"); // Show next image
}

setInterval(changeSlide, 1000); // Change image every 3 seconds
        