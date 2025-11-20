function favouriteSection() {
  const section = document.createElement("section");
  section.classList.add("favourite-section", "py-5");

  // Data lagu dengan Spotify ID
  // CARA CARI ID: Buka Spotify > Klik 3 titik di lagu > Share > Copy Song Link
  // Ambil kode setelah "track/" sampai sebelum tanda tanya "?"
  // Contoh: https://open.spotify.com/track/4uUG5RXrOk84mYEfFvj3cK?si=... -> ID: 4uUG5RXrOk84mYEfFvj3cK
  const songs = [
    {
      title: "Secukupnya",
      artist: "Hindia",
      album: "Menari Dengan Bayangan",
      desc: "Soundtrack ketika hidup lagi capek-capeknya.",
      icon: "fa-music",
      color: "#ccff00",
      delay: 0,
      spotifyId: "5drW6PGRxkE6MxttzVLNk5", // Ganti dengan ID asli
    },
    {
      title: "Andai Saja",
      artist: "Lomba Sihir",
      album: "Selamat Datang di Ujung Dunia",
      desc: "Lagu yang pas buat melamun.",
      icon: "fa-magic",
      color: "#ffffff",
      delay: 100,
      spotifyId: "2hb8n44vpefszgLwkEVXhU", // Ganti dengan ID asli
    },
    {
      title: "Kenangan Manis",
      artist: "Pamungkas",
      album: "Walk The Talk",
      desc: "Vibes galau tapi estetik.",
      icon: "fa-guitar",
      color: "#ccff00",
      delay: 200,
      spotifyId: "5jLzpxUOnCsX5tfq7TGY9v", // Ganti dengan ID asli
    },
    {
      title: "33x",
      artist: "Perunggu",
      album: "Memorandum",
      desc: "Anthem pekerja korporat.",
      icon: "fa-briefcase",
      color: "#ffffff",
      delay: 300,
      spotifyId: "0I3I9hgBRat6HR5Gzy26jx", // Ganti dengan ID asli
    },
    {
      title: "Sedia Aku Sebelum Hujan",
      artist: "Idgitaf",
      album: "Single",
      desc: "Liriknya relate banget.",
      icon: "fa-cloud-rain",
      color: "#ccff00",
      delay: 400,
      spotifyId: "64qfw9JZl3RYCrq4Mn0WvT", // Ganti dengan ID asli
    },
    {
      title: "Mesra-mesraanya kecil-kecilan dulu",
      artist: "Sal Priadi",
      album: "Markers and Such",
      desc: "Romantis dengan cara sederhana.",
      icon: "fa-heart",
      color: "#ffffff",
      delay: 500,
      spotifyId: "1NzyVlr2fOWOfigbwDabme", // Ganti dengan ID asli
    },
  ];

  // Helper untuk bikin item lagu dengan Spotify Embed
  const createSongItem = (song, index) => `
    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="${song.delay}">
        <div class="song-neo h-100">
            <div class="song-details d-flex flex-column h-100">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <div class="d-flex align-items-center">
                        <div class="song-icon-small me-3" style="background: ${song.color}">
                            <i class="fas ${song.icon}"></i>
                        </div>
                        <div>
                            <h4 class="mb-0 song-title">${song.title}</h4>
                            <div class="artist-badge song-artist">${song.artist}</div>
                        </div>
                    </div>
                </div>
                
                <p class="desc-text mb-3 flex-grow-1">${song.desc}</p>
                
                <!-- Spotify Embed -->
                <div class="spotify-embed-wrapper">
                    <iframe style="border-radius:12px" 
                        src="https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0" 
                        width="100%" 
                        height="80" 
                        frameBorder="0" 
                        allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
  `;

  section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5" data-aos="zoom-in">
                <h2 class="display-3 text-white mb-3">HEAVY <span class="highlight-inverse">ROTATION</span></h2>
                <p class="lead text-white">Lagu yang nggak pernah di-skip.</p>
            </div>
            
            <div class="row g-4">
                ${songs
                  .map((song, index) => createSongItem(song, index))
                  .join("")}
            </div>
        </div>
        
        <style>
            .favourite-section {
                background-color: var(--neo-blue);
            }
            
            .highlight-inverse {
                background: var(--neo-black);
                color: var(--neo-green);
                padding: 0 15px;
                font-style: italic;
            }

            .song-neo {
                background: var(--neo-white);
                border: 3px solid var(--neo-black);
                box-shadow: 5px 5px 0px rgba(0,0,0,0.2);
                transition: transform 0.2s;
                overflow: hidden;
            }
            
            .song-neo:hover {
                transform: translateX(-5px);
                box-shadow: 8px 8px 0px var(--neo-black);
            }

            .song-icon-small {
                width: 50px;
                height: 50px;
                border: 2px solid var(--neo-black);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                color: var(--neo-black);
                flex-shrink: 0;
            }

            .song-details {
                padding: 1.5rem;
            }

            .artist-badge {
                background: var(--neo-black);
                color: var(--neo-white);
                display: inline-block;
                padding: 2px 8px;
                font-size: 0.8rem;
                font-weight: bold;
                margin-top: 4px;
                text-transform: uppercase;
            }

            .desc-text {
                font-size: 0.95rem;
                line-height: 1.5;
                color: #333;
            }

            .spotify-embed-wrapper {
                margin-top: auto;
                border: 2px solid var(--neo-black);
                border-radius: 14px; /* Sedikit lebih besar dari iframe radius */
                background: #000;
            }
        </style>
    `;

  return section;
}

export default favouriteSection;
