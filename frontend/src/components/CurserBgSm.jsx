import { useRef, useEffect } from "react";
function CurserBgSm() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="crsr"
      className="hidden md:inline-block h-5 w-5 bg-lime-500 fixed rounded-full pointer-events-none transition-all duration-100 ease-linear z-30 opacity-60"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
}

export default CurserBgSm;
