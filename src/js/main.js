document.addEventListener("DOMContentLoaded", function (){
    $(function() {
        $('.lazy').Lazy();
    });

/*============= open/close mob menu ===============*/
  const menuToggle = document.querySelector('#menu-toggle');
 
  const mobileMenu = document.querySelector('#header-menu');
  
  
  const bodyEl = document.body;
  if(menuToggle){
      menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        
        if (this.classList.contains('active')) {
          
              this.classList.remove('active');
              mobileMenu.classList.remove('active');
              bodyEl.classList.remove('lock');
        } else {
            this.classList.add('active');
            mobileMenu.classList.add('active');
            bodyEl.classList.add('lock');
          }
        });

        /*======== закрывать моб меню при ресайзе экрана ====== */
        window.addEventListener('resize', function () {
          if(this.innerWidth >992){
            if(mobileMenu.classList.contains('active')){
              menuToggle.classList.remove('active');
              mobileMenu.classList.remove('active');
              bodyEl.classList.remove('lock');
            }
          }      
        });
      }    
    /* ================ swiper partners slider ==============*/
    const swiperPartners = new Swiper('.partners-swiper', {
      
      slidesPerView: 1,
      loop:true,
      speed: 800,
      navigation: {
        nextEl: ".slider-swiper-prev",
        prevEl: ".slider-swiper-next",
      },
      breakpoints: {      
      575: {
      slidesPerView: 2,
      },      
      1024: {
      slidesPerView: 3,
      },
      1536: {
      slidesPerView: 4,
      }
    }
    });
    
	/* ================ годовые отчеты slider ==============*/
    const swiperReports = new Swiper('.annual-reports-swiper', {
      
      slidesPerView: 1,
      loop:true,
      spaceBetween: 20,
      speed: 800,
      navigation: {
        nextEl: ".slider-swiper-prev",
        prevEl: ".slider-swiper-next",
      },
      breakpoints: {      
      575: {
      slidesPerView: 2,
      },      
      1024: {
      slidesPerView: 3,
      },
      1536: {
      slidesPerView: 4,
      }
    }
    });


	/*=========== VIDEO========*/
	const videoContent = document.querySelector('#video-frame');
	if (videoContent) {
		const videoBtn = videoContent.querySelector('.button-play');
		
		const videoClip = videoContent.querySelector('video');
		videoContent.addEventListener('click', function () {
			if (videoClip.paused) {
				videoClip.play();
				videoBtn.style.opacity = "0";
				
				this.classList.add("active");
			} else {
				videoClip.pause();
				videoBtn.style.opacity = "1";
				
				this.classList.remove("active");
			}
			//videoClip.play();
		});
		videoClip.addEventListener("ended", function () {
			videoClip.pause();
			videoBtn.style.opacity = "1";
			videoText.style.opacity = "1";
			this.classList.remove("active");
		});
	}
   /*====== PASSWORD VISIBLE/HIDE=============*/
  document.querySelectorAll(".toggle-pass").forEach(el=>{
    const tglBtn = el.querySelector(".form-item__icon");
    const inputField = el.querySelector("input");

    tglBtn.addEventListener("click", (e)=>{
      const icon1 = tglBtn.querySelector(".ic-visible");
      const icon2 = tglBtn.querySelector(".ic-hide");

      if(inputField.type === "password")
          inputField.type = "text"
      else inputField.type = "password";

      icon1.classList.toggle("d-none");
      icon2.classList.toggle("d-none");
    })
})
  /* ========== плагин календаря ============ */
  if($('.datepicker').length > 0){
      
      $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
      };
      $.datepicker.setDefaults($.datepicker.regional['ru']);
      $(function(){
        $("#datepicker").datepicker();
      });
  }
     /* =============== modal с атрибутом frame-modal ===============*/ 
    const modalFramesOpen = document.querySelectorAll('[frame-btn]');
    const modalFrames = document.querySelectorAll('[frame-modal]');
    if( modalFrames.length > 0){
      const modalFramesClose = document.querySelectorAll('[frame-close]');

      for(let item of modalFramesOpen){
        item.addEventListener('click', function(e){
          for(let item of  modalFrames){
            item.classList.remove('visible');
            
            bodyEl.classList.remove('lock');
			
			
          }
          e.preventDefault();
          const itemAttr = item.getAttribute('frame-btn');

          for(let frame of modalFrames){
            const frameAttr =frame.getAttribute('frame-modal');	
            if(frameAttr == itemAttr){
              frame.classList.add('visible');
              bodyEl.classList.add('lock');
			 
            }
          }
        });
      }
      /*=============== закрыть модалки с атрибутом frame-modal по клику на крестик===============*/
      for(let item of modalFramesClose){
        item.addEventListener('click', function(e){
          e.preventDefault();
          item.closest('[frame-modal]').classList.remove('visible');
          bodyEl.classList.remove('lock');
		  
		  
        });
      }
      /*=============== закрыть модалки по клику вне ===============*/
      for(let frame of modalFrames){
        frame.addEventListener('click', function(e){
          if(e.target === e.currentTarget){
            this.classList.remove(`visible`)
            bodyEl.classList.remove('lock');
          }
        });
      }

    }

  	/**  анимация, когда секции в зоне видимости */
	if(window.innerWidth > 1200){
		let targets = document.querySelectorAll(".anim-box")

		function check_in_viewport(element){
			let rect = element.getBoundingClientRect()
			const VERTICAL_SETPOINT = 100;
			let targetPosition = {
				top: window.pageYOffset + rect.top + VERTICAL_SETPOINT,
				bottom: window.pageYOffset + rect.bottom - VERTICAL_SETPOINT,
			}
			let windowPosition = {
				top: window.pageYOffset,
				bottom: window.pageYOffset + document.documentElement.clientHeight
			}
			return (
				targetPosition.bottom > windowPosition.top &&
				targetPosition.top < windowPosition.bottom
			)
		}

		window.addEventListener('scroll', (e)=>{
			for(let target of targets){
				let is_in_viewport = check_in_viewport(target)
				if (is_in_viewport == target.classList.contains('in-view'))
					continue
				if (is_in_viewport){
					target.classList.add('in-view')
				}else{
					target.classList.remove('in-view')
				}
					
			}
		});
	}
		

	// active class of menu items onscroll
	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY;

		if (window.innerWidth > 1023) {
			document.querySelectorAll('.section').forEach((el, i) => {
				if (el.offsetTop - document.querySelector('.header-top').clientHeight <= scrollDistance) {
					document.querySelectorAll('#header-menu a').forEach((el) => {
						if (el.classList.contains('active')) {
							el.classList.remove('active');
						}
					});
					const thisId = "#" + el.getAttribute('id');
					

					document.querySelectorAll('#header-menu a').forEach((elem, i) => {
						const linkHref = elem.getAttribute('href');
						if(thisId == linkHref ){
							elem.classList.add('active');
						}
					});
				}
			});
		}
	});

	/** =============== custom select ===============*/
	const mySelectBlocks = Array.from(document.getElementsByClassName('mySelect'));
	if(mySelectBlocks.length > 0){
		mySelectBlocks.forEach((item, i) =>{
			const mySelect = item.querySelector('.mySelect-input');
			const mySelectInput = item.querySelector('.selectValue');
			let mySelectOptions = item.querySelectorAll('.mySelect-options');
			// const mySelectIcon = item.querySelector('.mySelect-icon');
			const mySelecDrop = item.querySelector('.mySelect-drop');

			mySelect.addEventListener('click', ()=>{

				if(mySelecDrop.classList.contains('active')){
					mySelecDrop.classList.remove('active');
					// mySelectIcon.classList.remove('active');
					mySelect.classList.remove('open');


				}else{
					mySelecDrop.classList.add('active');
					// mySelectIcon.classList.add('active');
					mySelect.classList.add('open');
				}

			});
			for(let item of mySelectOptions){
				item.addEventListener('click', ()=>{
					mySelecDrop.classList.remove('active');
					mySelect.classList.remove('open');
					// mySelectIcon.classList.remove('active');
					mySelectInput.value = item.value;

				});
			}
		});
		
	}	
	/*========== закрыть mySelect по клику вне ===========*/
	window.addEventListener('click', function(e){
		
		if (!e.target.closest('.mySelect')){
			const mySelectOpenBlocks = Array.from(document.getElementsByClassName('mySelect'));
			
			if(mySelectOpenBlocks.length > 0){
				mySelectOpenBlocks.forEach((item, i) =>{
					const mySelect = item.querySelector('.mySelect-input');
					const mySelectInput = item.querySelector('.selectValue');
					let mySelectOptions = item.querySelectorAll('.mySelect-options');
					// const mySelectIcon = item.querySelector('.mySelect-icon');
					const mySelecDrop = item.querySelector('.mySelect-drop');
					
					mySelecDrop.classList.remove('active');
					// mySelectIcon.classList.remove('active');
					mySelect.classList.remove('open');
				});
			}
		}
		
	});


});
