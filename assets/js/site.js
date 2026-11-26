// priyanshmathur.com v5: shared behaviour. ES module, no dependencies.
// Every feature degrades to readable static HTML when this file does not run.

const root = typeof document !== 'undefined' ? document.documentElement : null;
const listeners = new Set();
const motion = {
  get on() { return !root.classList.contains('motion-off'); },
  set(on) {
    root.classList.toggle('motion-off', !on);
    try { localStorage.setItem('pm-motion', on ? 'on' : 'off'); } catch (e) { /* private mode */ }
    document.querySelectorAll('[data-motion-toggle]').forEach((b) => { b.textContent = on ? 'Pause motion' : 'Play motion'; });
    listeners.forEach((fn) => fn(on));
  },
  onChange(fn) { listeners.add(fn); },
};

function initMotion() {
  let saved = null;
  try { saved = localStorage.getItem('pm-motion'); } catch (e) { /* ignore */ }
  const on = saved ? saved === 'on' : !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  motion.set(on);
  document.querySelectorAll('[data-motion-toggle]').forEach((b) => b.addEventListener('click', () => motion.set(!motion.on)));
}

function initProgress() {
  const bar = document.querySelector('.progress');
  if (!bar) return;
  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.setProperty('--p', max > 0 ? Math.min(1, scrollY / max).toFixed(4) : 0);
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

// Wrap each word of a heading in <span class="w">, keeping inner elements (accent spans, breaks).
function splitWords(el) {
  let i = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = child.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          const s = document.createElement('span');
          s.className = 'w';
          s.style.setProperty('--i', i++);
          s.textContent = p;
          frag.appendChild(s);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
        walk(child);
      }
    });
  };
  walk(el);
}

function initReveal() {
  const items = document.querySelectorAll('.split, .rv');
  document.querySelectorAll('.split').forEach(splitWords);
  if (!('IntersectionObserver' in window)) { items.forEach((el) => el.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -2% 0px', threshold: 0.05 });
  items.forEach((el) => io.observe(el));
}

function initMenus() {
  const megas = [...document.querySelectorAll('.mega')];
  megas.forEach((m) => m.addEventListener('toggle', () => {
    if (m.open) megas.forEach((o) => { if (o !== m) o.open = false; });
  }));
  document.addEventListener('click', (e) => megas.forEach((m) => { if (!m.contains(e.target)) m.open = false; }));
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    megas.forEach((m) => { m.open = false; });
    closeMobile();
  });

  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.mobile-nav');
  function closeMobile() {
    if (!panel) return;
    panel.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  toggle?.addEventListener('click', () => {
    const open = !panel.classList.contains('is-open');
    panel.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  panel?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMobile));
}

function initRail() {
  const sections = [...document.querySelectorAll('[data-chapter]')];
  if (sections.length < 4) return;
  const rail = document.createElement('nav');
  rail.className = 'rail';
  rail.setAttribute('aria-label', 'Sections');
  sections.forEach((s, i) => {
    const a = document.createElement('a');
    a.href = `#${s.id}`;
    a.textContent = String(i + 1).padStart(2, '0');
    a.setAttribute('aria-label', s.dataset.chapter);
    rail.appendChild(a);
  });
  document.body.appendChild(rail);
  const links = [...rail.children];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const idx = sections.indexOf(e.target);
      links.forEach((l, j) => l.classList.toggle('is-active', j === idx));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => io.observe(s));
}

// ---------- hero ring ----------
const HABITS = [
  ['Distribution', 'Meet people where they already spend their time, instead of paying for every user.'],
  ['Scope', 'Ship the smallest version that can clear legal and still teach you something.'],
  ['Partners', "Get teams that don't report to you to ship one spec on the same date."],
  ['Trust', 'In finance, trust decides what ranks. Build it into the product.'],
  ['Economics', 'Judge every channel on blended CAC, not on the dashboard it lives in.'],
  ['Loops', 'Give people a reason to come back daily, then route the right ones to sales.'],
];

