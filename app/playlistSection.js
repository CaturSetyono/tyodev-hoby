function playlistSection() {
  const section = document.createElement("section");
  section.classList.add("playlist-section", "py-5");
  
  const playlists = [
      { title: "CODING VIBES", desc: "Instrumental only. No lyrics.", icon: "fa-code", color: "#ffffff" },
      { title: "ENERGY BOOST", desc: "Rock & Pop Punk pagi hari.", icon: "fa-bolt", color: "#ccff00" }, // Acid Green
      { title: "NIGHT STUDY", desc: "Chill & Ambient.", icon: "fa-moon", color: "#ffffff" },
      { title: "FEEL GOOD", desc: "R&B & Soul.", icon: "fa-heart", color: "#ffffff" },
      { title: "GAMING MODE", desc: "Electronic & Synthwave.", icon: "fa-gamepad", color: "#ffffff" },
      { title: "COFFEE BREAK", desc: "Jazz & Acoustic.", icon: "fa-coffee", color: "#ffffff" }
  ];

  let cardsHTML = '';
  playlists.forEach(pl => {
      const isAccent = pl.color === '#ccff00' ? 'bg-accent' : 'bg-white';
      cardsHTML += `
        <div class="col-lg-4 col-md-6">
            <div class="neo-card ${isAccent}">
                <div class="card-top">
                    <i class="fas ${pl.icon}"></i>
                    <div class="dots">
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <div class="card-body-neo">
                    <h4>${pl.title}</h4>
                    <p>${pl.desc}</p>
                    <button class="btn btn-play w-100">
                        PLAY NOW <i class="fas fa-play ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
      `;
  });

  section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-3 text-white mb-3">MY <span class="bg-white text-black px-2 border border-dark border-3">PLAYLISTS</span></h2>
                <p class="lead text-white">Koleksi audio untuk setiap mood.</p>
            </div>
            
            <div class="row g-4">
                ${cardsHTML}
            </div>
            
            <div class="text-center mt-5">
                <a href="https://open.spotify.com/user/31orerj4pogknp6ttficxuzbnhei" target="_blank" 
                   class="btn btn-spotify-neo btn-lg">
                    <i class="fab fa-spotify me-2"></i>VIEW SPOTIFY PROFILE
                </a>
            </div>
        </div>
        
        <style>
            .playlist-section {
                background-color: var(--neo-blue);
            }
            
            .neo-card {
                border: 3px solid var(--neo-black);
                box-shadow: var(--neo-shadow);
                transition: transform 0.2s;
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            
            .neo-card:hover {
                transform: translate(-5px, -5px);
                box-shadow: 10px 10px 0px var(--neo-black);
            }

            .bg-white { background: var(--neo-white); }
            .bg-accent { background: var(--neo-green); }
            
            .card-top {
                padding: 1.5rem;
                border-bottom: 3px solid var(--neo-black);
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                background: rgba(0,0,0,0.05);
            }
            
            .card-top i {
                font-size: 3rem;
                color: var(--neo-black);
            }

            .dots span {
                display: inline-block;
                width: 10px; height: 10px;
                background: var(--neo-black);
                border-radius: 50%;
                margin-left: 3px;
            }
            
            .card-body-neo {
                padding: 1.5rem;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .btn-play {
                background: var(--neo-black);
                color: var(--neo-white);
                border: none;
                border-radius: 0;
                font-weight: bold;
                margin-top: 1rem;
                padding: 10px;
            }
            
            .btn-play:hover {
                background: #333;
                color: var(--neo-green);
            }

            .btn-spotify-neo {
                background: var(--neo-green);
                color: var(--neo-black);
                border: 3px solid var(--neo-black);
                box-shadow: 4px 4px 0px var(--neo-black);
                font-weight: 800;
                padding: 15px 30px;
            }
            
            .btn-spotify-neo:hover {
                transform: translate(2px, 2px);
                box-shadow: 1px 1px 0px var(--neo-black);
                background: #fff;
            }
        </style>
    `;

  return section;
}

export default playlistSection;