(function () {
  var path = (window.location.pathname || "/").replace(/\/index\.html$/, "/");
  var page = "about";

  if (/\/marvin\/?$/.test(path) || path.indexOf("/marvin/") !== -1) {
    page = "marvin";
  } else if (/\/lithium\/?$/.test(path) || path.indexOf("/lithium/") !== -1) {
    page = "lithium";
  }

  document.body.setAttribute("data-page", page);

  var links = document.querySelectorAll(".nav-link[data-nav]");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var isActive = link.getAttribute("data-nav") === page;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  }

  var frame = document.querySelector(".portrait[data-src]");
  if (frame) {
    var src = frame.getAttribute("data-src");
    var img = new Image();
    img.alt = "Roger Wei";
    img.addEventListener("load", function () {
      img.classList.add("loaded");
      frame.insertBefore(img, frame.firstChild);
    });
    img.src = src;
  }
})();
