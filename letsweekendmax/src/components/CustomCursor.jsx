import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /* =========================
     DETECT MOBILE / TOUCH
  ========================= */
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(
        window.matchMedia("(hover: none), (pointer: coarse)").matches
      );
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);


  /* =========================
     HOVER TEXT
  ========================= */
  useEffect(() => {
    if (isMobile) {
      setHoverText("");
      return;
    }

    const handleMouseOver = (e) => {
      const target = e.target;

      if (target.closest(".flight-deal")) {
        setHoverText("Book this flight deal ✈");
      } else if (target.closest(".postcard")) {
        setHoverText("Click to flip ✦");
      } else if (target.closest("a, button")) {
        setHoverText("[click me!]");
      } else {
        setHoverText("");
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.closest(".flight-deal, .postcard, a, button")
      ) {
        setHoverText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile]);


  /* =========================
     CURSOR POSITION
  ========================= */
  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobile]);


  /* =========================
     CLICK BURST
  ========================= */
  useEffect(() => {
    if (isMobile) return;

    const handleClick = (e) => {
      createBurst(e.clientX, e.clientY);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isMobile]);


  const createBurst = (x, y) => {
    const lines = 8;
    const length = 12;

    for (let i = 0; i < lines; i++) {
      const line = document.createElement("div");

      line.className = "burst-line";

      const angle = (360 / lines) * i;

      line.style.left = `${x}px`;
      line.style.top = `${y}px`;
      line.style.setProperty("--angle", `${angle}deg`);
      line.style.setProperty("--length", `${length}px`);

      document.body.appendChild(line);

      setTimeout(() => line.remove(), 600);
    }
  };


  /* =========================
     DON'T SHOW ON MOBILE
  ========================= */
  if (isMobile) return null;


  return hoverText
    ? createPortal(
        <span
          className="cursor-text"
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          {hoverText}
        </span>,
        document.body
      )
    : null;
};

export default CustomCursor;