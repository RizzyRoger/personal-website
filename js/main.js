(function () {
  var path = (window.location.pathname || "/").replace(/\/index\.html$/, "/");
  var page = "about";
  if (/\/marvin\/?$/.test(path) || path.indexOf("/marvin/") !== -1) page = "marvin";
  else if (/\/lithium\/?$/.test(path) || path.indexOf("/lithium/") !== -1) page = "lithium";

  document.body.setAttribute("data-page", page);

  var links = document.querySelectorAll(".roll-link[data-nav]");
  for (var i = 0; i < links.length; i++) {
    var on = links[i].getAttribute("data-nav") === page;
    links[i].classList.toggle("is-on", on);
    if (on) links[i].setAttribute("aria-current", "page");
    else links[i].removeAttribute("aria-current");
  }

  var vinyl = document.querySelector(".vinyl[data-src]");
  if (vinyl) {
    var src = vinyl.getAttribute("data-src");
    var img = new Image();
    img.alt = "Roger Wei";
    img.addEventListener("load", function () {
      vinyl.classList.add("is-filled");
      vinyl.insertBefore(img, vinyl.firstChild);
    });
    img.src = src;
  }

  var head = document.querySelector(".cutter-head");
  var sheets = document.querySelectorAll(".sheet");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function markFeed() {
    var mid = window.innerHeight * 0.38;
    var current = sheets[0];
    for (var s = 0; s < sheets.length; s++) {
      var r = sheets[s].getBoundingClientRect();
      sheets[s].classList.remove("is-under-cutter");
      if (r.top <= mid && r.bottom > mid) current = sheets[s];
    }
    if (current) current.classList.add("is-under-cutter");
    if (head && current) {
      var bed = document.querySelector(".bed");
      var bedTop = bed ? bed.getBoundingClientRect().top : 0;
      var cr = current.getBoundingClientRect();
      var y = Math.max(12, cr.top - bedTop + 8);
      head.style.transform = reduce ? "none" : "translateY(" + y + "px)";
    }
  }

  markFeed();
  window.addEventListener("scroll", markFeed, { passive: true });
  window.addEventListener("resize", markFeed);
})();
