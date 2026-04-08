import gsap from "gsap";

interface Options {
  isActive: Readonly<Ref<boolean>>;
  slug: Readonly<Ref<string>>;
  emit: (event: "activate") => void;
}

export function useProjectCard({ isActive, slug, emit }: Options) {
  const router = useRouter();
  const titleRef = ref<HTMLElement | null>(null);
  const detailsRef = ref<HTMLElement | null>(null);

  // ── Navigation ──────────────────────────────────────────────────────────────
  function onClick() {
    if (isActive.value) router.push(`/projects/${slug.value}`);
    else emit("activate");
  }

  // ── Hover ───────────────────────────────────────────────────────────────────
  function onMouseEnter() {
    if (isActive.value) return;
    const title = titleRef.value;
    if (title) gsap.to(title, { opacity: 0.5, duration: 0.2, ease: "power2.out" });
  }

  function onMouseLeave() {
    if (isActive.value) return;
    const title = titleRef.value;
    if (title) gsap.to(title, { opacity: 0.25, duration: 0.2, ease: "power2.in" });
  }

  // ── Accordion animation ─────────────────────────────────────────────────────
  function animate(active: boolean) {
    const title = titleRef.value;
    const details = detailsRef.value;
    if (!title || !details) return;

    gsap.killTweensOf([title, details]);

    if (active) {
      gsap.to(title, {
        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
        opacity: 1,
        x: 0,
        duration: 0.45,
        ease: "power3.out",
      });
      gsap.to(details, {
        height: details.scrollHeight,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
        delay: 0.05,
      });
    } else {
      gsap.to(title, {
        fontSize: "0.85rem",
        opacity: 0.25,
        x: -8,
        duration: 0.35,
        ease: "power2.in",
      });
      gsap.to(details, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }

  watch(isActive, animate);

  onMounted(() => {
    const title = titleRef.value;
    const details = detailsRef.value;
    if (!title || !details) return;

    gsap.set(title, {
      fontSize: isActive.value ? "clamp(1.5rem, 3vw, 2.5rem)" : "0.85rem",
      opacity: isActive.value ? 1 : 0.25,
      x: isActive.value ? 0 : -8,
    });
    gsap.set(details, {
      height: isActive.value ? "auto" : 0,
      opacity: isActive.value ? 1 : 0,
    });
  });

  return { titleRef, detailsRef, onClick, onMouseEnter, onMouseLeave };
}
