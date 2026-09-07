/* =========================================================================
   MAIN.JS — Renderiza la interfaz a partir de DATA.JS
   No contiene información de sedes/servicios "hardcodeada": todo se lee
   de las estructuras definidas en data.js.
   ========================================================================= */

// ---------- Utilidades ----------
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const ICONS = {
  pin: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  clock: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  phone: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 2 6a2 2 0 0 1 2-2z"/></svg>',
  whatsapp: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-3.5-6.6"/><path d="M20 12a8 8 0 0 1-11.5 7.2L4 20l1-4.3A8 8 0 0 1 20 12z"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  instagram: '<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>',
  siren: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 1 6 6v6H6v-6a6 6 0 0 1 6-6z"/><line x1="4" y1="21" x2="20" y2="21"/><line x1="12" y1="1" x2="12" y2="3"/></svg>',
  users: '<svg class="icon" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3-5.5 7-5.5s7 2.2 7 5.5"/><circle cx="17" cy="9" r="2.4"/><path d="M22 20c0-2.6-2-4.4-4.5-4.9"/></svg>',
  star: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 2l2.9 6.3 6.8.7-5.1 4.6 1.5 6.7L12 16.9 5.9 20.3l1.5-6.7L2.3 9l6.8-.7z"/></svg>',
  shield: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3l7 3v6c0 5-3.4 8.4-7 9-3.6-.6-7-4-7-9V6z"/></svg>',
  stethoscope: '<svg class="icon" viewBox="0 0 24 24"><path d="M5 4v6a5 5 0 0 0 10 0V4"/><path d="M15 10a5 5 0 0 0 5 5 3 3 0 1 1-3 3"/><circle cx="5" cy="4" r="1.5"/><circle cx="15" cy="4" r="1.5"/></svg>',
  "heart-pulse": '<svg class="icon" viewBox="0 0 24 24"><path d="M20 8.5c0 4.5-8 10-8 10s-8-5.5-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 8.5z"/></svg>',
  flask: '<svg class="icon" viewBox="0 0 24 24"><path d="M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3"/><path d="M8 15h8"/></svg>',
  scan: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3"/><circle cx="12" cy="12" r="3"/></svg>',
  tooth: '<svg class="icon" viewBox="0 0 24 24"><path d="M8 3c-2.5 0-4 2-4 4.5 0 3 1 5 1.5 8S7 21 8.5 21s1.5-4 1.8-6 .7-3 1.7-3 1.4 1 1.7 3 .3 6 1.8 6 2.5-3 3-5.5 1.5-5 1.5-8C20 5 18.5 3 16 3c-1.5 0-2.5 1-4 1s-2.5-1-4-1z"/></svg>',
  baby: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M6 21c0-4 2.5-6.5 6-6.5s6 2.5 6 6.5"/></svg>',
  heart: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 8.5c0 4.5-8 10-8 10s-8-5.5-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 8.5z"/></svg>',
  activity: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 12h4l2 8 4-16 2 8h6"/></svg>',
  glasses: '<svg class="icon" viewBox="0 0 24 24"><circle cx="6.5" cy="14.5" r="3.5"/><circle cx="17.5" cy="14.5" r="3.5"/><path d="M10 14.5h4M3 14.5 2 9a2 2 0 0 1 2-2M21 14.5 22 9a2 2 0 0 0-2-2M4 7h3M17 7h3"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
  map: '<svg class="icon" viewBox="0 0 24 24"><path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>',
};

function icon(name) {
  return ICONS[name] || "";
}

// =========================================================================
// NAVEGACIÓN MÓVIL
// =========================================================================
const navToggle = $("#navToggle");
const navLinks = $("#navLinks");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
$$("#navLinks a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// =========================================================================
// SCROLL A SECCIONES — manejado por JS (no depende del salto nativo por
// ancla, que puede fallar dentro de un iframe/visor de artifacts)
// =========================================================================
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const headerOffset = $(".site-header").offsetHeight + 16;
  const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
}

$$('a[href^="#"]').forEach((a) => {
  const id = a.getAttribute("href").slice(1);
  if (!id || !document.getElementById(id)) return;
  a.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(id);
  });
});

