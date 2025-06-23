import { useState } from "react";
import jumpingImg from "./assets/jumping_jacks.jpg";
import jumpingGif from "./assets/jumping_jacks_demo.gif";
import audioGuide from "./assets/jumping_audio.mp3";

function App() {
  const [showExercise, setShowExercise] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <div style={{ padding: "1rem" }}>
      {!showExercise ? (
        <div>
          <h1>VitalMove</h1>
          <h2>Rutinas accesibles y guiadas</h2>
          <button onClick={() => setShowExercise(true)}>Entrar a Jumping Jacks</button>
        </div>
      ) : (
        <div>
          <h1>Jumping Jacks</h1>
          <img src={jumpingImg} alt="Jumping Jacks" />
          <p>Duración: 1 minuto</p>

          <button onClick={() => setShowAnimation(!showAnimation)}>
            {showAnimation ? "Ocultar Movimiento" : "▶ Ver Movimiento"}
          </button>

          {showAnimation && <img src={jumpingGif} alt="Animación Jumping Jacks" />}

          <audio className="audio-control" controls src={audioGuide}></audio>

          <div className="subtitle">
            <p><strong>Subtítulos:</strong> Abre y cierra piernas y brazos al mismo tiempo. Mantén el ritmo. Respira. Repite durante 1 minuto.</p>
          </div>

          <div style={{ textAlign: "left", margin: "1rem auto", maxWidth: "500px" }}>
            <h3>Adaptaciones para mayores de 50:</h3>
            <ul>
              <li>Evita saltos si hay dolor en rodillas: realiza pasos laterales suaves.</li>
              <li>Apoya manos en la cintura para mejor equilibrio.</li>
              <li>Realiza el movimiento más lento si es necesario.</li>
            </ul>
          </div>

          <button onClick={() => setShowExercise(false)}>← Volver al inicio</button>
        </div>
      )}
    </div>
  );
}

export default App;