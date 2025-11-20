function homeSection() {
  const section = document.createElement("section");
  section.classList.add(
    "home-section",
    "d-flex",
    "align-items-center"
  );
  section.innerHTML = `
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 order-2 order-lg-1">
                    <div class="hero-content">
                        <div class="badge-neo mb-3">PEMROGRAMAN WEB MOBILE</div>
                        <h1 class="display-2 mb-2 text-white">LIFE BY DAY,</h1>
                        <h1 class="display-2 mb-4 text-highlight">MUSIC BY NIGHT</h1>
                        
                        <div class="card-neo-simple mb-4">
                            <p class="lead mb-0">
                                Hai, aku <strong>Tyo</strong>! Musik bukan cuma sekedar hiburan ,musik itu hoby yang bikin tenang jadi dengerin musik itu kayak terapi buat aku. Yuk, jelajahi playlist favoritku yang penuh vibe positif dan energi seru!
                            </p>
                        </div>

                        <div class="d-flex gap-3 flex-wrap">
                            <a href="#reason" class="btn btn-neo-primary btn-lg">
                                EXPLORE VIBE <i class="fas fa-arrow-down ms-2"></i>
                            </a>
                            <a href="https://open.spotify.com/user/31orerj4pogknp6ttficxuzbnhei" target="_blank" 
                               class="btn btn-neo-secondary btn-lg">
                                <i class="fab fa-spotify me-2"></i>SPOTIFY
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0 text-center">
                    <div class="visual-wrapper">
                        <div class="vinyl-neo">
                            <div class="vinyl-inner"></div>
                            <div class="vinyl-center">
                                <i class="fas fa-music"></i>
                            </div>
                        </div>
                        <div class="decoration-star">
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .home-section {
                min-height: 90vh;
                position: relative;
                padding-top: 2rem;
            }
            
            .badge-neo {
                display: inline-block;
                background: var(--neo-green);
                color: var(--neo-black);
                font-family: 'Archivo Black';
                padding: 5px 15px;
                border: 3px solid var(--neo-black);
                box-shadow: 4px 4px 0px var(--neo-black);
                transform: rotate(-2deg);
            }

            .text-highlight {
                color: var(--neo-green);
                text-shadow: 4px 4px 0px var(--neo-black);
                -webkit-text-stroke: 2px var(--neo-black);
            }
            
            .text-white {
                text-shadow: 4px 4px 0px var(--neo-black);
            }

            .card-neo-simple {
                background: var(--neo-white);
                border: 3px solid var(--neo-black);
                padding: 1.5rem;
                box-shadow: 6px 6px 0px rgba(0,0,0,0.2);
                max-width: 600px;
            }

            /* Button Styles */
            .btn-neo-primary {
                background: var(--neo-green);
                color: var(--neo-black);
                border: 3px solid var(--neo-black);
                border-radius: 0;
                padding: 12px 30px;
                font-weight: 800;
                box-shadow: var(--neo-shadow);
                transition: all 0.2s;
            }

            .btn-neo-primary:hover {
                transform: translate(3px, 3px);
                box-shadow: var(--neo-shadow-hover);
                background: #b3e600;
            }

            .btn-neo-secondary {
                background: var(--neo-white);
                color: var(--neo-black);
                border: 3px solid var(--neo-black);
                border-radius: 0;
                padding: 12px 30px;
                font-weight: 800;
                box-shadow: var(--neo-shadow);
                transition: all 0.2s;
            }

            .btn-neo-secondary:hover {
                transform: translate(3px, 3px);
                box-shadow: var(--neo-shadow-hover);
                background: #f0f0f0;
            }

            /* Vinyl Animation */
            .visual-wrapper {
                position: relative;
                display: inline-block;
            }

            .vinyl-neo {
                width: 320px;
                height: 320px;
                background: var(--neo-black);
                border-radius: 50%;
                border: 4px solid var(--neo-black);
                position: relative;
                animation: spin 10s linear infinite;
                box-shadow: 10px 10px 0px rgba(0,0,0,0.3);
            }

            .vinyl-inner {
                position: absolute;
                top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                width: 200px; height: 200px;
                border-radius: 50%;
                border: 2px solid rgba(255,255,255,0.2);
            }

            .vinyl-center {
                width: 100px;
                height: 100px;
                background: var(--neo-green);
                border: 3px solid var(--neo-black);
                border-radius: 50%;
                position: absolute;
                top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
            }

            .decoration-star {
                position: absolute;
                top: -20px;
                right: -20px;
                font-size: 4rem;
                color: var(--neo-green);
                text-shadow: 3px 3px 0px var(--neo-black);
                animation: float 3s ease-in-out infinite;
            }

            @keyframes spin { 0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);} }
            @keyframes float { 0%, 100% {transform: translateY(0);} 50% {transform: translateY(-15px);} }
        </style>
    `;

  return section;
}

export default homeSection;