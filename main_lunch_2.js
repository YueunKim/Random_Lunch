"use strict";

// 오늘 날짜
const today = new Date();
date.innerHTML = today.toLocaleDateString();

// 점심 메뉴
const juk = document.getElementById("juk");
const goog = document.getElementById("goog");
const bong = document.getElementById("bong");
const eoeun = document.getElementById("eoeun");
const randomMenu = document.getElementById("Random");

// 동네별 음식점
const juk_obj = {
  바푸리포: "랜덤",
  홍콩반점: "중식",
  흥남부두: "한식",
  대울: "한식",
  유성불백: "한식",
  현대옥: "한식",
  피슈마라홍탕: "중식",
  미미닭갈비: "한식",
  타볼라타: "양식",
  죽동스시: "일식",
  엉클부대찌개: "한식",
  이상돈돈가스: "양식",
  후루룩손칼국수: "한식",
  신쭈꾸황: "한식",
  오한순손수제비: "한식",
  아저씨: "한식",
};
const goog_obj = {
  별리달리: "일식",
  오늘은파스타: "양식",
  맛존: "한식",
  해피치즈스마일: "양식",
  닭섬: "한식",
  청년다방: "양식",
  오늘은닭: "한식",
  마인하우스: "한식",
  아저씨: "한식",
  만화쉔샤오룽빠오면식관: "중식",
  파스타부오노: "양식",
  서브웨이: "양식",
  바른카레: "한식",
  롯데리아: "양식",
  신가네떡볶이: "한식",
  청춘우동까스: "일식",
};
const bong_obj = {
  맛찬들: "한식",
  스바라시라멘: "일식",
  마라탕: "중식",
  잇마이타이: "랜덤",
  상무초밥: "일식",
  모쿠요비: "양식",
  롤링파스타: "양식",
  태평소국밥: "한식",
  황우마을: "한식",
  경성삼겹살: "한식",
  전복만세: "한식",
  무양도원: "양식",
  유람: "양식",
  비바릴리: "양식",
  알텐데: "양식",
  늘상상: "중식",
  왕가: "중식",
  부연부: "중식",
  타마: "일식",
  고치소사마: "일식",
};
const eoeun_obj = {
  다다카츠: "양식",
  궁칼국수: "한식",
  어은스시: "일식",
  잇마이타이: "랜덤",
  베리신주쿠: "양식",
  오늘뭐먹지: "한식",
  왕비성: "중식",
  신초류향: "중식",
  오마이동: "중식",
};

// 가고 싶은 동네 선택
let where = "";
let kind = "";
let obj = {};
const then = document.querySelector(".then");
const inhere = document.querySelector(".inhere");

juk.addEventListener("click", function () {
  where = "죽동";
  then.innerHTML = "그렇다면..";
  where_fix.innerHTML = where;
  inhere.innerHTML = "에 있는";
  obj = juk_obj;
});
goog.addEventListener("click", function () {
  where = "궁동";
  then.innerHTML = "그렇다면..";
  where_fix.innerHTML = where;
  inhere.innerHTML = "에 있는";
  obj = goog_obj;
});
bong.addEventListener("click", function () {
  where = "봉명동";
  then.innerHTML = "그렇다면..";
  where_fix.innerHTML = where;
  inhere.innerHTML = "에 있는";
  obj = bong_obj;
});
eoeun.addEventListener("click", function () {
  where = "어은동";
  then.innerHTML = "그렇다면..";
  where_fix.innerHTML = where;
  inhere.innerHTML = "에 있는";
  obj = eoeun_obj;
});

const all_name = ["죽동", "궁동", "봉명동", "어은동"];
const all_name_obj = [juk_obj, goog_obj, bong_obj, eoeun_obj];
let random_num = 0;
Random.addEventListener("click", function () {
  random_num = Math.floor(Math.random() * all_name.length);
  where = all_name[random_num];
  then.innerHTML = "그렇다면..";
  where_fix.innerHTML = where;
  inhere.innerHTML = "에 있는";
  obj = all_name_obj[random_num];
});

// 원하는 음식 종류 선택
function filterItems(obj, val) {
  const obj_keys = Object.keys(obj).filter((key) => obj[key] === val);
  const num = Math.floor(Math.random() * obj_keys.length);
  return obj_keys[num];
}

const go = document.querySelector(".go");

han.addEventListener("click", function () {
  kind = "한식";
  kind_fix.innerHTML = filterItems(obj, kind);
  go.innerHTML = "어때? 😆";
});
yang.addEventListener("click", function () {
  kind = "양식";
  kind_fix.innerHTML = filterItems(obj, kind);
  go.innerHTML = "어때? 😆";
});
joog.addEventListener("click", function () {
  kind = "중식";
  kind_fix.innerHTML = filterItems(obj, kind);
  go.innerHTML = "어때? 😆";
});
ill.addEventListener("click", function () {
  kind = "일식";
  kind_fix.innerHTML = filterItems(obj, kind);
  go.innerHTML = "어때? 😆";
});
RandomMenu.addEventListener("click", function () {
  random_num = Math.floor(Math.random() * Object.keys(obj).length);
  kind_fix.innerHTML = Object.keys(obj)[random_num];
  go.innerHTML = "어때? 😆";
});

// 랜덤 배경
const body = document.querySelector("body");
const IMG_NUMBER = 6;
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `/images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
