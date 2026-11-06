import { useState, useEffect } from "react";
import "../styles/ScreenSize.css";

function ScreenSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let label = "";
  let color = "";

  if (width < 600) {
    label = "📱 Phone";
    color = "lightblue";
  } else if (width < 1024) {
    label = "📟 Tablet";
    color = "lightpink";
  } else {
    label = "💻 Laptop";
    color = "lightpurple";
  }

  return (
    <div className="screen-size" style={{ backgroundColor: color }}>
      <p>Window width: {width}px</p>
      <h3>{label}</h3>
    </div>
  );
}

export default ScreenSize;