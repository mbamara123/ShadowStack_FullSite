
function scrollToForm() {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMsg").innerText = "Thank you! We’ll contact you soon.";
});
