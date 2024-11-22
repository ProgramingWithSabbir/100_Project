const input = document.querySelectorAll(".form-control input");

input.forEach((items) => items.addEventListener("change", update));
input.forEach((items) => items.addEventListener("mousemove", update));

function update() {
  const change = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + change
  );
}
