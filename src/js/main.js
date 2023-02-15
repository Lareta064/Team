document.addEventListener("DOMContentLoaded", function (){
/*============= menu toggle ===============*/
  const menuToggle = document.querySelector('#menu-toggle');
 
  const mobileMenu = document.querySelector('#header-menu');
  const overlayBlock = document.querySelector('#overlay');
  
  const bodyEl = document.body;
  
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
      if(this.innerWidth >1023){
        if(mobileMenu.classList.contains('active')){
           menuToggle.classList.remove('active');
        //    mobileMenu.classList.remove('active');
      
           bodyEl.classList.remove('lock');
        }
      }
      
    });

    
});
