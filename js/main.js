(function () {
  var keys = document.querySelectorAll(".key[data-nav]");
  var aliases = {
    bio: "portrait",
    now: "portrait",
    "dogs-copy": "dogs",
    mods: "e30",
    album: "books",
    "civic-plan": "civic"
  };

  var sections = [];
  for (var i = 0; i < keys.length; i++) {
    var id = keys[i].getAttribute("data-nav");
    var el = id ? document.getElementById(id) : null;
    if (el) sections.push({ id: id, el: el, key: keys[i] });
  }

  function keyOf(id) {
    return aliases[id] || id;
  }

  function setOn(id) {
    var live = keyOf(id);
    for (var k = 0; k < keys.length; k++) {
      var on = keys[k].getAttribute("data-nav") === live;
      keys[k].classList.toggle("is-on", on);
      if (on) keys[k].setAttribute("aria-current", "true");
      else keys[k].removeAttribute("aria-current");
    }
  }

  var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hold = 0;

  function jump(id, writeHash) {
    var el = document.getElementById(id);
    if (!el) return;
    hold += 1;
    var scroller = document.scrollingElement || document.documentElement;
    var top = el.getBoundingClientRect().top + scroller.scrollTop;
    scroller.scrollTo({
      top: Math.max(0, top - 8),
      behavior: still ? "auto" : "smooth"
    });
    setOn(id);
    if (writeHash !== false && history.replaceState) {
      history.replaceState(null, "", "#" + id);
    }
    window.setTimeout(function () {
      hold = Math.max(0, hold - 1);
    }, still ? 50 : 420);
  }

  var hash = (location.hash || "").replace(/^#/, "");
  if (hash && document.getElementById(hash)) {
    setOn(hash);
    window.setTimeout(function () {
      jump(hash, false);
    }, 0);
    window.addEventListener("load", function () {
      jump(hash, false);
    });
  } else if (sections.length) {
    setOn(sections[0].id);
  }

  for (var k = 0; k < keys.length; k++) {
    keys[k].addEventListener("click", function (e) {
      var id = this.getAttribute("data-nav");
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      jump(id);
    });
  }

  var jumps = document.querySelectorAll('a[href^="#"]');
  for (var j = 0; j < jumps.length; j++) {
    if (jumps[j].classList.contains("key")) continue;
    jumps[j].addEventListener("click", function (e) {
      var id = (this.getAttribute("href") || "").replace(/^#/, "");
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      jump(id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var current = sections[0].id;
    var spy = new IntersectionObserver(
      function (entries) {
        if (hold) return;
        var visible = [];
        for (var e = 0; e < entries.length; e++) {
          if (!entries[e].isIntersecting) continue;
          visible.push(entries[e].target.id);
        }
        if (!visible.length) return;
        for (var s = 0; s < sections.length; s++) {
          if (visible.indexOf(sections[s].id) !== -1) {
            current = sections[s].id;
            break;
          }
        }
        setOn(current);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: 0 }
    );
    for (var n = 0; n < sections.length; n++) spy.observe(sections[n].el);
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
