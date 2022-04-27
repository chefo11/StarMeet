//sidebar
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    //remove active class from all menu items
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    //add active class to clicked menu item
    item.classList.add("active");
    //notification popup
    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
    }
  });
});
