/** Valid HTML heading tags and span for semantic flexibility. */
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'

/**
 * Font size tokens derived from the Tailwind config.
 * Keep in sync with `theme.extend.fontSize` in tailwind.config.ts.
 */
export type FontSize =
  | 'display-8xl'
  | 'display-7xl'
  | 'display-6xl'
  | 'display-5xl'
  | 'display-4xl'
  | 'display-3xl'
  | 'display-2xl'
  | 'display-xl'
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'body-4xl'
  | 'body-3xl'
  | 'body-2xl'
  | 'body-xl'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'body-xs'
