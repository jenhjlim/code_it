const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];

// 여기에 코드를 작성해 주세요.
data.forEach((content, i) => {
  const add = document.createElement('li');
  add.classList.add('item');
  add.textContent = `${i+1}. ${content.title}`;

  if(content.isClear){
    add.classList.add('done');
  }

  list.append(add);
});

const text = document.querySelectorAll('.item');
text.forEach(function(el){
  el.addEventListener('click', function(){
    if(el.classList.contains('done')){
      el.classList.remove('done');
    } else {
      el.classList.add('done');
    }
  });
});