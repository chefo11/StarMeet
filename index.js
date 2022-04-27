//sidebar
const menuItems = document.querySelectorAll(".menu-item");
//messages
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");

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
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});
//messages
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});
