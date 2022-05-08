//sidebar
const menuItems = document.querySelectorAll(".menu-item");
//messages
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//Theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

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
//************************************messages************************
//chat search
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  console.log(val);
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};
messageSearch.addEventListener("keyup", searchMessage);

//highlight message section
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//Theme and display customization
//open modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

//close modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

//close modal eventlistener
themeModal.addEventListener("click", closeThemeModal);

//open Modal eventlistener
theme.addEventListener("click", openThemeModal);
