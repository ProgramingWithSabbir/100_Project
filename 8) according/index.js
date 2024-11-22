// Select all FAQ toggle buttons
const toggles = document.querySelectorAll(".faq-toggle");

// Add click event listeners to each toggle button
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const faq = toggle.parentNode; // Get the parent element of the toggle button
    const content = faq.querySelector(".faq-content"); // Find the content inside the FAQ

    // Toggle visibility of the content
    if (content.style.display === "block") {
      content.style.display = "none";
      toggle.textContent = "+"; // Change the toggle button text to "+"
    } else {
      content.style.display = "block";
      toggle.textContent = "-"; // Change the toggle button text to "-"
    }
  });
});
