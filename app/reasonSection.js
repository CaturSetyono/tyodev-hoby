function reasonSection() {
  const section = document.createElement("section");
  section.classList.add("reason-section", "py-5");
  section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-3 text-white mb-3">WHY <span class="highlight">MUSIC?</span></h2>
                <div class="bg-white d-inline-block px-3 py-1 border border-dark border-3">
                    <p class="lead fw-bold mb-0">Logika Akuntansi x Emosi Musik</p>
                </div>
            </div>
            
            <div class="row g-4 mb-5">
                <div class="col-lg-4">
                    <div class="reason-card">
                        <div class="card-icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h4>FOCUS MODE</h4>
                        <p>Lo-fi dan instrumental music jadi teman terbaik saat ngoding atau belajar jurnal umum. Rhythm yang konsisten membantu otak tetap fokus.</p>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="reason-card accent-bg">
                        <div class="card-icon white-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <h4>EMOTIONAL RESET</h4>
                        <p>Saat balance sheet nggak balance, musik jadi tombol reset. Dari stress jadi semangat lagi buat nyari selisihnya.</p>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="reason-card">
                        <div class="card-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <h4>SOCIAL VIBE</h4>
                        <p>Musik jadi bahasa universal. Sharing playlist bareng temen sekelas selalu jadi topik seru pas lagi break kuliah.</p>
                    </div>
                </div>
            </div>
            
            <div class="row mt-5">
                <div class="col-lg-8 mx-auto">
                    <div class="journey-box">
                        <h3 class="text-center mb-4 border-bottom border-3 border-dark pb-3">MY TIMELINE 🚀</h3>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="year-badge">2005</div>
                                <div class="timeline-content">
                                    <h5>CHILDHOOD ERA</h5>
                                    <p>Era Peterpan, Ungu, dan ST12! Awal mula kenal nada.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="year-badge">2013</div>
                                <div class="timeline-content">
                                    <h5>TEENAGE ROCK</h5>
                                    <p>Green Day, Radiohead, Arctic Monkeys. Fase rebel dimulai.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="year-badge">NOW</div>
                                <div class="timeline-content">
                                    <h5>COLLEGE MIX</h5>
                                    <p>Lo-fi buat belajar, K-pop buat semangat, Jazz buat santai.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .reason-section {
                background-color: var(--neo-blue);
            }

            .highlight {
                background: var(--neo-green);
                color: var(--neo-black);
                padding: 0 10px;
                box-shadow: 5px 5px 0px var(--neo-black);
            }
            
            .reason-card {
                background: var(--neo-white);
                padding: 2rem;
                border: 3px solid var(--neo-black);
                box-shadow: var(--neo-shadow);
                height: 100%;
                transition: transform 0.2s;
            }
            
            .reason-card:hover {
                transform: translate(-5px, -5px);
                box-shadow: 10px 10px 0px var(--neo-black);
            }

            .reason-card.accent-bg {
                background: var(--neo-green);
            }
            
            .card-icon {
                width: 70px; height: 70px;
                background: var(--neo-black);
                color: var(--neo-green);
                border: 3px solid var(--neo-black);
                border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                font-size: 1.8rem;
                margin-bottom: 1.5rem;
                box-shadow: 3px 3px 0px rgba(0,0,0,0.2);
            }

            .white-icon {
                background: var(--neo-white);
                color: var(--neo-black);
            }
            
            .journey-box {
                background: var(--neo-white);
                border: 3px solid var(--neo-black);
                box-shadow: var(--neo-shadow);
                padding: 2rem;
            }
            
            .timeline-item {
                display: flex;
                gap: 1.5rem;
                margin-bottom: 2rem;
                align-items: flex-start;
            }
            
            .year-badge {
                background: var(--neo-black);
                color: var(--neo-white);
                font-family: 'Archivo Black';
                padding: 5px 10px;
                transform: rotate(-5deg);
                flex-shrink: 0;
            }
            
            .timeline-content h5 {
                margin-bottom: 0.2rem;
            }
            
            .timeline-content p {
                margin-bottom: 0;
                border-left: 3px solid var(--neo-green);
                padding-left: 10px;
            }
        </style>
    `;

  return section;
}

export default reasonSection;