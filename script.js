/** @format */

function menuDown(ele) {
  document.getElementById(ele).style.borderColor = "#fca311";
}
function menuUp(ele) {
  document.getElementById(ele).style.borderColor = "#ffee32";
}

function menuFocus() {
  const menuBar = document.getElementById("menuBody");

  const about = document.getElementById("about");
  const equipment = document.getElementById("equipment");
  const media = document.getElementById("media");
  const repeater = document.getElementById("repeaters");
  const contact = document.getElementById("contact");

  about.addEventListener("focusin", () => {
    showSubMenu(about);
  });
  about.addEventListener("mouseover", () => {
    showSubMenu(about);
  });

  equipment.addEventListener("focusin", () => {
    showSubMenu(equipment);
  });
  equipment.addEventListener("mouseover", () => {
    showSubMenu(equipment);
  });

  media.addEventListener("focusin", () => {
    showSubMenu(media);
  });
  media.addEventListener("mouseover", () => {
    showSubMenu(media);
  });

  repeater.addEventListener("focusin", () => {
    showSubMenu(repeater);
  });
  repeater.addEventListener("mouseover", () => {
    showSubMenu(repeater);
  });

  contact.addEventListener("focusin", () => {
    showSubMenu(contact);
  });
  contact.addEventListener("mouseover", () => {
    showSubMenu(contact);
  });

  menuBar.addEventListener("mouseout", () => {
    closeSubMenus();
  });
}

function showSubMenu(menuItem) {
  closeSubMenus();

  if (menuItem.id === "about")
    document.getElementById("aboutSubMenu").style.display = "block";
  if (menuItem.id === "equipment")
    document.getElementById("equipSubMenu").style.display = "block";
  if (menuItem.id === "media")
    document.getElementById("mediaSubMenu").style.display = "block";
  if (menuItem.id === "repeaters")
    document.getElementById("repeaterSubMenu").style.display = "block";
}

function closeSubMenus() {
  document.getElementById("aboutSubMenu").style.display = "none";
  document.getElementById("equipSubMenu").style.display = "none";
  document.getElementById("mediaSubMenu").style.display = "none";
  document.getElementById("repeaterSubMenu").style.display = "none";
}

function itemSelect(disEl, pageTitle, subTitle) {
  if (document.getElementById("main"))
    document.getElementById("main").style.display = "none";
  if (document.getElementById("execPage"))
    document.getElementById("execPage").style.display = "none";

  if (document.getElementById("president"))
    document.getElementById("president").style.display = "none";
  if (document.getElementById("vp"))
    document.getElementById("vp").style.display = "none";
  if (document.getElementById("treasurer"))
    document.getElementById("treasurer").style.display = "none";
  if (document.getElementById("secretary"))
    document.getElementById("secretary").style.display = "none";
  if (document.getElementById("aboutPage"))
    document.getElementById("aboutPage").style.display = "none";
  if (document.getElementById("antennaDisplay"))
    document.getElementById("antennaDisplay").style.display = "none";
  if (document.getElementById("photoGallery"))
    document.getElementById("photoGallery").style.display = "none";
  if (document.getElementById("vhfFreq"))
    document.getElementById("vhfFreq").style.display = "none";
  if (document.getElementById("contactInfo"))
    document.getElementById("contactInfo").style.display = "none";
  if (document.getElementById("fileDownloads"))
    document.getElementById("fileDownloads").style.display = "none";

  document.getElementById(disEl).style.display = "flex";
  document.getElementById("pageTitle").innerHTML = pageTitle;

  if (document.getElementById("headSubText"))
    document.getElementById("headSubText").innerHTML = subTitle;
}

function getURLParams(param, dir, title, subTitle) {
  const paramStr = location.search;

  const urlParams = new URLSearchParams(paramStr);

  const showElement = urlParams.get(param);
  const flexDir = urlParams.get(dir);
  const pageTitle = urlParams.get(title);

  let pageSubTitle = "";

  if (document.getElementById("headSubText"))
    pageSubTitle = urlParams.get(subTitle);

  console.log(pageTitle);
  itemSelect(showElement, pageTitle, pageSubTitle);

  document.getElementById(showElement).style.flexDirection = flexDir;
}

/*meetings first monday of every month barring long weekend and holidays.*/
