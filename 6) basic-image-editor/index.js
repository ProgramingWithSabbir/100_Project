// Select all input controls
const inputs = document.querySelectorAll(".form-control input");

// Add event listeners for change and mousemove
inputs.forEach((input) => input.addEventListener("change", updateProperties));
inputs.forEach((input) =>
  input.addEventListener("mousemove", updateProperties)
);

// Update CSS variables based on input values
function updateProperties() {
  const suffix = this.dataset.sizing || ""; // Get unit (e.g., px, %)
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
