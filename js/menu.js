window.addEventListener("DOMContentLoaded", function() {
  // store tabs variable
  let tabs = [...(document.querySelectorAll('.tablink'))];
  let menus = [...(document.querySelectorAll('.menu'))];

  function tabClicks(tabClickEvent) {
    // remove active-tab class
		for (var tab of tabs) {
			tab.classList.remove("active-tab");
    }

    // current tab
    var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.toggle("active-tab");
    tabClickEvent.preventDefault();

    // content
    // for (i = 0; i < tabs.length; i++) {
    //   if (tabs[i].classList.contains("active-tab")) {
    //     menus[i].classList.toggle("active-menu");
    //   }
    // }
    for (pane of menus) {
      pane.classList.toggle("active-menu");
    }
	}

	for (i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", tabClicks)
	}
});

// window.addEventListener("load", function() {
// 	// store tabs variable
// 	var myTabs = document.querySelectorAll(".tablink");
//   function myTabClicks(tabClickEvent) {
// 		for (var i = 0; i < myTabs.length; i++) {
// 			myTabs[i].classList.remove("active-tab");
// 		}
// 		var clickedTab = tabClickEvent.currentTarget;
// 		clickedTab.classList.add("active-tab");
// 		tabClickEvent.preventDefault();
// 		var myContentPanes = document.querySelectorAll(".menu");
// 		for (i = 0; i < myContentPanes.length; i++) {
// 			myContentPanes[i].classList.remove("active-menu");
// 		}
// 		var anchorReference = tabClickEvent.target;
// 		var activePaneId = anchorReference.getAttribute("href");
// 		var activePane = document.querySelector(activePaneId);
// 		activePane.classList.add("active-menu");
// 	}
// 	for (i = 0; i < myTabs.length; i++) {
// 		myTabs[i].addEventListener("click", myTabClicks)
// 	}
// });