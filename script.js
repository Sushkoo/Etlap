//sötétmód
function darkmode(){
    var body = document.getElementById('body')
    var sotet = document.getElementById('ejjel');
    var vilagos = document.getElementById('nappal');
    var napi_gomb = document.getElementById('napi-gomb');

    if(sotet.classList.contains('deactive')){
        sotet.classList.replace('deactive', 'active');
        vilagos.classList.replace('active', 'deactive');
        body.classList.remove('active');
        napi_gomb.classList.remove('active');
    }else{
        vilagos.classList.replace('deactive', 'active');
        sotet.classList.replace('active', 'deactive');
        body.classList.add('active');
        napi_gomb.classList.add('active');
    }
}

//Scroll
//ScrollReveal().reveal('.fooldal-szoveg, .fooldal-kep, .gomb', {delay: 200, easing: "eas-out", interval: 200, scale: 1.2})

//asztalok

setInterval(function(){
    var t = Math.round(Math.random() * (21));
    document.getElementById("lefoglalahato").innerHTML = t;
 }, 1000);