// =========================================================================
// HERO — franja cronológica de sedes (derivada de SEDES)
// =========================================================================
(function renderHeroTimeline() {
  $("#heroTimeline").innerHTML = SEDES.map(
    (s) => `
    <div class="hero-timeline-item">
      <span class="hero-timeline-dot"></span>
      <span class="yr">${s.anioApertura}</span>
      <strong>${s.nombre}</strong>
      <span class="loc">${s.ciudadEstado}</span>
    </div>`
  ).join("");
})();

// =========================================================================
// NOSOTROS — origen, integración público/privada, modelo de impacto y línea de tiempo
// =========================================================================
(function renderOrigen() {
  $("#origenContexto").textContent = ORIGEN.contexto;
  $("#origenIdea").textContent = ORIGEN.idea;
  $("#integraPublico").innerHTML = ORIGEN.publico.map((i) => `<li>${i}</li>`).join("");
  $("#integraPrivado").innerHTML = ORIGEN.privado.map((i) => `<li>${i}</li>`).join("");
})();

(function renderImpacto() {
  $("#impactoGrid").innerHTML = IMPACTO.map(
    (i) => `
    <div class="impacto-card">
      <div class="impacto-cifra">${i.cifra}</div>
      <h4>${i.titulo}</h4>
      <p>${i.descripcion}</p>
    </div>`
  ).join("");
})();

(function renderTimeline() {
  $("#timelineTrack").innerHTML = LINEA_DE_TIEMPO.map(
    (t, i) => `
    <div class="timeline-item">
      <div class="timeline-dot">${t.anio}</div>
      <strong>${t.nombre}</strong>
      <p>${t.descripcion}</p>
    </div>`
  ).join("");
})();

// =========================================================================
// SEDES — filtros + tarjetas
// =========================================================================
function serviciosCount(sede) {
  return (
    sede.especialidades.length +
    sede.diagnosticoEstudios.length +
    sede.serviciosComplementarios.length +
    sede.odontologia.length
  );
}

function sedeTags(sede, limit = 4) {
  const all = [
    ...sede.especialidades,
    ...sede.odontologia,
    ...sede.serviciosComplementarios,
  ];
  const shown = all.slice(0, limit);
  const rest = all.length - shown.length;
  let html = shown.map((t) => `<span class="tag">${t}</span>`).join("");
  if (rest > 0) html += `<span class="tag-more">+${rest} más</span>`;
  return html;
}

function formatHorario(horario) {
  return horario
    .split(". ")
    .filter(Boolean)
    .map((line) => line.trim())
    .join("<br>");
}

function sedeCardHTML(sede, index) {
  const num = String(index + 1).padStart(2, "0");
  return `
  <article class="sede-card" data-sede="${sede.id}">
    <div class="sede-card-body">
      <span class="sede-tab">${num}</span>
      <div class="sede-card-head">
        <h3>${sede.nombre}</h3>
        ${sede.emergencia24h ? '<span class="sede-badge">Emergencia 24h</span>' : ""}
      </div>
      <div class="sede-location">${icon("pin")} ${sede.ciudadEstado}</div>

      <ul class="sede-meta">
        <li>${icon("clock")} <span>${formatHorario(sede.horario)}</span></li>
      </ul>

      ${sedeTags(sede) ? `<div class="tag-row">${sedeTags(sede)}</div>` : ""}

      <div class="sede-card-actions">
        <button class="btn btn-secondary btn-sm" data-open-sede="${sede.id}">Ver sede</button>
        <a class="btn btn-secondary btn-sm" href="${sede.mapsHref}" target="_blank" rel="noopener">${icon("map")} Cómo llegar</a>
      </div>
    </div>
  </article>`;
}

function renderSedes(filter = "todas") {
  const list =
    filter === "todas"
      ? SEDES
      : SEDES.filter((s) => {
          if (filter === "emergencia") return s.emergencia24h;
          if (filter === "odontologia") return s.odontologia.length > 0;
          return s.especialidades.includes(filter);
        });

  $("#sedesGrid").innerHTML = list.length
    ? list.map(sedeCardHTML).join("")
    : `<p style="color:var(--ink-60)">No hay sedes que coincidan con este filtro.</p>`;

  attachSedeCardEvents();
}

