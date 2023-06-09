// 숫자 야구

// 랜덤 숫자 생성 로직
const baseball = [];

// 랜덤 숫자 생성 로직
let NumBaseball = function () {
  for (let i = 0; i < 3; i++) {
    baseball.push(Math.floor(Math.random() * 9 + 0) + "");
    if (baseball[i] === baseball[i - 1] || baseball[i] === baseball[i - 2]) {
      baseball.pop(i);
      i -= 1;
    }
  }
  return baseball;
};
NumBaseball();

// 숫자 비교 함수
let play = function (input) {
  let ball = 0;
  let strike = 0;
  let useInput = input.split("");  
  for (i = 0; i < 3; i++) {
    const index = useInput.indexOf(baseball[i]);
    if (index > -1) {
      if (index === i) { 
        strike++;
      } else {
        ball++;
      }
    }
  }
  strike === 3 ? alert('정답입니다') : console.log(strike + "S" + ball + "B");
  return strike;
};

// 게임 실행 로직
let guessCount = 0;

while (true) {
  guessCount++;
  console.log(guessCount + "번째 시도");
  if (play(prompt('3자리 숫자를 입력해주세요')) === 3) {
    break;
  }
}
