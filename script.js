const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

// Wait for the DOM to load before adding the event listener
document.addEventListener("DOMContentLoaded", function() {
  
    // Get the button element
    const myButton = document.getElementById("myButton");
    
    // Add an event listener to the button
    myButton.addEventListener("click", function() {
      // Replace the text of the button with "Clicked!"
      myButton.textContent = "You're awesome!";
    });
    
  });
  