export function ringPolygon(k, outer = 48, inner = 22, gap = 0.93) {
  // Flat-topped hexagon ring; segment 0 is the top edge, then clockwise.
  const rad = (d) => (d * Math.PI) / 180;
  const a0 = 240 + 60 * k;
  const a1 = a0 + 60;
  const pts = [
    [outer, a0], [outer, a1], [inner, a1], [inner, a0],
  ].map(([r, a]) => [50 + r * Math.cos(rad(a)), 50 + r * Math.sin(rad(a))]);
  const cx = pts.reduce((s, p) => s + p[0], 0) / 4;
  const cy = pts.reduce((s, p) => s + p[1], 0) / 4;
  const shrunk = pts.map(([x, y]) => [cx + (x - cx) * gap, cy + (y - cy) * gap]);
  return { points: shrunk, centre: [cx, cy] };
}

function initRing() {
  const ring = document.querySelector('[data-ring]');
  if (!ring) return;
  const plane = ring.querySelector('.ring__plane');
  const nameEl = ring.querySelector('.ring__center .name');
  const idxEl = ring.querySelector('.ring__center .idx');
  const tabs = [...document.querySelectorAll('[data-habit]')];
  const line = document.querySelector('.approach__line');
  const autoBtn = document.querySelector('.autoplay');
  const LAYERS = 9;
  const segs = HABITS.map((h, k) => {
    const { points, centre } = ringPolygon(k);
    const clip = `polygon(${points.map(([x, y]) => `${x.toFixed(2)}% ${y.toFixed(2)}%`).join(',')})`;
    const seg = document.createElement('button');
    seg.className = 'seg';
    seg.type = 'button';
    seg.tabIndex = -1;
    seg.setAttribute('aria-hidden', 'true');
    // Only the polygon is clickable.
    seg.style.clipPath = clip;
    for (let l = LAYERS; l >= 1; l--) {
      const layer = document.createElement('i');
      layer.className = 'seg__layer';
      layer.style.clipPath = clip;
      layer.style.transform = `translateZ(${-l * 2.6}px)`;
      layer.style.filter = `brightness(${0.78 + (LAYERS - l) * 0.018})`;
      seg.appendChild(layer);
    }
    const top = document.createElement('i');
    top.className = 'seg__top';
    top.style.clipPath = clip;
    seg.appendChild(top);
    const num = document.createElement('span');
    num.className = 'seg__num';
    num.textContent = String(k + 1).padStart(2, '0');
    num.style.left = `${centre[0]}%`;
    num.style.top = `${centre[1]}%`;
    seg.appendChild(num);
    seg.addEventListener('click', () => { stopAuto(); select(k); });
    plane.appendChild(seg);
    return seg;
  });
  // The parent button clips its own 3D children in some engines; clip the layers instead.
  segs.forEach((s) => { s.style.clipPath = 'none'; });

  let active = 0;
  function select(k) {
    active = k;
    segs.forEach((s, j) => s.classList.toggle('is-active', j === k));
    tabs.forEach((t, j) => { t.classList.toggle('is-active', j === k); t.setAttribute('aria-selected', String(j === k)); });
    if (nameEl) nameEl.textContent = HABITS[k][0];
    if (idxEl) idxEl.textContent = String(k + 1).padStart(2, '0');
    if (line) line.textContent = HABITS[k][1];
  }
  tabs.forEach((t, j) => t.addEventListener('click', () => { stopAuto(); select(j); }));

  let timer = null;
  let autoOn = true;
  let visible = false;
  const tick = () => select((active + 1) % HABITS.length);
  const sync = () => {
    clearInterval(timer);
    timer = null;
    if (autoOn && visible && motion.on) timer = setInterval(tick, 3500);
    if (autoBtn) {
      autoBtn.querySelector('span').textContent = autoOn ? 'Autoplay on' : 'Autoplay off';
      autoBtn.setAttribute('aria-pressed', String(autoOn));
    }
  };
  function stopAuto() { autoOn = false; sync(); }
  autoBtn?.addEventListener('click', () => { autoOn = !autoOn; sync(); });
  motion.onChange(sync);
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); }).observe(ring);
  select(0);
}

