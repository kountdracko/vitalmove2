import { useState } from "react";
import maleGif from "./assets/jumping_male.gif";
import femaleGif from "./assets/jumping_female.gif";
import audioGuide from "./assets/jumping_audio.mp3";

function App() {
  const [gender, setGender] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);

  const gifToShow = gender === "female" ? femaleGif : maleGif;

  return (
    <div style={{ padding: "1rem" }}>
      {!gender ? (
        <div>
          <h1>VitalMove</h1>
          <p>Selecciona tu género para comenzar:</p>
          <button onClick={() => setGender("male")}>👨 Hombre</button>
          <button onClick={() => setGender("female")}>👩 Mujer</button>
        </div>
      ) : (
        <div>
          <h2>Jumping Jacks - Género: {gender === "male" ? "Hombre" : "Mujer"}</h2>
          <button onClick={() => setShowAnimation(!showAnimation)}>
            {showAnimation ? "Ocultar Movimiento" : "▶ Ver Movimiento"}
          </button>
          {showAnimation && <img src={gifToShow} alt="Animación Jumping Jacks" />}

          <audio className="audio-control" controls src={audioGuide}></audio>

          <div className="subtitle">
            <p>¡Vamos! Mantén el ritmo y la energía alta. Tú puedes.</p>
          </div>

          <button onClick={() => { setGender(""); setShowAnimation(false); }}>
            ⏪ Volver al inicio
          </button>
        </div>
      )}
    </div>
  );
}

export default App;