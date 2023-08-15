const emailButton = document.getElementById("email-button");
const phoneButton = document.getElementById("phone-button");
const emailForm = document.getElementById("email-form");
const phoneForm = document.getElementById("phone-form");

// Show email form by default
emailButton.classList.add("active");
emailForm.style.display = "block";
phoneForm.style.display = "none";

emailButton.addEventListener("click", () => {
  emailButton.classList.add("active");
  phoneButton.classList.remove("active");
  emailForm.style.display = "block";
  phoneForm.style.display = "none";
});

phoneButton.addEventListener("click", () => {
  phoneButton.classList.add("active");
  emailButton.classList.remove("active");
  phoneForm.style.display = "block";
  emailForm.style.display = "none";
});

const flagImage = document.getElementById("flag-image");
const phoneInput = document.getElementById("phone-number");

// Store the default flag class
const defaultFlagClass = flagImage.className;

// Function to update the flag based on the selected country code
function updateFlag() {
  const selectedCode = phoneInput.value.split(" ")[0];
  if (selectedCode === "+63") {
    flagImage.className = "ph-flag";
  } else {
    flagImage.className = defaultFlagClass;
  }
}

// Attach an event listener to the input field
phoneInput.addEventListener("input", updateFlag);