// ---------- pinned showcase ----------
function initShowcase() {
  document.querySelectorAll('[data-showcase]').forEach((wrap) => {
    const panels = [...wrap.querySelectorAll('.panel')];
    const scenes = [...wrap.querySelectorAll('.scene')];
    const tabs = [...wrap.querySelectorAll('.stage__tabs button')];
    const bar = wrap.querySelector('.stage__bar');
    const set = (i) => {
      panels.forEach((p, j) => p.classList.toggle('is-active', j === i));
      scenes.forEach((s, j) => s.classList.toggle('is-active', j === i));
      tabs.forEach((t, j) => t.classList.toggle('is-active', j === i));
      if (bar) bar.style.transform = `translateX(${i * 100}%)`;
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => {
      const stacked = getComputedStyle(wrap.querySelector('.showcase__visual')).position !== 'sticky';
      if (stacked) set(i); else panels[i].scrollIntoView({ behavior: motion.on ? 'smooth' : 'auto', block: 'center' });
    }));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) set(panels.indexOf(e.target)); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    panels.forEach((p) => io.observe(p));
    set(0);
  });
}

// ---------- contact brief ----------
export function buildMail({ topics, message, name, email, company }) {
  const subject = `Hello from ${name || 'your website'}${topics.length ? `: ${topics[0]}` : ''}`;
  const lines = [
    `Topics: ${topics.length ? topics.join(', ') : 'Not chosen'}`,
    '',
    message.trim(),
    '',
    `${name}${company ? `, ${company}` : ''}`,
    email,
  ];
  const body = lines.join('\n');
  return {
    subject,
    body,
    href: `mailto:priyanshmathur2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}

function initBrief() {
  const form = document.querySelector('[data-brief]');
  if (!form) return;
  form.hidden = false;
  form.closest('.brief')?.querySelector('.brief__fallback')?.remove();
  const steps = [...form.querySelectorAll('[data-step]')];
  const labels = [...form.querySelectorAll('.brief__steps span')];
  const choices = [...form.querySelectorAll('.choice')];
  const sel = form.querySelector('[data-selection]');
  const msg = form.querySelector('textarea');
  const count = form.querySelector('.count');
  const err = form.querySelector('.err');
  let step = 0;
  const show = (i, focus = true) => {
    step = i;
    steps.forEach((s, j) => { s.hidden = j !== i; });
    labels.forEach((l, j) => l.classList.toggle('is-active', j === Math.min(i, 2)));
    if (focus) steps[i].querySelector('.brief__title')?.focus({ preventScroll: false });
  };
  const picked = () => choices.filter((c) => c.getAttribute('aria-pressed') === 'true').map((c) => c.textContent.trim());
  choices.forEach((c) => c.addEventListener('click', () => {
    c.setAttribute('aria-pressed', String(c.getAttribute('aria-pressed') !== 'true'));
    const p = picked();
    sel.textContent = p.length ? p.join(' · ') : 'Nothing selected yet.';
  }));
  msg?.addEventListener('input', () => { count.textContent = `${msg.value.length.toLocaleString('en-IN')} / 2,000 characters`; });
  form.querySelectorAll('[data-next]').forEach((b) => b.addEventListener('click', () => show(step + 1)));
  form.querySelectorAll('[data-back]').forEach((b) => b.addEventListener('click', () => show(step - 1)));
  let last = null;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if (!data.name?.trim() || !/^\S+@\S+\.\S+$/.test(data.email || '')) {
      err.textContent = 'Please add your name and a valid email, so I can reply.';
      return;
    }
    err.textContent = '';
    last = buildMail({ topics: picked(), message: msg.value || '', name: data.name.trim(), email: data.email.trim(), company: (data.company || '').trim() });
    window.location.href = last.href;
    show(3);
  });
  form.querySelector('[data-copy]')?.addEventListener('click', async (e) => {
    if (!last) return;
    try { await navigator.clipboard.writeText(`${last.subject}\n\n${last.body}`); e.target.textContent = 'Copied'; } catch (x) { e.target.textContent = 'Copy failed'; }
  });
  form.querySelector('[data-reset]')?.addEventListener('click', () => {
    form.reset();
    choices.forEach((c) => c.setAttribute('aria-pressed', 'false'));
    sel.textContent = 'Nothing selected yet.';
    count.textContent = '0 / 2,000 characters';
    show(0);
  });
  show(0, false);
}

if (typeof document !== 'undefined') {
  initMotion();
  initProgress();
  initReveal();
  initMenus();
  initRail();
  initRing();
  initShowcase();
  initBrief();
}
