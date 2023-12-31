window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);

        //change logo
        var logo = document.querySelector(".brand img");
        if (window.scrollY>0) {
            logo.setAttribute('src', './images/favicon/rocket.png');
        }else{
            logo.setAttribute('src', './images/favicon/rocket.png');
        }
        });
    var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener("click", () => {
        menu.classList.add('active');
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove('active');
    });