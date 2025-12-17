import { useState } from "react";
import type { RefObject, MouseEvent } from "react";

interface Bounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function useTiltEffect(
  cardRef: RefObject<HTMLDivElement | null>,
  glowRef?: RefObject<HTMLDivElement | null>
) {
  const [bounds, setBounds] = useState<Bounds | null>(null);

  function handleMouseEnter() {
    if (cardRef.current) {
      setBounds(cardRef.current.getBoundingClientRect());
    }
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    const glow = glowRef?.current;

    if (card) card.style.transform = "";
    if (glow) glow.style.backgroundImage = "";

    setBounds(null);
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    const glow = glowRef?.current;

    if (!card || !bounds) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;

    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };

    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    card.style.transform = `
      scale3d(1,1,1)
      rotate3d(
        ${-center.y / 100},
        ${center.x / 100},
        0,
        ${Math.log(distance) * 6}deg
      )
    `;

    if (glow) {
      glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffffff,
          #0000003a
        )
      `;
    }
  }

  return {
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
