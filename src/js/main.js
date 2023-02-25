document.addEventListener("DOMContentLoaded", function (){
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
        nextEl: ".slider-swiper-next",
        prevEl: ".slider-swiper-prev",
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
        nextEl: ".slider-swiper-next",
        prevEl: ".slider-swiper-prev",
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
});
