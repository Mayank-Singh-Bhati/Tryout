let imgPath = document.getElementById("menu");
let nav = document.getElementById("navitem");
const menuChange = () => {
  if (imgPath.src.match("../img/menu.svg")) {
    imgPath.src = "../img/close.svg";
    document.body.style.overflowY = "hidden";
  } else {
    imgPath.src = "../img/menu.svg";
    document.body.style.overflowY = "auto";
  }
};
const menuToggle = () => {
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
}

// Faq
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
});

document.querySelector(".home").addEventListener('click', () => {
  menuChange();
  menuToggle();
  document.body.style.overflowY = "auto";
  window.scrollTo({ top: 0, behavior: 'smooth'});
});

document.querySelector(".about-us-link").addEventListener('click', () => {
  menuChange();
  menuToggle();
  document.body.style.overflowY = "auto";
  document.querySelector(".about-us").scrollIntoView({behavior: "smooth"});
});

document.querySelector(".contact-us-link").addEventListener('click', () => {
  menuChange();
  menuToggle();
  document.body.style.overflowY = "auto";
  document.querySelector(".contact-us").scrollIntoView({behavior: "smooth"});
});

document.querySelector(".faq-link").addEventListener('click', () => {
  menuChange();
  menuToggle();
  document.body.style.overflowY = "auto";
  document.querySelector(".faq-section").scrollIntoView({behavior: "smooth"});
});


var toTopButton = document.getElementById("to-top-button");

        // When the user scrolls down 200px from the top of the document, show the button
        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                toTopButton.classList.remove("hidden");
            } else {
                toTopButton.classList.add("hidden");
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function goToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth'});
        }
// document.addEventListener("click", () => {
//   let action = document.querySelector(".faq");
//   if(action.classList.contains("active")) {
//     action.classList.remove("active");
//   }
// })