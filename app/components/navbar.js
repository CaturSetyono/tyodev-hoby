function Navbar() {
  const nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-expand-lg", "fixed-top", "navbar-neo");
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
                    <li class="nav-item">
                        <a href="#gallery" class="nav-link" data-section="gallery">GALLERY</a>
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
                padding: 0.8rem 0;
                min-height: 70px;
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
                padding: 0.5rem 0.75rem;
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
                padding: 0.5rem 1rem;
                white-space: nowrap;
            }

            .btn-cta:hover {
                transform: translate(2px, 2px);
                box-shadow: 1px 1px 0px var(--neo-green);
                color: var(--neo-green);
            }
            
            .navbar-toggler {
                border: 3px solid var(--neo-black);
                border-radius: 0;
                padding: 0.5rem;
                background-color: var(--neo-green);
            }

            .navbar-toggler:focus {
                box-shadow: 0 0 0 0.25rem var(--neo-green);
            }

            .navbar-toggler-icon {
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='3' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
            }

            /* Responsive Design */
            @media (max-width: 991.98px) {
                .navbar-neo {
                    padding: 0.5rem 0;
                }

                .navbar-brand {
                    font-size: 1.5rem;
                }

                .navbar-nav {
                    background-color: var(--neo-white);
                    border: 3px solid var(--neo-black);
                    border-top: none;
                    padding: 1rem;
                    margin-top: 0.5rem;
                    box-shadow: 6px 6px 0px var(--neo-black);
                }

                .nav-item {
                    margin-bottom: 0.5rem;
                }

                .nav-link {
                    display: block;
                    width: 100%;
                    text-align: center;
                    margin: 0;
                    margin-bottom: 0.5rem;
                    padding: 0.75rem;
                    font-size: 1rem;
                }

                .btn-cta {
                    display: block;
                    width: 100%;
                    text-align: center;
                    margin-top: 0.5rem;
                    padding: 0.75rem;
                    font-size: 1rem;
                }

                /* Fix collapse behavior */
                .navbar-collapse {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                }
            }

            @media (max-width: 575.98px) {
                .navbar-brand {
                    font-size: 1.3rem;
                }

                .navbar-brand i {
                    font-size: 1.2rem;
                }

                .container {
                    padding-left: 15px;
                    padding-right: 15px;
                }

                .navbar-nav {
                    margin-left: -15px;
                    margin-right: -15px;
                }

                .nav-link {
                    font-size: 0.9rem;
                    padding: 0.6rem;
                }

                .btn-cta {
                    font-size: 0.9rem;
                    padding: 0.6rem;
                }
            }

            @media (max-width: 374.98px) {
                .navbar-brand {
                    font-size: 1.1rem;
                }

                .nav-link {
                    font-size: 0.8rem;
                    padding: 0.5rem;
                }

                .btn-cta {
                    font-size: 0.8rem;
                    padding: 0.5rem;
                }
            }
        </style>
    `;

  return nav;
}

export default Navbar;
