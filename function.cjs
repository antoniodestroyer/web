function guardarCarta() {
    let mensaje=document.getElementById("mensaje").value;

    if (mensaje.trim()==="") {
        alert("Escribe algo antes de guardar 💌");
        return;
    }

    localStorage.setItem("cartaAmor", mensaje);
    alert("💖 Tu carta ha sido guardada 💖");
}

// Recuperar la carta guardada
window.onload=function() {
    let mensajeGuardado=localStorage.getItem("cartaAmor");

    if (mensajeGuardado) {
        document.getElementById("mensaje").value=mensajeGuardado;
    }
}

;