function playlistSection() {
  const section = document.createElement("section");
  section.classList.add("playlist-section", "py-5");

  const playlists = [
    {
      title: "INDIE LOKAL",
      desc: "Hindia, Lomba Sihir, Perunggu.",
      icon: "fa-guitar",
      color: "#FF6B6B",
      count: "50 Songs",
      link: "https://open.spotify.com/playlist/37i9dQZF1DXd8kLqM5h2jZ",
    },
    {
      title: "GALAU BRUTAL",
      desc: "Pamungkas, Idgitaf, Sal Priadi.",
      icon: "fa-heart-broken",
      color: "#4ECDC4",
      count: "32 Songs",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX50QitC6McUh",
    },
    {
      title: "HEALING VIBES",
      desc: "Obat capek hati & pikiran.",
      icon: "fa-cloud-sun",
      color: "#FFE66D",
      count: "24 Songs",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0",
    },
    {
      title: "LATE NIGHT",
      desc: "City lights & deep thoughts.",
      icon: "fa-moon",
      color: "#2D3436",
      textColor: "text-white",
      count: "45 Songs",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX6ziVCLnTE86",
    },
    {
      title: "FOCUS MODE",
      desc: "Instrumental buat coding.",
      icon: "fa-laptop-code",
      color: "#F7FFF7",
      count: "100+ Songs",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS",
    },
    {
      title: "KARAOKEAN",
      desc: "Tulus, Sheila on 7, Dewa 19.",
      icon: "fa-microphone-alt",
      color: "#FF9F1C",
      count: "68 Songs",
      link: "https://open.spotify.com/playlist/37i9dQZF1DXa2SPUyWl8Y5",
    },
  ];

  let cardsHTML = "";
  playlists.forEach((pl) => {
    const textColor = pl.textColor || "text-black";
    cardsHTML += `
        <div class="col-lg-2 col-md-4 col-6">
            <div class="spotify-card">
                <div class="cover-art" style="background-color: ${pl.color}">
                    <i class="fas ${pl.icon} ${textColor}"></i>
                    <div class="play-overlay">
                        <a href="${pl.link}" target="_blank" class="btn-play-circle"><i class="fas fa-play"></i></a>
                    </div>
                </div>
                <div class="card-info mt-3">
                    <h5 class="playlist-title text-truncate">${pl.title}</h5>
                    <p class="playlist-desc text-truncate-2">${pl.desc}</p>
                    <small class="playlist-meta">${pl.count}</small>
                </div>
            </div>
        </div>
      `;
  });

  section.innerHTML = `
        <div class="container">
            <div class="d-flex justify-content-between align-items-end mb-4">
                <div>
                    
                </div>
                <a href="https://open.spotify.com/user/31orerj4pogknp6ttficxuzbnhei" target="_blank" class="btn btn-neo-sm">SEE ALL</a>
            </div>
            
            <div class="row g-4">
                ${cardsHTML}
            </div>
            

        </div>
        
        <style>
            .playlist-section {
                background-color: var(--neo-blue);
            }
            
            .spotify-card {
                background: var(--neo-white);
                padding: 15px;
                border: 3px solid var(--neo-black);
                box-shadow: 5px 5px 0px rgba(0,0,0,0.2);
                transition: transform 0.2s;
                cursor: pointer;
                height: 100%;
            }
            
            .spotify-card:hover {
                transform: translate(-4px, -4px);
                box-shadow: 8px 8px 0px var(--neo-black);
            }

            .cover-art {
                width: 100%;
                aspect-ratio: 1/1;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 3rem;
                border: 3px solid var(--neo-black);
                position: relative;
                background: #eee;
            }

            .play-overlay {
                position: absolute;
                bottom: 10px;
                right: 10px;
                opacity: 0;
                transform: translateY(10px);
                transition: all 0.2s ease;
            }

            .spotify-card:hover .play-overlay {
                opacity: 1;
                transform: translateY(0);
            }

            .btn-play-circle {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background: var(--neo-green);
                border: 3px solid var(--neo-black);
                color: var(--neo-black);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                box-shadow: 2px 2px 0px var(--neo-black);
                text-decoration: none;
            }
            
            .btn-play-circle:hover {
                background: var(--neo-white);
            }

            .playlist-title {
                color: var(--neo-black);
                font-weight: 800;
                margin-bottom: 5px;
                font-size: 1rem;
                text-transform: uppercase;
            }

            .playlist-desc {
                color: #555;
                font-size: 0.85rem;
                line-height: 1.3;
                margin-bottom: 5px;
                font-weight: 500;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            
            .playlist-meta {
                color: var(--neo-blue);
                font-size: 0.75rem;
                font-weight: 900;
                text-transform: uppercase;
                background: #eee;
                padding: 2px 6px;
                border: 1px solid var(--neo-black);
            }

            .btn-neo-sm {
                background: var(--neo-black);
                color: var(--neo-white);
                border: 2px solid var(--neo-white);
                font-weight: bold;
                padding: 5px 15px;
                text-transform: uppercase;
            }
            
            .btn-neo-sm:hover {
                background: var(--neo-white);
                color: var(--neo-black);
                border-color: var(--neo-black);
            }

            /* Player Bar */
            .spotify-player {
                background: var(--neo-white);
                border: 3px solid var(--neo-black);
                padding: 15px 20px;
                box-shadow: 8px 8px 0px var(--neo-black);
                position: relative;
                z-index: 10;
            }

            .current-track-img {
                width: 56px;
                height: 56px;
                background: var(--neo-green);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--neo-black);
                border: 3px solid var(--neo-black);
                font-size: 1.5rem;
            }

            .btn-play-sm {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: var(--neo-black);
                border: 2px solid var(--neo-black);
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: var(--neo-green);
            }
            
            .btn-play-sm:hover {
                background: var(--neo-green);
                color: var(--neo-black);
            }

            .progress-bar-wrapper {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 0.8rem;
                font-weight: bold;
                color: var(--neo-black);
            }

            .progress-line {
                flex-grow: 1;
                height: 8px;
                background: #eee;
                border: 2px solid var(--neo-black);
                border-radius: 0;
                overflow: hidden;
            }

            .progress-fill {
                height: 100%;
                background: var(--neo-blue);
            }
            
            .volume-bar {
                width: 80px;
                height: 8px;
                background: #eee;
                border: 2px solid var(--neo-black);
            }
            
            .player-controls i {
                cursor: pointer;
                transition: transform 0.1s;
            }
            
            .player-controls i:hover {
                transform: scale(1.2);
                color: var(--neo-blue);
            }
        </style>
    `;

  return section;
}

export default playlistSection;
