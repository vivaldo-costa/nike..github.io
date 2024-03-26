document.querySelectorAll(".footerSelection .box").forEach((item) => {
  
  //Início do codígo para chamar imagem, preço e título;
    item.addEventListener("click", (event) => {
    let imgSrc = item.querySelector(".thumbnail img").src;
    let title = item.querySelector(".infoBox h5").textContent;
    let price = item.querySelector(".infoBox .price").textContent;
  
    document.querySelector(".bannerSelection h1").textContent = title;
    document.querySelector(".bannerSelection .priceBox").textContent = price;
    document.querySelector(".bannerSelection .imgBox img").src = imgSrc;

    //Adicionando a classe animation;
    document.querySelector(".bannerSelection .infoBox").classList.add("animateleft");
    document.querySelector(".bannerSelection .imgBox").classList.add("animateRigh");
    
    //Adicionando a classe animation;
    setTimeout(function(){
    document.querySelector(".bannerSelection .infoBox").classList.remove("animateleft");
    document.querySelector(".bannerSelection .imgBox").classList.remove("animateRigh");  
    }, 1000);
});
//Termino do codígo para chamar imagem, preço e título;
});

setTimeout(function(){
document.querySelector(".bannerSelection .infoBox").classList.remove("animateleft");
document.querySelector(".bannerSelection .imgBox").classList.remove("animateRigh");
}, 1000);


document.querySelector("header button").addEventListener("click",(event) => {
document.querySelector("header nav").classList.toggle("show");
});