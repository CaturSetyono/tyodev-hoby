// ==========================================================================
//   Main Application - Tyodev Music Journey
//   Single Page Application with Smooth Scrolling Navigation
// ==========================================================================

// Import components
import Navbar from "./app/components/navbar.js";
import Footer from "./app/components/footer.js";
import homeSection from "./app/homeSection.js";
import reasonSection from "./app/reasonSection.js";
import urMusicSection from "./app/urMusicSection.js";
import playlistSection from "./app/playlistSection.js";
import favouriteSection from "./app/favouriteSection.js";

class App {
  constructor() {
    this.currentSection = "home";
    this.init();
  }

  init() {
    this.renderLayout();
    this.loadAllSections();
    this.setupSmoothScrolling();
    this.setupScrollSpy();

    // Initialize AOS
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    }
  }

  renderLayout() {
    const body = document.body;
    body.innerHTML = "";

    // Add navbar
    body.appendChild(Navbar());

    // Add main container
    const main = document.createElement("main");
    main.id = "main-content";
    main.style.minHeight = "100vh";
    body.appendChild(main);

    // Add footer
    body.appendChild(Footer());
  }

  loadAllSections() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) {
      console.error("Main content element not found");
      return;
    }

    // Load all sections with proper IDs and spacing
    const sections = [
      { id: "home", component: homeSection },
      { id: "reason", component: reasonSection },
      { id: "playlist", component: playlistSection },
      { id: "favourite", component: favouriteSection },
      { id: "music", component: urMusicSection },
    ];

    sections.forEach(({ id, component }, index) => {
      try {
        const section = component();
        section.id = id;

        // Add spacing between sections (except first one)
        if (index > 0) {
          section.style.paddingTop = "100px";
        }

        mainContent.appendChild(section);
        console.log(`✅ Loaded section: ${id}`);
      } catch (error) {
        console.error(`❌ Error loading section ${id}:`, error);
      }
    });
  }

  setupSmoothScrolling() {
    // Handle navigation clicks for smooth scrolling
    document.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("nav-link") ||
        e.target.closest("a[data-section]") ||
        e.target.hasAttribute("data-section")
      ) {
        e.preventDefault();

        const target = e.target.closest("[data-section]") || e.target;
        const sectionId = target.dataset.section;

        if (sectionId) {
          this.scrollToSection(sectionId);
        }
      }
    });

    // Handle hash changes for direct URL access
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        this.scrollToSection(hash);
      }
    });

    // Handle initial hash on page load
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
      setTimeout(() => this.scrollToSection(initialHash), 100);
    }
  }

  scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const navbarHeight = 80; // Height of fixed navbar
      const targetPosition = targetSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Update URL hash
      history.replaceState(null, null, `#${sectionId}`);

      // Update active nav item
      this.updateActiveNav(sectionId);
    }
  }

  setupScrollSpy() {
    let isScrolling = false;

    window.addEventListener("scroll", () => {
      if (!isScrolling) {
        requestAnimationFrame(() => {
          this.handleScroll();
          isScrolling = false;
        });
        isScrolling = true;
      }
    });
  }

  handleScroll() {
    const sections = ["home", "reason", "music", "playlist", "favourite"];
    const scrollPos = window.scrollY + 150; // Offset for navbar

    let currentSection = "home";

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element && element.offsetTop <= scrollPos) {
        currentSection = sectionId;
      }
    });

    this.updateActiveNav(currentSection);

    // Update URL hash without triggering scroll
    if (window.location.hash !== `#${currentSection}`) {
      history.replaceState(null, null, `#${currentSection}`);
    }
  }

  updateActiveNav(activeSection) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
      const linkSection = link.dataset.section;
      if (
        linkSection === activeSection ||
        (activeSection === "home" && linkSection === "home")
      ) {
        link.classList.add("active");
      }
    });
  }
}

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