// ---------- Modal de sede ----------
const overlay = $("#sedeModalOverlay");
const modalContent = $("#modalContent");

function listSection(title, items) {
  if (!items || items.length === 0) return "";
  return `
    <div class="modal-section">
      <h4>${title}</h4>
      <div class="tag-row">${items.map((i) => `<span class="tag">${i}</span>`).join("")}</div>
    </div>`;
}

function openSedeModal(id) {
  const sede = SEDES.find((s) => s.id === id);
  if (!sede) return;

  modalContent.innerHTML = `
    <h3 id="modalTitle">${sede.nombre}</h3>
    <div class="sede-location">${icon("pin")} ${sede.ciudadEstado}</div>

    <ul class="sede-meta">
      <li>${icon("pin")} <span>${sede.direccion}</span></li>
    </ul>

    ${listSection("Especialidades médicas", sede.especialidades)}
    ${listSection("Diagnóstico y estudios", sede.diagnosticoEstudios)}
    ${listSection("Servicios complementarios", sede.serviciosComplementarios)}
    ${listSection("Odontología", sede.odontologia)}

    <div class="modal-actions">
      <a class="btn btn-primary" href="${sede.whatsappHref}" target="_blank" rel="noopener">${icon("whatsapp")} Escribir por WhatsApp</a>
    </div>
  `;

  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeSedeModal() {
  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

$("#modalClose").addEventListener("click", closeSedeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeSedeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSedeModal();
});
modalContent.addEventListener("click", (e) => {
  if (e.target.closest("[data-close-modal]")) closeSedeModal();
});

function attachSedeCardEvents() {
  $$("[data-open-sede]").forEach((btn) =>
    btn.addEventListener("click", () => openSedeModal(btn.dataset.openSede))
  );
}

renderSedes();

// =========================================================================
// SERVICIOS GENERALES
// =========================================================================
(function renderServiciosGenerales() {
  $("#serviciosGrid").innerHTML = CATEGORIAS_SERVICIOS.map(
    (c) => `
    <div class="servicio-card">
      <div class="servicio-icon">${icon(c.icono)}</div>
      <h3>${c.nombre}</h3>
      <p>${c.descripcion}</p>
    </div>`
  ).join("");
})();

// =========================================================================
// CONTACTO — tarjetas
// =========================================================================
(function renderContact() {
  const cards = [
    { icono: "phone", label: "Llámanos", value: CONTACTO_GENERAL.telefono, href: CONTACTO_GENERAL.telefonoHref },
    { icono: "whatsapp", label: "WhatsApp", value: CONTACTO_GENERAL.whatsapp, href: CONTACTO_GENERAL.whatsappHref },
    { icono: "instagram", label: "Instagram", value: CONTACTO_GENERAL.instagram, href: CONTACTO_GENERAL.instagramHref },
  ];

  $("#contactCards").innerHTML = cards
    .map(
      (c) => `
    <a class="contact-card" href="${c.href}" target="_blank" rel="noopener">
      <div class="servicio-icon" style="width:44px;height:44px;">${icon(c.icono)}</div>
      <div><strong>${c.label}</strong><span>${c.value}</span></div>
    </a>`
    )
    .join("");
})();


// =========================================================================
// FOOTER
// =========================================================================
(function renderFooter() {
  $("#footerSedes").innerHTML = SEDES.map(
    (s) => `<li><a data-open-sede="${s.id}" href="#sedes">${s.nombre}</a></li>`
  ).join("");
  attachSedeCardEvents(); // vuelve a enlazar, incluyendo enlaces del footer

  $("#footerInstagram").href = CONTACTO_GENERAL.instagramHref;
  $("#footerWhatsapp").href = CONTACTO_GENERAL.whatsappHref;

  $("#year").textContent = new Date().getFullYear();
})();

// =========================================================================
// TOAST
// =========================================================================
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 4200);
}
