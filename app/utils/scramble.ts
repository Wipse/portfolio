const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·—/";

/**
 * Animates an element's text content by scrambling characters before
 * resolving to the target string — like a terminal decoding text.
 */
export function scramble(el: HTMLElement, target: string, delayMs = 0): void {
  let frame = 0;
  const totalFrames = target.length * 5;

  setTimeout(() => {
    function tick() {
      el.textContent = [...target]
        .map((char, i) => {
          if (char === " ") return " ";
          if (frame / 5 > i) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      frame++;
      if (frame <= totalFrames) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }, delayMs);
}
