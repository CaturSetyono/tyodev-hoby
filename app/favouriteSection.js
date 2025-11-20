function favouriteSection() {
  const section = document.createElement("section");
  section.classList.add("favourite-section", "py-5");

  // Data lagu dengan URL Hardcoded untuk performa maksimal di mobile
  const songs = [
    {
      title: "Secukupnya",
      artist: "Hindia",
      album: "Menari Dengan Bayangan",
      desc: "Soundtrack ketika hidup lagi capek-capeknya.",
      icon: "fa-music",
      color: "#ccff00",
      delay: 0,
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a6/5c/52/a65c529e-74a4-7b98-3e70-7f812a504a96/mzaf_1626184544281484870.plus.aac.p.m4a",
    },
    {
      title: "Andai Saja",
      artist: "Lomba Sihir",
      album: "Selamat Datang di Ujung Dunia",
      desc: "Lagu yang pas buat melamun.",
      icon: "fa-magic",
      color: "#ffffff",
      delay: 100,
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/34/a5/23/34a52368-643a-43a6-c96c-fd89c8d077cf/mzaf_14381344851997934839.plus.aac.p.m4a",
    },
    {
      title: "Kenangan Manis",
      artist: "Pamungkas",
      album: "Walk The Talk",
      desc: "Vibes galau tapi estetik.",
      icon: "fa-guitar",
      color: "#ccff00",
      delay: 200,
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/09/89/1b/09891b19-1eb0-2f88-3339-1fad9861b6ed/mzaf_15403338971115180038.plus.aac.p.m4a",
    },
    {
      title: "33x",
      artist: "Perunggu",
      album: "Memorandum",
      desc: "Anthem pekerja korporat.",
      icon: "fa-briefcase",
      color: "#ffffff",
      delay: 300,
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c6/be/d3/c6bed396-2b3c-0aee-dcec-d06a9506c781/mzaf_9218744999071382246.plus.aac.p.m4a",
    },
    {
      title: "Sedia Aku Sebelum Hujan",
      artist: "Idgitaf",
      album: "Single",
      desc: "Liriknya relate banget.",
      icon: "fa-cloud-rain",
      color: "#ccff00",
      delay: 400,
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9a/8a/f5/9a8af565-7b11-030b-6dc4-72a354411691/mzaf_1147188470658269281.plus.aac.p.m4a",
    },
    {
      title: "Mesra-mesraanya kecil-kecilan dulu",
      artist: "Sal Priadi",
      album: "Markers and Such",
      desc: "Romantis dengan cara sederhana.",
      icon: "fa-heart",
      color: "#ffffff",
      delay: 500,
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/57/db/a8/57dba8ad-c886-2178-69bb-1ea1ca93380f/mzaf_13362817603498077160.plus.aac.p.m4a",
    },
  ];

  // Helper untuk bikin item lagu
  const createSongItem = (song, index) => `
    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="${song.delay}">
        <div class="song-neo">
            <div class="song-icon" style="background: ${song.color}">
                <i class="fas ${song.icon}"></i>
            </div>
            <div class="song-details">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h4 class="mb-0 song-title">${song.title}</h4>
                        <div class="artist-badge song-artist">${song.artist}</div>
                    </div>
                    <button class="btn btn-sm btn-icon play-btn-neo" data-index="${index}">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
                <p class="album-text mt-2 mb-2"><i class="fas fa-compact-disc me-1"></i> ${song.album}</p>
                <p class="desc-text">${song.desc}</p>
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

  // Audio Logic - Single Instance untuk Mobile Stability
  const audioPlayer = new Audio();
  let currentPlayingIndex = -1; // Track index lagu yang sedang diputar

  // Reset UI saat lagu selesai
  audioPlayer.onended = () => {
    const activeBtn = section.querySelector(
      `.play-btn-neo[data-index="${currentPlayingIndex}"]`
    );
    if (activeBtn) {
      const icon = activeBtn.querySelector("i");
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
    currentPlayingIndex = -1;
  };

  // Handle Error Playback
  audioPlayer.onerror = (e) => {
    console.error("Audio Error:", e);
    alert("Gagal memutar audio. Koneksi internet mungkin tidak stabil.");
    currentPlayingIndex = -1;

    // Reset semua icon loading
    section.querySelectorAll(".fa-spinner").forEach((icon) => {
      icon.classList.remove("fa-spinner", "fa-spin");
      icon.classList.add("fa-play");
    });
  };

  section.querySelectorAll(".play-btn-neo").forEach((btn) => {
    btn.addEventListener("click", async function () {
      const icon = this.querySelector("i");
      const index = parseInt(this.getAttribute("data-index"));
      const song = songs[index];

      // 1. Logika Pause: Jika klik tombol yang sama dan sedang main
      if (currentPlayingIndex === index && !audioPlayer.paused) {
        audioPlayer.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        return;
      }

      // 2. Logika Ganti Lagu: Reset tombol lagu sebelumnya
      if (currentPlayingIndex !== -1 && currentPlayingIndex !== index) {
        const prevBtn = section.querySelector(
          `.play-btn-neo[data-index="${currentPlayingIndex}"]`
        );
        if (prevBtn) {
          const prevIcon = prevBtn.querySelector("i");
          prevIcon.classList.remove("fa-pause", "fa-spinner", "fa-spin");
          prevIcon.classList.add("fa-play");
        }
      }

      // 3. Logika Play
      // Set loading state
      icon.classList.remove("fa-play");
      icon.classList.add("fa-spinner", "fa-spin");

      try {
        // Set source langsung (tanpa fetch)
        audioPlayer.src = song.previewUrl;
        currentPlayingIndex = index;

        // Promise play() untuk handle autoplay policy
        await audioPlayer.play();

        // Jika berhasil play
        icon.classList.remove("fa-spinner", "fa-spin");
        icon.classList.add("fa-pause");
      } catch (error) {
        console.error("Playback failed:", error);
        icon.classList.remove("fa-spinner", "fa-spin");
        icon.classList.add("fa-play");

        if (error.name === "NotAllowedError") {
          alert(
            "Browser memblokir audio. Silakan klik tombol play sekali lagi."
          );
        } else {
          alert("Gagal memutar lagu: " + error.message);
        }
        currentPlayingIndex = -1;
      }
    });
  });

  return section;
}

export default favouriteSection;
