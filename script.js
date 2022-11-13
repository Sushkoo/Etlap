//navbar
function navresp() {
    var navbar = document.getElementById('navbar');
    var icon = document.getElementById('nav-hamburger');

    icon.onclick(navbar.classList.toggle('active'));
}

function resetnav() {
    var navbar = document.getElementById('navbar');
    var icon = document.getElementById('nav-hamburger');

    icon.onblur(navbar.classList.remove('active'));
}

//sötétmód
function darkmode() {
    var body = document.getElementById('body');
    var sotet = document.getElementById('ejjel');
    var vilagos = document.getElementById('nappal');
    var napi_gomb = document.getElementById('napi-gomb');
    var asztal_szam = document.getElementById('lefoglalhato');

    if (sotet.classList.contains('deactive')) {
        sotet.classList.replace('deactive', 'active');
        vilagos.classList.replace('active', 'deactive');
        body.classList.remove('active');
        napi_gomb.classList.remove('active');
        asztal_szam.classList.replace('active', 'deactive');
    } else {
        vilagos.classList.replace('deactive', 'active');
        sotet.classList.replace('active', 'deactive');
        body.classList.add('active');
        napi_gomb.classList.add('active');
        asztal_szam.classList.replace('deactive', 'active');
    }
}

//Scroll
//ScrollReveal().reveal('.fooldal-szoveg, .fooldal-kep, .gomb', {delay: 200, easing: "eas-out", interval: 200, scale: 1.2})

//asztalok
setInterval(asztalok, 5000);

function asztalok() {
    var t = Math.round(Math.random() * 20);
    document.getElementById("lefoglalhato").innerHTML = t;
}

function dominik() {
    var nev = document.getElementById('nev').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tele').value;
    var datum = document.getElementById('datum').value;
    var idopont = document.getElementById('idopont').value;
    var letszam = document.getElementById('letszam').value;
    var body = document.getElementById('body');
    if (nev == 'dominik') {
        body.style.backgroundImage = "url('kepek/dominik.jpg')";
        body.style.backgroundSize = "contain";
    } else {
        body.style.backgroundImage = "none";
    }
    document.getElementsByClassName('vegso-nev')[0].innerHTML=nev;
    document.getElementsByClassName('vegso-email')[0].innerHTML=email;
    document.getElementsByClassName('vegso-tel')[0].innerHTML=tel;
    document.getElementsByClassName('vegso-ido')[0].innerHTML=datum + " " + idopont;
    document.getElementsByClassName('vegso-letszam')[0].innerHTML=letszam;
    document.querySelectorAll(`#asztal table`)[0].style.display="none";
    document.querySelectorAll(`#asztal table`)[1].style.display="none";
    document.getElementsByClassName('vegso')[0].style.display="block";
    document.getElementsByClassName('lefoglalom')[0].style.display="none";
    
}


// Napi menü rádiógombok
function chosen(bevitel) {
    var szulo = bevitel.parentElement;
    var gyerekek = document.querySelectorAll(`.${szulo.classList[0]} *`);
    if (bevitel.classList.contains('chosen')) {
        bevitel.classList.remove('chosen');
    } else {
        for (let i = 0; i < gyerekek.length; i++) {
            gyerekek[i].classList.remove('chosen');
        }
        bevitel.classList.add('chosen');
    }
    
    if (document.querySelectorAll(`.napi-oszlop-jobb .${szulo.classList[0]} .chosen`)[0]) {
        document.querySelectorAll(`.napi-oszlop-bal .${szulo.classList[0]}`)[0].style.backgroundColor = "lightgreen";
    } else {
        document.querySelectorAll(`.napi-oszlop-bal .${szulo.classList[0]}`)[0].style.backgroundColor = "#8ABADD";
    }


    var gomb = document.getElementsByClassName('napigomb')[0];
    var mindenzold = document.querySelectorAll(`.napi-oszlop-bal [class|="napi-sor"]`);
    if (mindenzold[0].style.backgroundColor == 'lightgreen' && mindenzold[1].style.backgroundColor == 'lightgreen' && mindenzold[2].style.backgroundColor == 'lightgreen') {
        gomb.style.display = "block";
    } else {
        gomb.style.display = "none";
    }
}

function megrendeles() {
    var megrendelt_text = document.querySelectorAll(`.chosen h2`);
    var megrendelt_osszeg = document.querySelectorAll(`.chosen h4`);
    var osszeg = megrendelt_osszeg[0].innerText.slice(0,-4) + "+" + megrendelt_osszeg[1].innerText.slice(0,-4) + "+" + megrendelt_osszeg[2].innerText.slice(0,-4);
    alert(`Sikeresen megrendelted a következőket: \n${megrendelt_text[0].innerText}, ${megrendelt_text[1].innerText}, ${megrendelt_text[2].innerText}\nFizetendő összeg: ${eval(osszeg)} HUF`);
}

