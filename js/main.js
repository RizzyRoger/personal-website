(function () {
  var keys = document.querySelectorAll(".key[data-nav]");
  var cards = [];
  for (var i = 0; i < keys.length; i++) {
    var id = keys[i].getAttribute("data-nav");
    var el = id ? document.getElementById(id) : null;
    if (el) cards.push({ id: id, el: el, key: keys[i] });
  }

  var numEl = document.getElementById("card-num");
  var nameEl = document.getElementById("card-name");
  var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var current = cards.length ? cards[0].id : "";

  function indexOf(id) {
    for (var n = 0; n < cards.length; n++) {
      if (cards[n].id === id) return n;
    }
    return 0;
  }

  function show(id, flip) {
    var found = false;
    for (var c = 0; c < cards.length; c++) {
      if (cards[c].id === id) found = true;
    }
    if (!found) id = cards[0] && cards[0].id;
    current = id;

    for (var k = 0; k < keys.length; k++) {
      var on = keys[k].getAttribute("data-nav") === id;
      keys[k].classList.toggle("is-on", on);
      if (on) keys[k].setAttribute("aria-current", "true");
      else keys[k].removeAttribute("aria-current");
    }

    for (var s = 0; s < cards.length; s++) {
      var card = cards[s].el;
      var active = cards[s].id === id;
      card.classList.toggle("is-on", active);
      card.hidden = !active;
      if (active && flip && !still) {
        card.classList.remove("is-flip");
        void card.offsetWidth;
        card.classList.add("is-flip");
      }
    }

    var idx = indexOf(id);
    if (numEl) numEl.textContent = String(idx + 1);
    if (nameEl && cards[idx]) {
      nameEl.textContent = cards[idx].el.getAttribute("data-title") || id;
    }
  }

  function go(id, writeHash) {
    if (!id || id === current) {
      show(id || current, false);
      return;
    }
    show(id, true);
    if (writeHash !== false && history.replaceState) {
      history.replaceState(null, "", "#" + id);
    }
  }

  function alias(hash) {
    if (hash === "now" || hash === "bio") return "portrait";
    if (hash === "dogs-copy") return "dogs";
    if (hash === "mods") return "e30";
    if (hash === "civic-plan") return "civic";
    if (hash === "album") return "books";
    return hash;
  }

  var hash = alias((location.hash || "").replace(/^#/, ""));
  show(hash || (cards[0] && cards[0].id), false);

  window.addEventListener("hashchange", function () {
    var next = alias((location.hash || "").replace(/^#/, ""));
    if (next) go(next, false);
  });

  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  if (prev) {
    prev.addEventListener("click", function () {
      var i = indexOf(current);
      go(cards[i === 0 ? cards.length - 1 : i - 1].id);
    });
  }
  if (next) {
    next.addEventListener("click", function () {
      var i = indexOf(current);
      go(cards[i === cards.length - 1 ? 0 : i + 1].id);
    });
  }

  var find = document.querySelector(".menu.is-find");
  if (find && keys[0]) {
    find.addEventListener("click", function () {
      keys[0].focus();
    });
  }

  var plots = document.querySelectorAll(".bare[data-src]");
  for (var p = 0; p < plots.length; p++) {
    (function (plot) {
      var src = plot.getAttribute("data-src");
      var img = new Image();
      img.alt = plot.getAttribute("data-alt") || "";
      img.addEventListener("load", function () {
        plot.classList.add("is-filled");
        plot.insertBefore(img, plot.firstChild);
      });
      img.src = src;
    })(plots[p]);
  }
})();
