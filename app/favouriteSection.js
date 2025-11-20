function favouriteSection() {
  const section = document.createElement("section");
  section.classList.add("favourite-section", "py-5");
  section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold mb-3">My Favourite Songs ⭐</h2>
                <p class="lead text-muted">Lagu-lagu yang selalu bikin mood naik dan ga pernah bosen</p>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="song-card">
                        <div class="song-cover">
                            <div class="album-art">
                                <i class="fas fa-music"></i>
                            </div>
                        </div>
                        <div class="song-info">
                            <h4>Do I Wanna Know?</h4>
                            <p class="artist">Arctic Monkeys</p>
                            <p class="album">AM (2013)</p>
                            <div class="song-description">
                                <p>Lagu yang bikin ketagihan dari pertama denger. Bassline-nya iconic banget 
                                dan Alex Turner's voice bikin nagih!</p>
                            </div>
                            <div class="song-controls">
                                <button class="btn btn-primary btn-sm rounded-pill">
                                    <i class="fas fa-play me-1"></i>Play
                                </button>
                                <span class="duration">4:32</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="song-card">
                        <div class="song-cover">
                            <div class="album-art" style="background: linear-gradient(45deg, #ff9a00, #ffcd00);">
                                <i class="fas fa-guitar"></i>
                            </div>
                        </div>
                        <div class="song-info">
                            <h4>Creep</h4>
                            <p class="artist">Radiohead</p>
                            <p class="album">Pablo Honey (1993)</p>
                            <div class="song-description">
                                <p>Klasik yang ga pernah mati. Emotional banget dan relate sama struggle 
                                mahasiswa yang sering merasa "out of place".</p>
                            </div>
                            <div class="song-controls">
                                <button class="btn btn-primary btn-sm rounded-pill">
                                    <i class="fas fa-play me-1"></i>Play
                                </button>
                                <span class="duration">3:58</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="song-card">
                        <div class="song-cover">
                            <div class="album-art" style="background: linear-gradient(45deg, #667eea, #764ba2);">
                                <i class="fas fa-headphones"></i>
                            </div>
                        </div>
                        <div class="song-info">
                            <h4>Midnight City</h4>
                            <p class="artist">M83</p>
                            <p class="album">Hurry Up, We're Dreaming (2011)</p>
                            <div class="song-description">
                                <p>Synthwave masterpiece! Perfect untuk late night coding session 
                                atau saat butuh motivasi extra.</p>
                            </div>
                            <div class="song-controls">
                                <button class="btn btn-primary btn-sm rounded-pill">
                                    <i class="fas fa-play me-1"></i>Play
                                </button>
                                <span class="duration">4:03</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="song-card">
                        <div class="song-cover">
                            <div class="album-art" style="background: linear-gradient(45deg, #ff6b6b, #ffa500);">
                                <i class="fas fa-fire"></i>
                            </div>
                        </div>
                        <div class="song-info">
                            <h4>Seven Nation Army</h4>
                            <p class="artist">The White Stripes</p>
                            <p class="album">Elephant (2003)</p>
                            <div class="song-description">
                                <p>Riff guitar yang paling recognizable ever! Bikin semangat instant 
                                dan perfect buat workout atau gaming.</p>
                            </div>
                            <div class="song-controls">
                                <button class="btn btn-primary btn-sm rounded-pill">
                                    <i class="fas fa-play me-1"></i>Play
                                </button>
                                <span class="duration">3:51</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="song-card">
                        <div class="song-cover">
                            <div class="album-art" style="background: linear-gradient(45deg, #4facfe, #00f2fe);">
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="song-info">
                            <h4>Bohemian Rhapsody</h4>
                            <p class="artist">Queen</p>
                            <p class="album">A Night at the Opera (1975)</p>
                            <div class="song-description">
                                <p>Masterpiece yang ga ada duanya. 6 menit pure genius dari Freddie Mercury 
                                dan kawan-kawan. Timeless!</p>
                            </div>
                            <div class="song-controls">
                                <button class="btn btn-primary btn-sm rounded-pill">
                                    <i class="fas fa-play me-1"></i>Play
                                </button>
                                <span class="duration">5:55</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="song-card">
                        <div class="song-cover">
                            <div class="album-art" style="background: linear-gradient(45deg, #a8edea, #fed6e3);">
                                <i class="fas fa-moon"></i>
                            </div>
                        </div>
                        <div class="song-info">
                            <h4>Weightless</h4>
                            <p class="artist">Marconi Union</p>
                            <p class="album">Distance (2011)</p>
                            <div class="song-description">
                                <p>Scientifically proven to reduce anxiety! Go-to song saat stress 
                                karena deadline atau ujian.</p>
                            </div>
                            <div class="song-controls">
                                <button class="btn btn-primary btn-sm rounded-pill">
                                    <i class="fas fa-play me-1"></i>Play
                                </button>
                                <span class="duration">8:10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-5">
                <p class="text-muted mb-4">Want to discover music that matches your mood? Try our AI recommendation!</p>
                <button class="btn btn-gradient btn-lg rounded-pill px-4" 
                        onclick="document.querySelector('[data-section=\"music\"]').click()">
                    <i class="fas fa-robot me-2"></i>Get AI Music Recommendations
                </button>
            </div>
        </div>
        
        <style>
            .favourite-section {
                background: linear-gradient(135deg, #ffeef8 0%, #f0f4ff 100%);
                min-height: 100vh;
            }
            
            .song-card {
                background: white;
                border-radius: 20px;
                padding: 1.5rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
                height: 100%;
                display: flex;
                gap: 1rem;
            }
            
            .song-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            }
            
            .song-cover {
                flex-shrink: 0;
            }
            
            .album-art {
                width: 80px;
                height: 80px;
                background: linear-gradient(45deg, #667eea, #764ba2);
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.5rem;
            }
            
            .song-info {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            
            .song-info h4 {
                margin-bottom: 0.25rem;
                color: #333;
                font-size: 1.1rem;
            }
            
            .artist {
                color: #667eea;
                font-weight: 600;
                margin-bottom: 0.25rem;
                font-size: 0.9rem;
            }
            
            .album {
                color: #999;
                font-size: 0.8rem;
                margin-bottom: 0.75rem;
            }
            
            .song-description {
                flex: 1;
                margin-bottom: 1rem;
            }
            
            .song-description p {
                font-size: 0.85rem;
                color: #666;
                line-height: 1.5;
                margin-bottom: 0;
            }
            
            .song-controls {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .duration {
                color: #999;
                font-size: 0.8rem;
                font-weight: 500;
            }
            
            .btn-gradient {
                background: linear-gradient(45deg, #667eea, #764ba2);
                color: white;
                border: none;
                box-shadow: 0 8px 25px rgba(102,126,234,0.3);
                transition: all 0.3s ease;
            }
            
            .btn-gradient:hover {
                background: linear-gradient(45deg, #764ba2, #667eea);
                transform: translateY(-3px);
                box-shadow: 0 12px 35px rgba(102,126,234,0.4);
                color: white;
            }
        </style>
    `;

  return section;
}

export default favouriteSection;
