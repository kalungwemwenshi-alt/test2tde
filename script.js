// script.js

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Modal handling
const modalBackdrop = document.getElementById("modalBackdrop");
const bookBtn = document.getElementById("bookBtn");
const primaryCTA = document.getElementById("primaryCTA");
const openBooking = document.getElementById("openBooking");
const closeModal = document.getElementById("closeModal");

function openModal() {
  modalBackdrop.classList.add("active");
  modalBackdrop.setAttribute("aria-hidden", "false");
}

function closeBookingModal() {
  modalBackdrop.classList.remove("active");
  modalBackdrop.setAttribute("aria-hidden", "true");
}

if (bookBtn) bookBtn.addEventListener("click", openModal);
if (primaryCTA) primaryCTA.addEventListener("click", openModal);
if (openBooking) openBooking.addEventListener("click", openModal);
if (closeModal) closeModal.addEventListener("click", closeBookingModal);

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    closeBookingModal();
  }
});

// Lead magnet form
const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = leadForm.email.value;
    if (!email) return alert("Please enter a valid email.");
    alert(`Thank you! Your free guide will be sent to: ${email}`);
    leadForm.reset();
  });
}

// Scroll animations (fade-in)
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeEls.forEach((el) => observer.observe(el));

// WhatsApp button inside modal
const whatsappBtn = document.getElementById("whatsappSlot");
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", function() {
    window.open("https://wa.link/xtsqiz", "_blank");
  });
}

// Contact form with mailto
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent("New Enquiry from Website");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage:\n${message}`);

    window.location.href = `mailto:yourname@email.com?subject=${subject}&body=${body}`;
  });
}

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Start the carousel
showSlide(currentIndex);
setInterval(nextSlide, 4000); // change slide every 4 seconds
