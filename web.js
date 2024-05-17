
/* document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // You can perform further actions here, such as sending the form data to a server
    // For demonstration purposes, let's just log the form values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
});
*/
 // Get the clickable image and the image container
 /*var clickableImage = document.getElementById('clickableImage');
 var imageContainer = document.getElementById('imageContainer');

 // Add a click event listener to the clickable image
 clickableImage.addEventListener('click', function() {
     // Toggle the visibility of the image container
     if (imageContainer.style.display === 'none') {
         // Show the image container with a smooth fade-in effect
         imageContainer.style.display = 'block';
         setTimeout(function() {
             imageContainer.style.opacity = '1';
         }, 10);
     } else {
         // Hide the image container with a smooth fade-out effect
         imageContainer.style.opacity = '0';
         setTimeout(function() {
             imageContainer.style.display = 'none';
         }, 500); // Delay hiding to allow opacity transition
     }
   
}) */
var clickableImages = document.querySelectorAll('#clickableImage, #clickableImage2');
var imageContainers = document.querySelectorAll('#imageContainer, #imageContainer2');

// Function to toggle visibility of an image container
function toggleVisibility(clickableImage, imageContainer) {
    clickableImage.addEventListener('click', function() {
        if (imageContainer.style.display === 'none' || imageContainer.style.display === '') {
            // Show the image container with a smooth fade-in effect
            imageContainer.style.display = 'block';
            setTimeout(function() {
                imageContainer.style.opacity = '1';
            }, 10);
        } else {
            // Hide the image container with a smooth fade-out effect
            imageContainer.style.opacity = '0';
            setTimeout(function() {
                imageContainer.style.display = 'none';
            }, 500); // Delay hiding to allow opacity transition
        }
    });
}

// Add event listeners for each clickable image and its corresponding image container
toggleVisibility(clickableImages[0], imageContainers[0]);
toggleVisibility(clickableImages[1], imageContainers[1]);

var conclusionButton = document.getElementById('conclusionButton');
var messageContent = document.getElementById('messageContent');

// Add a click event listener to the conclusion button
conclusionButton.addEventListener('click', function() {
    // Check the current display state of the message content
    if (messageContent.style.display === 'none' || messageContent.style.display === '') {
        // If the message content is hidden, show it
        messageContent.style.display = 'block';
        // Use opacity for a smooth fade-in effect
        messageContent.style.opacity = '0';
        setTimeout(function() {
            messageContent.style.opacity = '1';
        }, 10);
    } else {
        // If the message content is visible, hide it
        messageContent.style.opacity = '0';
        setTimeout(function() {
            messageContent.style.display = 'none';
        }, 300); // Allow time for the fade-out effect
    }
});


// Animate skill bars on page load
window.addEventListener('load', function() {
    animateSkills();
  });
  
  function animateSkills() {
    var skills = document.querySelectorAll('.skill .skill-level');
    skills.forEach(function(skill) {
      var width = skill.dataset.width; // Get the desired width from data attribute
      skill.style.width = width;
    });
  }




  






    


/* document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // You can perform further actions here, such as sending the form data to a server
    // For demonstration purposes, let's just log the form values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
});
*/
 // Get the clickable image and the image container
 /*var clickableImage = document.getElementById('clickableImage');
 var imageContainer = document.getElementById('imageContainer');

 // Add a click event listener to the clickable image
 clickableImage.addEventListener('click', function() {
     // Toggle the visibility of the image container
     if (imageContainer.style.display === 'none') {
         // Show the image container with a smooth fade-in effect
         imageContainer.style.display = 'block';
         setTimeout(function() {
             imageContainer.style.opacity = '1';
         }, 10);
     } else {
         // Hide the image container with a smooth fade-out effect
         imageContainer.style.opacity = '0';
         setTimeout(function() {
             imageContainer.style.display = 'none';
         }, 500); // Delay hiding to allow opacity transition
     }
   
}) */
var clickableImages = document.querySelectorAll('#clickableImage, #clickableImage2');
var imageContainers = document.querySelectorAll('#imageContainer, #imageContainer2');

// Function to toggle visibility of an image container
function toggleVisibility(clickableImage, imageContainer) {
    clickableImage.addEventListener('click', function() {
        if (imageContainer.style.display === 'none' || imageContainer.style.display === '') {
            // Show the image container with a smooth fade-in effect
            imageContainer.style.display = 'block';
            setTimeout(function() {
                imageContainer.style.opacity = '1';
            }, 10);
        } else {
            // Hide the image container with a smooth fade-out effect
            imageContainer.style.opacity = '0';
            setTimeout(function() {
                imageContainer.style.display = 'none';
            }, 500); // Delay hiding to allow opacity transition
        }
    });
}

// Add event listeners for each clickable image and its corresponding image container
toggleVisibility(clickableImages[0], imageContainers[0]);
toggleVisibility(clickableImages[1], imageContainers[1]);

var conclusionButton = document.getElementById('conclusionButton');
var messageContent = document.getElementById('messageContent');

// Add a click event listener to the conclusion button
conclusionButton.addEventListener('click', function() {
    // Check the current display state of the message content
    if (messageContent.style.display === 'none' || messageContent.style.display === '') {
        // If the message content is hidden, show it
        messageContent.style.display = 'block';
        // Use opacity for a smooth fade-in effect
        messageContent.style.opacity = '0';
        setTimeout(function() {
            messageContent.style.opacity = '1';
        }, 10);
    } else {
        // If the message content is visible, hide it
        messageContent.style.opacity = '0';
        setTimeout(function() {
            messageContent.style.display = 'none';
        }, 300); // Allow time for the fade-out effect
    }
});


// Animate skill bars on page load
window.addEventListener('load', function() {
    animateSkills();
  });
  
  function animateSkills() {
    var skills = document.querySelectorAll('.skill .skill-level');
    skills.forEach(function(skill) {
      var width = skill.dataset.width; // Get the desired width from data attribute
      skill.style.width = width;
    });
  }




