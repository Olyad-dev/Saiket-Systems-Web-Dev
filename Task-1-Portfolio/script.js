// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // Toggle icon between bars and times (X)
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenuIcon.classList.remove("fa-times");
    mobileMenuIcon.classList.add("fa-bars");
  } else {
    mobileMenuIcon.classList.remove("fa-bars");
    mobileMenuIcon.classList.add("fa-times");
  }
});

// Close mobile menu when a link is clicked
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenuIcon.classList.remove("fa-times");
    mobileMenuIcon.classList.add("fa-bars");
  });
});

// Mobile search button
const commandPaletteBtnMobile = document.getElementById(
  "commandPaletteBtnMobile"
);
if (commandPaletteBtnMobile) {
  commandPaletteBtnMobile.addEventListener("click", () => {
    openCommandPalette();
    mobileMenu.classList.add("hidden");
    mobileMenuIcon.classList.remove("fa-times");
    mobileMenuIcon.classList.add("fa-bars");
  });
}

// Icon-Only Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem("theme") || "dark";
if (currentTheme === "light") {
  body.classList.add("light-mode");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    // Switch to light mode
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    // Switch to dark mode
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "dark");
  }
});

// Typewriter Effect
document.addEventListener("DOMContentLoaded", function () {
  const dynamicText = document.getElementById("typewriterText");
  const words = [
    "Website Developer",
    "Programmer",
    "Freelancer",
    "Remote Worker",
  ];

  // Variables to track the position and deletion status of the text
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
      // If not deleting, type the next character
      charIndex++;
      setTimeout(typeEffect, 150); // Adjust typing speed
    } else if (isDeleting && charIndex > 0) {
      // If deleting, remove the previous character
      charIndex--;
      setTimeout(typeEffect, 75); // Adjust deleting speed
    } else {
      // If word is complete, either start deleting or move to the next word
      isDeleting = !isDeleting;
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 1200); // Pause before typing next word
    }
  }

  typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".s-header__nav a");

  function updateActiveNavLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink);
});

// VS Code Terminal Animation
const codeLines = [
  {
    text: '<span class="text-purple-400">const</span> <span class="text-blue-300">skills</span> = {',
    delay: 0,
  },
  {
    text: '  <span class="text-blue-300">frontend</span>: <span class="text-green-400">\'React\'</span>,',
    delay: 500,
  },
  {
    text: '  <span class="text-blue-300">backend</span>: <span class="text-green-400">\'Node.js & Express\'</span>,',
    delay: 1000,
  },
  {
    text: '  <span class="text-blue-300">database</span>: <span class="text-green-400">\'MySQL\'</span>,',
    delay: 1500,
  },
  {
    text: '  <span class="text-blue-300">stateManagement</span>: <span class="text-green-400">\'Redux\'</span>,',
    delay: 2000,
  },
  {
    text: '  <span class="text-blue-300">authentication</span>: <span class="text-green-400">\'JWT\'</span>,',
    delay: 2500,
  },
  {
    text: '  <span class="text-blue-300">styling</span>: <span class="text-green-400">\'Tailwind CSS\'</span>,',
    delay: 3000,
  },
  {
    text: '  <span class="text-blue-300">tools</span>: [<span class="text-green-400">\'Git\'</span>, <span class="text-green-400">\'Docker\'</span>, <span class="text-green-400">\'AWS\'</span>]',
    delay: 3500,
  },
  { text: "};", delay: 4000 },
  { text: "", delay: 4500 },
  {
    text: '<span class="text-slate-500">// Ready to build amazing things! 🚀</span>',
    delay: 5000,
  },
];

const codeEditor = document.getElementById("codeEditor");

codeLines.forEach((line) => {
  setTimeout(() => {
    const lineDiv = document.createElement("div");
    lineDiv.className = "code-line";
    lineDiv.innerHTML = line.text;
    lineDiv.style.animationDelay = "0s";
    codeEditor.appendChild(lineDiv);
  }, line.delay);
});

// Project Filtering
const filterButtons = document.querySelectorAll(".filter-btn");sear
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // Update active button
    filterButtons.forEach((btn) => {
      btn.classList.remove("active", "bg-primary", "text-white");
      btn.classList.add("bg-slate-800");
    });
    button.classList.add("active", "bg-primary", "text-white");
    button.classList.remove("bg-slate-800");

    // Filter projects
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.classList.remove("hidden-project");
        card.style.opacity = "0";
        setTimeout(() => {
          card.style.transition = "opacity 0.5s ease";
          card.style.opacity = "1";
        }, 10);
      } else {
        card.style.opacity = "0";
        setTimeout(() => {
          card.classList.add("hidden-project");
        }, 300);
      }
    });
  });
});

