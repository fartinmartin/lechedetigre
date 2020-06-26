window.addEventListener("DOMContentLoaded", function () {
  let currentTabIsEat = true;
  let tabs = [...document.querySelectorAll(".tablink")];
  let menus = [...document.querySelectorAll(".menu")];

  const reset = () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    menus.forEach((menu) => {
      menu.classList.remove("active-menu");
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(tab.id);
      currentTabIsEat = tab.id === "eat-tab" ? true : false;

      if (currentTabIsEat) {
        reset();
        tabs[0].classList.add("active-tab");
        menus[0].classList.add("active-menu");
      } else {
        reset();
        tabs[1].classList.add("active-tab");
        menus[1].classList.add("active-menu");
      }
    });
  });
});
