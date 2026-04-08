/**
 * Create a fluid font size based on viewport using CSS clamp().
 *
 * @see https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
 */
export function createFluidSize(minFs = 14, maxFs = 18, minW = 360, maxW = 1512, rem = 16): string {
  const minFSrem = minFs / rem
  const maxFSrem = maxFs / rem
  const minWRem = minW / rem
  const maxWRem = maxW / rem

  const slope = (maxFSrem - minFSrem) / (maxWRem - minWRem)
  const yIntercept = -minWRem * slope + minFSrem
  const preferred = `${yIntercept.toFixed(2)}rem + ${(slope * 100).toFixed(2)}vw`

  return `clamp(${minFSrem}rem, ${preferred}, ${maxFSrem}rem)`
}
