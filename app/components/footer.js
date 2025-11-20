function Footer() {
  const footer = document.createElement("footer");
  footer.classList.add("custom-footer");
  footer.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <h5 class="fw-bold mb-3">
                        <i class="fas fa-music me-2"></i>Tyodev Music
                    </h5>
                    <p class="text-muted">
                        Sharing my musical journey as a student who finds 
                        life's soundtrack in every beat, melody, and rhythm.
                    </p>
                    <div class="social-links">
                        <a href="https://open.spotify.com/user/31orerj4pogknp6ttficxuzbnhei" target="_blank" class="social-link spotify">
                            <i class="fab fa-spotify"></i>
                        </a>
                        <a href="#" class="social-link instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="social-link youtube">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="#" class="social-link github">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-6 mb-4">
                    <h6 class="fw-semibold mb-3">Quick Links</h6>
                    <ul class="footer-links">
                        <li><a href="#home" data-section="home">Home</a></li>
                        <li><a href="#reason" data-section="reason">Why Music</a></li>
                        <li><a href="#playlist" data-section="playlist">Playlists</a></li>
                        <li><a href="#favourite" data-section="favourite">Favourites</a></li>
                    </ul>
                </div>
                
                <div class="col-lg-3 col-md-6 mb-4">
                    <h6 class="fw-semibold mb-3">Music Genres</h6>
                    <div class="genre-tags">
                        <span class="genre-tag">Indie Rock</span>
                        <span class="genre-tag">Lo-fi</span>
                        <span class="genre-tag">Alternative</span>
                        <span class="genre-tag">Electronic</span>
                        <span class="genre-tag">R&B</span>
                        <span class="genre-tag">Jazz</span>
                    </div>
                </div>
                
                <div class="col-lg-3 mb-4">
                    <h6 class="fw-semibold mb-3">Currently Playing</h6>
                    <div class="now-playing">
                        <div class="track-info">
                            <div class="track-name">Do I Wanna Know?</div>
                            <div class="artist-name">Arctic Monkeys</div>
                        </div>
                        <div class="play-indicator">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr class="my-4">
            
            <div class="row align-items-center">
                <div class="col-md-6">
                    <p class="mb-0 text-muted small">
                        © 2025 Tyodev Music. Made with ❤️ for music lovers.
                    </p>
                </div>
                <div class="col-md-6 text-md-end">
                    <p class="mb-0 text-muted small">
                        Built with Bootstrap & lots of coffee ☕
                    </p>
                </div>
            </div>
        </div>
        
        <style>
            .custom-footer {
                background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
                color: white;
                padding: 4rem 0 2rem;
                margin-top: 2rem;
            }
            
            .social-links {
                display: flex;
                gap: 15px;
                margin-top: 1rem;
            }
            
            .social-link {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                text-decoration: none;
                transition: all 0.3s ease;
                font-size: 1.2rem;
            }
            
            .social-link.spotify {
                background: linear-gradient(45deg, #1db954, #1ed760);
            }
            
            .social-link.instagram {
                background: linear-gradient(45deg, #e1306c, #fd1d1d, #fcb045);
            }
            
            .social-link.youtube {
                background: linear-gradient(45deg, #ff0000, #cc0000);
            }
            
            .social-link.github {
                background: linear-gradient(45deg, #333, #24292e);
            }
            
            .social-link:hover {
                transform: translateY(-5px) scale(1.1);
                box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                color: white;
            }
            
            .footer-links {
                list-style: none;
                padding: 0;
            }
            
            .footer-links li {
                margin-bottom: 8px;
            }
            
            .footer-links a {
                color: #bdc3c7;
                text-decoration: none;
                transition: color 0.3s ease;
                font-size: 0.9rem;
            }
            
            .footer-links a:hover {
                color: white;
            }
            
            .genre-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            
            .genre-tag {
                background: rgba(255,255,255,0.1);
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 0.8rem;
                color: #ecf0f1;
                border: 1px solid rgba(255,255,255,0.2);
                transition: all 0.3s ease;
            }
            
            .genre-tag:hover {
                background: rgba(255,255,255,0.2);
                transform: scale(1.05);
            }
            
            .now-playing {
                background: rgba(255,255,255,0.1);
                padding: 1rem;
                border-radius: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .track-name {
                font-weight: 600;
                color: white;
                font-size: 0.9rem;
            }
            
            .artist-name {
                color: #bdc3c7;
                font-size: 0.8rem;
                margin-top: 2px;
            }
            
            .play-indicator {
                display: flex;
                gap: 3px;
                align-items: end;
            }
            
            .bar {
                width: 3px;
                background: #1db954;
                border-radius: 2px;
                animation: bars 1s ease-in-out infinite;
            }
            
            .bar:nth-child(1) { height: 15px; animation-delay: 0s; }
            .bar:nth-child(2) { height: 20px; animation-delay: 0.1s; }
            .bar:nth-child(3) { height: 10px; animation-delay: 0.2s; }
            .bar:nth-child(4) { height: 18px; animation-delay: 0.3s; }
            
            @keyframes bars {
                0%, 100% { transform: scaleY(1); }
                50% { transform: scaleY(0.3); }
            }
        </style>
    `;

  return footer;
}

export default Footer;
