document.body.onload = function () {
  setTimeout(function () {
    const preloader = document.getElementById("page-preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 2000);
};
