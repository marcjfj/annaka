
var articles = document.querySelectorAll("article");

articles.forEach(element => {
    var artData = element.innerHTML;
    var md = window.markdownit({ html: true});
    var result = md.render(artData);
    element.innerHTML = result;
});

TweenMax.set(articles[0], {display: "block", delay: .5});
TweenMax.to(articles[0], .3, {opacity: 1, delay: .6});

tl = new TimelineMax({repeat: 0});

var changePage = (index) => { 
    
        tl.to(articles, .3, {opacity: 0});
        tl.set(articles, {display: "none"});

    

    
        tl.set(articles[index], {display: "block"});
        tl.to(articles[index], .3, {opacity: 1});

}

// hideAll();

// articles[0].classList.remove("hidden");

var nav = document.querySelector("nav");
var navs = nav.querySelectorAll("li");

var mobile = window.matchMedia("(max-width: 700px)");

for (let index = 0; index < navs.length; index++) {
    const el = navs[index];
    el.addEventListener("click", () => {
        changePage(index);
        if (mobile.matches){
            closeMenu();
        }
        // articles[index].classList.remove("hidden");

    })
    
}

var menuBtn = document.querySelector(".menu-button");
var menuClose = document.querySelector(".menu-close");

menuBtn.addEventListener("click", () =>{
    TweenMax.to(nav, .5, {x:0});
    TweenMax.set(menuBtn, {display: "none"});
    TweenMax.set(menuClose, {display: "flex"});
});
menuClose.addEventListener("click", () =>{
    closeMenu();
});

var closeMenu = () =>{
    TweenMax.to(nav, .5, {x:-1000});
    TweenMax.set(menuClose, {display: "none"});
    TweenMax.set(menuBtn, {display: "flex"});
}