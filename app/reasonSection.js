function reasonSection() {
  const section = document.createElement("section");
  section.classList.add("reason-section", "py-5");
  section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold mb-3">Why I Love Music 🎵</h2>
                <p class="lead text-muted">Musik bukan hanya suara, tapi perasaan yang mengalir</p>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-4">
                    <div class="reason-card h-100">
                        <div class="card-icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h4>Fokus & Produktivitas</h4>
                        <p>Lo-fi dan instrumental music jadi teman terbaik saat ngoding atau belajar. 
                        Rhythm yang konsisten membantu otak tetap fokus tanpa distraksi.</p>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="reason-card h-100">
                        <div class="card-icon">
                            <i class="fas fa-heart"></i>
                        </div>
                        <h4>Emotional Support</h4>
                        <p>Saat lagi down atau stress karena deadline, musik jadi pelarian. 
                        Dari yang bikin semangat sampai yang bikin tenang - semua ada tempatnya.</p>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="reason-card h-100">
                        <div class="card-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <h4>Social Connection</h4>
                        <p>Musik jadi bahasa universal yang menghubungkan. Diskusi tentang band favorit 
                        atau sharing playlist bareng temen selalu seru!</p>
                    </div>
                </div>
            </div>
            
            <div class="row mt-5">
                <div class="col-lg-8 mx-auto">
                    <div class="music-journey">
                        <h3 class="text-center mb-4">My Musical Journey 🚀</h3>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h5>Childhood (2005-2012)</h5>
                                    <p>Dimulai dari lagu anak-anak dan pop Indonesia. Era Peterpan, Ungu, dan ST12!</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h5>Teenager (2013-2018)</h5>
                                    <p>Mulai explore rock, alternative, dan indie. Green Day, Radiohead, dan Arctic Monkeys jadi favorit.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h5>College Era (2019-Now)</h5>
                                    <p>Genre makin beragam: lo-fi, R&B, electronic, bahkan K-pop! Musik jadi soundtrack kehidupan kuliah.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .reason-section {
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                min-height: 100vh;
            }
            
            .reason-card {
                background: white;
                padding: 2rem;
                border-radius: 20px;
                text-align: center;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
                border: none;
            }
            
            .reason-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            }
            
            .card-icon {
                width: 80px;
                height: 80px;
                background: linear-gradient(45deg, #667eea, #764ba2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem;
                color: white;
                font-size: 2rem;
            }
            
            .music-journey {
                background: white;
                padding: 3rem;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            
            .timeline {
                position: relative;
                padding-left: 2rem;
            }
            
            .timeline::before {
                content: '';
                position: absolute;
                left: 20px;
                top: 0;
                bottom: 0;
                width: 2px;
                background: linear-gradient(to bottom, #667eea, #764ba2);
            }
            
            .timeline-item {
                position: relative;
                margin-bottom: 2rem;
            }
            
            .timeline-marker {
                position: absolute;
                left: -32px;
                top: 5px;
                width: 20px;
                height: 20px;
                background: linear-gradient(45deg, #667eea, #764ba2);
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 0 0 3px #667eea33;
            }
            
            .timeline-content {
                background: #f8f9fa;
                padding: 1.5rem;
                border-radius: 10px;
                border-left: 4px solid #667eea;
            }
            
            .timeline-content h5 {
                color: #667eea;
                margin-bottom: 0.5rem;
            }
        </style>
    `;

  return section;
}

export default reasonSection;
