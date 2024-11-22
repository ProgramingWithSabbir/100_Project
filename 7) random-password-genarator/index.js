// Function to generate a unique password
function generatePassword() {
  const length = 12; // Length of the password
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Event listener for the Generate button
document.getElementById("generate").addEventListener("click", () => {
  const passwordField = document.getElementById("password");
  const newPassword = generatePassword();
  passwordField.value = newPassword; // Set the generated password in the input field
});
