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

});
