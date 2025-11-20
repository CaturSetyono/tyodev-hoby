function Navbar() {
  const nav = document.createElement("nav");
  nav.classList.add(
    "navbar",
    "navbar-expand-lg",
    "navbar-dark",
    "custom-navbar",
    "fixed-top"
  );
  nav.innerHTML = `
        <div class="container">
            <a href="#home" class="navbar-brand fw-bold">
                <i class="fas fa-music me-2"></i>Tyodev Music
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#home" class="nav-link active" data-section="home">
                            <i class="fas fa-home me-1"></i>Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#reason" class="nav-link" data-section="reason">
                            <i class="fas fa-heart me-1"></i>Why Music
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#music" class="nav-link" data-section="music">
                            <i class="fas fa-headphones me-1"></i>Your Music
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#playlist" class="nav-link" data-section="playlist">
                            <i class="fas fa-list me-1"></i>Playlist
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#favourite" class="nav-link" data-section="favourite">
                            <i class="fas fa-star me-1"></i>Favourites
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <style>
            .custom-navbar {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                box-shadow: 0 2px 20px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
            }
            .custom-navbar .navbar-brand {
                font-size: 1.5rem;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            .custom-navbar .nav-link {
                font-weight: 500;
                margin: 0 10px;
                transition: all 0.3s ease;
                border-radius: 25px;
                padding: 8px 16px !important;
            }
            .custom-navbar .nav-link:hover {
                background-color: rgba(255,255,255,0.2);
                transform: translateY(-2px);
            }
            .custom-navbar .nav-link.active {
                background-color: rgba(255,255,255,0.3);
                font-weight: 600;
            }
            body {
                padding-top: 80px;
            }
        </style>
    `;

  return nav;
}

export default Navbar;
