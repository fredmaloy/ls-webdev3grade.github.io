var leftBtn = document.querySelector('.slider__button-arrow.left');
        var rightBtn = document.querySelector('.slider__button-arrow.right');
        const sliders = document.querySelector('.slider__content-list');
        var rightBtnColor = document.querySelector('.section__slider-arrow__right__svg');
        var leftBtnColor = document.querySelector('.section__slider-arrow__left__svg');

         let slidesView = 3;
        var maxRight = (sliders.children.length - slidesView) * stepRight;
        var stepRight = sliders.firstElementChild.getBoundingClientRect().width;
        var minRight = 0;
        let currentRight = 0;


        rightBtn.addEventListener('click', e => {
            if (currentRight < maxRight) {
                e.preventDefault();
                currentRight += stepRight;
                sliders.style.right = `${currentRight}px`;
                leftBtnColor.style.fill = `#ffff`;
            } else if (currentRight = maxRight) {
                sliders.style.right = maxRight + 'px';
                rightBtnColor.style.fill = `rgb(46, 49, 51)`;

            }
        })

        leftBtn.addEventListener('click', e => {
            if (currentRight > minRight) {
                e.preventDefault();
                currentRight -= stepRight;
                sliders.style.right = `${currentRight}px`;
                rightBtnColor.style.fill = `#ffff`;

            } else {
                currentRight = minRight;
                sliders.style.right = minRight + 'px';
                leftBtnColor.style.fill = `rgb(46, 49, 51)`;
            }
        })

    