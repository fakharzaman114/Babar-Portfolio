document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const navMenu = document.querySelector("nav ul");
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");
  const dropdownLinks = document.querySelectorAll(".dropdown-content a");
  const navLinks = document.querySelectorAll("nav ul li a");

  // Toggle mobile menu
  menuButton.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      // Ensure dropdown is hidden when menu is toggled
      dropdownContent.style.display = "none";
  });

  // Handle clicks outside the dropdown to close it
  document.addEventListener("click", function (event) {
      // Check if the click is outside of the dropdown
      if (dropdown && !dropdown.contains(event.target) && !event.target.classList.contains("dropbtn")) {
          dropdownContent.style.display = "none";
      }

      // Hide the mobile menu when clicking a link inside
      if (navMenu.classList.contains("active") && event.target.closest("nav ul li a")) {
          navMenu.classList.remove("active");
      }
  });

  // Toggle dropdown visibility independently of the mobile menu
  if (dropdown) {
      dropdown.addEventListener("click", function (event) {
          // Prevent click from closing the dropdown
          event.stopPropagation();
          dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
      });
  }

  // Close dropdown and hide navbar links when any link inside it is clicked
  dropdownLinks.forEach(function (link) {
      link.addEventListener("click", function () {
          dropdownContent.style.display = "none";
          navMenu.classList.remove("active"); // Hide the navbar menu
      });
  });

  // Handle FAQ item toggles
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", function () {
          item.classList.toggle("active");
      });
  });
});
