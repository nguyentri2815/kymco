document.addEventListener("DOMContentLoaded",function(){
    // =====================================
    // Layouts/loadingPage
    // $(window).on('load', function(event) {
    //     $('#preloader').delay(1000).fadeOut('fast');
    // });
    window.onload = function() {
        document.getElementById('preloader').style.display = "none";
    }
    // =====================================
    // scroll top
    const scrollTop={
        init:function(){
            this.scrollMenu()
            this.clickBackTopTop()
        },
        scrollMenu:function(){
            window.addEventListener('scroll',function(){
                var menuBot=document.querySelector('.header')
                if (window.scrollY>186) {
                    menuBot.classList.add('active')
                }
                else{
                    menuBot.classList.remove('active')
                }
            })
        },
        clickBackTopTop:function(){
            var backToTop =document.getElementById('back-to-top');
            window.addEventListener('scroll',function(){
                if (window.scrollY>400) {
                    backToTop.classList.add('active')
                }
                else{
                    backToTop.classList.remove('active')
                }
            })
            backToTop.addEventListener('click',function(){
                window.scrollTo({ top: 0, behavior: 'smooth' });
                 return false;
            })
        }
    }
    scrollTop.init()
// =====================================
    // =====================================
    // Layouts/midbar
    const header = {
        init :function(){
            this.showhideMenuMobile()
        },
        showhideMenuMobile:function(){
            var iconMobIle = document.querySelector('.header__bars');
            var overlay = document.querySelector('.ovelay');
            var closemenumobile = document.querySelectorAll('.close-mobile');
            iconMobIle.addEventListener('click',function(){
                this.nextElementSibling.classList.toggle('active');
                overlay.classList.toggle('active');
            })
            closemenumobile.forEach(element => {
                element.addEventListener('click',function(e){
                    e.preventDefault();
                    iconMobIle.nextElementSibling.classList.toggle('active');
                    overlay.classList.toggle('active');
                })
            });
        }
    }
    header.init()
    // =====================================
    // home/banner slide
    const bannerSlide={
        init:function(){
            this.slideBanner()
        },
        slideBanner:function(){
                let slideItems=document.querySelectorAll('.banner__slide-item');
                let dotItems=document.querySelectorAll('.banner__dots span');
                let slideCount = $('.banner__slide .banner__slide-item').length;
                let containerWidth;
                $(window).on('load resize',function(){
                    containerWidth = $('.banner').outerWidth();
                })
                let currentSlide = 1;
                $('.banner__dots span').click(function(){
                    clearInterval(setinterval,1000);
                    $(this).each(function(index) {
                        $('.banner__dots span').removeClass('active');
                        $(this).addClass('active');
                        $(".banner__slide").css({
                            transform: "translateX(" + (- $(this).index() * containerWidth)  + "px)"
                          });
                    });
                });
                function intervalSlide(){
                    // let indexActive=0;
                    // var itemactive=document.querySelector('.banner__slide-item.active');
                    // if(itemactive){
                    //     for (indexActive; itemactive=itemactive.previousElementSibling; indexActive++) {}
                    // }
                    // if(indexActive < slideItems.length-1){
                    //     for (let i = 0; i < slideItems.length; i++) {
                    //         slideItems[i].classList.remove('active');
                    //         dotItems[i].classList.remove('active');
                    //         slideItems[indexActive+1].classList.add('active');
                    //         dotItems[indexActive+1].classList.add('active');
                    //     }

                    // }else{
                    //     for (let i = 0; i < slideItems.length; i++) {
                    //         slideItems[i].classList.remove('active');
                    //         slideItems[0].classList.add('active');
                    //         dotItems[i].classList.remove('active');
                    //         dotItems[0].classList.add('active');
                    //     }
                    // }
                    if(currentSlide <slideCount){
                        $(".banner__slide").css({
                            transform: "translateX(" + -(currentSlide*containerWidth)  + "px)"
                        });
                        currentSlide=currentSlide+1;
                        $('.banner__dots span').removeClass('active');
                        dotItems[currentSlide-1].classList.add('active')
                        console.log(currentSlide);
                    }else{
                        $(".banner__slide").css({
                            transform: "translateX(0px)"
                        });
                        currentSlide=1;
                        $('.banner__dots span').removeClass('active');
                        if(dotItems[currentSlide-1]){
                            dotItems[currentSlide-1].classList.add('active')
                        }
                    }
                }
                var setinterval=setInterval(function(){
                    intervalSlide()
                }, 3000);
        }

    }
    bannerSlide.init()
    // =====================================
    //tech
    const clickbtn = {
        init:function(){
            this.clickNext()
            this.clickPrev()
        },
        clickNext:function(){
           var elementSlides=document.querySelectorAll('.tech__item');
           var btnNext=document.querySelector('.btnNext');
           var elementTexts=document.querySelectorAll('.tech__left-item');
           var slidesLegth=elementSlides.length;
           var indexSlideActive=0;
           var run='ready';
           var clickBTNNext=function(e){
               e.preventDefault()
            //    var indexSlideActive=0;
               //slide hien tai
               if (run=='run') { return false; }
               run="run"
            //    console.log(run);
               var elementSlideActive=elementSlides[indexSlideActive];
               var elementSlideNext;
            //    console.log(indexSlideActive);
               if (indexSlideActive < slidesLegth - 1 ) {
                    indexSlideActive++
               }else{
                    indexSlideActive=0;
               }
               var count=0;
            //    console.log(count);
                // console.log(indexSlideActive);
               elementSlideNext=elementSlides[indexSlideActive];
               var slideHide=function(){
                   this.classList.remove('active');
                   this.classList.remove('hideanimation');
                   count++
                   if (count=2) {
                        run="ready"
                   }
               }
               var slideShow=function(){
                   this.classList.add('active');
                   this.classList.remove('showanimation');
                    count++
                    if (count=2) {
                        run="ready"
                    } 
               }
               elementSlideActive.addEventListener('webkitAnimationEnd',slideHide);
               elementSlideNext.addEventListener('webkitAnimationEnd',slideShow);
               elementSlideActive.classList.add('hideanimation');
               elementSlideNext.classList.add('showanimation');
               elementSlideNext.classList.add('active');
               var idText =elementSlideNext.getAttribute("data-text");
               for (let j = 0; j < elementTexts.length; j++) {
                    elementTexts[j].classList.remove('active');
                }
                var elementText=document.getElementById(idText);
                elementText.classList.add('active');
               
           }
           if(btnNext){
               btnNext.addEventListener('click',clickBTNNext)
           }
        },
        clickPrev:function(){
            var elementSlides=document.querySelectorAll('.tech__item');
            var clickPrev=document.querySelector('.btnprev');
            var elementTexts=document.querySelectorAll('.tech__left-item');
            var slidesLegth=elementSlides.length;
            var indexSlideActive=0;
            var run='ready';
            var clickBTNPrev=function(e){
                e.preventDefault()
                //slide hien tai
                if (run=='run') { return false; }
                run="run"
                var elementSlideActive=elementSlides[indexSlideActive];
                var elementSlidePrev;
                if (indexSlideActive > 0 ) {
                     indexSlideActive--
                }else{
                     indexSlideActive=slidesLegth-1
                }
                elementSlidePrev=elementSlides[indexSlideActive];
                var count=0;
                var slideHide=function(){
                    this.classList.remove('active');
                    this.classList.remove('hideanimationPrev');
                    count++
                    if (count=2) {
                         run="ready"
                    }
                }
                var slideShow=function(){
                    this.classList.add('active');
                    this.classList.remove('showanimationPrev');
                     count++
                     if (count=2) {
                         run="ready"
                     } 
                }
                elementSlideActive.addEventListener('webkitAnimationEnd',slideHide);
                elementSlidePrev.addEventListener('webkitAnimationEnd',slideShow);
                elementSlideActive.classList.add('hideanimationPrev');
                elementSlidePrev.classList.add('showanimationPrev');
                elementSlidePrev.classList.add('active');
                var idText =elementSlidePrev.getAttribute("data-text");
               for (let j = 0; j < elementTexts.length; j++) {
                    elementTexts[j].classList.remove('active');
                }
                var elementText=document.getElementById(idText);
                elementText.classList.add('active');
                
            }
            if(clickPrev){
                clickPrev.addEventListener('click',clickBTNPrev)
            }
        }
    }
    clickbtn.init()
// ==============================================
    // technology
    const clicktitle={
        init:function(){
            this.clickItem()
        },
        clickItem:function(){
            var Items=document.querySelectorAll(' .section3-list li');
            Items.forEach(element => {
                element.addEventListener('click',function(e){
                    e.preventDefault()
                    for (var i = 0; i < Items.length; i++) {
                        Items[i].classList.remove('active');
                        this.classList.add('active');
                    }
                })
            });
        }
    }
    clicktitle.init()
// ==============================================
// product-details
    // ==============================================
    // product-details/banner
    const chooseBike = {
        init :function(){
            this.clickColor()
        },
        clickColor:function(){
            var elementColor=document.querySelectorAll('.product-details__color');
            var elementBIkes=document.querySelectorAll('.product-details__banner-item');
            if(elementColor){
                elementColor.forEach(element => {
                    element.addEventListener('click',function(){
                        var idBIkeShow=this.getAttribute("data-bike");
                        var elementBIke=document.getElementById(idBIkeShow);
                        for (let i = 0; i < elementColor.length; i++) {
                            elementColor[i].classList.remove('active');
                            this.classList.add('active')
                        }
                        for (let j = 0; j < elementBIkes.length; j++) {
                            elementBIkes[j].classList.remove('active');
                            elementBIke.classList.add('active');
                        }
                    })
                });
            }
        }
        
    }
    chooseBike .init()
    // ==============================================
    // product-details/Product-details__info
    const showInfo = {
        init :function(){
            this.clickItem()
        },
        clickItem:function(){
            var elementItems=document.querySelectorAll('.info-right__list-item');
            var elementContent=document.querySelectorAll('.info-right__list-content');
            var elementIcon=document.querySelectorAll('.info-right__list-icon');
            elementItems.forEach(element => {
                element.addEventListener('click',function () { 
                    for (let i = 0; i < elementContent.length; i++) {
                        elementIcon[i].classList.remove('active');
                        // this.classList.add('active')
                        this.children[2].classList.add('active')
                    }
                    for (let j = 0; j < elementContent.length; j++) {
                        elementContent[j].classList.remove('active');
                        this.nextElementSibling.classList.add('active');
                    }
                    
                })
            });
        }
        
    }
    showInfo.init()
    // ==============================================
    // Technology
    const Technology = {
        init :function(){
            this.scrollShow()
        },
        scrollShow:function(){
            window.addEventListener("scroll",function(){
                var scrolled = window.scrollY; 
                $('.animation').each(function(){
                    if(scrolled > ($(this).offset().top -660)){
                        $(this).addClass('anima-active');
                    }
                })
            })
        }
        
    }
    Technology.init();
     // ==============================================
    // slide product
    const clickSlideProduct = {
        init :function(){
            this.handalClick()
        },
        handalClick:function(){
            var wightItem;
            $(window).on('load resize',function(){
                wightItem=$('.right-slide__item').outerWidth();
            })
            productScroll();
            function productScroll() {
            let slider = document.getElementById("slider");
            let next = document.getElementsByClassName("pro-next");
            let prev = document.getElementsByClassName("pro-prev");
            let slide = document.getElementById("slide");
            let item = document.getElementById("slide");

            for (let i = 0; i < next.length; i++) {
                //refer elements by class name

                let position = 0; //slider postion

                prev[i].addEventListener("click", function() {
                    //click previos button
                    if (position > 0) {
                        //avoid slide left beyond the first item
                        position -= 1;
                        translateX(position); //translate items
                        $(".pro-next").css({display:"block"});
                        $(".pro-prev").css({display:"block"});
                    }else{
                        $(this).css({display:"none"});
                        $('.pro-next').css({display:"block"});
                    }
                }); 

                next[i].addEventListener("click", function() {
                    console.log("dang click");
                    // hiddenItem tra ve là 4
                    if (position >= 0 && position < hiddenItems()+1) {
                        //avoid slide right beyond the last item
                        position += 1;
                        translateX(position); //translate items
                        $(".pro-prev").css({display:"block"});
                    }else{
                        $(this).css({display:"none"});
                        $(".pro-prev").css({display:"block"});
                    }
                });
            }
            //ham tinh so item trong slide
            //tinh so item dang hien thi 
            //biết số item hiển thị rồi ta sẽ biết số lần click 
            function hiddenItems() {
                //get hidden items
                let items = getCount(item, false);
                console.log(slider.offsetWidth);
                let visibleItems = slider.offsetWidth / wightItem;
                //ceil làm tron len là 3.11->4
                // console.log(Math.ceil(visibleItems));
                return items - Math.ceil(visibleItems);
                }
            }

            function translateX(position) {
            //translate items
            $(slide).css({
                transform: "translateX(" + position*(-wightItem-30)  + "px)"
              });
            }

            function getCount(parent, getChildrensChildren) {
                //count no of items
                let relevantChildren = 0;
                let children = parent.childNodes.length;
                // console.log(parent.childNodes[i].nodeType);
                for (let i = 0; i < children; i++) {
                    if (parent.childNodes[i].nodeType !=3) {
                        if (getChildrensChildren)
                            relevantChildren += getCount(parent.childNodes[i], true);
                            relevantChildren++;
                    }
                }
                return relevantChildren;

            }

        }
                    
    }
    clickSlideProduct.init();
     // ==============================================
    // slide product
    const clickSlideProduct3 = {
        init :function(){
            this.handalClick3()
        },
        handalClick3:function(){
            var wightItem=$('.right-slide__item').outerWidth();
            productScroll3();

            function productScroll3() {
            let slider = document.getElementById("slider3");
            let next = document.getElementsByClassName("pro-next3");
            let prev = document.getElementsByClassName("pro-prev3");
            let item = document.getElementById("slide3");
            // let slide = document.getElementById("slide3");
            
            for (let i = 0; i < next.length; i++) {
                //refer elements by class name

                let position = 0; //slider postion

                prev[i].addEventListener("click", function() {
                    //click previos button
                    if (position > 0) {
                        //avoid slide left beyond the first item
                        position -= 1;
                        translateX(position); //translate items
                        $(".pro-next3").css({display:"block"});
                        $(".pro-prev3").css({display:"block"});
                    }else{
                        $(this).css({display:"none"});
                        $('.pro-next3').css({display:"block"});
                    }
                }); 

                next[i].addEventListener("click", function() {
                    console.log("dang click");
                    // hiddenItem tra ve là 4
                    if (position >= 0 && position < hiddenItems()+1) {
                        //avoid slide right beyond the last item
                        position += 1;
                        translateX(position); //translate items
                        $(".pro-prev3").css({display:"block"});
                    }else{
                        $(this).css({display:"none"});
                        $(".pro-prev3").css({display:"block"});
                    }
                });
            }
            //ham tinh so item trong slide
            //tinh so item dang hien thi 
            //biết số item hiển thị rồi ta sẽ biết số lần click 
            function hiddenItems() {
                //get hidden items
                let items = getCount(item, false);
                console.log(slider.offsetWidth);
                let visibleItems = slider.offsetWidth / wightItem;
                //ceil làm tron len là 3.11->4
                // console.log(Math.ceil(visibleItems));
                return items - Math.ceil(visibleItems);
                }
            }
            function translateX(position) {
            //translate items
            $("#slide3").css({
                transform: "translateX(" + position*(-wightItem-30)  + "px)"
              });
            }
            function getCount(parent, getChildrensChildren) {
                //count no of items
                let relevantChildren = 0;
                let children = parent.childNodes.length;
                // console.log(parent.childNodes[i].nodeType);
                for (let i = 0; i < children; i++) {
                    if (parent.childNodes[i].nodeType !=3) {
                        if (getChildrensChildren)
                            relevantChildren += getCount(parent.childNodes[i], true);
                            relevantChildren++;
                    }
                }
                return relevantChildren;

            }

        }
                    
    }
    clickSlideProduct3.init();
     // ==============================================
    // slide product
    const clickSlideProduct2 = {
        init :function(){
            this.handalClick2()
        },
        handalClick2:function(){
            var wightItem=$('.right-slide__item').outerWidth();
            productScroll2();

            function productScroll2() {
            let slider = document.getElementById("slider2");
            let next = document.getElementsByClassName("pro-next2");
            let prev = document.getElementsByClassName("pro-prev2");
            let item = document.getElementById("slide2");

            for (let i = 0; i < next.length; i++) {
                //refer elements by class name

                let position = 0; //slider postion
                prev[i].addEventListener("click", function() {
                    //click previos button
                    if (position > 0) {
                        //avoid slide left beyond the first item
                        position -= 1;
                        translateX(position); //translate items
                        $(".pro-next2").css({display:"block"});
                        $(".pro-prev2").css({display:"block"});
                    }
                    else{
                        $(this).css({display:"none"});
                        $('.pro-next2').css({display:"block"});
                    }
                }); 

                next[i].addEventListener("click", function() {
                    console.log("dang click");
                    // hiddenItem tra ve là 4
                    if (position >= 0 && position < hiddenItems()+1) {
                        //avoid slide right beyond the last item
                        position += 1;
                        translateX(position); //translate items
                        $(".pro-prev2").css({display:"block"});
                    }else{
                        $(this).css({display:"none"});
                        $(".pro-prev2").css({display:"block"});
                    }
                });
            }
            //ham tinh so item trong slide
            //tinh so item dang hien thi 
            //biết số item hiển thị rồi ta sẽ biết số lần click 
            function hiddenItems() {
                //get hidden items
                let items = getCount(item, false);
                console.log(slider.offsetWidth);
                let visibleItems = slider.offsetWidth / wightItem;
                //ceil làm tron len là 3.11->4
                // console.log(Math.ceil(visibleItems));
                return items - Math.ceil(visibleItems);
                }
            }

            function translateX(position) {
            //translate items
            $("#slide2").css({
                transform: "translateX(" + position*(-wightItem-30)  + "px)"
              });
            }

            function getCount(parent, getChildrensChildren) {
                //count no of items
                let relevantChildren = 0;
                let children = parent.childNodes.length;
                // console.log(parent.childNodes[i].nodeType);
                for (let i = 0; i < children; i++) {
                    if (parent.childNodes[i].nodeType !=3) {
                        if (getChildrensChildren)
                            relevantChildren += getCount(parent.childNodes[i], true);
                            relevantChildren++;
                    }
                }
                return relevantChildren;

            }

        }
                    
    }
    clickSlideProduct2.init();

    //product-detail
    const productDetail = {
        init :function(){
            this.clickbtn();
        },
        clickbtn:function(){
            let i=0;
           $('.modal-fix__control .right').click(function(){
               let itemactiveed=$('.modal-fix__list li.active');
               i++;
               $('.modal-fix__list li').removeClass('active');
               if(i<$('.modal-fix__list li').length){
                   itemactiveed.next().addClass('active');
               }else{
                $('.modal-fix__list li:first-child').addClass('active');
                i=0;
               }
           })
           $('.modal-fix__control .left').click(function(){
            let itemactiveed=$('.modal-fix__list li.active');
            i--;
            $('.modal-fix__list li').removeClass('active');
            if(i>0){
                itemactiveed.prev().addClass('active');
            }else{
             $('.modal-fix__list li:last-child').addClass('active');
             i=$('.modal-fix__list li').length;
            }
           })
           $('.modal-fix__close').click(function(){
               $('.modal-fix').removeClass('active')
           })
           $('.banner-item__img-icon').click(function(){
            $('.modal-fix').addClass('active');
           })
        }
        
    }
    productDetail.init()
    //product-detail
    const parallax = {
        init :function(){
            this.parallaxImg();
        },
        parallaxImg:function(){
            $(window).scroll(function(){

                // Add parallax scrolling to all images in .paralax-image container
                    $('.parallax-image').each(function(){
                      // only put top value if the window scroll has gone beyond the top of the image
                              if ($(window).scrollTop() > $(this).offset().top) {
                            // Get ammount of pixels the image is above the top of the window
                            var difference = $(window).scrollTop() - $(this).offset().top;
                            // Top value of image is set to half the amount scrolled
                            // (this gives the illusion of the image scrolling slower than the rest of the page)
                            var half = -(difference*0.25) + 'px',
                          transform = 'translate3d( 0, ' + half + ',0)';
                            $(this).find('img').css('transform', transform);
                      } else {
                            // if image is below the top of the window set top to 0
                            $(this).find('img').css('transform', 'translate3d(0,0,0)');
                      }
                    });
                    $('.parallax-imagebg').each(function(){
                        
                    });
          });
        }
        
    }
    parallax.init()
    //product-detail
    const service = {
        init :function(){
            this.tab();
        },
        tab:function(){
            let elmentConTen=document.querySelectorAll('.Content-item');
            $('.services__content-item').click(function(){{
                $('.services__content-item').removeClass('active');
                $(this).addClass('active');
                $('.Content-item').removeClass('active');
                elmentConTen[$(this).index()].classList.add('active');
            }})
        }
        
    }
    service.init()
    //product-detail
    const menumb = {
        init :function(){
            this. clickItem();
        },
        clickItem:function(){
            $('.header__menu-link').click(function(e){
                if($(this).hasClass('sub')){
                    e.preventDefault();
                    $(this).toggleClass('active');
                    $(this).next().toggleClass('active');
                }
                
            })
            var $hamburgers = $('.js-hamburger');
            $hamburgers.on('click', function(event) {
                event.preventDefault();
                $(this).toggleClass('is-active');
            });
        }
        
    }
    menumb.init()

},false) 