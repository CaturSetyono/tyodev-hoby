function favouriteSection() {
  const section = document.createElement("section");
  section.classList.add("favourite-section", "py-5");

  // Helper untuk bikin item lagu biar kode lebih bersih
  const createSongItem = (title, artist, album, desc, icon, color) => `
    <div class="col-lg-6">
        <div class="song-neo">
            <div class="song-icon" style="background: ${color}">
                <i class="fas ${icon}"></i>
            </div>
            <div class="song-details">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h4 class="mb-0 song-title">${title}</h4>
                        <div class="artist-badge song-artist">${artist}</div>
                    </div>
                    <button class="btn btn-sm btn-icon play-btn-neo">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
                <p class="album-text mt-2 mb-2"><i class="fas fa-compact-disc me-1"></i> ${album}</p>
                <p class="desc-text">${desc}</p>
            </div>
        </div>
    </div>
  `;

  section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-3 text-white mb-3">HEAVY <span class="highlight-inverse">ROTATION</span></h2>
                <p class="lead text-white">Lagu yang nggak pernah di-skip.</p>
            </div>
            
            <div class="row g-4">
                ${createSongItem(
                  "Secukupnya",
                  "Hindia",
                  "Menari Dengan Bayangan",
                  "Soundtrack ketika hidup lagi capek-capeknya.",
                  "fa-music",
                  "#ccff00"
                )}
                ${createSongItem(
                  "Andai Saja",
                  "Lomba Sihir",
                  "Selamat Datang di Ujung Dunia",
                  "Lagu yang pas buat melamun.",
                  "fa-magic",
                  "#ffffff"
                )}
                ${createSongItem(
                  "Kenangan Manis",
                  "Pamungkas",
                  "Walk The Talk",
                  "Vibes galau tapi estetik.",
                  "fa-guitar",
                  "#ccff00"
                )}
                ${createSongItem(
                  "33x",
                  "Perunggu",
                  "Memorandum",
                  "Anthem pekerja korporat.",
                  "fa-briefcase",
                  "#ffffff"
                )}
                ${createSongItem(
                  "Sedia Aku Sebelum Hujan",
                  "Idgitaf",
                  "Single",
                  "Liriknya relate banget.",
                  "fa-cloud-rain",
                  "#ccff00"
                )}
                ${createSongItem(
                  "Mesra-mesraanya kecil-kecilan dulu",
                  "Sal Priadi",
                  "Markers and Such",
                  "Romantis dengan cara sederhana.",
                  "fa-heart",
                  "#ffffff"
                )}
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
                display: flex;
                align-items: stretch;
                height: 100%;
                transition: transform 0.2s;
            }
            
            .song-neo:hover {
                transform: translateX(-5px);
                box-shadow: 8px 8px 0px var(--neo-black);
            }

            .song-icon {
                width: 100px;
                border-right: 3px solid var(--neo-black);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5rem;
                color: var(--neo-black);
                flex-shrink: 0;
            }

            .song-details {
                padding: 1.2rem;
                flex-grow: 1;
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

            .album-text {
                font-size: 0.85rem;
                color: #666;
                border-bottom: 2px dashed #ccc;
                padding-bottom: 5px;
            }

            .desc-text {
                font-size: 0.9rem;
                line-height: 1.4;
                margin-bottom: 0;
            }

            .btn-icon {
                border: 2px solid var(--neo-black);
                border-radius: 50%;
                width: 35px; height: 35px;
                display: flex; align-items: center; justify-content: center;
            }
            
            .btn-icon:hover {
                background: var(--neo-green);
            }

            .btn-black {
                background: var(--neo-black);
                color: var(--neo-white);
                border-radius: 0;
                font-weight: bold;
            }
            .btn-black:hover {
                background: #333;
                color: var(--neo-green);
            }
        </style>
    `;

  // Audio Logic
  let currentAudio = null;
  let currentBtn = null;

  section.querySelectorAll(".play-btn-neo").forEach((btn) => {
    btn.addEventListener("click", async function () {
      const icon = this.querySelector("i");
      const card = this.closest(".song-neo");
      const title = card.querySelector(".song-title").innerText;
      const artist = card.querySelector(".song-artist").innerText;

      // If playing the same song
      if (currentAudio && currentBtn === this) {
        if (currentAudio.paused) {
          currentAudio.play();
          icon.classList.remove("fa-play");
          icon.classList.add("fa-pause");
        } else {
          currentAudio.pause();
          icon.classList.remove("fa-pause");
          icon.classList.add("fa-play");
        }
        return;
      }

      // Stop existing audio
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentBtn) {
          const prevIcon = currentBtn.querySelector("i");
          prevIcon.classList.remove("fa-pause");
          prevIcon.classList.remove("fa-spinner", "fa-spin");
          prevIcon.classList.add("fa-play");
        }
      }

      // Show loading state
      icon.classList.remove("fa-play");
      icon.classList.add("fa-spinner", "fa-spin");

      try {
        // Fetch preview from iTunes API
        const query = encodeURIComponent(`${artist} ${title}`);
        const response = await fetch(
          `https://itunes.apple.com/search?term=${query}&media=music&limit=1`
        );
        const data = await response.json();

        if (data.resultCount > 0) {
          const previewUrl = data.results[0].previewUrl;

          currentAudio = new Audio(previewUrl);
          currentAudio.play();
          currentBtn = this;

          icon.classList.remove("fa-spinner", "fa-spin");
          icon.classList.add("fa-pause");

          currentAudio.onended = () => {
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
            currentAudio = null;
            currentBtn = null;
          };
        } else {
          throw new Error("Lagu tidak ditemukan");
        }
      } catch (error) {
        console.error(error);
        icon.classList.remove("fa-spinner", "fa-spin");
        icon.classList.add("fa-exclamation-triangle");
        setTimeout(() => {
          icon.classList.remove("fa-exclamation-triangle");
          icon.classList.add("fa-play");
        }, 2000);
        alert("Maaf, preview lagu ini tidak tersedia di database publik.");
      }
    });
  });

  return section;
}

export default favouriteSection;
