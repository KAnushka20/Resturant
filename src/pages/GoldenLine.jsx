import React, { useEffect, useRef } from "react";

const GoldenLine = () => {
  const goldenLineRef = useRef(null);
  const ornamentsRef = useRef([]);

  useEffect(() => {
    // Mouse move effect (line glow intensity)
    const handleMouseMove = (e) => {
      const goldenLine = goldenLineRef.current;
      const mouseX = e.clientX / window.innerWidth;
      const opacity = 0.7 + mouseX * 0.3;
      if (goldenLine) {
        goldenLine.style.opacity = opacity;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Pulsating ornaments
    const intervalId = setInterval(() => {
      ornamentsRef.current.forEach((ornament) => {
        if (ornament) {
          const scale = 1 + Math.random() * 0.3;
          ornament.style.transform = `rotate(45deg) scale(${scale})`;
        }
      });
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  // Inline styles
  const styles = {
    goldenLine: {
      position: "absolute", // stays inside section
      bottom: 0,
      left: 0,
      width: "100%",
      height: "8px",
      background:
        "linear-gradient(90deg, #d4af37 0%, #ffd700 25%, #fff8dc 50%, #ffd700 75%, #d4af37 100%)",
      boxShadow:
        "0 -2px 20px rgba(255, 215, 0, 0.6), 0 -4px 30px rgba(255, 215, 0, 0.4)",
      zIndex: 10,
      animation: "shimmer 3s ease-in-out infinite",
    },
    goldenOrnament: {
      position: "absolute",
      width: "12px",
      height: "12px",
      background: "linear-gradient(45deg, #ffd700, #fff8dc)",
      borderRadius: "2px",
      transform: "rotate(45deg)",
      opacity: 0.7,
      zIndex: 9,
      transition: "transform 1s ease-in-out",
    },
    ornament1: { bottom: "15px", left: "15%" },
    ornament2: { bottom: "25px", right: "15%" },
    ornament3: { bottom: "35px", left: "30%" },
    ornament4: { bottom: "45px", right: "30%" },
  };

  // Add shimmer keyframes
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes shimmer {
        0%, 100% {
          opacity: 1;
          background-position: 0% 50%;
        }
        50% {
          opacity: 0.9;
          background-position: 100% 50%;
        }
      }
    `;
    if (styleSheet) {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }, []);

  return (
    <>
      {/* Golden Line */}
      <div
        ref={goldenLineRef}
        style={styles.goldenLine}
        className="golden-line"
      >
        <style>{`
          .golden-line::before {
            content: '';
            position: absolute;
            top: -4px;
            left: 20%;
            width: 20px;
            height: 20px;
            background: linear-gradient(45deg, #d4af37, #ffd700);
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
            transform: translateX(-50%);
          }
          .golden-line::after {
            content: '';
            position: absolute;
            top: -4px;
            right: 20%;
            width: 20px;
            height: 20px;
            background: linear-gradient(45deg, #d4af37, #ffd700);
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
            transform: translateX(50%);
          }
        `}</style>
      </div>

      {/* Ornaments */}
      <div
        ref={(el) => (ornamentsRef.current[0] = el)}
        style={{ ...styles.goldenOrnament, ...styles.ornament1 }}
      />
      <div
        ref={(el) => (ornamentsRef.current[1] = el)}
        style={{ ...styles.goldenOrnament, ...styles.ornament2 }}
      />
      <div
        ref={(el) => (ornamentsRef.current[2] = el)}
        style={{ ...styles.goldenOrnament, ...styles.ornament3 }}
      />
      <div
        ref={(el) => (ornamentsRef.current[3] = el)}
        style={{ ...styles.goldenOrnament, ...styles.ornament4 }}
      />
    </>
  );
};

export default GoldenLine;
