let paragraf = document.getElementById("opis")

let przycisk = document.querySelector('button');    
przycisk.onclick = function() {
    paragraf.innerText = "dowolny tekst";  
}

