function urMusicSection() {
  const section = document.createElement("section");
  section.classList.add("urmusic-section", "py-5");
  section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold mb-3">🤖 AI Music Recommendation</h2>
                <p class="lead text-muted">Ceritain mood kamu, biar AI kasih rekomendasi lagu yang pas!</p>
            </div>
            
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="mood-form-card">
                        <h4 class="text-center mb-4">How are you feeling today? 🎵</h4>
                        
                        <form id="moodForm">
                            <div class="mb-4">
                                <label class="form-label fw-semibold">What's your current mood?</label>
                                <div class="mood-options">
                                    <input type="radio" id="happy" name="mood" value="happy" class="btn-check">
                                    <label class="btn btn-outline-primary mood-btn" for="happy">
                                        😊 Happy
                                    </label>
                                    
                                    <input type="radio" id="sad" name="mood" value="sad" class="btn-check">
                                    <label class="btn btn-outline-primary mood-btn" for="sad">
                                        😔 Sad
                                    </label>
                                    
                                    <input type="radio" id="energetic" name="mood" value="energetic" class="btn-check">
                                    <label class="btn btn-outline-primary mood-btn" for="energetic">
                                        ⚡ Energetic
                                    </label>
                                    
                                    <input type="radio" id="chill" name="mood" value="chill" class="btn-check">
                                    <label class="btn btn-outline-primary mood-btn" for="chill">
                                        😌 Chill
                                    </label>
                                    
                                    <input type="radio" id="focused" name="mood" value="focused" class="btn-check">
                                    <label class="btn btn-outline-primary mood-btn" for="focused">
                                        🎯 Focused
                                    </label>
                                    
                                    <input type="radio" id="nostalgic" name="mood" value="nostalgic" class="btn-check">
                                    <label class="btn btn-outline-primary mood-btn" for="nostalgic">
                                        🌅 Nostalgic
                                    </label>
                                </div>
                            </div>
                            
                            <div class="mb-4">
                                <label for="activity" class="form-label fw-semibold">What are you doing?</label>
                                <select class="form-select" id="activity" name="activity">
                                    <option value="">Select your activity...</option>
                                    <option value="studying">Studying/Learning</option>
                                    <option value="coding">Coding/Programming</option>
                                    <option value="working">Working</option>
                                    <option value="exercising">Exercising/Workout</option>
                                    <option value="relaxing">Relaxing/Chilling</option>
                                    <option value="commuting">Commuting/Traveling</option>
                                    <option value="gaming">Gaming</option>
                                    <option value="socializing">Hanging out with friends</option>
                                </select>
                            </div>
                            
                            <div class="mb-4">
                                <label for="description" class="form-label fw-semibold">Describe your feelings (optional)</label>
                                <textarea class="form-control" id="description" name="description" rows="3" 
                                          placeholder="Misalnya: Lagi stress karena deadline, butuh motivasi buat semangat ngerjain tugas..."></textarea>
                            </div>
                            
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary btn-lg rounded-pill px-5">
                                    <i class="fas fa-magic me-2"></i>Get My Music Recommendation
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <div id="recommendationResult" class="mt-5" style="display: none;">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="result-card">
                            <h4 class="text-center mb-4">🎵 Perfect Match for Your Mood!</h4>
                            <div id="recommendationContent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .urmusic-section {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
                color: white;
                min-height: 100vh;
            }
            
            .mood-form-card, .result-card {
                background: rgba(255,255,255,0.95);
                border-radius: 25px;
                padding: 3rem;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                backdrop-filter: blur(10px);
                color: #333;
            }
            
            .mood-options {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                gap: 10px;
                margin-top: 10px;
            }
            
            .mood-btn {
                border-radius: 25px !important;
                padding: 10px 15px;
                transition: all 0.3s ease;
                text-align: center;
                font-size: 0.9rem;
            }
            
            .mood-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(102,126,234,0.3);
            }
            
            .btn-check:checked + .mood-btn {
                background: linear-gradient(45deg, #667eea, #764ba2) !important;
                border-color: transparent !important;
                color: white !important;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(102,126,234,0.4);
            }
            
            .form-control, .form-select {
                border-radius: 15px;
                border: 2px solid #e9ecef;
                padding: 12px 20px;
                transition: all 0.3s ease;
            }
            
            .form-control:focus, .form-select:focus {
                border-color: #667eea;
                box-shadow: 0 0 0 0.2rem rgba(102,126,234,0.25);
            }
            
            .btn-primary {
                background: linear-gradient(45deg, #667eea, #764ba2);
                border: none;
                box-shadow: 0 10px 30px rgba(102,126,234,0.3);
                transition: all 0.3s ease;
            }
            
            .btn-primary:hover {
                background: linear-gradient(45deg, #764ba2, #667eea);
                transform: translateY(-3px);
                box-shadow: 0 15px 40px rgba(102,126,234,0.4);
            }
            
            .recommendation-item {
                background: linear-gradient(45deg, #f8f9fa, #ffffff);
                border-radius: 15px;
                padding: 1.5rem;
                margin-bottom: 1rem;
                border-left: 4px solid #667eea;
                transition: all 0.3s ease;
            }
            
            .recommendation-item:hover {
                transform: translateX(10px);
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            }
            
            .song-title {
                color: #667eea;
                font-weight: 600;
                margin-bottom: 0.25rem;
            }
            
            .artist-name {
                color: #764ba2;
                font-weight: 500;
                margin-bottom: 0.5rem;
            }
            
            .recommendation-reason {
                color: #666;
                font-size: 0.9rem;
                line-height: 1.5;
            }
        </style>
    `;

  // Add event listener for form submission
  setTimeout(() => {
    const form = document.getElementById("moodForm");
    if (form) {
      form.addEventListener("submit", handleMoodSubmit);
    }
  }, 100);

  return section;
}

function handleMoodSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const mood = formData.get("mood");
  const activity = formData.get("activity");
  const description = formData.get("description");

  if (!mood) {
    alert("Please select your mood first!");
    return;
  }

  // Generate recommendation based on mood and activity
  const recommendation = generateMusicRecommendation(
    mood,
    activity,
    description
  );
  displayRecommendation(recommendation);
}

function generateMusicRecommendation(mood, activity, description) {
  const recommendations = {
    happy: [
      {
        title: "Good as Hell",
        artist: "Lizzo",
        reason: "Upbeat and empowering, perfect for celebrating good vibes!",
      },
      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        reason: "Infectious energy that'll keep your mood sky high!",
      },
      {
        title: "I Gotta Feeling",
        artist: "The Black Eyed Peas",
        reason: "Classic feel-good anthem for happy moments!",
      },
    ],
    sad: [
      {
        title: "Mad World",
        artist: "Gary Jules",
        reason: "Melancholic but beautiful, perfect for processing emotions.",
      },
      {
        title: "Hurt",
        artist: "Johnny Cash",
        reason: "Deep and reflective, helps you feel understood.",
      },
      {
        title: "Black",
        artist: "Pearl Jam",
        reason: "Raw emotion that resonates with your feelings.",
      },
    ],
    energetic: [
      {
        title: "Thunder",
        artist: "Imagine Dragons",
        reason: "High energy and motivating beat to match your vibe!",
      },
      {
        title: "Pump It",
        artist: "The Black Eyed Peas",
        reason: "Pure adrenaline in musical form!",
      },
      {
        title: "Eye of the Tiger",
        artist: "Survivor",
        reason: "Classic motivational anthem for peak energy!",
      },
    ],
    chill: [
      {
        title: "Weightless",
        artist: "Marconi Union",
        reason:
          "Scientifically designed to reduce anxiety and promote relaxation.",
      },
      {
        title: "River",
        artist: "Leon Bridges",
        reason: "Smooth and soulful, perfect for unwinding.",
      },
      {
        title: "Holocene",
        artist: "Bon Iver",
        reason: "Ethereal and calming, ideal for peaceful moments.",
      },
    ],
    focused: [
      {
        title: "Minecraft OST",
        artist: "C418",
        reason: "Ambient and non-distracting, perfect for concentration.",
      },
      {
        title: "Ryo Fukui - Scenery",
        artist: "Ryo Fukui",
        reason: "Smooth jazz that enhances focus without being intrusive.",
      },
      {
        title: "Kiara",
        artist: "Bonobo",
        reason: "Electronic ambient that helps maintain concentration.",
      },
    ],
    nostalgic: [
      {
        title: "Yesterday",
        artist: "The Beatles",
        reason: "Timeless classic that evokes beautiful memories.",
      },
      {
        title: "The Sound of Silence",
        artist: "Simon & Garfunkel",
        reason: "Poetic and reflective, perfect for reminiscing.",
      },
      {
        title: "Everybody Hurts",
        artist: "R.E.M.",
        reason: "Comforting reminder that we all share similar experiences.",
      },
    ],
  };

  // Activity-based adjustments
  const activityRecommendations = {
    studying: [
      {
        title: "Lo-fi Hip Hop Radio",
        artist: "ChilledCow",
        reason: "Perfect background music for studying!",
      },
      {
        title: "Gymnopédie No. 1",
        artist: "Erik Satie",
        reason: "Classical focus music that enhances concentration.",
      },
    ],
    coding: [
      {
        title: "Synthwave Mix",
        artist: "Various Artists",
        reason: "Futuristic beats perfect for programming!",
      },
      {
        title: "Code Red",
        artist: "Dance With The Dead",
        reason: "Electronic vibes that match coding flow.",
      },
    ],
    exercising: [
      {
        title: "Till I Collapse",
        artist: "Eminem",
        reason: "Ultimate workout motivation!",
      },
      {
        title: "Stronger",
        artist: "Kanye West",
        reason: "Perfect rhythm for keeping your workout pace.",
      },
    ],
  };

  let finalRecommendations = recommendations[mood] || recommendations.happy;

  // Add activity-specific songs if available
  if (activity && activityRecommendations[activity]) {
    finalRecommendations = [
      ...activityRecommendations[activity],
      ...finalRecommendations.slice(0, 2),
    ];
  }

  return {
    mood,
    activity,
    description,
    songs: finalRecommendations.slice(0, 4),
  };
}

function displayRecommendation(recommendation) {
  const resultDiv = document.getElementById("recommendationResult");
  const contentDiv = document.getElementById("recommendationContent");

  let html = `
        <div class="mb-4 text-center">
            <p class="lead">Based on your <strong>${recommendation.mood}</strong> mood`;

  if (recommendation.activity) {
    html += ` and <strong>${recommendation.activity}</strong> activity`;
  }

  html += `, here are my recommendations:</p>
        </div>
        <div class="row">`;

  recommendation.songs.forEach((song, index) => {
    html += `
            <div class="col-md-6 mb-3">
                <div class="recommendation-item">
                    <div class="d-flex align-items-center mb-2">
                        <div class="recommendation-number">${index + 1}</div>
                        <div class="ms-3">
                            <div class="song-title">${song.title}</div>
                            <div class="artist-name">${song.artist}</div>
                        </div>
                    </div>
                    <div class="recommendation-reason">${song.reason}</div>
                </div>
            </div>`;
  });

  html += `
        </div>
        <div class="text-center mt-4">
            <button class="btn btn-outline-primary rounded-pill" onclick="document.getElementById('moodForm').scrollIntoView()">
                <i class="fas fa-redo me-2"></i>Get Another Recommendation
            </button>
        </div>
        
        <style>
            .recommendation-number {
                width: 40px;
                height: 40px;
                background: linear-gradient(45deg, #667eea, #764ba2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                flex-shrink: 0;
            }
        </style>`;

  contentDiv.innerHTML = html;
  resultDiv.style.display = "block";
  resultDiv.scrollIntoView({ behavior: "smooth" });
}

export default urMusicSection;
