// MMENU JS STARTS
$("#menu").mmenu({
  extensions: [
    "effect-menu-zoom",
    "effect-panels-zoom",
    "pagedim-black",
    "theme-dark",
  ],
  slidingSubmenus: true,
  offCanvas: {
    position: "left",
  },
  counters: false,
  iconPanels: true,
  navbars: [
    {
      position: "left",
    },
  ],
});
// MMENU JS ENDS

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 95) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

// window.onscroll = () => {
//     toggleTopButton();
//   }
//   function scrollToTop(){
//     window.scrollTo({top: 0, behavior: 'smooth'});
//   }

//   function toggleTopButton() {
//     if (document.body.scrollTop > 20 ||
//         document.documentElement.scrollTop > 20) {
//       document.getElementById('back-to-up').classList.remove('d-none');
//     } else {
//       document.getElementById('back-to-up').classList.add('d-none');
//     }
//   }

// function incrementUserCount() {
//   setTimeout(() => {
//     const userCountElement = document.getElementById('userCount');
//     let userCount = parseInt(userCountElement.innerText, 10);
//     userCount++;
//     userCountElement.innerText = userCount;
//   }, 2000);
// }

function incrementUserCount() {
  const KEY = "user_count";
  if (localStorage.getItem(KEY)) {
    let n = Number(localStorage.getItem(KEY));
    n++;
    localStorage.setItem(KEY, n);
  } else {
    localStorage.setItem(KEY, "1");
  }
  const userCountElement = document.getElementById("userCount");
  userCountElement.innerText = localStorage.getItem(KEY);
}
window.addEventListener("load", incrementUserCount);
