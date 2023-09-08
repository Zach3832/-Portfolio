// js for nav bar

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks  = document.getElementsByClassName('navbar-links')[0] 

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})


// script.js
document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project");

    projectCards.forEach((card) => {
        card.addEventListener("click", () => {
            // Add code to display project details or navigate to project pages
        });
    });
});

//-------------------//

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form data
        const formData = new FormData(form);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // You can now access the form data as an object
        console.log(formDataObject);

        // Here, you can send the data to your server or process it as needed
    });
});
