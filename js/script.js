
// nav section Active

var navlinks = document.querySelectorAll(".nav-link");

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        navlinks.forEach(link => {
            link.classList.remove('active');

        });

        link.classList.add('active');
    });

});


// form validation
var form = document.getElementById('contact-form');
var nameField = document.getElementById('name');
var emailField = document.getElementById('email');
var messageField = document.getElementById('message');


form.addEventListener('submit', (valid) => {
    // empty field cannot be submitted
    valid.preventDefault();

    // take value from input(trim reduce befor and after spacing)
    var name = nameField.value.trim();
    var email = emailField.value.trim();
    var message = messageField.value.trim();

    // email regex pattern
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // main validation
    if (name === '') {
        alert("Please Enter A Valid Name");
        nameField.focus();
        return;
    }

    else if (email === '') {
        alert("Email Field Cannot be Empty");
        emailField.focus();
        return;
    } else if (!emailPattern.test(email)) {
        alert("Please Enter A Valid Email");
        emailField.focus();
        return;
    } else if (message === '') {
        alert("Please Write Your Message");
        messageField.focus();
        return;
    } else {
        alert("Form Submitted Successfully!");
        form.reset();
    }

});
