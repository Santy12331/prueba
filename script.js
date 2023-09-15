const images = document.querySelectorAll(".grid-d img")
const articles = document.querySelectorAll(".recomendadas")
    for (const image of images) {
        image.addEventListener("click", function(){
            image.classList.toggle("filter");
        }
        ); 
    }

    for (const article of articles) {
        article.addEventListener("click", function(){
            window.location.href = "http://www.google.com";
        }
        ); 
    }