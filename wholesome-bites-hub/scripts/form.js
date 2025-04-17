// scripts/form.js
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  // Capture form input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Form validation
  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting!");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  // Display confirmation message
  const confirmationMessage = document.createElement("p");
  confirmationMessage.textContent = `Thank you, ${name}, for reaching out! We will get back to you at ${email} shortly.`;
  confirmationMessage.style.color = "green";
  confirmationMessage.style.marginTop = "1rem";

  const form = e.target;
  form.parentNode.insertBefore(confirmationMessage, form.nextSibling);

  // Reset the form
  form.reset();
});

// Helper function to validate email addresses
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
  return emailRegex.test(email);
}
