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
                        <h4 class="mb-0">${title}</h4>
                        <div class="artist-badge">${artist}</div>
                    </div>
                    <button class="btn btn-sm btn-icon"><i class="fas fa-play"></i></button>
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
                ${createSongItem('Do I Wanna Know?', 'Arctic Monkeys', 'AM (2013)', 'Bassline-nya iconic banget, bikin nagih!', 'fa-guitar', '#ccff00')}
                ${createSongItem('Creep', 'Radiohead', 'Pablo Honey', 'Lagu wajib anak galau sedunia.', 'fa-sad-tear', '#ffffff')}
                ${createSongItem('Midnight City', 'M83', 'Hurry Up', 'Synthwave masterpiece buat coding malem.', 'fa-city', '#ccff00')}
                ${createSongItem('Seven Nation Army', 'White Stripes', 'Elephant', 'Riff gitar paling legendary.', 'fa-bolt', '#ffffff')}
                ${createSongItem('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', '6 menit pure genius.', 'fa-crown', '#ccff00')}
                ${createSongItem('Weightless', 'Marconi Union', 'Distance', 'Obat penenang instan.', 'fa-feather', '#ffffff')}
            </div>
            
            <div class="text-center mt-5">
                <div class="p-4 bg-white border border-dark border-3 d-inline-block" style="box-shadow: 8px 8px 0px #000;">
                    <p class="h5 mb-3 fw-bold">Bingung mau dengerin apa?</p>
                    <button class="btn btn-black btn-lg w-100" 
                            onclick="document.querySelector('[data-section=\"music\"]').click()">
                        <i class="fas fa-robot me-2 text-success"></i>TANYA AI AJA
                    </button>
                </div>
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

  return section;
}

export default favouriteSection;