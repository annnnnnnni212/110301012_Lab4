// 這裡定義每個按鍵對應的音效，音效檔案位於 'sounds' 資料夾中
const soundMap = {
  'w': new Audio('sounds/crash.mp3'),
  'a': new Audio('sounds/kick-bass.mp3'),
  's': new Audio('sounds/snare.mp3'),
  'd': new Audio('sounds/tom-1.mp3'),
  'j': new Audio('sounds/tom-2.mp3'),
  'k': new Audio('sounds/tom-3.mp3'),
  'l': new Audio('sounds/tom-4.mp3')
};

// 取得所有的按鈕並為每個按鈕添加點擊事件
const drumButtons = document.querySelectorAll('.drum');

drumButtons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.textContent.toLowerCase();
    if (soundMap[key]) {
      soundMap[key].play();
    }
  });
});

// 鍵盤按下時播放對應的音效
document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();  // 確保是小寫字母
  if (soundMap[key]) {
    soundMap[key].play();
  }
});
