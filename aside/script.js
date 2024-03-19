// 클릭이벤트
const asidebutton01 = document.querySelector(".aside-logo-login");
const asidehidden = document.querySelector(".aside-hidden");
const asideheaderx = document.querySelector(".aside-header-x");
const asidelogo = document.querySelector(".aside-logo");

asidebutton01.addEventListener("click", function () {
  asidehidden.style.display = "block";
  asidelogo.style.display = "none";
  asidepopup.style.display = "none";
});

asideheaderx.addEventListener("click", function () {
  asidehidden.style.display = "none";
  asidelogo.style.display = "block";
  asidepopup.style.display = "block";
});

//스크롤up 사라짐
// const asidechevronup = document.querySelector(".aside-logo-chevron-up");
// const asidechevrondown = document.querySelector(".aside-logo-chevron-down");

// const asidebuttonshow = function () {
//   window.scrollY > window.innerHeight
//     ? asidechevronup.classList.add("show")
//     : asidechevronup.classList.remove("show");
// };

//스크롤 up 연습
window.addEventListener("scroll", asidebuttonshow);
const asidechevronup = document.querySelector(".aside-logo-chevron-up");
const asidechevrondown = document.querySelector(".aside-logo-chevron-down");

const asidebuttonshow = function () {
  window.scrollY > window.innerHeight
    ? asidechevronup.classList.add("show")
    : asidechevronup.classList.remove("show");
};
window.addEventListener("scroll", asidebuttonshow);
window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;
  console.log(scrollNum, documentHeight);
});

// 스크롤업;

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

asidechevronup.addEventListener("click", scrollToTop);

//스크롤 다운
function scrollToDown() {
  window.scrollTo({
    // bottom: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

asidechevrondown.addEventListener("click", scrollToDown);

//scroll다운

//클릭이벤트
// asidechevrondown.addEventListener("click", scrollWindowdown);

// const asidepopup = document.querySelector(".aside-popup");
// const asidepopuptexttodayclose = document.querySelector(
//   ".aside-popup-text-todayclose"
// );
// const asidepopuptextclose = document.querySelector(".aside-popup-text-close");
// console.log(asidepopup);

// asidepopuptextclose.addEventListener("click", function () {
//   asidepopup.style.display = "none";
// });

//팝업슬라이드
const imgs = [
  "aside-popup-image1.jpg",
  "aside-popup-image2.jpg",
  "aside-popup-image3.jpg",
];

const container = document.querySelector(".aside-popup-image");
const slidePagers = document.querySelector(".aside-popup-button");
const pagers = document.querySelectorAll(".button");

console.log(container);

const img = document.createElement("img");
const src = document.createAttribute("src");

const imgSrc = `./image/${imgs[0]}`;
src.value = imgSrc;
img.setAttributeNode(src);
container.appendChild(img);

// let i = 0;
// const changeImg = (direction) => {
//   if (direction === "next") {
//     i++;
//     if (i >= imgs.length) {
//       i = 0;
//     }
//     reset();
//     pagers[i].classList.add("active");
//   } else if (direction === "prev") {
//     i--;
//     if (i < 0) {
//       i = imgs.length - 1;
//     }
//     reset();
//     pagers[i].classList.add("active");
//   }
//   src.value = `./image/${imgs[i]}`;
// };

// pagers.forEach((pager) => {
//   pager.addEventListener("click", (e) => {
//     const direction = e.target.id === "left" ? "prev" : "next";
//     changeImg(direction);
//   });
// });

const autoSlide = () => {
  timer = setInterval(() => {
    changeImg("next");
  }, 3000);
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
};

const reset = () => {
  pagers.forEach((pager, idx) => {
    pagers[idx].classList.remove("active");
  });
};

container.addEventListener("mouseenter", () => {
  stopSlide();
});

slidePagers.addEventListener("mouseenter", () => {
  stopSlide();
});

container.addEventListener("mouseleave", () => {
  autoSlide();
});

slidePagers.addEventListener("mouseleave", () => {
  autoSlide();
});

const pagerChange = (e) => {
  const target = e.target.dataset.index;
  reset();
  for (let i = 0; i < pagers.length; i++) {
    if (target == i) {
      pagers[i].classList.add("active");
      src.value = `./image/${imgs[i]}`;
    }
  }
};

pagers.forEach((pager) => {
  pager.addEventListener("click", pagerChange);
});

//오늘 하루 열지 않기

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById(".aside-popup-text-todayclose");
  const banner = document.getElementById("aside-popup");

  // 닫기 버튼 클릭 시 쿠키 설정 및 배너 숨기기
  closeButton.addEventListener("click", function () {
    // 쿠키 만료일 설정 (하루 동안 유지)
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 1);

    // 쿠키에 'closed' 값 설정
    document.cookie =
      "bannerClosed=true; expires=" + expiryDate.toUTCString() + "; path=/";

    // 배너 숨기기
    bannner.style.display = "none";
  });

  // 페이지 로드 시 쿠키 확인하여 배너 숨기기
  if (
    document.cookie.split(";").some(function (item) {
      return item.trim().startsWith("bannerClosed=");
    })
  ) {
    banner.style.display = "none";
  }
});
