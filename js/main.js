(function () {
  var path = (window.location.pathname || "/").replace(/\/index\.html$/, "/");
  var page = "about";
  if (/\/marvin\/?$/.test(path) || path.indexOf("/marvin/") !== -1) page = "marvin";
  else if (/\/lithium\/?$/.test(path) || path.indexOf("/lithium/") !== -1) page = "lithium";
  else if (/\/group-four\/?$/.test(path) || path.indexOf("/group-four/") !== -1) page = "group-four";

  document.body.setAttribute("data-page", page);

  var keys = document.querySelectorAll(".key[data-nav]");
  for (var i = 0; i < keys.length; i++) {
    var on = keys[i].getAttribute("data-nav") === page;
    keys[i].classList.toggle("is-on", on);
    if (on) keys[i].setAttribute("aria-current", "page");
    else keys[i].removeAttribute("aria-current");
  }

  // the portrait bed takes a photo once one exists; until then it stays bare soil
  var plot = document.querySelector(".bare[data-src]");
  if (plot) {
    var img = new Image();
    img.alt = "Roger Wei";
    img.addEventListener("load", function () {
      plot.classList.add("is-filled");
      plot.insertBefore(img, plot.firstChild);
    });
    img.src = plot.getAttribute("data-src");
  }

  // one authored moment: concrete does not move, plants grow. The default state is
  // fully grown, so this only arms the animation where it can actually run.
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
