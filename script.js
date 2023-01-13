let showPrevBtn = document.getElementById('show-prev-btn');
let showNextBtn = document.getElementById('show-next-btn');
let slideImage = document.getElementById('slide-amg');

showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

let imagesUrls = [];
imagesUrls.push('https://st1.zr.ru/_ah/img/t0lRQDylSmR94uiIbN9nZQ=s800');
imagesUrls.push(
  'https://static.sobaka.ru/images/image/01/51/31/09/_normal.jpg'
);
imagesUrls.push(
  'https://chegevara29.ru/wp-content/uploads/2016/08/PAZ-320302.jpg'
);
imagesUrls.push(
  'https://auto.vercity.ru/img/magazine/2019/06/19/1560966534.jpg'
);

let currentImageIndex = 0;

slideImage.src = imagesUrls[currentImageIndex];

function onShowPrevBtnClick() {
  currentImageIndex--;
  slideImage.src = imagesUrls[currentImageIndex];
}
function onShowNextBtnClick() {
  currentImageIndex++;
  slideImage.src = imagesUrls[currentImageIndex];
}
