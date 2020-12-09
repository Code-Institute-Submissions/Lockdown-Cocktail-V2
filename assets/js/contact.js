// function to connect onsubmit on contact.html form to email.js
console.log("hello");
function sendMail(contactForm) {
    emailjs.send("service_htxlx5m","template_hcxua4p", {
        "message": contactForm.message.value,
        "from_email": contactForm.emailaddress.value,
        "from_name": contactForm.name.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false; //To block from loading a new page
}