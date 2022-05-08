//sidebar
const menuItems = document.querySelectorAll(".menu-item");
//messages
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//Theme variables
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontsizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPallete = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

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

//********************************font sizes*******************************

// remove active class from span or font size sellectors
const removeSizeSelector = () => {
  fontsizes.forEach((size) => {
    size.classList.remove("active");
  });
};
//chage font sizes
fontsizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-10rem");
      root.style.setProperty("--sticky-top-right", "-33rem");
    }

    // change the fontsize of the html root element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//change primary color
// remove active class
const changeActiveColorClass = () => {
  colorPallete.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};
//set primary color
colorPallete.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});
//******************theme background color values******************************
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//changes background color
const changeBG = () => {
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
};

//theme background selector
Bg1.addEventListener("click", () => {
  //add active class
  Bg1.classList.add("active");
  //remove active class from others
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  //remove customized changes from local storage
  window.location.reload();
});
Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";
  //add active class
  Bg2.classList.add("active");
  //remove active class from others
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});
Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";
  //add active class
  Bg3.classList.add("active");
  //remove active class from others
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
