let sliderFactory = {
  getNewSlider: function () {
    let newSlider = {
      imagesUrls: [],
      currentImageIndex: 0,

      showPrevBtn: null,
      showNextBtn: null,
      slideImage: null,

      start: function (elId) {
        let that = this;

        let elSelector = '#' + elId;
        let el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');

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
    return newSlider;
  },
};

function getNewSlider() {
  let newSlider = {
    imagesUrls: [],
    currentImageIndex: 0,

    showPrevBtn: null,
    showNextBtn: null,
    slideImage: null,

    start: function (elId) {
      let that = this;

      let elSelector = '#' + elId;
      let el = document.querySelector(elSelector);

      this.showPrevBtn = el.querySelector('.show-prev-btn');
      this.showNextBtn = el.querySelector('.show-next-btn');
      this.slideImage = el.querySelector('.slide-img');

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
  return newSlider;
}
