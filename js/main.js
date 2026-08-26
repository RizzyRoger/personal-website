(function () {
  var keys = document.querySelectorAll(".key[data-nav]");
  var sections = [];
  for (var i = 0; i < keys.length; i++) {
    var id = keys[i].getAttribute("data-nav");
    var el = id ? document.getElementById(id) : null;
    if (el) sections.push({ id: id, el: el, key: keys[i] });
  }

  function setOn(id) {
    for (var k = 0; k < keys.length; k++) {
      var on = keys[k].getAttribute("data-nav") === id;
      keys[k].classList.toggle("is-on", on);
      if (on) keys[k].setAttribute("aria-current", "true");
      else keys[k].removeAttribute("aria-current");
    }
  }

  var hash = (location.hash || "").replace(/^#/, "");
  if (hash) setOn(hash);
  else if (sections.length) setOn(sections[0].id);

  if ("IntersectionObserver" in window && sections.length) {
    var current = sections[0].id;
    var spy = new IntersectionObserver(
      function (entries) {
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

  var beds = document.querySelectorAll(".bed");
  var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (still || !("IntersectionObserver" in window)) return;

  var growing = [];
  for (var b = 0; b < beds.length; b++) {
    if (beds[b].querySelector(".planting")) growing.push(beds[b]);
  }
  if (!growing.length) return;

  document.documentElement.classList.add("js-plant");

  var observer = new IntersectionObserver(
    function (entries) {
      var order = 0;
      for (var e = 0; e < entries.length; e++) {
        if (!entries[e].isIntersecting) continue;
        plant(entries[e].target, order++);
        observer.unobserve(entries[e].target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.18 }
  );

  function plant(bed, order) {
    window.setTimeout(function () {
      bed.classList.add("is-planted");
    }, order * 120);
  }

  for (var g = 0; g < growing.length; g++) observer.observe(growing[g]);
})();
