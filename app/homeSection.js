function homeSection() {
  const section = document.createElement("section");
  section.classList.add(
    "home-section",
    "min-vh-100",
    "d-flex",
    "align-items-center"
  );
  section.innerHTML = `
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="hero-content">
                        <h1 class="display-4 fw-bold mb-4 text-gradient">Hi, I'm Tyo! 🎵</h1>
                        <h3 class="h4 mb-4 text-muted">A Student Who Lives Through Music</h3>
                        <p class="lead mb-4">
                            Sebagai mahasiswa, musik bukan hanya sekadar hiburan buat saya. 
                            Musik adalah teman setia saat begadang ngerjain tugas, motivator saat down, 
                            dan pelarian dari rutinitas kuliah yang kadang bikin stress.
                        </p>
                        <p class="mb-4">
                            Dari indie rock yang bikin semangat, lo-fi yang bikin tenang, 
                            sampai pop yang catchy - semuanya punya tempat di hati saya. 
                            Mari jelajahi dunia musik saya! 🎧
                        </p>
                        <div class="d-flex gap-3">
                            <button class="btn btn-primary btn-lg rounded-pill px-4" data-section="reason">
                                <i class="fas fa-heart me-2"></i>Kenapa Musik?
                            </button>
                            <a href="https://open.spotify.com/user/31orerj4pogknp6ttficxuzbnhei" target="_blank" 
                               class="btn btn-outline-success btn-lg rounded-pill px-4">
                                <i class="fab fa-spotify me-2"></i>My Spotify
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="hero-visual text-center">
                        <div class="music-player-mockup">
                            <div class="vinyl-record">
                                <div class="vinyl-center"></div>
                            </div>
                            <div class="sound-waves">
                                <div class="wave"></div>
                                <div class="wave"></div>
                                <div class="wave"></div>
                                <div class="wave"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .home-section {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
                color: white;
                position: relative;
                overflow: hidden;
            }
            
            .home-section::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
                opacity: 0.3;
            }
            
            .hero-content {
                position: relative;
                z-index: 2;
            }
            
            .text-gradient {
                background: linear-gradient(45deg, #fff, #f093fb);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .vinyl-record {
                width: 300px;
                height: 300px;
                background: linear-gradient(45deg, #2c2c2c, #1a1a1a);
                border-radius: 50%;
                margin: 0 auto;
                position: relative;
                animation: spin 8s linear infinite;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            }
            
            .vinyl-center {
                width: 80px;
                height: 80px;
                background: #ff6b6b;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            
            .vinyl-center::before {
                content: '♪';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-size: 24px;
            }
            
            .sound-waves {
                position: absolute;
                top: 50%;
                right: -50px;
                transform: translateY(-50%);
            }
            
            .wave {
                width: 4px;
                height: 20px;
                background: rgba(255,255,255,0.8);
                margin: 2px;
                border-radius: 2px;
                animation: wave 1s ease-in-out infinite;
            }
            
            .wave:nth-child(2) { animation-delay: 0.1s; }
            .wave:nth-child(3) { animation-delay: 0.2s; }
            .wave:nth-child(4) { animation-delay: 0.3s; }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            @keyframes wave {
                0%, 100% { height: 20px; }
                50% { height: 50px; }
            }
            
            .btn-primary {
                background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
                border: none;
                box-shadow: 0 8px 25px rgba(255,107,107,0.3);
                transition: all 0.3s ease;
            }
            
            .btn-primary:hover {
                transform: translateY(-3px);
                box-shadow: 0 12px 35px rgba(255,107,107,0.4);
            }
            
            .btn-outline-success {
                border: 2px solid #1db954;
                color: #1db954;
                transition: all 0.3s ease;
            }
            
            .btn-outline-success:hover {
                background: #1db954;
                transform: translateY(-3px);
                box-shadow: 0 12px 35px rgba(29,185,84,0.4);
            }
        </style>
    `;

  return section;
}

export default homeSection;
