let slider1 = {
  imagesUrls: [],
  currentImageIndex: 0,
  showPrevBtn: document.getElementById('show-prev-btn'),
  showNextBtn: document.getElementById('show-next-btn'),
  slideImage: document.getElementById('slide-amg'),

  start: function () {
    let that = this;
    this.showPrevBtn.addEventListener('click', function (e) {
      that.onShowPrevBtnClick(e);
    });
    this.showNextBtn.addEventListener('click', function (e) {
      that.onShowNextBtnClick(e);
    });

    this.imagesUrls.push(
      'https://st1.zr.ru/_ah/img/t0lRQDylSmR94uiIbN9nZQ=s800'
    );
    this.imagesUrls.push(
      'https://static.sobaka.ru/images/image/01/51/31/09/_normal.jpg'
    );
    this.imagesUrls.push(
      'https://chegevara29.ru/wp-content/uploads/2016/08/PAZ-320302.jpg'
    );
    this.imagesUrls.push(
      'https://auto.vercity.ru/img/magazine/2019/06/19/1560966534.jpg'
    );
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = true;
  },

  onShowPrevBtnClick: function (e) {
    this.currentImageIndex--;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showNextBtn.disabled = false;
    if (this.currentImageIndex === 0) {
      this.showPrevBtn.disabled = true;
    }
  },
  onShowNextBtnClick: function (e) {
    this.currentImageIndex++;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = false;
    if (this.currentImageIndex === this.imagesUrls.length - 1) {
      this.showNextBtn.disabled = true;
    }
  },
};
