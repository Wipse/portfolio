interface PageMetaOptions {
  title: string;
  description: string;
  /** Falls back to `description` when omitted. */
  ogDescription?: string;
}

/**
 * Sets the page title, meta description and Open Graph tags in one call.
 * Pass the full title including "— Studio Wisse".
 */
export function usePageMeta({ title, description, ogDescription }: PageMetaOptions) {
  useHead({
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: ogDescription ?? description },
    ],
  });
}
