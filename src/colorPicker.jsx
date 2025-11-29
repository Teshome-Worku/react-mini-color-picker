import { useState } from "react";

const ColorBox = () => {
  const [color, setColor] = useState("rgba(51,153,153,1)");

  return (
    <div className="app">
      <h2>🎨 Color Picker</h2>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
       <p>Pick color ☝ </p>
      <div
        className="color-box"
        style={{ backgroundColor: color }}
      ></div>
     
      <p>Selected Color: <strong>{color}</strong></p>
    </div>
  );
}

export default ColorBox;
