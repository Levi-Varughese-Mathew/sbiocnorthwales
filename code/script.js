// Function to display the hamburger menu when icon is clicked
function menuFunction() {
    var menu = document.getElementById("myLinks");
    var mainContainer = document.getElementById("container");
    var btnOpen = document.getElementById("btnOpenMenu");
    var btnClose = document.getElementById("btnCloseMenu");
    
    
    if (menu.style.display == "block" ) {
      menu.style.display = "none";
      mainContainer.style.display = "block";
      btnClose.style.display = "none"; //Displays the menu icon when the menu is open
      btnOpen.style.display = "inline-block"; // Hides the close icon when the menu is open
      
      
    } else {
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
    var menu = document.getElementById("myLinks");
    var mainContainer = document.getElementById("container");
    menu.style.display = "none";
    mainContainer.style.display = "block";
  }

// Function to show information when image is clicked for each car type
  function showInfo(source){
    
    //console.log("Function Called")
    //console.log(source)
   
    
    if (source == "4menu4Pic" && pic4menu4 =="pic"){
      var image = document.getElementById("button1"); 
      image.src = "images/indemenu/info/4menu4.png";  
      pic4menu4="temenut";    
    } 
    
    else if (pic4menu4="temenut"){
      var image = document.getElementById("button1"); 
      image.src = "images/indemenu/4menu4.png";
      pic4menu4="pic";
    }

    
    if (source == "convertiblePic" && picConvertible =="pic"){
      var image = document.getElementById("button2"); 
      console.log("Hai")
      image.src = "images/indemenu/info/convertible.png";
      picConvertible="temenut";
      
    } 
    
    else if (picConvertible="temenut") {
      var image = document.getElementById("button2"); 
      image.src = "images/indemenu/convertible.png";
      picConvertible="pic";
    }

   
    if (source == "coupePic" && picCoupe =="pic"){
      var image = document.getElementById("button3"); 
      image.src = "images/indemenu/info/coupe.png";
      picCoupe="temenut";
      
    } 
    
    else if (picCoupe="temenut") {
      var image = document.getElementById("button3"); 
      image.src = "images/indemenu/coupe.png";
      picCoupe="pic";
    }

    
    if (source == "hatchbackPic" && picHatchback =="pic"){
      var image = document.getElementById("button4"); 
      picHatchback="temenut";
      image.src = "images/indemenu/info/hatchback.png";
      
    } else if (picHatchback="temenut"){
      var image = document.getElementById("button4"); 
      image.src = "images/indemenu/hatchback.png";
      picHatchback="pic";
    }

    
    if (source == "mpvPic" && picMPV =="pic"){
      var image = document.getElementById("button5"); 
      picMPV="temenut";
      image.src = "images/indemenu/info/mpv.png";
      
    } else if (picMPV="temenut") {
      var image = document.getElementById("button5"); 
      image.src = "images/indemenu/mpv.png";
      picMPV="pic";
    }

    if (source == "pickupPic" && picPickup =="pic"){
      var image = document.getElementById("button6"); 
      picPickup="temenut";
      image.src = "images/indemenu/info/pickup.png";
      
    } else if (picPickup="temenut") {
      var image = document.getElementById("button6"); 
      image.src = "images/indemenu/pickup.png";
      picPickup="pic";
    }

    if (source == "sedanPic" && picSedan =="pic"){
      var image = document.getElementById("button7"); 
      picSedan="temenut";
      image.src = "images/indemenu/info/sedan.png";
      
    } else if (picSedan="temenut") {
      var image = document.getElementById("button7"); 
      image.src = "images/indemenu/sedan.png";
      picSedan="pic";
    }

    if (source == "suvPic" && picSUV =="pic"){
      var image = document.getElementById("button8"); 
      picSUV="temenut";
      image.src = "images/indemenu/info/suv.png";
      
    } else if (picSUV="temenut"){
      var image = document.getElementById("button8"); 
      image.src = "images/indemenu/suv.png";
      picSUV="pic";
    }

    else{
      console.log("Nice Try")
    }


  }

