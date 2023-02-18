document.addEventListener("DOMContentLoaded", function (){
/*============= open/close mob menu ===============*/
  const menuToggle = document.querySelector('#menu-toggle');
 
  const mobileMenu = document.querySelector('#header-menu');
  const overlayBlock = document.querySelector('#overlay');
  
  const bodyEl = document.body;
  if(menuToggle){
      menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        
        if (this.classList.contains('active')) {
          
          this.classList.remove('active');
        mobileMenu.classList.remove('active');

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
        nextEl: ".partners-swiper-next",
        prevEl: ".partners-swiper-prev",
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
	/**  анимация, когда секции в зоне видимости */
	if(window.innerWidth > 1200){
      console.log('123');
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


});
