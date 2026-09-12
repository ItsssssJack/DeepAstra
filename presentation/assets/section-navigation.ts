/** One physical arrow press advances one section, including during smooth scrolling. */
export function installSectionNavigation(root: HTMLElement): () => void {
  let targetIndex: number | null = null;
  let settleTimer: ReturnType<typeof setTimeout> | undefined;

  const resetTarget = () => {
    targetIndex = null;
    clearTimeout(settleTimer);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (['Home', 'End', 'PageDown', 'PageUp'].includes(event.key)) {
      resetTarget();
    }
    if (
      !['ArrowDown', 'ArrowUp'].includes(event.key) ||
      event.defaultPrevented ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.isComposing
    )
      return;

    const focused = event.target;
    if (
      focused instanceof HTMLElement &&
      (focused.isContentEditable ||
        focused.closest(
          'input, textarea, select, video, audio, [role="slider"], ' +
            '[role="spinbutton"], [role="combobox"], [role="listbox"], ' +
            '[role="tablist"], [role="menu"], [role="tree"], [role="grid"], ' +
            '[role="dialog"], [data-section-navigation="ignore"]',
        ))
    )
      return;

    const sections = Array.from(
      root.querySelectorAll<HTMLElement>('[data-nav-section]'),
    );
    if (!sections.length) return;
    event.preventDefault();
    // Holding the key should not also trigger the browser's native page scroll.
    if (event.repeat) return;

    const maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const positions = sections.map((section, index) =>
      index === 0
        ? 0
        : Math.min(
            maxScroll,
            Math.max(
              0,
              section.getBoundingClientRect().top + window.scrollY - 24,
            ),
          ),
    );
    const visibleIndex = positions.reduce(
      (current, position, index) =>
        position <= window.scrollY + 4 ? index : current,
      0,
    );
    const current = targetIndex ?? visibleIndex;
    const direction = event.key === 'ArrowDown' ? 1 : -1;
    const next = Math.max(
      0,
      Math.min(sections.length - 1, current + direction),
    );
    targetIndex = next;
    clearTimeout(settleTimer);
    settleTimer = setTimeout(resetTarget, 1000);

    const section = sections[next];
    // Keep focus with the new scene so Tab continues through its controls.
    section.focus({ preventScroll: true });
    const url = new URL(window.location.href);
    url.hash = section.id;
    window.history.replaceState(window.history.state, '', url);
    window.scrollTo({
      top: positions[next],
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  };

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('scrollend', resetTarget);
  window.addEventListener('wheel', resetTarget, { passive: true });
  window.addEventListener('touchstart', resetTarget, { passive: true });
  window.addEventListener('pointerdown', resetTarget, { passive: true });
  window.addEventListener('resize', resetTarget);
  window.addEventListener('hashchange', resetTarget);
  return () => {
    resetTarget();
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('scrollend', resetTarget);
    window.removeEventListener('wheel', resetTarget);
    window.removeEventListener('touchstart', resetTarget);
    window.removeEventListener('pointerdown', resetTarget);
    window.removeEventListener('resize', resetTarget);
    window.removeEventListener('hashchange', resetTarget);
  };
}
