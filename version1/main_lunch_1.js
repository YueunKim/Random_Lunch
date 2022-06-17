// // 오늘 날짜
let today = new Date();
date.innerHTML = today.toLocaleDateString();


// 점심 메뉴
let juk = document.getElementById('juk');
let gung = document.getElementById('gung');
let bong = document.getElementById('bong');
let eoeun = document.getElementById('eoeun');
let randomMenu = document.getElementById('randomMenu');


let juk_menu = ["바푸리포", "홍콩반점", "흥남부두", "대울", "유성불백", "현대옥", "피슈마라홍탕", "미미닭갈비", "타볼라타", 
                "죽동스시", "엉클부대찌개", "이상돈돈가스", "후루룩손칼국수", "신쭈꾸황", "오한순손수제비", "아저씨"];
let gung_menu = ["별리달리", "오늘은파스타", "맛존", "해피치즈스마일", "닭섬", "오늘은닭", "마인하우스", "아저씨", "만화쉔샤오룽빠오면식관", "파스타부오노"];
let bong_menu = ["맛찬들", "스바라시 라멘", "마라탕", "잇마이타이", "상무초밥", "모쿠요비"];
let eoeun_menu = ["다다카츠", "궁칼국수", "어은스시", "잇마이타이", "베리신주쿠", "오늘뭐먹지", "1117meal"];

let all_menu = juk_menu.concat(gung_menu, bong_menu, eoeun_menu, "학식") //모두 합한 메뉴
let menu = all_menu.filter((item, pos) => all_menu.indexOf(item) === pos); //중복 제거


juk.addEventListener('click', function () { //클릭하면 함수 실행
    let Pick1 = Math.floor(Math.random() * juk_menu.length); //Math.floor는 소수점 버림, Math.random은 0이상 1미만 난수, menu길이 까지의 자연수 
    print_here1.innerHTML = juk_menu[Pick1];
})

gung.addEventListener('click', function () { //클릭하면 함수 실행
    let Pick2 = Math.floor(Math.random() * gung_menu.length); //Math.floor는 소수점 버림, Math.random은 0이상 1미만 난수, menu길이 까지의 자연수 
    print_here2.innerHTML = gung_menu[Pick2];
})

eoeun.addEventListener('click', function () { //클릭하면 함수 실행
    let Pick3 = Math.floor(Math.random() * eoeun_menu.length); //Math.floor는 소수점 버림, Math.random은 0이상 1미만 난수, menu길이 까지의 자연수 
    print_here3.innerHTML = eoeun_menu[Pick3];
})

bong.addEventListener('click', function () { //클릭하면 함수 실행
    let Pick4 = Math.floor(Math.random() * bong_menu.length); //Math.floor는 소수점 버림, Math.random은 0이상 1미만 난수, menu길이 까지의 자연수 
    print_here4.innerHTML = bong_menu[Pick4];
})

randomMenu.addEventListener('click', function () { //클릭하면 함수 실행
    let Pick5 = Math.floor(Math.random() * menu.length); //Math.floor는 소수점 버림, Math.random은 0이상 1미만 난수, menu길이 까지의 자연수 
    print_here5.innerHTML = menu[Pick5];
})




// 배경 랜덤
const body = document.querySelector("body"); //입력한 선택자와 일치하는 문서 내 첫element반환
const IMG_NUMBER = 6;
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `../images/${imgNumber + 1}.jpg`; // 가져올 image경로 지정
    image.classList.add("bgImage"); // image에 bgImage 클래스 추가 
    body.appendChild(image); // body의 자식에 image추가
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
