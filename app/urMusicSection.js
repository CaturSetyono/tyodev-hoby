// Optimized urMusicSection with working Gemini integration
// Copy this to replace the existing urMusicSection.js

function urMusicSection() {
  const section = document.createElement("section");
  section.classList.add("urmusic-section", "py-5");
  section.innerHTML = `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="text-center mb-4" data-aos="fade-down">
                        <h2 class="display-3 text-white">urMUSIC <span class="text-accent">AI</span></h2>
                        <p class="text-white lead">Ceritain mood kamu biar aku tau lagu yang pas buat kamu. </p
                    </div>
                    
                    <div class="form-container-neo" data-aos="zoom-in" data-aos-delay="200">
                        
                        <div class="p-4">
                            <form id="moodForm">
                                <div class="mb-4">
                                    <label class="label-neo">DESCRIBE YOUR MOOD </label>
                                    <textarea class="form-control input-neo" id="moodDescription" name="moodDescription" rows="4" 
                                              placeholder="ceritain ajaa gapapa.."
                                              required></textarea>
                                    <small class="text-muted mt-2 d-block">💡 Tip: Ceritakan mood, aktivitas, dan preferensi musik kamu secara bebas</small>
                                </div>
                                
                                <button type="submit" class="btn btn-generate w-100">
                                    GENERATE MUSIC RECOMMENDATIONS <i class="fas fa-music ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="recommendationResult" class="mt-5" style="display: none;">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="result-box">
                            
                            <div id="recommendationContent"></div>
                            <div class="text-center mt-4">
                                <button class="btn btn-outline-black" onclick="document.getElementById('moodForm').scrollIntoView()">
                                    <i class="fas fa-redo me-2"></i>RESET SYSTEM
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .urmusic-section {
                background-color: var(--neo-blue);
            }
            
            .text-accent { color: var(--neo-green); }
            
            .form-container-neo {
                background: var(--neo-white);
                border: 3px solid var(--neo-black);
                box-shadow: 8px 8px 0px rgba(0,0,0,0.3);
            }
            
            .form-header {
                background: var(--neo-black);
                color: var(--neo-green);
                padding: 10px 20px;
                font-family: 'monospace';
                font-weight: bold;
                border-bottom: 3px solid var(--neo-black);
            }
            
            .label-neo {
                font-weight: 800;
                text-transform: uppercase;
                margin-bottom: 5px;
                display: block;
            }
            
            .input-neo {
                border: 3px solid var(--neo-black) !important;
                border-radius: 0 !important;
                background: #f4f4f4;
                font-weight: 600;
            }
            
            .input-neo:focus {
                background: #fff;
                box-shadow: 4px 4px 0px var(--neo-green);
            }
            
            /* Custom Radio Button */
            .btn-check:checked + .btn-radio {
                background: var(--neo-green);
                color: var(--neo-black);
                box-shadow: 3px 3px 0px var(--neo-black);
                transform: translate(-2px, -2px);
            }
            
            .btn-radio {
                border: 2px solid var(--neo-black);
                padding: 8px 16px;
                font-weight: bold;
                cursor: pointer;
                background: white;
                transition: all 0.2s;
                display: inline-block;
            }
            
            .btn-radio:hover {
                background: #eee;
            }
            
            .btn-generate {
                background: var(--neo-black);
                color: var(--neo-green);
                font-family: 'Archivo Black';
                font-size: 1.2rem;
                padding: 15px;
                border: 3px solid var(--neo-green);
                border-radius: 0;
                transition: all 0.2s;
            }
            
            .btn-generate:hover {
                background: var(--neo-green);
                color: var(--neo-black);
                border-color: var(--neo-black);
                box-shadow: 5px 5px 0px var(--neo-black);
            }
            
            .btn-generate:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }

            /* Result Styles */
            .result-box {
                background: var(--neo-green);
                border: 3px solid var(--neo-black);
                padding: 2rem;
                box-shadow: 10px 10px 0px var(--neo-black);
            }
            
            .song-item-neo {
                background: var(--neo-white);
                border: 2px solid var(--neo-black);
                padding: 1rem;
                margin-bottom: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .btn-spotify {
                background: #1db954;
                color: white;
                border: 2px solid var(--neo-black);
                font-weight: bold;
                padding: 8px 16px;
                text-decoration: none;
                border-radius: 0;
                box-shadow: 3px 3px 0px var(--neo-black);
                transition: all 0.2s;
            }
            
            .btn-spotify:hover {
                color: white;
                background: #1ed760;
                transform: translate(-2px, -2px);
                box-shadow: 5px 5px 0px var(--neo-black);
            }
            
            .btn-outline-black {
                border: 3px solid var(--neo-black);
                font-weight: bold;
                background: transparent;
                padding: 10px 20px;
            }
            .btn-outline-black:hover {
                background: var(--neo-black);
                color: var(--neo-white);
            }
            
            .loading-indicator {
                display: inline-block;
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;

  // Attach Event Listener
  setTimeout(() => {
    const form = document.getElementById("moodForm");
    if (form) {
      form.addEventListener("submit", handleMoodSubmit);
    }
  }, 100);

  return section;
}

// Helper function for radio buttons
function createRadio(value, label) {
  return `
    <input type="radio" class="btn-check" name="mood" id="${value}" value="${value}">
    <label class="btn-radio" for="${value}">${label}</label>
  `;
}

// Enhanced form submission handler
async function handleMoodSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const moodDescription = formData.get("moodDescription");

  if (!moodDescription || moodDescription.trim().length < 10) {
    showErrorMessage(
      "Mohon ceritakan mood dan situasi kamu lebih detail (minimal 10 karakter)"
    );
    return;
  }

  // Enhanced loading state
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML =
    'AI SEDANG BERPIKIR... <i class="loading-indicator fas fa-spinner ms-2"></i>';
  submitBtn.disabled = true;

  try {
    const recommendation = await generateMusicRecommendation(moodDescription);
    displayRecommendation(recommendation);
  } catch (error) {
    showErrorMessage(
      "🤖 AI sedang tidak terhubung. Coba lagi dalam beberapa saat ya!"
    );
  } finally {
    // Restore button state
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
}

// Optimized Gemini API integration
async function generateMusicRecommendation(moodDescription) {
  const API_KEY = "AIzaSyA3Acf5VYEFtWxVq_8KAhtGDlUibernA9M";
  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

  // Build optimized prompt
  const prompt = `Berdasarkan deskripsi mood dan situasi berikut: "${moodDescription}"

Berikan 3-5 rekomendasi lagu yang cocok dalam format JSON yang valid:
{
  "recommendations": [
    {
      "title": "Judul Lagu",
      "artist": "Nama Artist", 
      "reason": "Alasan singkat kenapa cocok (max 60 karakter)",
      "genre": "Genre musik",
      "spotify_search": "judul lagu artist"
    }
  ]
}

Pastikan lagu-lagu populer dan mudah ditemukan di Spotify. Untuk field spotify_search, gunakan format yang mudah dicari di Spotify.`;

  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    // Robust response validation
    if (
      !data.candidates ||
      !data.candidates[0] ||
      !data.candidates[0].content ||
      !data.candidates[0].content.parts
    ) {
      throw new Error("Invalid response structure from Gemini");
    }

    const generatedText = data.candidates[0].content.parts[0].text;

    // Enhanced JSON parsing
    let parsedResponse;
    try {
      // Remove markdown code blocks if present
      const cleanedText = generatedText
        .replace(/```json\n?|\n?```/g, "")
        .trim();

      // Try direct parsing first
      try {
        parsedResponse = JSON.parse(cleanedText);
      } catch {
        // Fallback: extract JSON with regex
        const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          parsedResponse = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error("No valid JSON found");
        }
      }

      // Validate structure
      if (
        !parsedResponse.recommendations ||
        !Array.isArray(parsedResponse.recommendations)
      ) {
        throw new Error("Invalid recommendations structure");
      }
    } catch (parseError) {
      throw new Error("Gagal memproses respon AI");
    }

    return {
      moodDescription,
      songs: parsedResponse.recommendations,
      source: "gemini",
    };
  } catch (error) {
    throw error;
  }
}

// Enhanced display function
function displayRecommendation(rec) {
  const resultDiv = document.getElementById("recommendationResult");
  const contentDiv = document.getElementById("recommendationContent");

  let html = `
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="lead fw-bold mb-1">REKOMENDASI MUSIK UNTUK KAMU</p>
        <p class="mb-0 text-muted small">"${rec.moodDescription.substring(
          0,
          100
        )}${rec.moodDescription.length > 100 ? "..." : ""}"</p>
      </div>
    </div>
  `;

  rec.songs.forEach((song, idx) => {
    const spotifyQuery = song.spotify_search || `${song.title} ${song.artist}`;
    const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(
      spotifyQuery
    )}`;

    html += `
      <div class="song-item-neo">
        <div class="flex-grow-1">
          <div class="fw-bold h5 mb-1">#${idx + 1} ${song.title}</div>
          <div class="small text-muted mb-1">oleh ${song.artist}</div>
          <div class="small fst-italic text-success mb-1">"${song.reason}"</div>
          ${
            song.genre ? `<span class="badge bg-dark">${song.genre}</span>` : ""
          }
        </div>
        <div class="text-end ms-3">
          <a href="${spotifyUrl}" target="_blank" class="btn btn-spotify">
            <i class="fab fa-spotify me-1"></i>
            Spotify
          </a>
        </div>
      </div>
    `;
  });

  contentDiv.innerHTML = html;
  resultDiv.style.display = "block";
  resultDiv.scrollIntoView({ behavior: "smooth" });
}

// Error message display function
function showErrorMessage(message) {
  const resultDiv = document.getElementById("recommendationResult");
  const contentDiv = document.getElementById("recommendationContent");

  contentDiv.innerHTML = `
    <div class="text-center py-5">
      <div class="mb-3">
        <i class="fas fa-robot fa-3x text-muted"></i>
      </div>
      <h4 class="text-muted">${message}</h4>
      <p class="text-muted small mt-3">Pastikan koneksi internet stabil dan coba lagi</p>
    </div>
  `;

  resultDiv.style.display = "block";
  resultDiv.scrollIntoView({ behavior: "smooth" });
}

// Bonus: Music search function (kept for backward compatibility but not used in UI)
function searchMusic(title, artist) {
  const query = encodeURIComponent(`${title} ${artist}`);
  const spotifyUrl = `https://open.spotify.com/search/${query}`;
  window.open(spotifyUrl, "_blank");
}

export default urMusicSection;
