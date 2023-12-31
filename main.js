function backToTop() {
  let button = $(".back-to-top");

  $(window).on("scroll", () => {
    if ($(this).scrollTop() >= 50) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on("click", (e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $(document).height() - $(window).height() }, 0);
  });
}
backToTop();
