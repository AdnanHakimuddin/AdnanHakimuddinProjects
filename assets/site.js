/* Adnan Hakimuddin — portfolio behaviour. No dependencies. */
(() => {
  "use strict";
  const D = document, H = D.documentElement;
  const P = window.PROFILE || {}, ALL = window.PROJECTS || [], FEAT = window.FEATURED || [], SIZES = window.MEDIA_SIZES || {};
  const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const HOVER = matchMedia("(hover: hover) and (pointer: fine)").matches;
  H.classList.add("js");

  const $ = (s, r = D) => r.querySelector(s);
  const $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const bySlug = s => ALL.find(p => p.slug === s);
  ALL.forEach(p => { p.isFeatured = FEAT.includes(p.slug); });
  const csUrl = p => p && p.cs ? `case-study.html?p=${encodeURIComponent(p.slug)}` : "";
  const ar = (src, fallback = "16 / 9") => SIZES[src] ? `${SIZES[src][0]} / ${SIZES[src][1]}` : fallback;
  const mail = () => `mailto:${P.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent("Hi Adnan,\n\nWhat my business does:\n\nWhat is slowing us down right now:\n\nWhat we use today (paper, Excel, existing software):\n")}`;

  const I = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 4.5v15l12.5-7.5z"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></svg>',
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M15 5l-7 7 7 7"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M9 5l7 7-7 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M5 12h14M13 6l6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".12"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M8 12.5l2.7 2.7L16 9.8"/></svg>',
    alert: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".12"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 7.5v5.5M12 16.5v.01"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" fill="none"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M16.5 16.5L20 20"/></svg>'
  };

  /* ---------------------------------------------------------------- shared */
  $$("[data-mail]").forEach(a => { a.href = mail(); });
  $$("[data-email-text]").forEach(a => { a.textContent = P.email; a.href = mail(); });
  $$("[data-phone-text]").forEach(a => { a.textContent = P.phone; a.href = P.whatsapp; });
  $$("[data-whatsapp]").forEach(a => { a.href = P.whatsapp; });
  $$("[data-linkedin]").forEach(a => { a.href = P.linkedin; });
  $$("[data-github]").forEach(a => { a.href = P.github; });
  $$("[data-year]").forEach(e => { e.textContent = new Date().getFullYear(); });
  $$("[data-footer-cases]").forEach(ul => {
    ul.innerHTML = ALL.filter(p => p.cs).map(p => `<li><a href="${csUrl(p)}">${esc(p.short)}</a></li>`).join("");
  });

  // nav state + reading progress
  const nav = $(".nav"), bar = $(".progress");
  let ticking = false;
  const onScroll = () => {
    const y = scrollY, max = H.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    nav?.classList.toggle("is-scrolled", y > 8);
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  // active section in nav (home)
  const navLinks = $$(".nav-links a[href^='#']");
  if (navLinks.length && "IntersectionObserver" in window) {
    const so = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    navLinks.forEach(a => { const s = D.getElementById(a.getAttribute("href").slice(1)); s && so.observe(s); });
  }

  // mobile menu
  const menu = $(".menu"), menuBtn = $(".menu-btn");
  const setMenu = open => {
    if (!menu) return;
    menu.classList.toggle("is-open", open);
    menuBtn?.setAttribute("aria-expanded", String(open));
    D.body.style.overflow = open ? "hidden" : "";
    if (open) $(".menu-close", menu)?.focus(); else menuBtn?.focus();
  };
  menuBtn?.addEventListener("click", () => setMenu(true));
  $(".menu-close")?.addEventListener("click", () => setMenu(false));
  menu?.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  D.addEventListener("keydown", e => { if (e.key === "Escape" && menu?.classList.contains("is-open")) setMenu(false); });

  // reveal on scroll
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { rootMargin: "0px 0px -10% 0px", threshold: .06 }) : null;
  const observe = root => $$("[data-reveal], .flow", root).forEach(el => io ? io.observe(el) : el.classList.add("in"));

  /* ---------------------------------------------------------------- media */
  // A screenshot or video in a browser-style frame.
  function frame({ src, alt = "", video = null, title = "", label = "", ratio, lazy = true, bar = true }) {
    const aspect = ratio || ar(video?.poster || src);
    const sz = SIZES[src], want = aspect.split("/").map(Number);
    const fit = sz && Math.abs(sz[0] / sz[1] - want[0] / want[1]) > .35 ? ' class="fit"' : "";
    const img = src ? `<img src="${esc(src)}" alt="${esc(alt)}"${fit} ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async">` : "";
    const inner = video
      ? `<button class="vplay" type="button" data-video="${esc(video.src)}" data-poster="${esc(video.poster || src)}" data-title="${esc(title)}" aria-label="Play the ${esc(title)} demo, ${esc(video.length || "")}">
           ${img}<span class="vplay-btn">${I.play}</span>
           <span class="vplay-meta"><span>Product demo</span><span class="mono">${esc(video.length || "")}</span></span>
         </button>`
      : img;
    return `<div class="frame">${bar ? `<div class="frame-bar" aria-hidden="true"><i></i><i></i><i></i>${label ? `<span>${esc(label)}</span>` : ""}</div>` : ""}<div class="frame-in" style="--ar:${aspect}">${inner}</div></div>`;
  }
  // inline playback: swap the poster for a real player
  D.addEventListener("click", e => {
    const b = e.target.closest(".vplay");
    if (!b || b.hasAttribute("data-open-video")) return;
    const v = D.createElement("video");
    Object.assign(v, { controls: true, autoplay: true, playsInline: true, preload: "auto" });
    v.poster = b.dataset.poster; v.src = b.dataset.video;
    v.setAttribute("aria-label", `${b.dataset.title} demo video`);
    b.replaceWith(v);
    v.play?.().catch(() => {});
  });

  /* video dialog */
  let vdlg;
  function openVideo(p, v) {
    if (!vdlg) {
      vdlg = D.createElement("dialog");
      vdlg.className = "modal"; vdlg.setAttribute("aria-label", "Project video");
      vdlg.innerHTML = `<div class="modal-in"><div class="modal-bar"><div><h2></h2><p></p></div><div class="modal-actions"><a class="btn btn--sm" data-cs>Read the case study</a><button class="icon-btn" type="button" data-close aria-label="Close video">${I.close}</button></div></div><video controls playsinline></video></div>`;
      D.body.append(vdlg);
      vdlg.addEventListener("click", e => { if (e.target === vdlg || e.target.closest("[data-close]")) vdlg.close(); });
      vdlg.addEventListener("close", () => { const vid = $("video", vdlg); vid.pause(); vid.removeAttribute("src"); vid.load(); });
    }
    $("h2", vdlg).textContent = p.title;
    $("p", vdlg).textContent = v.caption || "";
    const cs = $("[data-cs]", vdlg); cs.href = csUrl(p); cs.hidden = !p.cs;
    const vid = $("video", vdlg); vid.poster = v.poster || ""; vid.src = v.src;
    vdlg.showModal();
    vid.play?.().catch(() => {});
  }
  D.addEventListener("click", e => {
    const b = e.target.closest("[data-open-video]");
    if (!b) return;
    const p = bySlug(b.dataset.openVideo);
    const v = b.dataset.which === "demo" ? p?.demo : p?.video;
    if (p && v) { e.preventDefault(); openVideo(p, v); }
  });

  /* screenshot lightbox */
  let ldlg, lset = [], li = 0;
  const showShot = () => {
    const [src, cap] = lset[li];
    const img = $("img", ldlg); img.src = src; img.alt = cap;
    $("h2", ldlg).textContent = cap;
    $("p", ldlg).textContent = `${li + 1} of ${lset.length}`;
  };
  function openLightbox(set, i) {
    if (!ldlg) {
      ldlg = D.createElement("dialog");
      ldlg.className = "modal"; ldlg.setAttribute("aria-label", "Screenshot viewer");
      ldlg.innerHTML = `<div class="modal-in"><img alt=""><div class="modal-bar"><div><h2></h2><p></p></div><div class="modal-actions"><button class="icon-btn" type="button" data-prev aria-label="Previous screenshot">${I.prev}</button><button class="icon-btn" type="button" data-next aria-label="Next screenshot">${I.next}</button><button class="icon-btn" type="button" data-close aria-label="Close">${I.close}</button></div></div></div>`;
      D.body.append(ldlg);
      const step = d => { li = (li + d + lset.length) % lset.length; showShot(); };
      ldlg.addEventListener("click", e => {
        if (e.target === ldlg || e.target.closest("[data-close]")) return ldlg.close();
        if (e.target.closest("[data-prev]")) step(-1);
        if (e.target.closest("[data-next]")) step(1);
      });
      ldlg.addEventListener("keydown", e => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
    }
    lset = set; li = i; showShot(); ldlg.showModal();
  }

  const page = D.body.dataset.page;

  /* ================================================================ HOME */
  if (page === "home") {
    const feat = FEAT.map(bySlug).filter(Boolean).slice(0, 4);
    $("#featured").innerHTML = feat.map(p => {
      const cs = csUrl(p);
      const media = p.video
        ? frame({ src: p.video.poster || p.poster, alt: `${p.title} screenshot`, video: p.video, title: p.title, label: p.title })
        : frame({ src: p.poster, alt: `${p.title} screenshot`, label: p.title });
      return `<article class="feature" data-reveal aria-labelledby="f-${esc(p.slug)}">
        <div class="feature-media" ${p.video ? `data-open-wrap="${esc(p.slug)}"` : ""}>${media}</div>
        <div>
          <div class="feature-meta"><span class="badge badge--accent">${esc(p.domain)}</span><span class="badge">${esc(p.status)}</span></div>
          <h3 class="t-h3" id="f-${esc(p.slug)}">${cs ? `<a href="${cs}">${esc(p.title)}</a>` : esc(p.title)}</h3>
          <p class="summary">${esc(p.summary)}</p>
          <p class="feature-problem"><b>The problem</b>${esc(p.problem)}</p>
          <ul class="checks">${(p.outcomes || []).map(o => `<li>${I.check}<span>${esc(o)}</span></li>`).join("")}</ul>
          <div class="feature-links">
            ${cs ? `<a class="btn" href="${cs}">Read the case study</a>` : ""}
            ${p.video ? `<button class="btn btn--secondary" type="button" data-open-video="${esc(p.slug)}">${I.play}Watch demo · ${esc(p.video.length)}</button>` : ""}
          </div>
        </div>
      </article>`;
    }).join("");
    // featured posters open the video dialog rather than playing inline
    $$("[data-open-wrap] .vplay").forEach(b => b.setAttribute("data-open-video", b.closest("[data-open-wrap]").dataset.openWrap));

    $("#xp").innerHTML = (P.experience || []).map(x => `<li><span class="when">${esc(x.when)}</span><h3 class="t-h4">${esc(x.role)} <span>· ${esc(x.org)}</span></h3><p>${esc(x.text)}</p></li>`).join("");

    const vids = [];
    ALL.forEach(p => { if (p.video) vids.push([p, p.video, "video"]); if (p.demo) vids.push([p, p.demo, "demo"]); });
    const secs = l => l.split(":").reduce((a, b) => a * 60 + +b, 0);
    vids.sort((a, b) => secs(b[1].length) - secs(a[1].length));
    $("#reel").innerHTML = vids.map(([p, v, which], i) => `<article class="reel-item" data-reveal>
        <div class="frame"><div class="frame-in" style="--ar:16 / 9"><button class="vplay" type="button" data-open-video="${esc(p.slug)}" data-which="${which}" aria-label="Play the ${esc(p.title)} video, ${esc(v.length)}">
          <img src="${esc(v.poster)}" alt="" loading="lazy" decoding="async"><span class="vplay-btn">${I.play}</span>
          <span class="vplay-meta"><span>${which === "demo" ? "Full walkthrough" : "Product demo"}</span><span class="mono">${esc(v.length)}</span></span></button></div></div>
        <div class="reel-text">
          ${i === 0 ? `<span class="badge">${esc(p.domain)}</span>` : ""}
          <h3 class="t-h4">${esc(p.title)}${which === "demo" ? " — full walkthrough" : ""}</h3>
          <p>${esc(v.caption)}</p>
          ${p.cs ? `<a class="link" href="${csUrl(p)}">Read the case study ${I.arrow}</a>` : ""}
        </div>
      </article>`).join("");

    const go = () => H.classList.add("is-loaded");
    Promise.race([D.fonts?.ready || Promise.resolve(), new Promise(r => setTimeout(r, 700))]).then(() => requestAnimationFrame(go));
  }

  /* ================================================================ PROJECTS */
  if (page === "projects") {
    const grid = $("#pgrid"), count = $("#count");
    const st = { type: "all", featured: false, video: false, q: "" };
    const types = ["all", ...new Set(ALL.map(p => p.type))];
    $("#seg").innerHTML = types.map(t => `<button type="button" data-type="${esc(t)}" aria-pressed="${t === "all"}">${t === "all" ? "All" : esc(t) + "s"}</button>`).join("");
    const card = p => {
      const cs = csUrl(p);
      return `<article class="pcard is-out">
        <a class="pmedia" href="${cs || "#"}" ${cs ? "" : 'tabindex="-1"'} aria-label="${esc(p.title)} case study" data-preview="${esc(p.video?.src || "")}">
          ${frame({ src: p.poster, alt: `${p.title} screenshot`, label: p.title, ratio: "16 / 10" })}
        </a>
        <div>
          <div class="pcard-meta"><span class="badge badge--accent">${esc(p.domain)}</span><span class="badge">${esc(p.status)}</span>${p.isFeatured ? '<span class="badge"><span class="dot"></span>Featured</span>' : ""}</div>
          <h2>${cs ? `<a href="${cs}">${esc(p.title)}</a>` : esc(p.title)}</h2>
          <p>${esc(p.summary)}</p>
          <div class="pcard-links">
            ${cs ? `<a class="btn btn--sm" href="${cs}">Read the case study</a>` : ""}
            ${p.video ? `<button class="btn btn--secondary btn--sm" type="button" data-open-video="${esc(p.slug)}">${I.play}Watch demo · ${esc(p.video.length)}</button>` : ""}
            ${p.live ? `<a class="btn btn--secondary btn--sm" href="${esc(p.live)}" target="_blank" rel="noopener">Visit site</a>` : ""}
            ${p.repo ? `<a class="btn btn--secondary btn--sm" href="${esc(p.repo)}" target="_blank" rel="noopener">View code</a>` : ""}
          </div>
        </div>
      </article>`;
    };
    let timer;
    const render = (animate = true) => {
      const q = st.q.toLowerCase();
      const list = ALL.filter(p => (st.type === "all" || p.type === st.type) && (!st.featured || p.isFeatured) && (!st.video || p.video)
        && (!q || [p.title, p.summary, p.problem, p.domain, p.status, ...(p.outcomes || [])].join(" ").toLowerCase().includes(q)));
      count.textContent = `${list.length} of ${ALL.length} projects`;
      const paint = () => {
        grid.innerHTML = list.length ? list.map(card).join("")
          : `<div class="empty"><h2 class="t-h4">No projects match these filters</h2><p>${st.q ? `Nothing found for “${esc(st.q)}”. ` : ""}Clear the filters to see all ${ALL.length} projects.</p><button class="btn btn--secondary btn--sm" type="button" data-reset>Clear filters</button></div>`;
        requestAnimationFrame(() => requestAnimationFrame(() => $$(".pcard", grid).forEach((c, i) => setTimeout(() => c.classList.remove("is-out"), RM ? 0 : i * 50))));
      };
      clearTimeout(timer);
      const cur = $$(".pcard", grid);
      if (animate && cur.length && !RM) { cur.forEach(c => c.classList.add("is-out")); timer = setTimeout(paint, 220); } else paint();
    };
    $("#seg").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      st.type = b.dataset.type; $$("#seg button").forEach(x => x.setAttribute("aria-pressed", x === b)); render();
    });
    $$("[data-toggle]").forEach(b => b.addEventListener("click", () => {
      const k = b.dataset.toggle; st[k] = !st[k]; b.setAttribute("aria-pressed", st[k]); render();
    }));
    const input = $("#q");
    $(".search").insertAdjacentHTML("afterbegin", I.search);
    let qt; input.addEventListener("input", () => { clearTimeout(qt); qt = setTimeout(() => { st.q = input.value.trim(); render(); }, 160); });
    grid.addEventListener("click", e => {
      if (!e.target.closest("[data-reset]")) return;
      Object.assign(st, { type: "all", featured: false, video: false, q: "" }); input.value = "";
      $$("#seg button").forEach(x => x.setAttribute("aria-pressed", x.dataset.type === "all"));
      $$("[data-toggle]").forEach(x => x.setAttribute("aria-pressed", "false")); render();
    });
    if (HOVER && !RM) {
      grid.addEventListener("mouseover", e => {
        const a = e.target.closest(".pmedia"); if (!a || !a.dataset.preview || a.contains(e.relatedTarget)) return;
        let v = $("video.preview", a);
        if (!v) { v = D.createElement("video"); Object.assign(v, { muted: true, loop: true, playsInline: true, preload: "auto", className: "preview" }); v.src = a.dataset.preview; $(".frame-in", a).append(v); }
        v.play().then(() => v.classList.add("on")).catch(() => {});
      });
      grid.addEventListener("mouseout", e => {
        const a = e.target.closest(".pmedia"); if (!a || a.contains(e.relatedTarget)) return;
        const v = $("video.preview", a); if (v) { v.classList.remove("on"); v.pause(); }
      });
    }
    render(false);
  }

  /* ================================================================ CASE STUDY */
  if (page === "case") {
    const slug = new URLSearchParams(location.search).get("p");
    const p = bySlug(slug), c = p && p.cs, root = $("#cs");
    if (!c) {
      D.title = "Case study not found — Adnan Hakimuddin";
      root.innerHTML = `<section class="notfound"><div class="wrap"><h1 class="t-h1">Case study not found</h1><p class="lead">There's no case study at this address. It may have been renamed.</p><a class="btn" href="projects.html">See all projects</a></div></section>`;
    } else {
      D.title = `${p.title} — Case study — Adnan Hakimuddin`;
      $('meta[name="description"]')?.setAttribute("content", p.summary);
      $('meta[property="og:title"]')?.setAttribute("content", `${p.title} — case study`);
      $('meta[property="og:description"]')?.setAttribute("content", p.summary);
      const v = p.demo || p.video;
      const heroMedia = v
        ? `<figure class="cs-media" data-reveal>${frame({ src: v.poster, alt: "", video: v, title: p.title, label: p.title, lazy: false })}<figcaption>${esc(v.caption || "")}</figcaption></figure>`
        : p.poster ? `<figure class="cs-media" data-reveal>${frame({ src: p.poster, alt: `${p.title} screenshot`, label: p.title, lazy: false })}</figure>` : "";

      const table = (s, cls = "") => `<div class="tbl-wrap"><table class="tbl ${cls}"><thead><tr>${s.head.map(h => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${s.rows.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      const S = {
        text: s => `<div class="prose">${(s.body || []).map(t => `<p>${esc(t)}</p>`).join("")}</div>`,
        issues: s => `<ul class="issues">${s.items.map(([t, d]) => `<li><h3 class="t-h4">${I.alert}<span>${esc(t)}</span></h3><p>${esc(d)}</p></li>`).join("")}</ul>`,
        flow: s => `<ol class="flow" style="--n:${s.nodes.length}">${s.nodes.map(([t, id, d], i) => `<li><div class="node"><span class="step">Step ${i + 1}</span><h3>${esc(t)}</h3><span class="mono">${esc(id)}</span><p>${esc(d)}</p></div></li>`).join("")}</ol>`,
        features: s => `<div class="feats">${s.items.map(([t, d]) => `<div>${I.check}<h3 class="t-h4">${esc(t)}</h3><p>${esc(d)}</p></div>`).join("")}</div>`,
        decisions: s => `<ul class="decisions">${s.items.map(([t, d]) => `<li><h3 class="t-h4">${esc(t)}</h3><p>${esc(d)}</p></li>`).join("")}</ul>`,
        metrics: s => `<div class="metrics">${s.items.map(([n, l, d]) => `<div><strong>${esc(n)}</strong><b>${esc(l)}</b><span>${esc(d)}</span></div>`).join("")}</div>`,
        table: s => table(s, "tbl--num"),
        roles: s => table(s),
        list: s => `<div class="cols">${s.columns.map(([h, items]) => `<div><h3 class="t-h4">${esc(h)}</h3><ul>${items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("")}</div>`,
        timeline: s => `<ol class="timeline">${s.items.map(([d, t, items]) => `<li><span class="mono">${esc(d)}</span><h3 class="t-h4">${esc(t)}</h3><ul>${items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></li>`).join("")}</ol>`,
        screens: (s, si) => {
          const tall = s.items.some(([src]) => SIZES[src] && SIZES[src][1] > SIZES[src][0]);
          return `<div class="shots ${tall ? "shots--tall" : ""} ${s.items.length % 2 ? "shots--lead" : ""}">${s.items.map(([src, cap], i) => `<figure><button type="button" data-shot="${si}:${i}" aria-label="Enlarge: ${esc(cap)}">${frame({ src, alt: cap, bar: false, ratio: s.ratio ? s.ratio.replace("/", " / ") : undefined })}</button><figcaption>${esc(cap)}</figcaption></figure>`).join("")}</div>`;
        }
      };
      const secs = c.sections || [];
      const start = ALL.indexOf(p);
      const related = [2, 3].map(k => ALL[(start + k) % ALL.length]).filter(x => x !== p);
      const next = ALL[(start + 1) % ALL.length];

      root.innerHTML = `
        <section class="cs-hero"><div class="wrap">
          <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><a href="projects.html">Projects</a><span aria-hidden="true">/</span><span aria-current="page">${esc(p.title)}</span></nav>
          <div class="cs-tags"><span class="badge badge--accent">${esc(p.domain)}</span><span class="badge">${esc(p.status)}</span><span class="badge">${esc(p.year)}</span></div>
          <h1 class="t-h1">${esc(p.title)}: ${esc(c.headline.charAt(0).toLowerCase() + c.headline.slice(1))}</h1>
          <p class="lead">${esc(c.intro)}</p>
          <dl class="cs-meta">${(c.meta || []).map(([k, val]) => `<div><dt>${esc(k)}</dt><dd>${esc(val)}</dd></div>`).join("")}</dl>
          ${heroMedia}
        </div></section>
        <div class="wrap cs-body">
          <aside class="toc" aria-label="On this page"><p>On this page</p><ol>${secs.map(s => `<li><a href="#${esc(s.id)}">${esc(s.nav || s.title)}</a></li>`).join("")}</ol></aside>
          <div>${secs.map((s, si) => `<section class="cs-sec" id="${esc(s.id)}" aria-labelledby="h-${esc(s.id)}">
              <h2 class="t-h2" id="h-${esc(s.id)}">${esc(s.title)}</h2>
              ${s.lede ? `<p class="lead">${esc(s.lede)}</p>` : ""}
              ${(S[s.type] || (() => ""))(s, si)}
            </section>`).join("")}
            <a class="next-proj" href="${csUrl(next) || "projects.html"}"><div><span>Next case study</span><strong>${esc(next.title)}</strong></div>${I.arrow}</a>
          </div>
        </div>
        <section class="section dark" aria-labelledby="rel-h"><div class="wrap">
          <div class="sec-head"><div><p class="eyebrow">More work</p><h2 class="t-h2" id="rel-h">Related projects</h2></div><a class="link" href="projects.html" style="justify-self:end">All projects ${I.arrow}</a></div>
          <div class="related">${related.map(r => `<a href="${csUrl(r) || "projects.html"}">${frame({ src: r.poster, alt: "", label: r.title, ratio: "16 / 10" })}<div><span class="badge">${esc(r.domain)}</span><h3 style="margin-top:12px">${esc(r.title)}</h3><p>${esc(r.summary)}</p></div></a>`).join("")}</div>
        </div></section>`;

      root.addEventListener("click", e => {
        const b = e.target.closest("[data-shot]"); if (!b) return;
        const [si, i] = b.dataset.shot.split(":").map(Number);
        openLightbox(secs[si].items, i);
      });
      const links = $$(".toc a");
      if (io && links.length) {
        const tio = new IntersectionObserver(es => es.forEach(en => {
          if (en.isIntersecting) links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
        }), { rootMargin: "-25% 0px -65% 0px" });
        secs.forEach(s => { const el = D.getElementById(s.id); el && tio.observe(el); });
      }
    }
  }

  observe(D);
  onScroll();
})();
