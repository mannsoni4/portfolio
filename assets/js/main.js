/* ============================================================================
   PORTFOLIO ENGINE — rendering + interactions (no dependencies)
   All content comes from content.js (window.PORTFOLIO). Nothing to edit here.
   ========================================================================== */
(function () {
  "use strict";

  var DATA = window.PORTFOLIO;
  if (!DATA) return;

  /* ------------------------------------------------------------- helpers */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* [bracketed] text becomes a visibly marked placeholder */
  function fmt(s) {
    return esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph">$1</span>');
  }

  /* ------------------------------------------------------------ shared chrome */
  function renderNav() {
    $("#wordmark").innerHTML =
      '<span class="mark">' + esc(DATA.owner.name) + '</span>' +
      '<span class="mark-sub">' + esc(DATA.owner.role) + '</span>';

    var links = $("#nav-links");
    links.innerHTML =
      '<a href="#work">Work</a>' +
      '<a href="#about">About</a>' +
      '<a href="#approach">Approach</a>';
    var cta = document.createElement("a");
    cta.className = "btn btn-ghost nav-cta";
    cta.href = "#contact";
    cta.textContent = "Contact";
    links.appendChild(cta);

    $("#menu-foot").innerHTML =
      '<a href="mailto:' + esc(DATA.owner.email) + '">' + esc(DATA.owner.email) + "</a>" +
      (DATA.owner.location ? " · " + fmt(DATA.owner.location) : "");
  }

  function renderFooter() {
    var year = new Date().getFullYear();
    var timeHtml = "";
    if (DATA.footer.showLocalTime) {
      timeHtml = '<span class="m"><span class="dot" aria-hidden="true"></span> Local time <span id="local-time">--:--</span></span>';
    }
    $("#footer-inner").innerHTML =
      '<div class="footer-meta">' +
        "<span>© " + year + " " + esc(DATA.owner.name) + "</span>" +
        "<span>" + esc(DATA.owner.role) + "</span>" +
        timeHtml +
      "</div>" +
      '<div class="footer-meta"><span>' + esc(DATA.footer.note) + "</span></div>" +
      '<a class="footer-top" href="#top">Back to top <span class=\"arr\" aria-hidden=\"true\">↑</span></a>';

    var t = $("#local-time");
    if (t) {
      var tick = function () {
        var d = new Date();
        t.textContent = String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
      };
      tick();
      setInterval(tick, 30000);
    }
  }

  /* --------------------------------------------------------- mobile menu */
  function initMenu() {
    var burger = $("#nav-burger");
    var overlay = $("#menu-overlay");
    if (!burger || !overlay) return;

    function setOpen(open) {
      overlay.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    }
    burger.addEventListener("click", function () {
      setOpen(!overlay.classList.contains("open"));
    });
    overlay.addEventListener("click", function (e) {
      if (e.target.closest("[data-menulink]")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("open")) {
        setOpen(false);
        burger.focus();
      }
    });
  }

  /* ------------------------------------------------------- scroll effects */
  /* Precise in-page anchor scrolling. The native jump can land short when
     webfonts swap in after the click and shift layout — so we compute the
     target position once fonts are ready (instant if they already are).
     "Contact" is the last section: its buttons scroll to the page bottom so
     the contact details are fully in view. */
  function initAnchors() {
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function scrollToTarget(target) {
      var y;
      if (target.id === "contact") {
        y = document.documentElement.scrollHeight - window.innerHeight;
      } else {
        var pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
        y = target.getBoundingClientRect().top + window.scrollY - pad;
      }
      window.scrollTo({ top: Math.max(0, y), behavior: reduced ? "auto" : "smooth" });
    }

    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a || a.getAttribute("href").length < 2) return;
      var target = document.getElementById(a.getAttribute("href").slice(1));
      if (!target) return;
      e.preventDefault();
      if (document.fonts && document.fonts.status !== "loaded") {
        document.fonts.ready.then(function () { scrollToTarget(target); });
      } else {
        scrollToTarget(target);
      }
    });
  }

  function initScrollFX() {
    var nav = $("#site-nav");
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* reveal on scroll */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("revealed");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll("[data-reveal]").forEach(function (n) { io.observe(n); });

    /* active section indicator */
    if ("IntersectionObserver" in window) {
      var links = {};
      ["work", "about", "approach", "contact"].forEach(function (id) {
        var a = $('#nav-links a[href="#' + id + '"]');
        var sec = document.getElementById(id);
        if (a && sec) links[id] = { a: a, sec: sec };
      });
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            Object.values(links).forEach(function (o) { o.a.removeAttribute("aria-current"); });
            links[en.target.id].a.setAttribute("aria-current", "true");
          }
        });
      }, { rootMargin: "-38% 0px -55% 0px" });
      Object.values(links).forEach(function (o) { spy.observe(o.sec); });
    }
  }

  /* ============================================================ HOME PAGE */
  function renderHome() {
    var o = DATA.owner;

    /* hero */
    $("#hero-eyebrow").textContent = DATA.hero.eyebrow;
    $("#hero-title").innerHTML = DATA.hero.headline.map(function (seg) {
      return seg.em ? "<em>" + esc(seg.t) + "</em>" : esc(seg.t);
    }).join("");
    $("#hero-sub").innerHTML = fmt(DATA.hero.sub);

    var meta = $("#hero-meta");
    var bits = [];
    if (o.availability) bits.push('<span class="avail"><span class="dot"></span>' + esc(o.availability) + "</span>");
    if (o.location) bits.push("<span>" + fmt(o.location) + "</span>");
    if (DATA.hero.metaNote) bits.push("<span>" + esc(DATA.hero.metaNote) + "</span>");
    meta.innerHTML = bits.join('<span class="sep" aria-hidden="true"></span>');

    /* about */
    $("#about-quote").innerHTML = esc(DATA.about.quote);
    $("#about-copy").innerHTML =
      DATA.about.paragraphs.map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("");
    $("#about-facts").innerHTML = DATA.about.facts.map(function (f) {
      return "<div><div class=\"k\">" + esc(f.label) + '</div><div class="v">' + fmt(f.value) + "</div></div>";
    }).join("");

    /* capabilities */
    $("#skills-list").innerHTML = DATA.skills.map(function (s, i) {
      var n = String(i + 1).padStart(2, "0");
      return (
        '<li class="skill-row" data-reveal style="--d:' + (i * 0.05).toFixed(2) + 's">' +
          '<span class="num">' + n + "</span>" +
          '<span class="name">' + esc(s.title) + "</span>" +
          '<span class="desc">' + esc(s.desc) + "</span>" +
          '<span class="go" aria-hidden="true">→</span>' +
        "</li>"
      );
    }).join("");

    /* projects */
    $("#projects-list").innerHTML = DATA.projects.map(function (p, i) {
      return (
        '<article class="project-row">' +
          '<div class="project-media" data-reveal>' +
            '<div class="project-frame">' +
              '<img src="' + esc(p.preview.src) + '" alt="' + esc(p.preview.alt) + '" loading="lazy" width="' + p.preview.w + '" height="' + p.preview.h + '">' +
            "</div>" +
          "</div>" +
          '<div class="project-info" data-reveal style="--d:.1s">' +
            '<div class="pidx"><span>' + String(i + 1).padStart(2, "0") + '</span><span class="pdot" style="background:' + esc(p.dotColor) + '" aria-hidden="true"></span><span class="pstat">' + esc(p.status) + "</span></div>" +
            '<h3 class="project-title">' + esc(p.title) + "</h3>" +
            '<div class="project-tagline">' + esc(p.tagline) + "</div>" +
            '<p class="project-desc">' + fmt(p.description) + "</p>" +
            '<ul class="project-features">' +
              p.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") +
            "</ul>" +
            '<div class="project-tags">' + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");

    /* approach */
    $("#approach-steps").innerHTML = DATA.approach.map(function (s, i) {
      return (
        '<li class="step" data-reveal style="--d:' + (i * 0.08).toFixed(2) + 's">' +
          '<span class="marker">' + String(i + 1).padStart(2, "0") + "</span>" +
          "<h3>" + esc(s.title) + "</h3>" +
          "<p>" + esc(s.desc) + "</p>" +
        "</li>"
      );
    }).join("");

    /* contact */
    $("#contact-title").innerHTML = DATA.contact.heading.map(function (seg) {
      return seg.em ? "<em>" + esc(seg.t) + "</em>" : esc(seg.t);
    }).join("");
    $("#contact-blurb").innerHTML = fmt(DATA.contact.blurb);

    var emailLink = $("#contact-email");
    emailLink.textContent = DATA.owner.email;
    emailLink.href = "mailto:" + DATA.owner.email;
    $("#contact-note").textContent = "Usually replies within a day or two";

    $("#contact-links").innerHTML = DATA.contact.links.map(function (l) {
      return (
        '<a class="contact-link-row" href="' + esc(l.href) + '"' +
        (l.href.indexOf("http") === 0 ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" +
          '<span class="k">' + fmt(l.label) + "</span>" +
          '<span class="v">' + fmt(l.value) + "</span>" +
        "</a>"
      );
    }).join("");
  }

  /* ----------------------------------------------------------------- boot */
  document.addEventListener("DOMContentLoaded", function () {
    /* always open at the top — no restored scroll, no #hash deep-links */
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    window.scrollTo(0, 0);

    renderNav();
    renderFooter();
    renderHome();
    initMenu();
    initAnchors();
    initScrollFX();
    window.addEventListener("load", function () { window.scrollTo(0, 0); }, { once: true });
  });
})();
