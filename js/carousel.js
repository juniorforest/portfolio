const btnRight = document.querySelector('.btn-arrow.-right');
const btnLeft = document.querySelector('.btn-arrow.-left');
const elements = document.querySelector('.elements');
let rems = 7;

btnRight.addEventListener('click', function(){
  rems = rems + 7 ;
  elements.style = `transform: translateX(${rems}rem)`;
});

btnLeft.addEventListener('click', function(){
  rems = rems - 7 ;
  elements.style = `transform: translateX(${rems}rem)`;
});

