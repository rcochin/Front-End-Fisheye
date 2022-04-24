function slider(){
    
    let imgSlider = document.querySelectorAll(".popup-section .bloc-media");
    let desc = document.querySelectorAll(".popup-section .desc-media");
    let nbImg = imgSlider.length;
    let etape = 0;
    let precedent = document.querySelector('.precedent');
    let suivant = document.querySelector('.suivant');

    document.querySelectorAll(".media-section .imgMedia").forEach(image =>{
        image.onclick = () =>{
            document.querySelector('.slider').style.display = "block";
            let imgID = image.getAttribute('data-id');
            var imgSlider = document.querySelector('.popup-section [data-id="'+imgID+'"]').parentElement;
            imgSlider.setAttribute("aria-hidden", "false");
            imgSlider.classList.add('active');
        }
    })

    for(var i = 0; i < imgSlider.length; i++){
        imgSlider[i].setAttribute("aria-hidden","true");
    }
    
    window.onkeyup = function (event) {
        if (event.keyCode == 27 && document.querySelector('.slider').style.display == "block") {
            document.querySelector('.slider').style.display = "none";
        }
    }

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 39) {
            etape = document.querySelector(".popup-section .active .imgMedia").getAttribute('data-id');
            etape++;
            if(etape>= nbImg){
                etape = 0;
            }
            removeActive();
            var current = document.querySelector('.popup-section [data-id="'+etape+'"]').parentElement;
            current.classList.add('active');
            current.setAttribute("aria-hidden","false");
        } else if(evt.keyCode == 37){
            etape = document.querySelector(".popup-section .active .imgMedia").getAttribute('data-id');
            etape--;
            if(etape < 0){
                etape = nbImg - 1;
            }
            removeActive();
            var current = document.querySelector('.popup-section [data-id="'+etape+'"]').parentElement;
            current.setAttribute("aria-hidden","false");
            current.classList.add('active');
        }
      };
    
    document.querySelector('.popup-section span').onclick = () =>{
        document.querySelector('.slider').style.display = "none";
    }

    
    suivant.addEventListener('click', function(){
        etape = document.querySelector(".popup-section .active .imgMedia").getAttribute('data-id');
        etape++;
        if(etape>= nbImg){
            etape = 0;
        }
        removeActive();
        var current = document.querySelector('.popup-section [data-id="'+etape+'"]').parentElement;
        current.setAttribute("aria-hidden","false");
        current.classList.add('active');
    })

    precedent.addEventListener('click', function(){
        etape = document.querySelector(".popup-section .active .imgMedia").getAttribute('data-id');
        etape--;
        if(etape < 0){
            etape = nbImg - 1;
        }
        removeActive();
        var current = document.querySelector('.popup-section [data-id="'+etape+'"]').parentElement;
        current.setAttribute("aria-hidden","false");
        current.classList.add('active');
    })
    

    function removeActive(){
        for(let i = 0; i < nbImg; i++){
            imgSlider[i].classList.remove('active');
            desc[i].classList.remove('active');
            imgSlider[i].setAttribute("aria-hidden","true");
        }
    }
}


