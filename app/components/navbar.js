function Navbar() {
  const nav = document.createElement("nav");
  nav.classList.add(
    "navbar",
    "navbar-expand-lg",
    "fixed-top",
    "navbar-neo"
  );
  nav.innerHTML = `
        <div class="container">
            <a href="#home" class="navbar-brand d-flex align-items-center">
                <i class="fas fa-bolt me-2 text-primary"></i>TYODEV
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#home" class="nav-link active" data-section="home">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a href="#reason" class="nav-link" data-section="reason">REASON</a>
                    </li>
                    <li class="nav-item">
                        <a href="#playlist" class="nav-link" data-section="playlist">PLAYLIST</a>
                    </li>
                    <li class="nav-item">
                        <a href="#favourite" class="nav-link" data-section="favourite">FAVOURITE</a>
                    </li>
                    <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
                        <a href="#music" class="btn btn-cta" data-section="music">
                            urMUSIC AI <i class="fas fa-arrow-right ms-1"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <style>
            .navbar-neo {
                background-color: var(--neo-white);
                border-bottom: var(--neo-border);
                padding: 1rem 0;
            }
            
            .navbar-brand {
                font-size: 1.8rem;
                color: var(--neo-black) !important;
                text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
            }
            
            .text-primary {
                color: var(--neo-blue) !important;
            }

            .nav-link {
                font-weight: 800;
                color: var(--neo-black) !important;
                font-size: 0.9rem;
                margin: 0 5px;
                border: 2px solid transparent;
                transition: all 0.2s ease;
            }
            
            .nav-link:hover, .nav-link.active {
                background-color: var(--neo-green);
                border: 2px solid var(--neo-black);
                box-shadow: 3px 3px 0px var(--neo-black);
                transform: translate(-2px, -2px);
            }

            .btn-cta {
                background-color: var(--neo-black);
                color: var(--neo-green);
                border: 2px solid var(--neo-black);
                border-radius: 0;
                font-weight: 800;
                box-shadow: 4px 4px 0px var(--neo-green);
                transition: all 0.2s;
            }

            .btn-cta:hover {
                transform: translate(2px, 2px);
                box-shadow: 1px 1px 0px var(--neo-green);
                color: var(--neo-green);
            }
            
            .navbar-toggler {
                border: 3px solid var(--neo-black);
                border-radius: 0;
            }
        </style>
    `;

  return nav;
}

export default Navbar;