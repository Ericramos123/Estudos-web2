const retverde = document.getElementById("retverde");
const retamarelo = document.getElementById("retamarelo");

retverde.addEventListener("mouseenter", () => { 
    retverde.style.backgroundColor = "yellow"; 
    retamarelo.style.backgroundColor = "green"; 

});

retverde.addEventListener("mouseleave", () => { 
    retverde.style.backgroundColor = "green"; 
    retamarelo.style.backgroundColor = "yellow"; 
});

retamarelo.addEventListener("mouseenter", () => { 
    retverde.style.backgroundColor = "yellow"; 
    retamarelo.style.backgroundColor = "green"; 

});

retamarelo.addEventListener("mouseleave", () => { 
    retverde.style.backgroundColor = "green"; 
    retamarelo.style.backgroundColor = "yellow"; 
});