// Command Palette
const commandPalette = document.getElementById("commandPalette");
const commandPaletteBtn = document.getElementById("commandPaletteBtn");
const closeCommandPalette = document.getElementById("closeCommandPalette");
const commandInput = document.getElementById("commandInput");
const commandResults = document.getElementById("commandResults");

const commands = [
  {
    name: "GitHub",
    icon: "fab fa-github",
    action: () => window.open("https://github.com", "_blank"),
  },
  { name: "Home", icon: "fas fa-home", action: () => scrollToSection("home") },
  {
    name: "About",
    icon: "fas fa-user",
    action: () => scrollToSection("about"),
  },
  {
    name: "Skills",
    icon: "fas fa-code",
    action: () => scrollToSection("skills"),
  },
  {
    name: "Services",
    icon: "fas fa-cogs",
    action: () => scrollToSection("services"),
  },
  {
    name: "Experience",
    icon: "fas fa-briefcase",
    action: () => scrollToSection("experience"),
  },
  {
    name: "Projects",
    icon: "fas fa-folder",
    action: () => scrollToSection("projects"),
  },
  {
    name: "Contact",
    icon: "fas fa-envelope",
    action: () => scrollToSection("contact"),
  },
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin",
    action: () => window.open("https://linkedin.com", "_blank"),
  },
];

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    closeCommandPaletteModal();
  }
}

function openCommandPalette() {
  commandPalette.classList.remove("hidden");
  commandPalette.classList.add("flex");
  commandInput.focus();
  updateCommandResults("");
}

function closeCommandPaletteModal() {
  commandPalette.classList.add("hidden");
  commandPalette.classList.remove("flex");
  commandInput.value = "";
}

function updateCommandResults(query) {
  const filtered = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  commandResults.innerHTML = filtered
    .map(
      (cmd) => `
        <div class="command-item p-3 bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer transition flex items-center gap-3" data-command="${cmd.name}">
            <i class="${cmd.icon} text-primary"></i>
            <span>${cmd.name}</span>
        </div>
    `
    )
    .join("");

  // Add click handlers
  document.querySelectorAll(".command-item").forEach((item) => {
    item.addEventListener("click", () => {
      const cmdName = item.getAttribute("data-command");
      const command = commands.find((c) => c.name === cmdName);
      if (command) command.action();
    });
  });
}

commandPaletteBtn.addEventListener("click", openCommandPalette);
closeCommandPalette.addEventListener("click", closeCommandPaletteModal);

commandInput.addEventListener("input", (e) => {
  updateCommandResults(e.target.value);
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    openCommandPalette();
  }
  if (e.key === "Escape") {
    closeCommandPaletteModal();
  }
});

// Click outside to close
commandPalette.addEventListener("click", (e) => {
  if (e.target === commandPalette) {
    closeCommandPaletteModal();
  }
});

// Contact Form - EmailJS integration
const contactForm = document.getElementById("contactForm");


const EMAILJS_USER_ID = "oL9IyzNy9oD4BJz82"; // e.g. user_xxx
const EMAILJS_SERVICE_ID = "service_mvhxni8"; // e.g. service_xxx
const EMAILJS_TEMPLATE_ID = "template_58z9uxc"; // e.g. template_xxx

// Initialize EmailJS if user id is provided
if (
  typeof emailjs !== "undefined" &&
  EMAILJS_USER_ID &&
  EMAILJS_USER_ID !== "YOUR_EMAILJS_USER_ID"
) {
  try {
    emailjs.init(EMAILJS_USER_ID);
  } catch (err) {
    console.warn("EmailJS init error:", err);
  }
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const params = {
    from_name: formData.get("name"),
    from_email: formData.get("email"),
    message: formData.get("message"),
  };

  // If EmailJS is configured, send via EmailJS
  if (
    typeof emailjs !== "undefined" &&
    EMAILJS_USER_ID &&
    EMAILJS_USER_ID !== "oL9IyzNy9oD4BJz82"
  ) {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params).then(
      (response) => {
        console.log("EmailJS success:", response.status, response.text);
        alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset();
      },
      (error) => {
        console.error("EmailJS error:", error);
        alert(
          "Sorry, something went wrong sending your message. Please try again later."
        );
      }
    );
    return;
  }

  // Fallback: open user's email client with mailto (best-effort)
  const subject = encodeURIComponent("New message from portfolio contact form");
  const body = encodeURIComponent(
    `Name: ${params.from_name}\nEmail: ${params.from_email}\n\nMessage:\n${params.message}`
  );
  const mailtoLink = `mailto:olayidgetinet@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Add scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card, .glass-effect").forEach((el) => {
  observer.observe(el);
});
