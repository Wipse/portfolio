/**
 * Manages threshold-based wheel navigation over a fixed list of items.
 * Returns `activeIndex`, `jumpTo`, and `attach`/`detach` helpers to wire
 * the wheel listener to a container element.
 */
export function useWheelScroll(count: number, options?: { threshold?: number; initial?: number }) {
  const { threshold = 300, initial = 0 } = options ?? {};

  const activeIndex = ref(initial);
  let scrollAccum = 0;

  function jumpTo(index: number) {
    activeIndex.value = Math.max(0, Math.min(count - 1, index));
    scrollAccum = 0;
  }

  function onWheel(e: WheelEvent) {
    e.preventDefault();
    scrollAccum += e.deltaY;
    if (scrollAccum > threshold) jumpTo(activeIndex.value + 1);
    else if (scrollAccum < -threshold) jumpTo(activeIndex.value - 1);
  }

  function attach(el: Element | null) {
    el?.addEventListener("wheel", onWheel, { passive: false });
  }

  function detach(el: Element | null) {
    el?.removeEventListener("wheel", onWheel);
  }

  return { activeIndex, jumpTo, attach, detach };
}
