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
    this.setupRouting();
    this.loadSection("home");
  }

  renderLayout() {
    const body = document.body;
    body.innerHTML = "";

    // Add navbar
    body.appendChild(Navbar());

    // Add main container
    const main = document.createElement("main");
    main.id = "main-content";
    main.className = "min-vh-100";
    body.appendChild(main);

    // Add footer
    body.appendChild(Footer());
  }

  setupRouting() {
    // Handle navigation clicks
    document.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("nav-link") ||
        e.target.closest("a[data-section]") ||
        e.target.hasAttribute("data-section")
      ) {
        e.preventDefault();

        const target = e.target.closest("[data-section]") || e.target;
        const section =
          target.dataset.section ||
          target.textContent.toLowerCase().replace(/\\s+/g, "");
        this.loadSection(section);
      }
    });

    // Handle browser back/forward
    window.addEventListener("popstate", (e) => {
      const section = e.state?.section || "home";
      this.loadSection(section, false);
    });

    // Handle hash changes
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        this.loadSection(hash, false);
      }
    });

    // Load initial section from hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
      this.loadSection(initialHash, false);
    }
  }

  loadSection(sectionName, pushState = true) {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    mainContent.innerHTML = "";

    let section;
    switch (sectionName.toLowerCase()) {
      case "home":
        section = homeSection();
        break;
      case "reason":
      case "whymusic":
        section = reasonSection();
        sectionName = "reason";
        break;
      case "music":
      case "urmusic":
        section = urMusicSection();
        sectionName = "music";
        break;
      case "playlist":
        section = playlistSection();
        break;
      case "favourite":
      case "favourites":
        section = favouriteSection();
        sectionName = "favourite";
        break;
      default:
        section = homeSection();
        sectionName = "home";
    }

    if (section) {
      mainContent.appendChild(section);
      this.currentSection = sectionName;

      // Update URL
      if (pushState) {
        history.pushState({ section: sectionName }, "", `#${sectionName}`);
      }

      // Update active nav item
      this.updateActiveNav(sectionName);

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
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
