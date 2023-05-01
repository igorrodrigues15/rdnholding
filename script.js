function validateForm() {
// input value
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
  
// message erreur 
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");

    // reset message
    nameError.textContent = "";
    emailError.textContent = "";
  

    if (name === "") {
      nameError.textContent = "Nom ne doit pas être vide";
      return false;
    }
  
   
    if (email === "") {
      emailError.textContent = "Email ne doit pas être vide";
      return false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Format invalide";
      return false;
    }
  

    return true;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  

// select  element to animate 
const header = document.querySelector('h3');
const paragraphs = document.querySelectorAll('p');
const subheaders = document.querySelectorAll('h6');

// set initial styles for the elements
header.style.opacity = 0;
paragraphs.forEach(p => {
  p.style.opacity = 0;
  p.style.transform = 'translateY(20px)';
});
subheaders.forEach(h6 => {
  h6.style.opacity = 0;
  h6.style.transform = 'translateY(20px)';
});


function animate() {
  // check if the header is visible and animate it
  if (header.getBoundingClientRect().top < window.innerHeight - 100) {
    header.style.opacity = 1;
    header.style.transform = 'translateY(0)';
  }

  // loop through the paragraphs and animate them
  paragraphs.forEach(p => {
    if (p.getBoundingClientRect().top < window.innerHeight - 100) {
      p.style.opacity = 1;
      p.style.transform = 'translateY(0)';
    }
  });

  // loop through the subheaders and animate them
  subheaders.forEach(h6 => {
    if (h6.getBoundingClientRect().top < window.innerHeight - 100) {
      h6.style.opacity = 1;
      h6.style.transform = 'translateY(0)';
    }
  });
}

// add event listener to the window object
window.addEventListener('scroll', animate);




function toggleExpansion() {
  var expandedContent = document.getElementById("expanded-content");
  var expandBtn = document.getElementById("expand-btn");
  if (expandedContent.style.display === "none") {
    expandedContent.style.display = "block";
    expandBtn.innerHTML = "Cacher menu";
  } else {
    expandedContent.style.display = "none";
    expandBtn.innerHTML = "Voir le menu";
  }
}

// h1 animation :

const myHeading = document.getElementById("my-heading");

let letters = myHeading.innerText.split("");

myHeading.innerText = "";

letters.forEach(function(letter) {
  let span = document.createElement("span");
  span.innerText = letter;
  myHeading.appendChild(span);
});

let letterIndex = 0;
let interval = setInterval(showLetter, 50);

function showLetter() {
  let span = myHeading.querySelectorAll("span")[letterIndex];
  span.classList.add("visible");
  letterIndex++;

  if (letterIndex === letters.length) {
    clearInterval(interval);
  }
}

