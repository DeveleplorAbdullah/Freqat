$(document).ready(function () {
  function toggleDropdown(e) {
    const _d = $(e.target).closest(".dropdown"),
      _m = $(".dropdown-menu", _d);

    setTimeout(
      function () {
        const shouldOpen = e.type !== "click" && _d.is(":hover");
        _m.toggleClass("show", shouldOpen);
        _d.toggleClass("show", shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr("aria-expanded", shouldOpen);
      },
      e.type === "mouseleave" ? 300 : 0
    );
  }

  $("body")
    .on("mouseenter mouseleave", ".dropdown", toggleDropdown)
    .on("click", ".dropdown-menu a", toggleDropdown);

  $(".carousel").carousel({
    interval: 2000,
  });

  $(".anim")
    .find(".col1")
    .mouseenter(function () {
      $this = $(this);
      $(this)
        .find(".overlay-bottom-small")
        .animate(
          {
            height: "100px",
          },
          15,
          "linear",
          function () {
            //$this.find('.overlay-bottom-small').removeAttr("style");
          }
        );
    })
    .mouseleave(function () {
      $this = $(this);
      $(this)
        .find(".overlay-bottom-small")
        .animate(
          {
            height: "50px",
          },
          15,
          "linear",
          function () {
            $this.find(".overlay-bottom-small").removeAttr("style");
          }
        );
    });
});
