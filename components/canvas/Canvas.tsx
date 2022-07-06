import styles from "../../styles/canvas.module.css";
import { useRef, useEffect } from "react";
import { CanvasClass } from "./canvas.class";
export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const current = canvasRef.current;
    if (!current) return;
    const context = current.getContext("2d");
    const position = { x: 16, y: current.height - CanvasClass.Height };
    const color = "black";
    const canvas = new CanvasClass(context, { ...position }, color);
    canvas.draw();
  }, []);

  return <canvas className={styles.canvas} ref={canvasRef}></canvas>;
}
