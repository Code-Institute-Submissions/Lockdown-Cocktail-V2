// function to connect onsubmit on contact.html form to email.js
// Code taken from CI lessons on EmailJS integration.
function sendMail(contactForm) {
    emailjs.send("service_htxlx5m","template_hcxua4p", {
        "message": contactForm.message.value,
        "from_email": contactForm.emailaddress.value,
        "from_name": contactForm.name.value
    })
    .then(
        function(response) {
            alert("Thank you, your form has been submitted.")
            location.reload();
            // Add in code to link to the div in contact.html id + innerhtml = ` h4 "Thank you! Your message has been succesfully sent"
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false; //To block from loading a new page
}