function galerySection() {
  const section = document.createElement("section");
  section.id = "gallery";
  section.classList.add("gallery-section", "py-5");

  // Data gambar (Campuran Unsplash & Placeholder untuk Lokal)
  // User bisa mengganti src dengan path lokal misal: './public/foto1.jpg'
  const slides = [
    // ============================================
    // KATEGORI: ALAT MUSIK (INSTRUMENTS) - SLIDE 1-6
    // ============================================

    // --- SLIDE 1: Guitars (Gitar) ---
    [
      {
        src: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?q=80&w=800&auto=format&fit=crop",
        title: "Electric Guitar",
        price: "Fender Strat",
      },
      {
        src: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=800&auto=format&fit=crop",
        title: "Acoustic Guitar",
        price: "Folk Body",
      },
      {
        src: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?q=80&w=800&auto=format&fit=crop",
        title: "Bass Guitar",
        price: "4-String",
      },
      {
        src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop",
        title: "Grand Piano",
        price: "Classical",
      },
      {
        src: "https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=800&auto=format&fit=crop",
        title: "Guitar Headstock",
        price: "Tuning Pegs",
      },
    ],

    // --- SLIDE 2: Keys (Piano & Keyboard) ---
    [
      {
        src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop",
        title: "Grand Piano",
        price: "Classical",
      },
      {
        src: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=800&auto=format&fit=crop",
        title: "Synthesizer",
        price: "Electronic",
      },
      {
        src: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=800&auto=format&fit=crop",
        title: "Upright Piano",
        price: "Jazz Bar",
      },
      {
        src: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=800&auto=format&fit=crop",
        title: "Cymbals",
        price: "Crash/Ride",
      },
      {
        src: "https://images.unsplash.com/photo-1542120526-89a7039730ab?q=80&w=800&auto=format&fit=crop",
        title: "Vintage Organ",
        price: "Analog Soul",
      },
    ],

    // --- SLIDE 3: Drums & Percussion ---
    [
      {
        src: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=800&auto=format&fit=crop",
        title: "Synthesizer",
        price: "Electronic",
      },
      {
        src: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?q=80&w=800&auto=format&fit=crop",
        title: "Bass Guitar",
        price: "4-String",
      },
      {
        src: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=800&auto=format&fit=crop",
        title: "Cymbals",
        price: "Crash/Ride",
      },
      {
        src: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=800&auto=format&fit=crop",
        title: "Violin",
        price: "Orchestra",
      },
      {
        src: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=800&auto=format&fit=crop",
        title: "Violin",
        price: "Orchestra",
      },
    ],

    // --- SLIDE 4: Strings (Gesek) ---
    [
      {
        src: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=800&auto=format&fit=crop",
        title: "Violin",
        price: "Orchestra",
      },
      {
        src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop",
        title: "Trumpet",
        price: "Brass Section",
      },
      {
        src: "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?q=80&w=800&auto=format&fit=crop",
        title: "Double Bass",
        price: "Jazz Pizzicato",
      },
      {
        src: "https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?q=80&w=800&auto=format&fit=crop",
        title: "Fiddle",
        price: "Folk Music",
      },
      {
        src: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=800&auto=format&fit=crop",
        title: "Violin",
        price: "Orchestra",
      },
    ],
  ];

  const carouselItems = slides
    .map((slide, index) => {
      const activeClass = index === 0 ? "active" : "";

      // Generate grid items
      const gridItems = slide
        .map(
          (img, imgIndex) => `
            <div class="gallery-item item-${imgIndex + 1}">
                <div class="gallery-card">
                    <img src="${img.src}" alt="${img.title}" loading="lazy">
                    <div class="gallery-overlay">
                        <span class="gallery-price">${img.price}</span>
                        <span class="gallery-title">${img.title}</span>
                    </div>
                </div>
            </div>
        `
        )
        .join("");

      return `
            <div class="carousel-item ${activeClass}">
                <div class="gallery-grid">
                    ${gridItems}
                </div>
            </div>
        `;
    })
    .join("");

  section.innerHTML = `
        <div class="container">
            <div class="row mb-5">
                <div class="col-12 text-center" data-aos="fade-up">
                    <div class="badge-neo mb-3">MY GALLERY</div>
                    <h2 class="display-4 text-white text-stroke">CAPTURED MOMENTS</h2>
                </div>
            </div>

            <div id="galleryCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-aos="zoom-in">
                <div class="carousel-inner">
                    ${carouselItems}
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon-neo" aria-hidden="true"><i class="fas fa-arrow-left"></i></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon-neo" aria-hidden="true"><i class="fas fa-arrow-right"></i></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <style>
            .gallery-section {
                background-color: var(--neo-green);
                border-top: var(--neo-border);
                border-bottom: var(--neo-border);
                position: relative;
            }

            /* Grid Layout ala Masonry */
            .gallery-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 250px);
                gap: 20px;
                padding: 20px;
            }

            /* Pengaturan Grid Item agar variatif seperti contoh */
            .item-1 { grid-column: 1 / 2; grid-row: 1 / 2; }
            .item-2 { grid-column: 2 / 3; grid-row: 1 / 3; } /* Tinggi */
            .item-3 { grid-column: 3 / 4; grid-row: 1 / 2; }
            .item-4 { grid-column: 1 / 2; grid-row: 2 / 3; }
            .item-5 { grid-column: 3 / 4; grid-row: 2 / 3; }
            .item-6 { grid-column: 2 / 3; grid-row: 2 / 3; display: none; } /* Sembunyikan jika item 2 tinggi */

            /* Jika item 2 tidak tinggi, bisa pakai layout lain. 
               Mari kita buat layout yang lebih robust untuk 6 item */
            
            .gallery-grid {
                grid-template-areas: 
                    "img1 img2 img3"
                    "img4 img2 img5";
            }
            .item-1 { grid-area: img1; }
            .item-2 { grid-area: img2; }
            .item-3 { grid-area: img3; }
            .item-4 { grid-area: img4; }
            .item-5 { grid-area: img5; }
            .item-6 { display: none; } /* Hanya 5 foto per slide untuk layout ini */

            .gallery-card {
                width: 100%;
                height: 100%;
                position: relative;
                border: var(--neo-border);
                box-shadow: var(--neo-shadow);
                transition: all 0.3s ease;
                background: var(--neo-white);
                overflow: hidden;
            }

            .gallery-card:hover {
                transform: translate(-4px, -4px);
                box-shadow: 8px 8px 0px var(--neo-black);
            }

            .gallery-card img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: grayscale(100%);
                transition: filter 0.3s ease;
            }

            .gallery-card:hover img {
                filter: grayscale(0%);
            }

            .gallery-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                padding: 15px;
                background: rgba(0,0,0,0.7);
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .gallery-card:hover .gallery-overlay {
                opacity: 1;
            }

            .gallery-price {
                font-size: 1.5rem;
                font-weight: 800;
                font-family: 'Archivo Black', sans-serif;
            }

            .gallery-title {
                font-size: 0.9rem;
                font-style: italic;
            }

            /* Carousel Controls Neo Style */
            .carousel-control-prev-icon-neo,
            .carousel-control-next-icon-neo {
                background-color: var(--neo-white);
                border: var(--neo-border);
                color: var(--neo-black);
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                box-shadow: var(--neo-shadow);
                transition: all 0.2s;
            }

            .carousel-control-prev-icon-neo:active,
            .carousel-control-next-icon-neo:active {
                transform: translate(2px, 2px);
                box-shadow: 2px 2px 0px var(--neo-black);
            }

            .carousel-control-prev, .carousel-control-next {
                width: 5%;
                opacity: 1;
            }

            @media (max-width: 992px) {
                .gallery-grid {
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(3, 200px);
                    grid-template-areas: 
                        "img1 img2"
                        "img3 img4"
                        "img5 img5";
                }
                .item-2 { grid-area: img2; } /* Reset height */
            }

            @media (max-width: 576px) {
                .carousel-control-prev, 
                .carousel-control-next {
                    display: none;
                }

                .gallery-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .gallery-card {
                    height: 250px;
                }
            }
        </style>
    `;

  return section;
}

export default galerySection;
