let mo_btn = document.getElementById("mo-btn");
let mo_nav = document.getElementById("mo-nav");
$(mo_btn).click(function () {
  if ($(mo_nav).is(":hidden")) {
    $(mo_nav).slideDown("slow");
  } else {
    $(mo_nav).slideUp("slow");
  }
});
