(() => {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  const headings = {
    passed: 'Both got the maths<span>.</span>',
    judgment: 'Where judgment matters<span>.</span>',
    reports: 'See the original work<span>.</span>'
  };
  function show(id, updateURL = true) {
    if (!headings[id]) id = 'passed';
    panels.forEach(panel => { panel.hidden = panel.id !== id; });
    tabs.forEach(tab => {
      const selected = tab.getAttribute('aria-controls') === id;
      tab.setAttribute('aria-selected', selected);
      tab.tabIndex = selected ? 0 : -1;
    });
    document.querySelector('.heading h1').innerHTML = headings[id];
    if (updateURL) history.pushState(null, '', '#' + id);
    window.scrollTo({top: 0, behavior: 'instant'});
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => show(tab.getAttribute('aria-controls')));
    tab.addEventListener('keydown', e => {
      let next;
      if (e.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (e.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      e.preventDefault();
      tabs[next].focus();
      show(tabs[next].getAttribute('aria-controls'));
    });
  });
  window.addEventListener('hashchange', () => show(location.hash.slice(1), false));
  window.addEventListener('popstate', () => show(location.hash.slice(1), false));
  show(location.hash.slice(1), false);
  const resize = new ResizeObserver(entries => entries.forEach(({target, contentRect}) => {
    if (!contentRect.width) return;
    const scale = contentRect.width / 1280;
    target.style.setProperty('--preview-scale', scale);
    target.style.height = Math.round(760 * scale) + 'px';
  }));
  document.querySelectorAll('.preview-window').forEach(el => resize.observe(el));
})();
