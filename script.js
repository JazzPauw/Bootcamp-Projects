document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").onsubmit = function() {
        alert("Contact form submitted!");
        return true; 
    };
});
