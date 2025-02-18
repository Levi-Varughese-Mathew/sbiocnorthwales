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

//JS used for lightbox
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  // slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


