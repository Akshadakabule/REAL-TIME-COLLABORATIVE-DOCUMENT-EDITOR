import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000");

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("text-change", (data) => {
      setText(data);
    });

    return () => socket.off("text-change");
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    socket.emit("text-change", value);
  };

  return (
    <div className="App">
      <h2>📝 Real-Time Collaborative Editor</h2>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
      />
    </div>
  );
}

export default App;
