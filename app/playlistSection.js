function playlistSection() {
  const section = document.createElement("section");
  section.classList.add("playlist-section", "py-5");
  section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold mb-3">My Playlists 🎧</h2>
                <p class="lead text-muted">Koleksi playlist untuk setiap mood dan aktivitas</p>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="playlist-card">
                        <div class="playlist-cover">
                            <div class="cover-gradient"></div>
                            <i class="fas fa-code playlist-icon"></i>
                            <div class="play-button">
                                <i class="fas fa-play"></i>
                            </div>
                        </div>
                        <div class="playlist-info">
                            <h4>Coding Vibes</h4>
                            <p>Lo-fi, instrumental, dan electronic untuk fokus ngoding</p>
                            <div class="playlist-stats">
                                <span><i class="fas fa-music"></i> 47 tracks</span>
                                <span><i class="fas fa-clock"></i> 3h 12m</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="playlist-card">
                        <div class="playlist-cover">
                            <div class="cover-gradient" style="background: linear-gradient(45deg, #ff6b6b, #ffa500);"></div>
                            <i class="fas fa-fire playlist-icon"></i>
                            <div class="play-button">
                                <i class="fas fa-play"></i>
                            </div>
                        </div>
                        <div class="playlist-info">
                            <h4>Energy Boost</h4>
                            <p>Rock, pop-punk, dan alternative untuk semangat pagi</p>
                            <div class="playlist-stats">
                                <span><i class="fas fa-music"></i> 35 tracks</span>
                                <span><i class="fas fa-clock"></i> 2h 45m</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="playlist-card">
                        <div class="playlist-cover">
                            <div class="cover-gradient" style="background: linear-gradient(45deg, #4facfe, #00f2fe);"></div>
                            <i class="fas fa-moon playlist-icon"></i>
                            <div class="play-button">
                                <i class="fas fa-play"></i>
                            </div>
                        </div>
                        <div class="playlist-info">
                            <h4>Night Study</h4>
                            <p>Chill, ambient, dan soft indie untuk belajar malam</p>
                            <div class="playlist-stats">
                                <span><i class="fas fa-music"></i> 28 tracks</span>
                                <span><i class="fas fa-clock"></i> 1h 58m</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="playlist-card">
                        <div class="playlist-cover">
                            <div class="cover-gradient" style="background: linear-gradient(45deg, #a8edea, #fed6e3);"></div>
                            <i class="fas fa-heart playlist-icon"></i>
                            <div class="play-button">
                                <i class="fas fa-play"></i>
                            </div>
                        </div>
                        <div class="playlist-info">
                            <h4>Feel Good</h4>
                            <p>R&B, soul, dan indie pop untuk mood yang baik</p>
                            <div class="playlist-stats">
                                <span><i class="fas fa-music"></i> 42 tracks</span>
                                <span><i class="fas fa-clock"></i> 2h 33m</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="playlist-card">
                        <div class="playlist-cover">
                            <div class="cover-gradient" style="background: linear-gradient(45deg, #667eea, #764ba2);"></div>
                            <i class="fas fa-gamepad playlist-icon"></i>
                            <div class="play-button">
                                <i class="fas fa-play"></i>
                            </div>
                        </div>
                        <div class="playlist-info">
                            <h4>Gaming Mode</h4>
                            <p>Electronic, synthwave, dan upbeat untuk gaming session</p>
                            <div class="playlist-stats">
                                <span><i class="fas fa-music"></i> 38 tracks</span>
                                <span><i class="fas fa-clock"></i> 2h 51m</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="playlist-card">
                        <div class="playlist-cover">
                            <div class="cover-gradient" style="background: linear-gradient(45deg, #ffecd2, #fcb69f);"></div>
                            <i class="fas fa-coffee playlist-icon"></i>
                            <div class="play-button">
                                <i class="fas fa-play"></i>
                            </div>
                        </div>
                        <div class="playlist-info">
                            <h4>Coffee Break</h4>
                            <p>Jazz, acoustic, dan soft rock untuk santai sejenak</p>
                            <div class="playlist-stats">
                                <span><i class="fas fa-music"></i> 25 tracks</span>
                                <span><i class="fas fa-clock"></i> 1h 34m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-5">
                <a href="https://open.spotify.com/user/31orerj4pogknp6ttficxuzbnhei" target="_blank" 
                   class="btn btn-success btn-lg rounded-pill px-4">
                    <i class="fab fa-spotify me-2"></i>View All on Spotify
                </a>
            </div>
        </div>
        
        <style>
            .playlist-section {
                background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                color: white;
                min-height: 100vh;
            }
            
            .playlist-card {
                background: rgba(255,255,255,0.1);
                border-radius: 20px;
                overflow: hidden;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.1);
            }
            
            .playlist-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            }
            
            .playlist-cover {
                height: 200px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }
            
            .cover-gradient {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, #667eea, #764ba2);
                opacity: 0.9;
            }
            
            .playlist-icon {
                font-size: 3rem;
                color: white;
                z-index: 2;
                position: relative;
            }
            
            .play-button {
                position: absolute;
                top: 50%;
                right: 20px;
                transform: translateY(-50%);
                width: 50px;
                height: 50px;
                background: rgba(255,255,255,0.9);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #333;
                opacity: 0;
                transition: all 0.3s ease;
                z-index: 3;
                cursor: pointer;
            }
            
            .playlist-card:hover .play-button {
                opacity: 1;
                transform: translateY(-50%) scale(1.1);
            }
            
            .playlist-info {
                padding: 1.5rem;
            }
            
            .playlist-info h4 {
                margin-bottom: 0.5rem;
                color: white;
            }
            
            .playlist-info p {
                color: rgba(255,255,255,0.8);
                font-size: 0.9rem;
                margin-bottom: 1rem;
            }
            
            .playlist-stats {
                display: flex;
                justify-content: space-between;
                color: rgba(255,255,255,0.7);
                font-size: 0.8rem;
            }
            
            .btn-success {
                background: #1db954;
                border: none;
                box-shadow: 0 8px 25px rgba(29,185,84,0.3);
                transition: all 0.3s ease;
            }
            
            .btn-success:hover {
                background: #1ed760;
                transform: translateY(-3px);
                box-shadow: 0 12px 35px rgba(29,185,84,0.4);
            }
        </style>
    `;

  return section;
}

export default playlistSection;
