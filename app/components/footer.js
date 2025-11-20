function Footer() {
  const footer = document.createElement("footer");
  footer.classList.add("footer-neo");
  footer.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-5 mb-4">
                    <h3 class="text-white mb-3">TYODEV MUSIC</h3>
                    <p class="text-gray">
                        Temukan playlist favoritmu juga di spotify buat nemenin hari-harimu dengan vibe positif dan energi seru!
                        Hari yang  panjang butuh musik yang tepat untuk mengiringinya.
                    </p>
                    <div class="social-links mt-3">
                        <a href="https://open.spotify.com/user/31orerj4pogknp6ttficxuzbnhei" class="social-btn"><i class="fab fa-spotify"></i></a>
                        <a href="https://www.instagram.com/tyodev.id/" class="social-btn"><i class="fab fa-instagram"></i></a>
                        <a href="https://github.com/CaturSetyono" class="social-btn"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="text-accent mb-3">NAVIGATION</h5>
                    <ul class="footer-links">
                        <li><a href="#home" onclick="document.querySelector('[data-section=\"home\"]').click()">Home</a></li>
                        <li><a href="#reason" onclick="document.querySelector('[data-section=\"reason\"]').click()">Reason</a></li>
                        <li><a href="#playlist" onclick="document.querySelector('[data-section=\"playlist\"]').click()">Playlist</a></li>
                    </ul>
                </div>
                
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 class="text-accent mb-3">CURRENTLY CODING</h5>
                    <div class="coding-status">
                        <div class="d-flex align-items-center">
                            <div class="status-dot"></div>
                            <span class="ms-2 font-monospace">Project: Pemrograman Web Mobile</span>
                        </div>
                        <div class="progress mt-2" style="height: 10px; border: 1px solid white; border-radius:0;">
                            <div class="progress-bar bg-accent" role="progressbar" style="width: 85%"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom border-top border-secondary pt-4 mt-4 text-center">
                <p class="text-gray small mb-0">© Catur Setyono || 233210009</p>
            </div>
        </div>
        
        <style>
            .footer-neo {
                background: var(--neo-black);
                color: var(--neo-white);
                padding: 4rem 0 2rem;
                border-top: 5px solid var(--neo-green);
                margin-top: auto;
            }
            
            .text-accent { color: var(--neo-green) !important; }
            .bg-accent { background-color: var(--neo-green) !important; }
            .text-gray { color: #ccc; }
            
            .social-btn {
                display: inline-flex;
                width: 45px; height: 45px;
                border: 2px solid var(--neo-white);
                color: var(--neo-white);
                align-items: center; justify-content: center;
                margin-right: 10px;
                font-size: 1.2rem;
                transition: all 0.2s;
                text-decoration: none;
            }
            
            .social-btn:hover {
                background: var(--neo-green);
                color: var(--neo-black);
                border-color: var(--neo-green);
                box-shadow: 3px 3px 0px var(--neo-white);
            }
            
            .footer-links { list-style: none; padding: 0; }
            .footer-links li { margin-bottom: 10px; }
            .footer-links a {
                color: var(--neo-white);
                text-decoration: none;
                font-weight: 600;
                transition: color 0.2s;
            }
            .footer-links a:hover { color: var(--neo-green); letter-spacing: 1px; }
            
            .status-dot {
                width: 10px; height: 10px;
                background: red;
                border-radius: 50%;
                animation: blink 1s infinite;
            }
            
            @keyframes blink { 50% { opacity: 0; } }
        </style>
    `;

  return footer;
}

export default Footer;