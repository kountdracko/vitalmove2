import { useState } from "react";
import gif from "./assets/jumping_male.gif";
import audioGuide from "./assets/jumping_audio.mp3";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "1rem" }}>
      {!show ? (
        <div>
          <h1>VitalMove</h1>
          <p>Entrena con rutinas adaptadas</p>
          <button onClick={() => setShow(true)}>▶ Iniciar Jumping Jacks</button>
        </div>
      ) : (
        <div>
          <h2>Jumping Jacks</h2>
          <img src={gif} alt="Animación Jumping Jacks" />
          <audio className="audio-control" controls src={audioGuide}></audio>
          <div className="subtitle">
            <p>¡Vamos! Mantén el ritmo durante 1 minuto.</p>
          </div>
          <button onClick={() => setShow(false)}>⏪ Volver al inicio</button>
        </div>
      )}
    </div>
  );
}

export default App;