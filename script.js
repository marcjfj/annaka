
var articles = document.querySelectorAll("article");

articles.forEach(element => {
    var artData = element.innerHTML;
    var md = window.markdownit({ html: true});
    var result = md.render(artData);
    element.innerHTML = result;
});

var hideAll = () => { 
    articles.forEach(element => {
        element.classList.add("hidden");
    });
}

hideAll();

articles[0].classList.remove("hidden");

var nav = document.querySelector("nav");
var navs = nav.querySelectorAll("li");

for (let index = 0; index < navs.length; index++) {
    const el = navs[index];
    el.addEventListener("click", () => {
        hideAll();
        articles[index].classList.remove("hidden");

    })
    
}

