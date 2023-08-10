// Smooth scroll effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search icon click action (You can customize this to implement search functionality)
const searchIcon = document.querySelector('.search-icon');
searchIcon.addEventListener('click', function () {
    // Implement search functionality or toggle search bar visibility
    // For example:
    // const searchBar = document.querySelector('.search-bar');
    // searchBar.classList.toggle('show');
});

// Form validation for the contact form
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit-btn');
const formError = document.querySelector('#form-error');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    resetFormErrors();

    const isFormValid = validateForm();

    if (isFormValid) {
        // If all fields are valid, submit the form (you can use AJAX to submit to a server)

        // For example:
        // const formData = {
        //     name: nameInput.value.trim(),
        //     email: emailInput.value.trim(),
        //     subject: subjectInput.value.trim(),
        //     message: messageInput.value.trim()
        // };

        // // You can use fetch API or any library for AJAX request
        // fetch('/submit-contact-form', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle the response, show success message, etc.
        // })
        // .catch(error => {
        //     console.error('Error submitting the form:', error);
        // });
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});

function resetFormErrors() {
    const formInputs = [nameInput, emailInput, subjectInput, messageInput];
    formInputs.forEach(input => {
        input.classList.remove('input-error');
    });
    formError.textContent = '';
}

function validateForm() {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Please enter your name.');
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Please enter your email.');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    if (subjectInput.value.trim() === '') {
        showError(subjectInput, 'Please enter a subject.');
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Please enter a message.');
        isValid = false;
    }

    return isValid;
}

function showError(inputElement, errorMessage) {
    inputElement.classList.add('input-error');
    formError.textContent = errorMessage;
}

// Add this JavaScript code to handle form submission

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Process form data (you can handle form submission here, like sending an email)

    // Clear form fields after submission
    event.target.reset();
});


