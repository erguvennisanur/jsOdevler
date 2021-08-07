const trex=document.querySelector("#trex");
const cactus=document.querySelector("#cactus");

function zipla(){

    if(cactus.classList !="cactus-animate")
    {
        cactus.classList.add("cactus-animate");
    }

    if(trex.classList !="trex-animate")
    {
        trex.classList.add("trex-animate");
        setTimeout(function(){
            trex.classList.remove("trex-animate");
        },500); 
    }

}


    var carpismaKontol =setInterval(function(){
        var trexBottom = parseInt(window

            .getComputedStyle(trex)
            .getPropertyValue("bottom"));

    var cactusLeft =parseInt(window
            .getComputedStyle(cactus)
            .getPropertyValue("left"));

    if(cactusLeft > 0 && cactusLeft < 40 && trexBottom < 40){
        
            cactus.classList.remove("cactus-animate");
            cactus.style.display="none";
            alert("oyun bitti");
    }
    }, 10);